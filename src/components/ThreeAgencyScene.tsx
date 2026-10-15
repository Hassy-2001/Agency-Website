"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeAgencyScene({ onReady }: { onReady?: (ready: boolean) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      // Retain the CSS artwork when WebGL is unavailable.
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.2, 0.28, 96, 12),
      new THREE.MeshStandardMaterial({
        color: "#8cf0ff",
        emissive: "#163a45",
        metalness: 0.72,
        roughness: 0.22,
      })
    );
    group.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.55, 1),
      new THREE.MeshBasicMaterial({
        color: "#a78bfa",
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      })
    );
    group.add(wire);

    const particleCount = window.innerWidth < 768 ? 180 : 320;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 3.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: "#f5f7fb",
        size: 0.022,
        transparent: true,
        opacity: 0.68,
      })
    );
    group.add(particles);

    const cyanLight = new THREE.PointLight("#8cf0ff", 8, 12);
    cyanLight.position.set(-2.4, 2.2, 3);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight("#a78bfa", 6, 12);
    violetLight.position.set(2.6, -1.8, 3.2);
    scene.add(violetLight);
    scene.add(new THREE.AmbientLight("#ffffff", 0.55));

    const mouse = new THREE.Vector2(0, 0);
    const onMouseMove = (event: MouseEvent) => {
      if (motionPreference.matches) return;
      const bounds = canvas.getBoundingClientRect();
      mouse.x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      mouse.y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    };

    window.addEventListener("mousemove", onMouseMove);

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || window.innerWidth;
      const height = parent?.clientHeight || window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    let isVisible = document.visibilityState === "visible";
    let isInView = true;
    const startedAt = performance.now();
    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && frameId === 0) {
        animate();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = () => {
      if (!isVisible || !isInView) {
        frameId = 0;
        return;
      }

      const elapsed = motionPreference.matches ? 0 : (performance.now() - startedAt) / 1000;

      group.rotation.y = elapsed * 0.18 + mouse.x * 0.18;
      group.rotation.x = Math.sin(elapsed * 0.45) * 0.16 - mouse.y * 0.12;
      core.rotation.z = elapsed * 0.24;
      wire.rotation.y = -elapsed * 0.12;
      particles.rotation.y = elapsed * 0.04;

      renderer.render(scene, camera);
      frameId = motionPreference.matches ? 0 : window.requestAnimationFrame(animate);
    };

    const onMotionChange = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      mouse.set(0, 0);
      animate();
    };
    motionPreference.addEventListener("change", onMotionChange);
    const observer = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;
      if (isInView && frameId === 0) animate();
    });
    observer.observe(canvas);
    animate();
    onReady?.(true);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionChange);
      observer.disconnect();
      particlesGeometry.dispose();
      core.geometry.dispose();
      wire.geometry.dispose();
      core.material.dispose();
      wire.material.dispose();
      particles.material.dispose();
      renderer.dispose();
    };
  }, [onReady]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

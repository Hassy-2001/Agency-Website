"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

export function useGsapReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: RevealOptions = {}
) {
  const {
    selector = "[data-reveal]",
    y = 34,
    stagger = 0.08,
    start = "top 78%",
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        selector,
        { autoAlpha: 0, y, filter: "blur(12px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref.current);

    return () => context.revert();
  }, [ref, selector, y, stagger, start]);
}

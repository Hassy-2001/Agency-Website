"use client";

import { type MouseEvent, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const stats = [
  { value: "25+", label: "Projects shipped" },
  { value: "12+", label: "Industries" },
  { value: "95%", label: "Retention" },
  { value: "4x", label: "Automation gain" },
];

const orbitItems = ["AI copilots", "SaaS platforms", "Web systems", "Growth ops"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGsapReveal(sectionRef, { selector: "[data-hero-reveal]", y: 42, stagger: 0.1 });

  const tiltCard = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = -((y / rect.height) - 0.5) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const resetTilt = (event: MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36 md:px-10 lg:px-16"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-3xl">
          <div
            data-hero-reveal
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
            AI • Software • Automation
          </div>

          <h1
            data-hero-reveal
            className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Creative systems for companies ready to move faster.
          </h1>

          <p
            data-hero-reveal
            className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg"
          >
            GeekVentures builds AI automation, custom software, and immersive web
            experiences with the polish of a creative studio and the discipline
            of an engineering team.
          </p>

          <div data-hero-reveal className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
            >
              Explore Work
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+923122416272"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              Call Us
            </a>
          </div>

          <div
            data-hero-reveal
            className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold leading-none text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-hero-reveal
          onMouseMove={tiltCard}
          onMouseLeave={resetTilt}
          className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_90px_rgba(140,240,255,0.11)] backdrop-blur-xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/14 via-transparent to-violet-500/16 blur-3xl" />

          <div className="grid gap-4">
            {orbitItems.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/25 px-5 py-4"
              >
                <span className="text-sm font-medium text-white/82">{item}</span>
                <span className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition duration-700 group-hover:w-full"
                    style={{ width: `${52 + index * 12}%` }}
                  />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">
              Live delivery engine
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-white">
              Strategy, design, code, automation, and growth loops moving as one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

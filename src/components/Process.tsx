"use client";

import { useRef } from "react";
import { processSteps } from "@/data/site";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGsapReveal(sectionRef, { stagger: 0.09 });

  return (
    <section ref={sectionRef} className="section-shell relative py-24">
      <div data-reveal className="mb-12 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
          How we work
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          A cinematic workflow with clear checkpoints.
        </h2>
        <p className="mt-5 text-lg leading-8 text-white/65">
          Every project moves through a focused sprint path: discover the real
          business need, design the system, build with momentum, and optimize
          after launch.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-violet-400/60 lg:block" />

        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              data-reveal
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.055]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-violet-400/0 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

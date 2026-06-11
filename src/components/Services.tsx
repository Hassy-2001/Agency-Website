"use client";

import { useRef } from "react";
import { Bot, Code, LayoutDashboard, Rocket, TrendingUp } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    title: "AI Automation",
    icon: Bot,
    description: "Internal copilots, workflow agents, and smart operations that remove repetitive work.",
    accent: "from-cyan-300/30",
  },
  {
    title: "Custom Software",
    icon: Code,
    description: "Scalable platforms, dashboards, portals, and business tools built around real workflows.",
    accent: "from-violet-300/30",
  },
  {
    title: "Web Experiences",
    icon: LayoutDashboard,
    description: "Animated, fast, conversion-focused websites with polished product storytelling.",
    accent: "from-blue-300/30",
  },
  {
    title: "Launch Systems",
    icon: Rocket,
    description: "Product launches, analytics, conversion paths, and iteration loops for faster market learning.",
    accent: "from-cyan-200/30",
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "SEO, campaigns, creative direction, and growth channels aligned with measurable outcomes.",
    accent: "from-fuchsia-300/30",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGsapReveal(sectionRef, { stagger: 0.07 });

  return (
    <section ref={sectionRef} id="services" className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Capabilities
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A modern agency stack, built to feel alive.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/60 lg:ml-auto">
            We combine strategy, design, engineering, automation, and growth into
            one delivery system so every touchpoint feels intentional.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                data-reveal
                className="group relative min-h-[18rem] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} via-transparent to-violet-400/10 opacity-0 transition duration-500 group-hover:opacity-100`} />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10 transition duration-500 group-hover:scale-125 group-hover:border-cyan-300/30" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs text-white/35">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{service.description}</p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-white/10">
                      <div className="h-px w-0 bg-cyan-200 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

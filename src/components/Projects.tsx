"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const projects = [
  {
    title: "Umrah and Beyond Travel Platform",
    description:
      "A premium travel and pilgrimage website experience built for package discovery, trust-building, and seamless inquiry flow.",
    url: "https://www.umrahandbeyond.com/",
    tags: ["Travel", "Booking", "Website"],
    metric: "Premium launch",
    category: "Travel Experience",
    result: "Created a polished digital presence for travelers exploring Umrah packages and guided services.",
    stats: ["Package discovery", "Lead capture", "Trust-focused UX"],
  },
  {
    title: "Syncly Productivity Platform",
    description:
      "A modern SaaS-style web app experience designed around clean workflows, focused collaboration, and fast product interaction.",
    url: "https://syncly-eta.vercel.app/",
    tags: ["SaaS", "Productivity", "Web App"],
    metric: "Live product",
    category: "Productivity SaaS",
    result: "Shaped a clean interface for managing work with clarity, speed, and a modern product feel.",
    stats: ["Workflow clarity", "Modern UI", "Fast navigation"],
  },
  {
    title: "AI Business Automation Suite",
    description:
      "Workflow automation, internal copilots, and smart process handling for growing businesses.",
    url: "https://heysupport.ai/",
    tags: ["AI", "Automation", "Dashboard"],
    metric: "4x faster ops",
    category: "Automation Engine",
    result: "Reduced repetitive team workflows with intelligent routing.",
    stats: ["AI copilots", "Smart workflows", "Live reporting"],
  },
  {
    title: "Custom SaaS Operations Platform",
    description:
      "A scalable SaaS platform built for internal operations, analytics, and team productivity.",
    url: "https://studdy-buddy-uavq.vercel.app/",
    tags: ["SaaS", "Analytics", "Web App"],
    metric: "Live MVP",
    category: "SaaS Platform",
    result: "Unified tasks, analytics, and productivity flows in one product.",
    stats: ["Role dashboards", "Usage insights", "Fast iteration"],
  },
  {
    title: "Modern Agency Website Experience",
    description:
      "A high-converting digital experience focused on premium branding, speed, and conversion.",
    url: "https://vibraui.netlify.app/",
    tags: ["Branding", "Frontend", "UI/UX"],
    metric: "Premium UX",
    category: "Web Experience",
    result: "Elevated brand perception with a polished interactive interface.",
    stats: ["Motion system", "Conversion paths", "Responsive polish"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useGsapReveal(sectionRef, { stagger: 0.08 });

  useEffect(() => {
    if (!showcaseRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-project-animate]",
        { autoAlpha: 0, y: 22, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        "[data-preview-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, showcaseRef);

    return () => context.revert();
  }, [activeIndex]);

  useEffect(() => {
    const tween = gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 5.5,
        ease: "none",
        transformOrigin: "left center",
        onComplete: () => {
          setActiveIndex((current) => (current + 1) % projects.length);
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [activeIndex]);

  const move = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_center,rgba(140,240,255,0.11),transparent_66%)]" />

      <div className="mx-auto max-w-7xl">
        <div
          data-reveal
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
              Selected Work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Premium digital systems, presented with clarity.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              A focused showcase of live products, automation platforms, and web
              experiences designed for business impact.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => move(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => move(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-black transition hover:scale-105"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={showcaseRef}
          data-reveal
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#070b13]/90 p-5 shadow-[0_30px_140px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(140,240,255,0.1),transparent_38%,rgba(167,139,250,0.12))]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

          <div className="relative grid min-h-[34rem] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-black/20 p-6 md:p-8">
              <div>
                <div
                  data-project-animate
                  className="mb-8 flex flex-wrap items-center gap-3"
                >
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-100/75">
                    {activeProject.metric}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/45">
                    {activeProject.category}
                  </span>
                </div>

                <h3
                  data-project-animate
                  className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
                >
                  {activeProject.title}
                </h3>

                <p
                  data-project-animate
                  className="mt-6 max-w-2xl text-base leading-8 text-white/64 md:text-lg"
                >
                  {activeProject.description}
                </p>
              </div>

              <div data-project-animate className="mt-10">
                <div className="mb-5 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(21,35,50,0.98),rgba(6,10,20,0.96))] p-5 md:p-7">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-cyan-200/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-52 w-52 rounded-tr-full bg-violet-400/10 blur-2xl" />

              <div data-project-animate className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/38">
                    Product Preview
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {activeProject.category}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Layers3 className="h-5 w-5 text-cyan-100" />
                </div>
              </div>

              <div data-project-animate className="relative mt-8 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <BarChart3 className="mb-5 h-5 w-5 text-cyan-100" />
                    <p className="text-3xl font-semibold text-white">
                      {activeProject.metric}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {activeProject.result}
                    </p>
                  </div>

                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    {activeProject.stats.map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-100" />
                        <span className="text-sm text-white/70">{item}</span>
                        <span
                          data-preview-line
                          className="ml-auto h-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                          style={{ width: `${42 + index * 18}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div data-project-animate className="relative mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      index === activeIndex
                        ? "border-cyan-200/40 bg-cyan-200/10"
                        : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block text-sm font-medium leading-5 text-white">
                      {project.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              ref={progressRef}
              className="h-full origin-left rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

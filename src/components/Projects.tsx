"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "AI Business Automation Suite",
    description:
      "Workflow automation, internal copilots, and smart process handling for growing businesses.",
    url: "https://heysupport.ai/",
    tags: ["AI", "Automation", "Dashboard"],
  },
  {
    title: "Custom SaaS Operations Platform",
    description:
      "A scalable SaaS platform built for internal operations, analytics, and team productivity.",
    url: "https://studdy-buddy-uavq.vercel.app/",
    tags: ["SaaS", "Analytics", "Web App"],
  },
  {
    title: "Modern Agency Website Experience",
    description:
      "A high-converting digital experience focused on premium branding, speed, and conversion.",
    url: "https://vibraui.netlify.app/",
    tags: ["Branding", "Frontend", "UI/UX"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  return (
    <SectionReveal>
      <section id="projects" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Selected Work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Live projects built for real business impact.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Premium digital systems designed to perform fast, look refined, and
              scale with confidence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.a
  key={project.title}
  href={project.url}
  target="_blank"
  rel="noreferrer"
  variants={itemVariants}
  whileHover={{ y: -8, scale: 1.01 }}
  transition={{ duration: 0.25 }}
  className="group relative flex h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
>
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative flex h-full w-full flex-col">
    <div className="mb-6 flex items-start justify-between gap-4">
      <h3 className="text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
    </div>

    <p className="text-base leading-7 text-white/60">
      {project.description}
    </p>

    <div className="mt-auto pt-6">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs whitespace-nowrap text-white/65"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
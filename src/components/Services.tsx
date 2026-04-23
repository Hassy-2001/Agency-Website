"use client";

import { motion } from "framer-motion";
import { Code, Bot, LayoutDashboard, Rocket } from "lucide-react";
import SectionReveal from "./SectionReveal";

const services = [
  {
    title: "AI Automation",
    icon: Bot,
    description: "AI workflows & internal copilots.",
  },
  {
    title: "Custom Software",
    icon: Code,
    description: "Scalable platforms & internal tools.",
  },
  {
    title: "Web Experiences",
    icon: LayoutDashboard,
    description: "High-performance modern websites.",
  },
  {
    title: "Scaling Strategy",
    icon: Rocket,
    description: "Launch faster & grow with systems.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
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

export default function Services() {
  return (
    <SectionReveal>
      <section id="services" className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-2xl"
          >
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
              Services
            </div>

            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Built for modern businesses.
            </h2>

            <p className="mt-3 text-sm text-white/55">
              Fast, scalable, and premium digital solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition duration-300 group-hover:border-cyan-400/30">
                      <Icon className="h-4 w-4 text-white/80" />
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
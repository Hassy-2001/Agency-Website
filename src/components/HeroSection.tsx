"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import SectionReveal from "./SectionReveal";

const stats = [
  { value: "25+", label: "Projects" },
  { value: "12+", label: "Industries" },
  { value: "95%", label: "Retention" },
  { value: "4x", label: "Automation" },
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <SectionReveal>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-40 md:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[#030712]" />

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-[16%] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[12%] top-[18%] h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-[10%] left-[38%] h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto flex max-w-2xl flex-col justify-center lg:mx-0"
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md"
            >
              AI • Software • Automation
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Engineering intelligent systems for modern business.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
            >
              We build AI solutions, custom software, and high-performance digital
              products that help companies automate, scale, and deliver better
              client experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
              >
                Explore Work
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+920000000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                Call Us
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 max-w-2xl"
            >
              <motion.div
                variants={statsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-xl md:flex-nowrap md:justify-between"
              >
                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={statVariants}
                    whileHover={{ y: -3 }}
                    className="flex min-w-[120px] flex-1 items-center justify-center rounded-xl px-2 py-1 text-center"
                  >
                    <div>
                      <div className="text-2xl font-semibold leading-none text-white">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
            style={{ perspective: 1200 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateX: 3, rotateY: -6, y: -6 }}
              className="group relative w-full max-w-2xl"
            >
              <div className="absolute -inset-5 rounded-[30px] bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-violet-500/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_0_70px_rgba(70,130,255,0.10)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[20px]">
                  <Image
                    src="/images/banner.png"
                    alt="GeekVentures banner"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60" />

                  <motion.div
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1.6,
                    }}
                    className="pointer-events-none absolute inset-y-0 w-20 bg-white/10 blur-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
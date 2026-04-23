"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    name: "Hassan Ghani",
    role: "Founder, StartupX",
    image: "/images/testimonials/client1.avif",
    text: "GeekVentures helped us automate our operations and build scalable systems.",
  },
  {
    name: "Ali Khan",
    role: "CTO, TechFlow",
    image: "/images/testimonials/client2.webp",
    text: "High-performance platform delivered with excellent quality.",
  },
  {
    name: "Sarah Ahmed",
    role: "Product Manager",
    image: "/images/testimonials/client3.jpg",
    text: "Professional, fast, and very skilled team.",
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

export default function Testimonials() {
  return (
    <SectionReveal>
      <section id="testimonials" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Testimonials
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Trusted by clients who value quality.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border border-white/10 object-cover transition group-hover:border-cyan-400/60"
                  />

                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-white/50">{item.role}</div>
                  </div>
                </div>

                <p className="text-lg leading-8 text-white/75">“{item.text}”</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
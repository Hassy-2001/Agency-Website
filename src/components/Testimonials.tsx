"use client";

import Image from "next/image";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const testimonials = [
  {
    name: "Kaleem Khan",
    role: "Founder, StartupX",
    image: "/images/testimonials/client1.avif",
    text: "GeekVentures helped us automate our operations and build scalable systems.",
  },
  {
    name: "Sarah Ahmed",
    role: "CTO, TechFlow",
    image: "/images/testimonials/client2.webp",
    text: "High-performance platform delivered with excellent quality.",
  },
  {
    name: "Ali Khan",
    role: "Product Manager",
    image: "/images/testimonials/client3.jpg",
    text: "Professional, fast, and very skilled team.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGsapReveal(sectionRef, { stagger: 0.08 });

  return (
    <section ref={sectionRef} id="testimonials" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-12 max-w-2xl">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
            Testimonials
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Trusted by founders who care about speed and polish.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              data-reveal
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" />
              <Quote className="absolute bottom-5 right-5 h-16 w-16 text-white/[0.04]" />

              <div className="relative mb-7 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl border border-white/10 object-cover transition group-hover:border-cyan-400/60"
                />

                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-white/50">{item.role}</div>
                </div>
              </div>

              <p className="relative text-lg leading-8 text-white/75">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="relative mt-7 h-px w-20 bg-gradient-to-r from-cyan-200/70 to-violet-300/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

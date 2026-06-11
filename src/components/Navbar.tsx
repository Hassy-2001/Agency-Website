"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Circle } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -34, autoAlpha: 0, filter: "blur(12px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        }
      );

      gsap.to("[data-nav-orbit]", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, headerRef);

    return () => context.revert();
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-4 md:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/64 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3">
        <div className="pointer-events-none absolute -inset-x-4 -top-3 h-20 rounded-full bg-cyan-300/10 blur-3xl" />

        <a
          href="#"
          className="group relative flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-[#060a15]/78 py-2 pl-2 pr-4 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl transition hover:border-cyan-200/25 hover:bg-white/[0.055]"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/[0.07] to-violet-400/[0.06]" />
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30">
            <span data-nav-orbit className="absolute inset-[-4px] rounded-full border border-dashed border-cyan-200/30" />
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#050814] shadow-[0_0_24px_rgba(140,240,255,0.18)]">
              <Image
                src="/images/logo.png"
                alt="GeekVentures logo"
                width={106}
                height={208}
                priority
                sizes="40px"
                style={{ height: 40, width: "auto" }}
                className="object-contain"
              />
            </span>
          </span>
          <span className="relative min-w-0">
            <span className="block truncate text-sm font-semibold leading-none text-white">
              GeekVentures
            </span>
            <span className="mt-1.5 hidden items-center gap-1.5 text-[10px] uppercase leading-none tracking-[0.22em] text-cyan-100/52 sm:flex">
              <Circle className="h-1.5 w-1.5 fill-cyan-200 text-cyan-200" />
              Digital Agency
            </span>
          </span>
        </a>

        <nav className="relative hidden items-center rounded-full border border-white/10 bg-[#050814]/74 p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl lg:flex">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-medium text-white/62 transition duration-300 hover:text-white"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-white/[0.07] transition duration-300 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center">
                {link.label}
              </span>
              <span className="absolute inset-x-5 bottom-1.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-200 to-violet-300 transition duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-[#060a15]/78 p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/48 xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(140,240,255,0.95)]" />
            Taking projects
          </div>

          <a
            href="#contact"
            className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-[0_0_34px_rgba(140,240,255,0.16)] transition hover:scale-[1.03] md:px-5"
          >
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent transition duration-700 group-hover:translate-x-[110%]" />
            <span className="relative hidden sm:inline">Start Project</span>
            <span className="relative sm:hidden">Start</span>
            <ArrowUpRight className="relative h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="GeekVentures logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div>
            <div className="text-sm font-semibold text-white">GeekVentures</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Digital Agency
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
        >
          Book a Call
        </a>
      </div>
    </motion.header>
  );
}
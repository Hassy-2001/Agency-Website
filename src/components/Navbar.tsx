"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [{ label: "Work", href: "#projects" }, { label: "Services", href: "#services" }, { label: "About", href: "#about" }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    if (open) { document.addEventListener("keydown", closeOnEscape); document.addEventListener("pointerdown", closeOutside); }
    return () => { document.removeEventListener("keydown", closeOnEscape); document.removeEventListener("pointerdown", closeOutside); };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="shell nav-inner">
        <a href="#home" className="brand" aria-label="GeekVentures home" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="" width={28} height={44} priority className="brand-logo" />
          <span>geek<span className="brand-light">ventures</span><span className="accent">.</span></span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(link => <a href={link.href} key={link.label}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="button button-small">Let’s talk <ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav shell" hidden={!open}>
        {links.map(link => <a href={link.href} key={link.label} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></a>)}
      </nav>
    </header>
  );
}

"use client";

import { useRef } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/geek-ventures-451838405/",
    icon: faLinkedinIn,
    color: "hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/geek_ventures?igsh=MW1mcHJsZ29zOXZmMQ%3D%3D&utm_source=qr",
    icon: faInstagram,
    color: "hover:bg-pink-500/15 hover:border-pink-400/40",
  },
  {
    label: "X",
    href: "https://x.com/GeekVentures26",
    icon: faXTwitter,
    color: "hover:bg-white/10 hover:border-white/25",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useGsapReveal(sectionRef, { stagger: 0.08 });

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=geekventures26@gmail.com&su=Project%20Inquiry&body=Hi%20GeekVentures,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThank%20you.";

  return (
    <section ref={sectionRef} id="contact" className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-16 -z-10 h-80 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.12),transparent_68%)]" />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-cyan-300/10 blur-2xl" />

          <div className="relative">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Contact
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Let’s build something exceptional.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-white/60">
              Tell us what you want to launch, automate, or improve. We’ll help
              shape the right digital system around it.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={gmailLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:border-cyan-400/25 hover:bg-white/10"
              >
                <Mail className="h-5 w-5 text-cyan-100" />
                geekventures26@gmail.com
                <Send className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </a>

              <a
                href="tel:+923122416272"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:border-cyan-400/25 hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-cyan-100" />
                +92 312 2416272
              </a>

              <a
                href="https://wa.me/923122416272"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:border-cyan-400/25 hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5 text-cyan-100" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div data-reveal className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
          <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full border border-violet-300/15" />

          <div className="relative">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Socials
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Connect with GeekVentures
            </h3>

            <p className="mt-5 max-w-lg text-lg leading-8 text-white/60">
              Follow the work, explore updates, and start the conversation on
              the channel that feels easiest.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex min-h-36 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
                  <span className="text-sm font-medium text-white">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

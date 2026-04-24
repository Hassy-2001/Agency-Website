"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=geekventures26@gmail.com&su=Project%20Inquiry&body=Hi%20GeekVentures,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThank%20you.";

  return (
    <SectionReveal>
      <section id="contact" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Contact
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Let’s build something exceptional.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-white/60">
              Let’s collaborate and build impactful digital products together.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={gmailLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-white/10 hover:border-cyan-400/20"
              >
                <Mail className="h-5 w-5" />
                geekventures26@gmail.com
              </a>

              <a
                href="tel:+923122416272"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-white/10 hover:border-cyan-400/20"
              >
                <Phone className="h-5 w-5" />
                +92 312 2416272
              </a>

              <a
                href="https://wa.me/923122416272"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-white/10 hover:border-cyan-400/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
              Socials
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white">
              Connect with GeekVentures
            </h3>

            <p className="mt-5 max-w-lg text-lg leading-8 text-white/60">
              Follow our work, explore updates, and connect with us across social
              platforms.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/geek-ventures-451838405/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40"
              >
                <div className="flex h-11 w-11 items-center justify-center  border-white/10 bg-black/20 transition group-hover:border-[#0A66C2]/40">
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">LinkedIn</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/geek_ventures?igsh=MW1mcHJsZ29zOXZmMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-pink-500/15 hover:border-pink-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center  border-white/10 bg-black/20 transition group-hover:border-pink-400/40">
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Instagram</div>
                </div>
              </a>

              <a
                href="https://x.com/GeekVentures26"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 transition hover:bg-white/10 hover:border-white/25"
              >
                <div className="flex h-11 w-11 items-center justify-center  border-white/10 bg-black/20 transition group-hover:border-white/25">
                  <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">X</div>
                </div>
              </a>


            </div>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
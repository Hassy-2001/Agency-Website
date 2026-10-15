import { ArrowUpRight } from "lucide-react";
import { company, socials } from "@/data/site";
export function Footer() {
  return <footer className="site-footer shell"><div><a href="#home" className="footer-brand">geekventures<span className="accent">.</span></a><p>© {new Date().getFullYear()} GeekVentures</p></div><div className="footer-links">{socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight size={13} /></a>)}<a href={`tel:${company.phone}`}>Call us<ArrowUpRight size={13} /></a></div></footer>;
}

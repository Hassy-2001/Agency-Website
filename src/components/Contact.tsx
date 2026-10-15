import { ArrowUpRight, MessageCircle } from "lucide-react";
import { company } from "@/data/site";
export default function Contact() {
  return <section id="contact" className="contact-section"><div className="shell contact-inner"><p className="eyebrow"><span className="status-dot" /> Your next chapter starts here</p><a className="contact-heading" href={`mailto:${company.email}`}><h2>Let’s make<br />something <span>great.</span></h2><span className="contact-arrow"><ArrowUpRight strokeWidth={1.2} /></span></a><div className="contact-details"><a href={`mailto:${company.email}`} className="contact-email">{company.email}<ArrowUpRight size={20} /></a><a className="text-link" href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Say hi on WhatsApp <ArrowUpRight size={16} /></a></div></div></section>;
}

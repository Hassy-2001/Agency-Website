import { ArrowUpRight, Clapperboard, Code2, Megaphone, Sparkles } from "lucide-react";
import { services } from "@/data/site";
const icons = { video: Clapperboard, social: Megaphone, web: Code2, app: Sparkles };
export default function Services() {
  return (
    <section id="services" className="services-section section-space">
      <div className="shell services-layout">
        <div className="services-heading"><p className="eyebrow">02 / What we do</p><h2>Small team.<br /><span className="muted">Big range.</span></h2><p className="section-intro">Everything your next chapter needs.</p><a href="#contact" className="text-link">Find your starting point <ArrowUpRight size={18} /></a></div>
        <div className="service-list">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return <a href="#contact" className="service-row" key={service.title} aria-label={`Discuss ${service.title.toLowerCase()}`}>
              <span className="service-number">0{index + 1}</span><div><Icon className="service-icon" size={25} strokeWidth={1.5} /><h3>{service.title}</h3><p>{service.description}</p><span className="service-tags">{service.tags}</span></div><ArrowUpRight className="service-arrow" size={25} strokeWidth={1.5} />
            </a>;
          })}
        </div>
      </div>
    </section>
  );
}

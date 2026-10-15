import { ArrowUpRight } from "lucide-react";
import { processSteps } from "@/data/site";
export function Process() {
  return <section id="about" className="shell section-space about-section"><div className="about-top"><p className="eyebrow">03 / The people behind the pixels</p><h2>Your ambition.<br />Our <span className="accent">creative energy.</span></h2><p>We’re GeekVentures. A team of makers turning bold ideas into digital experiences.</p></div><div className="process-grid">{processSteps.map((step, index) => <div className="process-step" key={step.title}><span className="eyebrow">0{index + 1}<ArrowUpRight size={18} /></span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></section>;
}

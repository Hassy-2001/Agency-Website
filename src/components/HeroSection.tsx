import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import HeroVisual from "./HeroVisual";
export default function HeroSection() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Independent digital agency</p>
        <h1>Good ideas.<br />Great <span className="hero-emphasis">impact<Asterisk aria-hidden="true" /></span></h1>
        <p className="hero-description">We build, create, and grow brands.<br />From your first frame to your next big app.</p>
        <a className="button" href="#projects">Explore our work <ArrowUpRight size={19} /></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <HeroVisual />
        <span className="art-chip chip-top"><span className="status-dot" /> Ideas into impact</span>
        <span className="art-chip chip-bottom">Creative minds. Geek energy. <ArrowUpRight size={17} /></span>
        <span className="art-coordinate">GV — CREATIVE / DIGITAL</span>
        <Asterisk className="art-star" size={60} strokeWidth={1} />
      </div>
      <div className="hero-bottom"><span>Creativity meets technology.</span><a href="#projects">Scroll to explore <ArrowDown size={15} /></a></div>
    </section>
  );
}

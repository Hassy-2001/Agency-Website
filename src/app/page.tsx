import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import  Services  from "@/components/Services";
import { Process } from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <HeroSection />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
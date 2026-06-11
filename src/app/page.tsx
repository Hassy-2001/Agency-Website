import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import  Services  from "@/components/Services";
import { Process } from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GeekVentures",
    url: "https://www.geekventures.com",
    logo: "https://www.geekventures.com/images/logo.png",
    image: "https://www.geekventures.com/images/banner.png",
    description:
      "GeekVentures builds AI automation, custom software, modern web experiences, and digital growth systems for businesses.",
    email: "geekventures26@gmail.com",
    telephone: "+923122416272",
    sameAs: [
      "https://www.linkedin.com/in/geek-ventures-451838405/",
      "https://www.instagram.com/geek_ventures",
      "https://x.com/GeekVentures26"
    ],
    areaServed: "Worldwide",
    serviceType: [
      "AI Business Automation",
      "Custom Software Development",
      "Modern Website Experiences",
      "Digital Marketing"
    ]
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent text-foreground">
      <script
        id="geekventures-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteBackground />
      <Navbar />
      <HeroSection />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

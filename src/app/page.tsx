import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { Process } from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { company, services, socials } from "@/data/site";
export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: company.name,
    url: "https://www.geekventures.com", logo: "https://www.geekventures.com/images/logo.png",
    description: "Video editing, social media marketing, web development, and AI-powered apps and custom chatbots.",
    email: company.email, telephone: company.phone, sameAs: socials.map(social => social.href),
    areaServed: "Worldwide", serviceType: services.map(service => service.title),
  };
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><HeroSection /><Projects /><Services /><Process /><Contact /></main><Footer /></>;
}

export const company = {
  name: "GeekVentures",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "geekventures26@gmail.com",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+92-312-2416272",
  whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || "+92-312-2416272",
};

export const clients = [
  { name: "ÈSCENTURY", logo: "/images/clients/escentury.jpeg", href: "https://www.escentury.com/", appearance: "dark" },
  { name: "A.Modern day cricket academy", logo: "/images/clients/modern-day-cricket.png", href: null, appearance: "dark" },
  { name: "FMC", logo: "/images/clients/fmc.jpeg", href: null, appearance: "dark" },
  { name: "Umrah & Beyonds", logo: "/images/clients/umrah-and-beyonds.jpeg", href: null, appearance: "light" },
];

export const services = [
  { title: "Video editing", description: "Scroll-stopping reels. Stories worth watching.", tags: "Reels / Brand films / Post-production", icon: "video" },
  { title: "Social media marketing", description: "Build your presence. Find your people.", tags: "Content / Strategy / Campaigns", icon: "social" },
  { title: "Web development", description: "Beautiful websites. Built to perform.", tags: "Websites / E-commerce / Web apps", icon: "web" },
  { title: "App development", description: "Smart tools for your next big idea.", tags: "AI-powered apps / Custom chatbots / Mobile apps", icon: "app" },
];

export const projects = [
  { title: "Escentury", category: "Fragrance e-commerce", url: "https://escentury.com/", image: "/images/projects/escentury.jpg", theme: "sand", monogram: "ES", label: "Escentury" },
  { title: "Umrah & Beyond", category: "Travel website", url: "https://www.umrahandbeyond.com/", image: null, theme: "olive", monogram: "U&B", label: "A journey beyond." },
  { title: "Syncly", category: "Community platform", url: "https://syncly-eta.vercel.app/", image: "/images/projects/syncly.jpg", theme: "lavender", monogram: "S", label: "Work in sync." },
  { title: "HeySupport", category: "AI-powered application", url: "https://heysupport.ai/", image: "/images/projects/heysupport.jpg", theme: "blue", monogram: "hey", label: "A little more human." },
  { title: "Studdy Buddy", category: "Web application", url: "https://studdy-buddy-uavq.vercel.app/", image: "/images/projects/studdy.jpg", theme: "peach", monogram: "sb", label: "Your study sidekick." },
  { title: "Vibra UI", category: "Website experience", url: "https://vibraui.netlify.app/", image: "/images/projects/vibra.jpg", theme: "mint", monogram: "V", label: "Made to stand out." },
];

export const processSteps = [
  { title: "Discover", text: "Your idea. Our starting point." },
  { title: "Create", text: "Design, build, and refine." },
  { title: "Launch", text: "Go live. Keep growing." },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/geek_ventures" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/geek-ventures-451838405/" },
  { label: "X", href: "https://x.com/GeekVentures26" },
];

export const company = {
  name: 'GeekVentures',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'geekventures26@gmail.com',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+92-312-2416272',
  whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || '+92-312-2416272'
};

export const stats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '12+', label: 'Industries Served' },
  { value: '95%', label: 'Client Retention' },
  { value: '4x', label: 'Average Automation Gain' }
];

export const services = [
  {
    title: 'AI Business Automation',
    description:
      'Streamline operations with AI workflows, internal copilots, knowledge assistants, and automation that reduces manual effort.'
  },
  {
    title: 'Custom Software Products',
    description:
      'We design and build secure, scalable web platforms and internal tools tailored to how your business actually works.'
  },
  {
    title: 'Modern Website Experiences',
    description:
      'Fast, conversion-focused websites with premium motion design, clean UX, and high-performance engineering.'
  },
  {
    title: 'Product Strategy & Scaling',
    description:
      'From architecture to growth systems, we help companies launch faster and scale with confidence.'
  }
];

export const processSteps = [
  {
    title: 'Discovery',
    text: 'We map your business model, bottlenecks, customer journey, and delivery goals.'
  },
  {
    title: 'Solution Architecture',
    text: 'We design the right AI, software, and automation stack for reliability and speed.'
  },
  {
    title: 'Build & Iterate',
    text: 'We ship in fast milestones, gather feedback quickly, and improve continuously.'
  },
  {
    title: 'Launch & Optimize',
    text: 'We monitor performance, refine workflows, and keep the product aligned with growth.'
  }
];

export const projects = [
  {
    title: 'AstraFlow CRM Intelligence',
    category: 'AI Automation',
    description:
      'Lead qualification and internal analytics dashboard that reduced manual follow-ups for a sales team.',
    link: 'https://example.com/project-1',
    results: ['47% faster follow-up cycles', 'Centralized reporting', 'Automated scoring']
  },
  {
    title: 'NovaCart Commerce Suite',
    category: 'Custom Software',
    description:
      'Modern commerce platform with fast checkout, inventory sync, and executive reporting.',
    link: 'https://example.com/project-2',
    results: ['Improved checkout speed', 'Unified ops dashboard', 'Cloud-native deployment']
  },
  {
    title: 'SignalDesk Operations Hub',
    category: 'Internal Platform',
    description:
      'Cross-team operations portal with ticket visibility, approvals, and automated notifications.',
    link: 'https://example.com/project-3',
    results: ['Reduced email overhead', 'Faster approvals', 'Role-based access']
  }
];

export const testimonials = [
  {
    quote:
      'GeekVentures helped us translate an unclear idea into a polished product with real business value. Their speed and communication were excellent.',
    name: 'A. Rahman',
    role: 'Founder, Retail Tech Brand'
  },
  {
    quote:
      'The automation system removed repetitive work from our team and gave leadership better visibility. It felt premium from day one.',
    name: 'M. Khan',
    role: 'Operations Lead, Service Company'
  },
  {
    quote:
      'We wanted something modern, fast, and reliable. GeekVentures delivered a beautiful digital experience that our clients noticed immediately.',
    name: 'S. Tariq',
    role: 'Director, Consulting Firm'
  }
];

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070d",
        foreground: "#f5f7fb",
        card: "#0b1020",
        border: "rgba(255,255,255,0.08)",
        primary: "#8cf0ff",
        secondary: "#a78bfa",
        muted: "#94a3b8",
      },
      boxShadow: {
        glow: "0 0 80px rgba(140,240,255,0.18)",
        violet: "0 0 100px rgba(167,139,250,0.18)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at center, rgba(140,240,255,0.22), rgba(167,139,250,0.18), transparent 65%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
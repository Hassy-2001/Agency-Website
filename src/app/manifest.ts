import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GeekVentures",
    short_name: "GeekVentures",
    description:
      "Video editing, social media marketing, web development, and AI-powered apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070d",
    theme_color: "#05070d",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

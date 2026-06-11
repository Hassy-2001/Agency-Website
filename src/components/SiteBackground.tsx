"use client";

import dynamic from "next/dynamic";

const ThreeAgencyScene = dynamic(() => import("./ThreeAgencyScene"), {
  ssr: false,
  loading: () => null,
});

export default function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(140,240,255,0.15),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(167,139,250,0.14),transparent_30%),radial-gradient(circle_at_50%_72%,rgba(56,189,248,0.08),transparent_34%),linear-gradient(180deg,#030712_0%,#05070d_45%,#030712_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-x-0 top-0 h-screen opacity-80">
        <ThreeAgencyScene />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.06),rgba(3,7,18,0.55)_46%,rgba(3,7,18,0.78))]" />
    </div>
  );
}

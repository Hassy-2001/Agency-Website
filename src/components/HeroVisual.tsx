"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ThreeAgencyScene = dynamic(() => import("./ThreeAgencyScene"), { ssr: false });

export default function HeroVisual() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <div className={`art-center${ready ? " art-center-hidden" : ""}`}>
        <span>g<span className="art-v">v</span><span className="art-period">.</span></span>
      </div>
      <div className="hero-scene"><ThreeAgencyScene onReady={setReady} /></div>
    </>
  );
}

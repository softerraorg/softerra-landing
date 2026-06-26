import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Grain from "./components/Grain";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
// import AllstoraCaseStudy from "./sections/AllStoraCaseStudy";
import SelectedWork from "./sections/SelectedWork";
import TechStack from "./sections/TechStack";
import Reviews from "./sections/Reviews";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================================
// SOFTERRA — Refined editorial dark theme with purple accent
// Inspired by the Allstora case study aesthetic
// ============================================================================

// ---------- Main ----------
export default function SofterraLanding() {
  return (
    <div
      className="min-h-screen bg-bg text-fg"
      style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        body { background: var(--bg); }
        /* Display / heading style — kept the .font-serif name to avoid renaming across files */
        .font-serif { font-family: 'Plus Jakarta Sans', -apple-system, system-ui, sans-serif; font-weight: 600; }
        ::selection { background: rgba(107, 91, 255, 0.4); color: white; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Grain />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      {/* <AllstoraCaseStudy /> */}
      <SelectedWork />
      <TechStack />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

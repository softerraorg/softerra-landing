"use client";

// Grain removed: its SVG feTurbulence noise filter triggers iOS Safari's
// fingerprinting protection, which disables the filter and leaves a full-screen
// black overlay (the "Reduce Protections" banner + washed-out page on iPhone).
// import Grain from "./components/Grain";
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
      {/* <Grain /> — disabled: breaks iOS Safari (see import note above) */}
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

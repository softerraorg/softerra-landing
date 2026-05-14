import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Grain from "./components/Grain";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import AllstoraCaseStudy from "./sections/AllStoraCaseStudy";
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
      className="min-h-screen bg-[#0a0a0f] text-white"
      style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap');
        body { background: #0a0a0f; }
        .font-serif { font-family: 'Fraunces', 'Cormorant Garamond', Georgia, serif; }
        ::selection { background: rgba(107, 91, 255, 0.4); color: white; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Grain />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <AllstoraCaseStudy />
      <SelectedWork />
      <TechStack />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

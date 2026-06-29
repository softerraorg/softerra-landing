import { motion, useScroll, useTransform } from "../lib/no-motion";
import { useRef } from "react";
import Aurora from "../components/Aurora";
import HeroCards from "../components/HeroCards";
import MagneticButton from "../components/MagneticButton";
import { fadeUp, stagger } from "../lib/motion";

// Instrument Serif italic + purple gradient text-fill, used for the
// emphasised words in the heading.
function GradientItalic({ children }) {
  return (
    <span
      className="bg-gradient-to-b from-[#C9C0FF] via-[#8B7BFF] to-[#6B5BFF] bg-clip-text pb-[0.2em] pr-[0.18em] pl-[0.09em]  text-[1.05em] italic text-transparent [-webkit-background-clip:text]"
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
    >
      {children}
    </span>
  );
}

const AVATARS = [
  "linear-gradient(135deg,#f97316,#ef4444)",
  "linear-gradient(135deg,#22c55e,#16a34a)",
  "linear-gradient(135deg,#3b82f6,#6366f1)",
  "linear-gradient(135deg,#ec4899,#8b5cf6)",
];

// ---------- Hero ----------
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-svh items-center overflow-hidden">
      <Aurora />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-32 pb-24">
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 items-center gap-12 xl:grid-cols-[1fr_auto] xl:gap-16"
        >
          {/* LEFT — text */}
          <div className="max-w-[800px]">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#6B5BFF]/25 bg-[#6B5BFF]/[0.08] py-2 pl-3 pr-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#B6ABFF]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6B5BFF]" />
              Top Rated Plus on Upwork · 99% Job Success
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="font-serif text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-fg"
            >
              <motion.span variants={fadeUp} transition={{ duration: 0.8 }} className="block">
                We build Shopify
              </motion.span>
              <motion.span variants={fadeUp} transition={{ duration: 0.8 }} className="block ">
                stores that <GradientItalic>sell</GradientItalic>
              </motion.span>
              
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 max-w-[560px] text-[17px] leading-[28px] text-fg/70"
            >
              Softerra is an engineering team. We ship custom Shopify themes, headless Next.js
              storefronts and the full stack work that wraps around them — for direct to consumer
              brands across the United States and Europe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-3.5"
            >
              <MagneticButton
                href="#contact"
                className="rounded-full border border-white/15 bg-gradient-to-b from-[#7C6CFF] to-[#5C4BE8] px-[26px] py-4 text-[15px] font-medium text-white shadow-[0_12px_32px_-8px_rgba(107,91,255,0.45)]"
              >
                Start a project →
              </MagneticButton>
              <MagneticButton
                href="#case-study"
                className="rounded-full border border-fg/10 bg-fg/[0.04] px-6 py-4 text-[15px] font-medium text-fg transition-colors hover:border-fg/20"
              >
                ▶ See our work
              </MagneticButton>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {AVATARS.map((bg, i) => (
                  <span key={i} className="h-7 w-7 rounded-full ring-2 ring-bg" style={{ background: bg }} />
                ))}
              </div>
              <p className="text-[13px] text-fg/50">
                Trusted by 500+ brands across DTC, B2B, fashion, beauty and supplements
              </p>
            </motion.div>
          </div>

          {/* RIGHT — code blocks */}
          <div className="hidden xl:block">
            <HeroCards />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-fg/30"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}

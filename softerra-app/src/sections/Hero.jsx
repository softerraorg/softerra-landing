import { motion, useScroll, useTransform } from "framer-motion";
import Aurora from "../components/Aurora";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";
// ---------- Hero ----------
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <Aurora />
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#6B5BFF]/30 bg-[#6B5BFF]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#8B7BFF]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6B5BFF] animate-pulse" />
          Top Rated Plus on Upwork · 99% job success
        </motion.div>

        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-white"
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.8 }} className="block">
            We build Shopify
          </motion.span>
          <motion.span variants={fadeUp} transition={{ duration: 0.8 }} className="block">
            stores that{" "}
            <span className="italic text-[#8B7BFF]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              actually sell
            </span>
            <span className="text-[#6B5BFF]">.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 max-w-xl text-base leading-relaxed text-white/60"
        >
          Softerra is a six person development team based in Islamabad. We work with direct to consumer brands across the United States and Europe on custom themes. Conversion focused development. Full stack engineering for platforms like Allstora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-[#6B5BFF] px-8 py-4 text-sm font-medium text-white"
          >
            <span className="relative z-10">Start a project →</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#8B7BFF] to-[#6B5BFF] opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#case-study"
            className="rounded-full border border-white/20 px-8 py-4 text-sm text-white/80 transition-all hover:border-white/40 hover:text-white"
          >
            View our work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/30"
      >
        Scroll
      </motion.div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

const LINKS = ["Services", "Work", "Case Studies", "Reviews"];

// ---------- Nav ----------
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-bg/70 border-b border-fg/5" : ""
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo — Instrument Serif italic */}
        <a
          href="#"
          className="text-[28px] italic leading-none tracking-[-0.02em] text-fg"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Softerra.
        </a>

        {/* Centered nav links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-sm text-fg/70 md:flex">
          {LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative transition-colors hover:text-fg"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#6B5BFF] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right cluster — CTA then theme toggle (Figma order) */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-fg/10 bg-gradient-to-b from-fg/[0.06] to-fg/[0.02] px-[18px] py-[11px] text-sm font-medium text-fg transition-colors hover:border-fg/20"
          >
            Start a project →
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

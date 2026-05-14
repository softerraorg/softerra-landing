import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-baseline gap-1 font-serif text-2xl tracking-tight">
          <span className="text-fg">Softerra</span>
          <span className="text-[#6B5BFF]">.</span>
        </div>
        <div className="hidden gap-10 text-sm tracking-wide text-fg/60 md:flex">
          {["Services", "Work", "Case Study", "Reviews"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-fg transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-[#6B5BFF]/40 bg-[#6B5BFF]/10 px-5 py-2.5 text-sm text-fg transition-all hover:bg-[#6B5BFF]/20"
          >
            <span className="relative z-10">Start a project →</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

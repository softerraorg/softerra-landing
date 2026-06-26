import { motion } from "framer-motion";
import { useTheme } from "../lib/useTheme";

// Sliding pill toggle that flips between light and dark themes.
// The purple thumb rests on the right (moon) in dark mode, left (sun) in light.
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative h-9 w-[72px] shrink-0 rounded-full border border-fg/10 bg-gradient-to-b from-fg/[0.06] to-fg/[0.02]"
    >
      {/* Sun (left) and moon (right) — one sits under the sliding thumb */}
      <span className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-[14px] leading-none text-fg/40">
        ☀
      </span>
      <span className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2 text-[14px] leading-none text-fg/70">
        ☾
      </span>
      {/* Thumb slides right in dark, left in light */}
      <motion.span
        className="absolute left-1 top-1 h-7 w-7 rounded-full bg-gradient-to-b from-[#8B7BFF] to-[#6B5BFF] shadow-md shadow-[#6B5BFF]/40"
        animate={{ x: isDark ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
      />
    </button>
  );
}

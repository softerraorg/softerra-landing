import { motion } from "../lib/no-motion";

// These two panels are intentionally dark in BOTH themes — they read as
// terminal / code chrome (like a real editor), so they use hardcoded colors
// rather than the fg/surface theme tokens. Gated to xl+ by the parent so they
// never collide with the heading on smaller screens.

const MONO = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const CARD =
  "w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#161624]/85 to-[#0b0b14]/95 backdrop-blur-xl";

function TerminalCard() {
  return (
    <div className={`${CARD} shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]`}>
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span style={MONO} className="text-[11px] text-white/40">
          softerra.dev — zsh
        </span>
        <span className="w-10" />
      </div>
      {/* output */}
      <div style={MONO} className="space-y-1 px-4 py-4 text-[11px] leading-[19px] text-white/70">
        <p>
          <span className="text-white/30">$</span> shopify theme dev --store=
          <span className="text-[#4ade80]">&quot;allstora&quot;</span>
        </p>
        <p>
          <span className="text-white">→</span> <span className="text-[#8b7bff]">Theme</span> ready at{" "}
          <span className="text-[#4ade80]">localhost:9292</span>
        </p>
        <p>
          <span className="text-white">→</span> <span className="text-[#8b7bff]">Lighthouse</span>:
          <span className="text-[#f49e0b]"> 98</span> ·<span className="text-[#f49e0b]"> 96</span> ·
          <span className="text-[#f49e0b]"> 100</span> ·<span className="text-[#f49e0b]"> 100</span>
        </p>
        <p>
          <span className="text-white">→</span> <span className="text-[#8b7bff]">CLS</span>{" "}
          <span className="text-[#4ade80]">0.02</span> · <span className="text-[#8b7bff]">LCP</span>{" "}
          <span className="text-[#4ade80]">1.4s</span>
        </p>
        <p>
          <span className="text-white">→</span> Shipping in<span className="text-[#f49e0b]"> 3</span> days_
        </p>
      </div>
    </div>
  );
}

const STACK_ROWS = [
  { letter: "S", label: "Shopify · Liquid", tag: "core" },
  { letter: "N", label: "Next.js 14 · Vercel", tag: "edge" },
  { letter: "S", label: "Supabase · Postgres", tag: "db" },
  { letter: "K", label: "Klaviyo · n8n", tag: "automation" },
];

function StackCard() {
  return (
    <div className={`${CARD} shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]`}>
      <div className="flex items-center justify-between px-[18px] pb-3.5 pt-[18px]">
        <span className="text-[13px] font-medium text-white">Stack we ship every week</span>
        <span style={MONO} className="text-[10px] tracking-[0.14em] text-white/30">
          9 TOOLS
        </span>
      </div>
      <div>
        {STACK_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center gap-3 px-[18px] py-2.5 ${
              i < STACK_ROWS.length - 1 ? "border-b border-white/[0.06]" : ""
            }`}
          >
            <span
              style={MONO}
              className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-white/[0.06] text-[10px] font-medium text-[#8b7bff]"
            >
              {row.letter}
            </span>
            <span className="text-[12px] text-white/70">{row.label}</span>
            <span style={MONO} className="ml-auto text-[11px] text-white/30">
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// The whole right-hand cluster — fades in, then each card drifts gently.
export default function HeroCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <TerminalCard />
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <StackCard />
      </motion.div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import Counter from "../components/Counter";

const MONO = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

// ---------- Stats ----------
export default function Stats() {
  const stats = [
    { value: 500, label: "Projects delivered" },
    { value: 100, label: "Five star reviews" },
    { value: 4000, label: "Hours on Upwork" },
    { value: 6, label: "Years Shopify only" },
  ];
  return (
    <section className="relative py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
              <Counter
                value={s.value}
                className="bg-gradient-to-b from-fg to-fg/50 bg-clip-text text-transparent [-webkit-background-clip:text]"
              />
              <span className="text-[#6B5BFF]">+</span>
            </div>
            <div style={MONO} className="mt-3.5 text-[11px] uppercase tracking-[0.14em] text-fg/50">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

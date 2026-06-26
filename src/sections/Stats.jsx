import { motion } from "framer-motion";
import Counter from "../components/Counter";
// ---------- Stats ----------
export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects delivered" },
    { value: 100, suffix: "+", label: "Five star reviews" },
    { value: 4000, suffix: "+", label: "Hours on Upwork" },
    { value: 6, suffix: "+", label: "Years Shopify only" },
  ];
  return (
    <section className="relative border-y border-fg/5 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="font-serif text-5xl text-[#8B7BFF] md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-fg/40">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

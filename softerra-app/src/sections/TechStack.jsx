import { motion } from "framer-motion";
import { stagger, fadeUp } from "../lib/motion";
// ---------- Tech stack ----------
export default function TechStack() {
  const tech = [
    "Shopify Liquid", "JavaScript", "HTML and CSS3", "Shopify CLI", "ThemeKit", "REST API", "Storefront API", "Klaviyo", "Recharge", "Appstle", "Kickflip", "Locksmith", "Figma", "ClickUp", "Slack", "Next.js", "Supabase", "n8n", "Automation", "Dawn", "Prestige", "Impulse", "Horizon"
  ];
  return (
    <section className="relative border-y border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-10">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">Tech stack</div>
          <h2 className="font-serif text-4xl text-white">Tools we use every day</h2>
        </div>
        <motion.div className="flex flex-wrap gap-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {tech.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-all hover:border-[#6B5BFF]/40 hover:bg-[#6B5BFF]/10 hover:text-white"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
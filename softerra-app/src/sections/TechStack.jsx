import { motion } from "framer-motion";
import {
  siShopify,
  siJavascript,
  siHtml5,
  siCss,
  siNextdotjs,
  siSupabase,
  siFigma,
  siClickup,
  siN8n,
} from "simple-icons";
import { stagger, fadeUp } from "../lib/motion";

// ---------- Tech stack ----------
const tech = [
  siShopify,
  siJavascript,
  siHtml5,
  siCss,
  siNextdotjs,
  siSupabase,
  siFigma,
  siClickup,
  siN8n,
];

export default function TechStack() {
  return (
    <section className="relative border-y border-fg/5 py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-10">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">Tech stack</div>
          <h2 className="font-serif text-4xl text-fg">Tools we use every day</h2>
        </div>
        <motion.div
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tech.map((icon) => (
            <motion.div
              key={icon.title}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -4 }}
              title={icon.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-fg/10 bg-fg/[0.03] px-3 py-5 text-fg/70 transition-colors hover:border-[#6B5BFF]/40 hover:text-fg"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label={icon.title}
                className="h-7 w-7"
              >
                <path d={icon.path} />
              </svg>
              <span className="text-[10px] uppercase tracking-wider text-fg/40">
                {icon.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

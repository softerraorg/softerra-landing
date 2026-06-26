import { motion } from "framer-motion";
import Counter from "../components/Counter";

// ---------- Allstora Case Study ----------
export default function AllstoraCaseStudy() {
  const workstreams = [
    { title: "Kiki Chat Rebuild", desc: "Full v0 rebuild across five repositories. Schema and real time delivery and permission sync and soft delete moderation. 60 customer syncs remediated.", repos: 5 },
    { title: "Deploy Pipeline Split", desc: "Separate staging and production pipelines across both Lambda services. Eliminated accidental production deploys entirely.", repos: 2 },
    { title: "CDF Routing Correction", desc: "LGS club orders now route to the dedicated location. May backfill complete. POA rejections handled properly.", repos: 3 },
    { title: "Curation Workflow Lift", desc: "Master tracker order links and editable blurbs and selections dashboard and stale shortlist cleanup. Renewal Curation Dashboard delivered.", repos: 2 },
    { title: "Subscription Tag Fix", desc: "Traced misapplied allstora member tag to Appstle automation. Fixed at source and validated across environments.", repos: 1 },
    { title: "Membership Pricing Rework", desc: "Pricing and discounts and signup page and RBB framing reworked end to end. Currently in client review cycle.", repos: 2 },
  ];

  const techStack = [
    "Next.js", "Supabase", "Shopify", "AWS Lambda", "Vercel", "Upstash", "DynamoDB", "EventBridge", "Appstle", "Ingram CDF", "TypeScript", "Postgres"
  ];

  return (
    <section id="case-study" className="relative overflow-hidden border-t border-fg/5 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface-2 to-bg" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(107,91,255,0.15), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B5BFF] animate-pulse" />
            Featured engagement · Ongoing
          </div>
          <h2 className="font-serif text-6xl leading-none text-fg md:text-7xl">
            Allstora<span className="text-[#6B5BFF]">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-fg/60">
            A community driven LGBTQ books marketplace. Engineered end to end. Not a Shopify theme. A fully custom Next.js application that uses Shopify as a commerce engine while keeping its own Supabase database for everything Shopify cannot model natively.
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#6B5BFF]/20 bg-[#6B5BFF]/5 md:grid-cols-4">
          {[
            { value: 12, suffix: "+", label: "Technologies in rotation" },
            { value: 8, suffix: "", label: "Active repositories" },
            { value: 50, suffix: "+", label: "Tickets shipped" },
            { value: 100, suffix: "+", label: "Total tickets triaged" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8"
            >
              <div className="font-serif text-5xl text-[#8B7BFF]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-fg/40">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Workstreams */}
        <div className="mt-16">
          <h3 className="mb-2 font-serif text-3xl text-fg">Workstreams shipped to production</h3>
          <p className="mb-10 text-fg/50">A snapshot of work delivered through weekly cadence across the past months.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workstreams.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-fg/10 bg-fg/[0.02] p-6 transition-all hover:border-[#6B5BFF]/40 hover:bg-[#6B5BFF]/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8B7BFF]/60">Workstream</div>
                  <div className="text-xs text-fg/40">{w.repos} {w.repos === 1 ? "repo" : "repos"}</div>
                </div>
                <h4 className="mb-3 text-lg text-fg">{w.title}</h4>
                <p className="text-sm leading-relaxed text-fg/50">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-fg/40">Powered by</div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs text-fg/70"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

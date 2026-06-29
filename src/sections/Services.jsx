import { motion } from "../lib/no-motion";

const MONO = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

// Lucide-style line icons, one per service. Rendered inside the purple icon box.
const ICONS = [
  <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
  <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  <><polygon points="12 2 2 7 12 12 22 7" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>,
  <><path d="M8 3 4 7l4 4" /><path d="M4 7h16" /><path d="m16 21 4-4-4-4" /><path d="M20 17H4" /></>,
  <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v5h-5" /></>,
];

const SERVICES = [
  {
    title: "Custom Theme Development",
    desc: "Full builds from Figma or PSD to pixel perfect Shopify themes using Liquid and JSON templates. Mobile first and built for speed.",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Custom sections and product page layouts and sticky add to cart features. All designed to increase average order value.",
  },
  {
    title: "Full Stack Engineering",
    desc: "Next.js storefronts on Vercel with Supabase Postgres and AWS Lambda backends. The kind of work we ship for Allstora every week.",
  },
  {
    title: "Klaviyo Email Flows",
    desc: "Welcome series and abandoned cart and post purchase and winback flows. Custom HTML templates that match your store design.",
  },
  {
    title: "Store Migrations",
    desc: "Moving stores from WooCommerce and Magento and PrestaShop and Wix to Shopify with zero data loss. Everything transfers clean.",
  },
  {
    title: "Subscription & App Setup",
    desc: "Recharge and Appstle subscription configs. Custom app integrations and Locksmith access control. Bundle and mix-match builders.",
  },
];

// ---------- Services ----------
export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-8">
        {/* Header — heading left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end"
        >
          <div>
            <div style={MONO} className="mb-5 text-[11px] uppercase tracking-[0.18em] text-[#8B7BFF]">
              —&nbsp;&nbsp;What we do
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">
              Shopify development. And the{" "}
              <span className="italic text-[#8B7BFF]" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                engineering
              </span>{" "}
              around it.
            </h2>
          </div>
          <p className="text-[16px] leading-[26px] text-fg/70">
            We do not take WordPress or Webflow jobs. We work entirely inside Shopify and the custom
            layers that wrap around it. Next.js. Supabase. AWS. The full stack when your business
            outgrows a theme.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-fg/10 bg-fg/10 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative bg-surface bg-gradient-to-b from-fg/[0.03] to-transparent p-8 transition-colors hover:from-fg/[0.07]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#6B5BFF]/30 bg-gradient-to-b from-[#6B5BFF]/20 to-[#3D2E9C]/10 text-[#B6ABFF] shadow-[0_8px_24px_-4px_rgba(107,91,255,0.45)] transition-transform group-hover:scale-105">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[i]}
                </svg>
              </div>

              <span style={MONO} className="absolute right-8 top-8 text-[11px] tracking-[0.08em] text-fg/30">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.01em] text-fg">{s.title}</h3>
              <p className="mt-3 text-sm leading-[22px] text-fg/50">{s.desc}</p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#6B5BFF] to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

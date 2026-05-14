import { motion } from "framer-motion";

// ---------- Selected Work / Case Studies ----------
export default function SelectedWork() {
  const projects = [
    {
      name: "Allstora",
      subtitle: "Full-Stack Marketplace Engineering",
      desc: "A community-driven books marketplace engineered end to end. Not a Shopify theme but a fully custom Next.js application that uses Shopify as a commerce engine while keeping its own Supabase database, with ongoing work across chat, fulfillment routing, and curation tooling.",
      tags: ["Full Stack", "Next.js", "Supabase", "AWS"],
      gradient: "from-[#3d2e9c] via-[#5b4bcf] to-[#3d2e9c]",
    },
    {
      name: "HercLéon",
      subtitle: "Invite-Only Membership & Referral System",
      desc: "An invite-only, tiered membership experience with a built-in Godfather Code referral mechanism. It controls who gets access, unlocks member tiers, and turns existing customers into a growth channel.",
      tags: ["Membership System", "Referral Engine", "Custom Theme"],
      gradient: "from-[#1a1d4d] via-[#2a2d6d] to-[#1a1d4d]",
    },
    {
      name: "PenCarrie Sync",
      subtitle: "Custom Supplier Integration App",
      desc: "A custom app that connects the PenCarrie supplier catalog directly to Shopify. It automatically imports and keeps thousands of products, variants, and stock levels in sync, with no manual uploads.",
      tags: ["Custom App", "API Integration", "Product Sync"],
      gradient: "from-[#2a1d4d] via-[#3d2d6d] to-[#2a1d4d]",
    },
    {
      name: "Kumori",
      subtitle: "Custom Mix-and-Match Bundle Builder",
      desc: "A custom bundle builder that lets shoppers assemble their own multi-product packs in one smooth flow, with live pricing, cart conflict handling, and a clean path from selection to checkout.",
      tags: ["Bundle Builder", "Custom UX", "Conversion"],
      gradient: "from-[#5d4520] via-[#7d5d2d] to-[#5d4520]",
    },
    {
      name: "Little Lingo",
      subtitle: "Storefront, Blog Platform & Email Automation",
      desc: "A full storefront build including homepage, about, and a custom blog hub with reusable post templates, extended with Klaviyo email campaigns and automated flows that keep customers coming back.",
      tags: ["Custom Theme", "Blog Platform", "Klaviyo"],
      gradient: "from-[#1d3d2a] via-[#2d5d3d] to-[#1d3d2a]",
    },
    {
      name: "eyeOs Eyewear",
      subtitle: "Collection Experience & Conversion Optimization",
      desc: "A redesigned eyewear shopping experience with smarter collection filters, a cleaner layout, and a frame only purchase option, paired with Klaviyo segmentation and site performance hardening.",
      tags: ["Collection Redesign", "CRO", "Performance"],
      gradient: "from-[#1d3a3d] via-[#2d5a5d] to-[#1d3a3d]",
    },
  ];

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">Case studies</div>
          <h2 className="font-serif text-5xl text-white md:text-6xl">
            Work we have shipped<span className="text-[#6B5BFF]">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/50">
            A closer look at recent projects. Custom apps, membership systems, bundle builders, and full storefront builds for direct to consumer brands.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10"
            >
              <div className={`relative bg-gradient-to-br ${p.gradient} p-8 md:p-10`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative z-10">
                  <motion.div
                    className="font-serif text-4xl italic text-white/80 md:text-5xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {p.name}
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-1 flex-col bg-[#0a0a0f] p-6">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8B7BFF]/70">
                  {p.name} · Case
                </div>
                <h3 className="mb-3 text-xl text-white">{p.subtitle}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/50">{p.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">And many more</div>
          <p className="text-sm leading-relaxed text-white/70">
            Texas Gift Baskets · GrayLabs · Herban Hemp · CruiseMap · DeVaultClub · Navico Health · Katarina Djordjic.
          </p>
          <p className="mt-2 text-sm text-white/50">
            Over 500 brands served across direct to consumer and business to business and fashion and beauty and food and beverage and supplement verticals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

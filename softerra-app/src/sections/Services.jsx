import { motion } from "framer-motion";
// ---------- Services ----------
export default function Services() {
  const services = [
    { title: "Custom Theme Development", desc: "Full builds from Figma or PSD to pixel perfect Shopify themes using Liquid and JSON templates and Shopify CLI. Mobile first and built for speed." },
    { title: "Conversion Rate Optimization", desc: "Custom sections and product page layouts and sticky add to cart features. All designed to increase average order value." },
    { title: "Full Stack Engineering", desc: "Next.js storefronts on Vercel with Supabase Postgres and AWS Lambda backends. The kind of work we ship for Allstora every week." },
    { title: "Klaviyo Email Flows", desc: "Welcome series and abandoned cart and post purchase and winback flows. Custom HTML and email templates that match your store design and convert subscribers to buyers." },
    { title: "Store Migrations", desc: "Moving stores from WooCommerce and Magento and PrestaShop and Wix to Shopify with zero data loss. Products and customers and orders and everything transfers clean." },
    { title: "Subscription and App Setup", desc: "Recharge and Appstle subscription configurations and custom app integrations and Locksmith access control and product bundling and mix and match pack builders." },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">What we do</div>
          <h2 className="font-serif text-5xl leading-tight text-fg md:text-6xl">
            Shopify development.{" "}
            <span className="italic text-fg/40">
              And the engineering around it.
            </span>
          </h2>
          <p className="mt-6 text-fg/50">
            We do not take WordPress projects or Webflow jobs. We work one hundred percent inside Shopify and the custom layers that wrap around it. Next.js. Supabase. AWS. The full stack when your business outgrows a theme.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-fg/5 bg-fg/5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-[#6B5BFF]/30 bg-[#6B5BFF]/10 text-[#8B7BFF] transition-all group-hover:bg-[#6B5BFF]/20 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg text-fg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-fg/50">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#6B5BFF] to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

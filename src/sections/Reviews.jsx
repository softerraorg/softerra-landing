import { motion } from "../lib/no-motion";

export default function Reviews() {
  const reviews = [
    { stars: 5, quote: "This is the second time I have worked with Muhammad and once again I am very satisfied with the results. He implemented a custom personalization system on my Shopify store exactly as I needed.", author: "Repeat Client", location: "United States" },
    { stars: 5, quote: "He has been a very responsive and fast and high quality freelancer. Delivered exactly what was needed without any back and forth confusion.", author: "Verified Client", location: "Australia" },
    { stars: 5, quote: "Excellent Shopify developer. Handled complete theme customizations and product page builds with no handholding needed. Will definitely be coming back for more work.", author: "Verified Client", location: "Europe" },
  ];
  return (
    <section id="reviews" className="relative py-20">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">Client reviews</div>
          <h2 className="font-serif text-5xl text-fg md:text-6xl">What our clients say<span className="text-[#6B5BFF]">.</span></h2>
          <p className="mt-6 max-w-xl text-fg/50">Over 100 five star reviews on Upwork from brands across the world.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-fg/10 bg-fg/[0.02] p-8 transition-colors hover:border-[#6B5BFF]/30 hover:bg-[#6B5BFF]/[0.03]"
            >
              <div className="mb-6 flex gap-0.5 text-[#8B7BFF]">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="mb-8 text-sm leading-relaxed text-fg/70">"{r.quote}"</p>
              <div className="flex items-center gap-3 border-t border-fg/5 pt-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B5BFF]/20 text-xs text-[#8B7BFF]">
                  {r.author[0]}
                </div>
                <div>
                  <div className="text-sm text-fg">{r.author}</div>
                  <div className="text-xs text-fg/40">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

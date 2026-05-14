import { motion } from "framer-motion";
export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(107,91,255,0.2), transparent 60%), radial-gradient(circle at 20% 50%, rgba(61,46,156,0.3), transparent 40%)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8B7BFF]">Ready to start</div>
          <h2 className="font-serif text-5xl leading-tight text-fg md:text-7xl">
            Tell us about your{" "}
            <span className="italic text-[#8B7BFF]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Shopify project
            </span>
            <span className="text-[#6B5BFF]">.</span>
          </h2>
          <p className="mt-8 text-fg/60">
            Share your project details and we will review them and suggest a clear next step within 24 hours. No pressure and no obligation.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-block rounded-full bg-[#6B5BFF] px-10 py-5 text-sm font-medium text-white shadow-[0_0_40px_rgba(107,91,255,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(107,91,255,0.6)]"
          >
            Hire us on Upwork →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

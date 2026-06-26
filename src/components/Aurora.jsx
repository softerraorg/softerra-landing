import { motion } from "framer-motion";
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(107,91,255,0.35), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(61,46,156,0.4), transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

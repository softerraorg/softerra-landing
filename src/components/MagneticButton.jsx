import { motion } from "../lib/no-motion";
import { useMagnetic } from "../lib/useMagnetic";

// An <a> link that drifts toward the cursor on hover. Use for primary CTAs
// only (not fixed-position elements like the nav button).
export default function MagneticButton({ href, className, children }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic();

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

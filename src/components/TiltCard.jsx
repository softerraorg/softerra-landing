import { motion, useMotionValue, useSpring, useTransform } from "../lib/no-motion";

// Tilts its children in 3D toward the cursor.
// IMPORTANT: the PARENT element must set a `perspective`
// (e.g. style={{ perspective: "1000px" }}) or the tilt renders flat.
export default function TiltCard({ children, className = "" }) {
  const px = useMotionValue(0); // -0.5 .. 0.5  horizontal cursor position
  const py = useMotionValue(0); // -0.5 .. 0.5  vertical cursor position

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 24,
  });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

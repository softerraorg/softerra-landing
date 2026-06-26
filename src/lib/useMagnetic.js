import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// Pulls an element gently toward the cursor while hovered, then springs back
// to center on leave. Returns a ref + springy x/y motion values + handlers.
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 26 });
  const springY = useSpring(y, { stiffness: 200, damping: 26 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onMouseMove, onMouseLeave };
}

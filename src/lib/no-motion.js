import { createElement, forwardRef } from "react";

/*
 * TEMPORARY no-op stand-in for framer-motion — animations are disabled "for now".
 *
 * `motion.<tag>` renders a plain DOM element. Every animation prop
 * (initial / animate / whileInView / whileHover / variants / transition / …)
 * and every transform-only style key (x / y / scale / rotate / …) is dropped,
 * so markup renders in its final, resting state with no motion.
 *
 * The hooks (useScroll / useTransform / useMotionValue / useSpring / useInView)
 * return inert values that keep dependent code from crashing.
 *
 * TO RE-ENABLE ANIMATIONS: change the imports in the affected files back from
 * "../lib/no-motion" (or "./no-motion") to "framer-motion", restore the
 * <motion.span> thumb in ThemeToggle.jsx, then delete this file.
 */

// Animation-only props that must never reach the DOM.
const DROP_PROPS = new Set([
  "initial", "animate", "exit", "variants", "transition",
  "whileHover", "whileTap", "whileInView", "whileFocus", "whileDrag", "whileInViewport",
  "viewport", "layout", "layoutId", "layoutDependency", "custom", "transformTemplate",
  "drag", "dragConstraints", "dragElastic", "dragMomentum", "dragSnapToOrigin",
  "onViewportEnter", "onViewportLeave", "onAnimationStart", "onAnimationComplete",
]);

// Transform-ish style keys framer-motion understands but the DOM does not.
const DROP_STYLE = new Set([
  "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ",
  "scale", "scaleX", "scaleY", "skew", "skewX", "skewY",
  "originX", "originY", "originZ", "transformPerspective",
]);

function cleanStyle(style) {
  if (!style || typeof style !== "object") return style;
  const out = {};
  for (const key in style) {
    if (!DROP_STYLE.has(key)) out[key] = style[key];
  }
  return out;
}

const cache = new Map();

function component(tag) {
  if (cache.has(tag)) return cache.get(tag);
  const Comp = forwardRef(function MotionLess(props, ref) {
    const next = {};
    for (const key in props) {
      if (DROP_PROPS.has(key)) continue;
      next[key] = key === "style" ? cleanStyle(props.style) : props[key];
    }
    return createElement(tag, { ...next, ref });
  });
  cache.set(tag, Comp);
  return Comp;
}

// motion.div, motion.span, motion.a, motion.nav, motion.h1, … all resolve here.
export const motion = new Proxy(
  {},
  { get: (_t, tag) => component(typeof tag === "string" ? tag : "div") }
);

// Minimal MotionValue stand-in: supports .get()/.set()/.on() so handlers that
// call value.set(...) (magnetic/tilt) keep working. Its value never reaches the
// DOM because cleanStyle strips the transform keys it would feed.
function motionValue(initial = 0) {
  let v = initial;
  return { get: () => v, set: (n) => { v = n; }, on: () => () => {} };
}

export const useMotionValue = (initial = 0) => motionValue(initial);

export const useSpring = (source) =>
  source && typeof source === "object" && "get" in source ? source : motionValue(source ?? 0);

// Return the FIRST output value so things resolve to their resting state
// (e.g. Hero opacity [1, 0] → 1, i.e. fully visible).
export const useTransform = (_value, _input, output) =>
  Array.isArray(output) ? output[0] : motionValue(0);

export const useScroll = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0),
});

// Always "in view" so scroll-triggered content (e.g. the stat Counter) renders
// its final value instead of staying blank.
export const useInView = () => true;

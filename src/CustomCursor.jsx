import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    // 🔹 Detect hover on buttons, links, images, text with class
    const hoverables = document.querySelectorAll(
  "button, a, img, p, h1, h2, h3, h4, h5, h6, span, .hover-target"
);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, [x, y]);

  return (
    <motion.div
  animate={{
    scale: hovered ? 2 : 1,
    backgroundColor: hovered ? "rgba(255,0,85,0.9)" : "rgba(255,255,255,1)",
  }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 20,
    duration: 0.3,  // extra smooth fade
  }}
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    borderRadius: "50%",
    pointerEvents: "none",
    x: springX,
    y: springY,
    zIndex: 9999,
    boxShadow: hovered
      ? "0 0 15px rgba(255,0,85,0.7), 0 0 30px rgba(255,0,85,0.5)"
      : "0 0 8px rgba(255,255,255,0.3)", // glow effect
    mixBlendMode: "difference",
  }}
/>
  );
}

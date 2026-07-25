"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Eye, ArrowUpRight, MousePointerClick } from "lucide-react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics = real momentum/drag instead of instant snap
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.6 });

  // Trailing ring lags even more, creating a two-layer depth effect
  const trailX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 1 });

  const [mode, setMode] = useState<"default" | "link" | "gallery">("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const galleryEl = target.closest("[data-cursor='gallery']");
      const linkEl = target.closest("a, button");

      if (galleryEl) {
        setMode("gallery");
        setLabel("VIEW");
      } else if (linkEl) {
        setMode("link");
        setLabel(linkEl.getAttribute("data-cursor-label") || "OPEN");
      } else {
        setMode("default");
        setLabel("");
      }
    }

    function handleClick(e: MouseEvent) {
      const id = Date.now();
      setRipples((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  const size = mode === "default" ? 10 : mode === "link" ? 50 : 60;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none hidden md:block">
      {/* Outer lagging ring — depth layer */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute top-0 left-0"
      >
        <motion.div
          animate={{
            width: size + 24,
            height: size + 24,
            opacity: mode === "default" ? 0.25 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-light"
        />
      </motion.div>

      {/* Main cursor — fast layer */}
      <motion.div style={{ x: springX, y: springY }} className="absolute top-0 left-0">
        <motion.div
          animate={{ width: size, height: size }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light/15 backdrop-blur-sm border border-accent-light/70 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {mode === "default" && (
              <motion.div
                key="dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="w-1.5 h-1.5 rounded-full bg-accent-light"
              />
            )}
            {mode === "gallery" && (
              <motion.div
                key="eye"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                <Eye size={20} className="text-accent-light" />
              </motion.div>
            )}
            {mode === "link" && (
              <motion.div
                key="arrow"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                {label === "OPEN" ? (
                  <ArrowUpRight size={18} className="text-accent-light" />
                ) : (
                  <MousePointerClick size={16} className="text-accent-light" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              style={{ top: size / 2 + 14 }}
              className="absolute left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] text-accent-light font-mono whitespace-nowrap bg-background/70 backdrop-blur-sm px-2 py-1 rounded border border-accent-light/20"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: ripple.y,
            left: ripple.x,
            transform: "translate(-50%, -50%)",
          }}
          className="rounded-full border border-accent-light pointer-events-none"
        />
      ))}
    </div>
  );
}
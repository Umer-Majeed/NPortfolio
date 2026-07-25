"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import HudFrame from "./HudFrame";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10"
    >
      <HudFrame />
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 lg:px-24 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Two Sides, One Mind
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard>
            <span className="text-accent-light text-sm tracking-widest uppercase">
              The Designer
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-5">
              Visual Storyteller
            </h3>
            <p className="text-muted leading-relaxed">
              I craft visual identities, posters, and digital experiences.
              My work earned 2nd Place in the EXCITE Cup 2025 Poster
              Design Competition at CUST. I&apos;m fluent in Adobe
              Illustrator, Photoshop, and Canva, always chasing clean,
              purposeful design.
            </p>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard>
            <span className="text-accent-light text-sm tracking-widest uppercase">
              The Developer
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-5">
              AI Student &amp; Coder
            </h3>
            <p className="text-muted leading-relaxed">
              Currently pursuing a BS in Artificial Intelligence at
              FUUAST (2025–Present). I build with C++, Python, and
              TypeScript — from university coursework to real projects
              like a chatbot platform, bridging logic with creativity.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
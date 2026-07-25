"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HudFrame from "./HudFrame";

// 🌐 LOW-POLY CONSTELLATION MESH HAND
function MeshHand({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-56 h-36 md:w-64 md:h-40 ${
        isLeft
          ? "text-accent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          : "text-accent-light drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
      } ${isLeft ? "" : "scale-x-[-1]"}`}
    >
      {/* Low-Poly Wireframe Mesh Triangles */}
      <g stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.75" fill="currentColor" fillOpacity="0.1">
        <polygon points="10,65 50,50 50,80 10,95" />
        <polygon points="10,95 50,80 50,110 10,120" />
        <polygon points="50,50 90,40 90,70 50,80" />
        <polygon points="50,80 90,70 90,105 50,110" />

        <polygon points="90,40 135,35 130,65 90,70" />
        <polygon points="90,70 130,65 125,98 90,105" />
        <polygon points="90,105 125,98 115,125" />

        <polygon points="115,125 145,135 125,98" />
        <polygon points="145,135 175,142 165,122 125,98" />

        <polygon points="135,35 175,28 170,48 130,65" />
        <polygon points="175,28 215,22 210,42 170,48" />
        <polygon points="215,22 250,20 242,38 210,42" />

        <polygon points="170,48 210,42 205,62 165,68" />
        <polygon points="210,42 252,38 245,58 205,62" />
        <polygon points="252,38 280,36 272,54 245,58" />

        <polygon points="165,68 205,62 198,80 160,82" />
        <polygon points="205,62 245,58 238,76 198,80" />
        <polygon points="245,58 270,56 262,72 238,76" />

        <polygon points="160,82 198,80 190,95 152,94" />
        <polygon points="198,80 230,78 222,92 190,95" />
        <polygon points="230,78 252,78 244,90 222,92" />
      </g>

      {/* Constellation Nodes */}
      <g fill="currentColor">
        {[
          { x: 10, y: 65 }, { x: 50, y: 50 }, { x: 90, y: 40 }, { x: 135, y: 35 },
          { x: 175, y: 28 }, { x: 215, y: 22 }, { x: 250, y: 20 },
          { x: 170, y: 48 }, { x: 210, y: 42 }, { x: 252, y: 38 }, { x: 280, y: 36 },
          { x: 165, y: 68 }, { x: 205, y: 62 }, { x: 245, y: 58 }, { x: 270, y: 56 },
          { x: 160, y: 82 }, { x: 198, y: 80 }, { x: 230, y: 78 }, { x: 252, y: 78 },
          { x: 145, y: 135 }, { x: 175, y: 142 }
        ].map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="2" className="animate-pulse" />
        ))}
      </g>
    </svg>
  );
}

// 🎈 FLOATING TAGS
function FloatingTag({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 0, scale: 0.95 }}
      animate={{
        y: [-4, 4, -4],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-30 pointer-events-none px-2.5 py-1 text-xs rounded border bg-card/95 border-white/10 text-muted backdrop-blur-md shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface FlipCardProps {
  side: "left" | "right";
  tag: string;
  title: string;
  description: string;
  floatingItems: { label: string; positionClass: string; delay: number }[];
}

function FlipCard({ side, tag, title, description, floatingItems }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isLeft = side === "left";

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative w-full h-[320px] md:h-[350px] cursor-pointer perspective-1000 group"
    >
      {/* 3D ROTATING CONTAINER */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative w-full h-full rounded-lg shadow-2xl transform-gpu"
      >
        {/* ---------------- FRONT SIDE ---------------- */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 p-6 flex flex-col justify-between z-10 rounded-lg bg-card/40 backdrop-blur-sm border border-white/5 hover:border-accent/60 transition-colors"
        >
          <HudFrame />

          {/* CENTERED MAIN HEADING */}
          <div className="flex-1 flex items-center justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              {title}
            </h3>
          </div>

          {/* BOTTOM TAG CHIP */}
          <div className="flex items-center justify-start">
            <span className="text-xs bg-background/50 border border-white/10 text-muted px-2 py-1 rounded">
              {tag}
            </span>
          </div>
        </div>

        {/* ---------------- BACK SIDE ---------------- */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden rounded-lg bg-card/70 backdrop-blur-md border border-accent/40"
        >
          <HudFrame />

          {/* FLOATING TAGS */}
          {floatingItems.map((item, idx) => (
            <FloatingTag
              key={idx}
              className={item.positionClass}
              delay={item.delay}
            >
              {item.label}
            </FloatingTag>
          ))}

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent-light">
                {isLeft ? "Creative Profile" : "Technical Profile"}
              </span>
            </div>

            <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              {title}
            </h4>

            <p className="text-muted text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* LEFT BOTTOM TEXT */}
          <div className="relative z-10 text-left text-xs font-mono text-muted">
            [ {isLeft ? "DESIGN_MATRIX" : "DEV_SYSTEM"} ]
          </div>
        </div>
      </motion.div>

      {/* ---------------- CONSTELLATION MESH HAND (BOTTOM SLIDE IN) ---------------- */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            initial={{
              x: isLeft ? "-120%" : "120%",
              y: "80%",
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              x: isLeft ? "-10%" : "10%",
              y: "20%",
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: isLeft ? "-130%" : "130%",
              y: "90%",
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            className={`absolute bottom-0 z-10 pointer-events-none transform-gpu ${
              isLeft ? "left-0" : "right-0"
            }`}
          >
            <MeshHand side={side} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Two Sides, One Mind
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <FlipCard
            side="left"
            tag="The Designer"
            title="Visual Storyteller"
            description="I craft visual identities, posters, and digital experiences. My work earned 2nd Place in the EXCITE Cup 2025 Poster Design Competition at CUST. I'm fluent in Adobe Illustrator, Photoshop, and Canva, always chasing clean, purposeful design."
            floatingItems={[
              {
                label: "🏆 2nd Place @ CUST",
                positionClass: "top-3 right-4",
                delay: 0,
              },
              {
                label: "🎨 Illustrator & Photoshop",
                positionClass: "bottom-12 right-6",
                delay: 0.3,
              },
            ]}
          />
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <FlipCard
            side="right"
            tag="The Developer"
            title="AI Student & Coder"
            description="Currently pursuing a BS in Artificial Intelligence at FUUAST (2025–Present). I build with C++, Python, and TypeScript—from university coursework to real projects like a chatbot platform, bridging logic with creativity while continuously learning and improving my development skills."
            floatingItems={[
              {
                label: "🤖 BS AI @ FUUAST",
                positionClass: "top-3 right-4",
                delay: 0,
              },
              {
                label: "⚡ Python, C++, TypeScript",
                positionClass: "bottom-12 left-6",
                delay: 0.3,
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
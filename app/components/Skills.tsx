"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HudFrame from "./HudFrame";

type Skill = {
  name: string;
  level: number; // 0-100
};

const skills: Skill[] = [
  { name: "Adobe Illustrator", level: 90 },
  { name: "Photoshop", level: 85 },
  { name: "UI/UX Design", level: 85 },
  { name: "Figma / Canva", level: 88 },
  { name: "Python", level: 70 },
  { name: "C++", level: 65 },
  { name: "TypeScript", level: 60 },
  { name: "AI Concepts", level: 65 },
];

function RadialSkill({ name, level }: Skill) {
  // Hover counter taakay jab bhi mouse aaye line dobara animate ho
  const [hoverKey, setHoverKey] = useState(0);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      onMouseEnter={() => setHoverKey((prev) => prev + 1)}
      whileHover={{ scale: 1.08, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-purple-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-colors"
    >
      <HudFrame />
      <svg width="100" height="100" viewBox="0 0 100 100" className="mb-3">
        {/* Background Circle Track */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="6"
        />
        {/* Animated Fill Circle (Re-triggers on hover via key) */}
        <motion.circle
          key={hoverKey}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#a855f7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          className="fill-foreground font-bold"
          fontSize="18"
        >
          {level}%
        </text>
      </svg>
      <span className="text-muted text-sm text-center font-medium">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-16 lg:px-24 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
      >
        Skills
      </motion.h2>
      <p className="text-muted mb-12 text-center">
        Tools and technologies I work with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <RadialSkill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
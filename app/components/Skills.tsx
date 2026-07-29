"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  color: string;
  orbitColor: string;
  radius: number;
  duration: number;
  size: number;
  description: string;
  category: string;
};

const skills: Skill[] = [
  { 
    name: "Adobe Illustrator", 
    level: 90, 
    color: "#f97316", 
    orbitColor: "#f97316", 
    radius: 80, 
    duration: 18, 
    size: 40,
    category: "Graphic Design",
    description: "Expert in vector illustrations, custom typography, branding assets, and scalable vector graphics for modern UI interfaces."
  },
  { 
    name: "Photoshop", 
    level: 85, 
    color: "#38bdf8", 
    orbitColor: "#38bdf8", 
    radius: 125, 
    duration: 22, 
    size: 36,
    category: "Visual Arts",
    description: "Advanced photo manipulation, digital painting, texture creation, and high-fidelity asset preparation for web and print."
  },
  { 
    name: "UI/UX Design", 
    level: 85, 
    color: "#a855f7", 
    orbitColor: "#a855f7", 
    radius: 170, 
    duration: 26, 
    size: 36,
    category: "Product Design",
    description: "Designing intuitive user flows, wireframes, modern dashboard interfaces, and interactive prototypes with stellar user experience."
  },
  { 
    name: "Figma / Canva", 
    level: 88, 
    color: "#ec4899", 
    orbitColor: "#ec4899", 
    radius: 215, 
    duration: 30, 
    size: 38,
    category: "Collaboration Tools",
    description: "Rapid component-based design systems, auto-layout mastery, interactive prototyping, and collaborative workspace management."
  },
  { 
    name: "Python", 
    level: 70, 
    color: "#eab308", 
    orbitColor: "#eab308", 
    radius: 260, 
    duration: 34, 
    size: 34,
    category: "Programming",
    description: "Backend scripting, data analysis workflows, automation scripts, and integration with machine learning model architectures."
  },
  { 
    name: "C++", 
    level: 65, 
    color: "#6366f1", 
    orbitColor: "#6366f1", 
    radius: 305, 
    duration: 38, 
    size: 32,
    category: "Core Engineering",
    description: "Object-oriented programming principles, algorithmic problem solving, and performance-critical system development."
  },
  { 
    name: "TypeScript", 
    level: 60, 
    color: "#06b6d4", 
    orbitColor: "#06b6d4", 
    radius: 350, 
    duration: 42, 
    size: 30,
    category: "Web Development",
    description: "Type-safe modern web applications using React, Next.js, component architecture, and robust state management."
  },
  { 
    name: "AI Concepts", 
    level: 65, 
    color: "#10b981", 
    orbitColor: "#8b5cf6", 
    radius: 395, 
    duration: 46, 
    size: 32,
    category: "Artificial Intelligence",
    description: "Understanding neural networks, machine learning paradigms, prompt engineering, and modern AI integration models."
  },
];

const coreSkill: Skill = {
  name: "Core Hub (AI & Design)",
  level: 100,
  color: "#f59e0b",
  orbitColor: "#f59e0b",
  radius: 0,
  duration: 0,
  size: 80,
  category: "Master Hub",
  description: "Central core linking creative graphic design expertise with advanced artificial intelligence concepts."
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="skills" className="relative px-6 md:px-12 lg:px-20 py-28 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center z-20 relative"
      >
        Skills Universe
      </motion.h2>
      <p className="text-muted mb-12 text-center z-20 relative">
        {!isMobile ? "Hover over any orbiting planet to inspect detailed proficiency metrics on the left panel." : "Tap any skill badge below to inspect detailed proficiency metrics."}
      </p>

      {/* Main Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        
        {/* Left Side: Info Card Panel */}
        <div className="lg:col-span-4 z-30 flex justify-center lg:justify-start order-2 lg:order-1">
          <AnimatePresence mode="wait">
            {activeSkill ? (
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-card/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 w-full max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md"
                    style={{ backgroundColor: activeSkill.color }}
                  >
                    {activeSkill.level}%
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted block font-semibold">
                      {activeSkill.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                <p className="text-muted text-xs leading-relaxed mb-5">
                  {activeSkill.description}
                </p>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-muted">Proficiency</span>
                    <span className="text-foreground">{activeSkill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: activeSkill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-sm text-center shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 mx-auto mb-3 flex items-center justify-center text-muted">
                  🪐
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Explore Planets</h4>
                <p className="text-muted text-xs">
                  {!isMobile ? "Hover your mouse over any orbiting sphere" : "Tap any skill badge"} to inspect skill insights.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Dynamic Viewport Switcher */}
        <div className="lg:col-span-8 relative w-full flex items-center justify-center order-1 lg:order-2">
          
          {isMobile ? (
            /* MOBILE STATIC VIEW */
            <div className="w-full py-2">
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                <div 
                  onClick={() => setActiveSkill(coreSkill)}
                  className="col-span-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-3 text-center cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    CORE
                  </div>
                  <span className="text-xs font-bold text-foreground">Core Hub (AI & Design)</span>
                </div>

                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-all hover:border-white/30"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-md mb-2"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${skill.color}, #111 85%)`,
                        boxShadow: `0 0 10px ${skill.color}aa`,
                      }}
                    >
                      {skill.level}%
                    </div>
                    <span className="text-[11px] font-semibold text-foreground line-clamp-1">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* PC FRAMER MOTION ORBIT ANIMATION VIEW */
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
              
              {/* Central Sun / Core Hub with Hover Event */}
              <div className="absolute z-20 flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setActiveSkill(coreSkill)}
                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-background font-bold shadow-lg cursor-pointer z-20"
                >
                  <span className="text-[11px] uppercase tracking-widest text-white font-extrabold">
                    CORE
                  </span>
                </motion.div>
              </div>

              {/* Orbit Rings Container */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {skills.map((skill) => {
                  return (
                    <div key={skill.name} className="absolute pointer-events-none">
                      {/* Circular Orbit Ring Track */}
                      <div
                        className="absolute rounded-full border-[1.5px] opacity-25 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          borderColor: skill.orbitColor,
                          width: `${skill.radius * 2}px`,
                          height: `${skill.radius * 2}px`,
                        }}
                      />

                      {/* Framer Motion Rotation Wrapper */}
                      <motion.div
                        className="absolute top-0 left-0"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: skill.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            transform: `translate(${skill.radius}px)`,
                          }}
                        >
                          {/* Counter-Rotation to keep Planet Spheres Clean and Upright */}
                          <motion.div
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: skill.duration,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <div className="flex flex-col items-center pointer-events-auto">
                              <motion.div
                                whileHover={{ scale: 1.25 }}
                                onMouseEnter={() => setActiveSkill(skill)}
                                className="rounded-full cursor-pointer flex items-center justify-center font-bold text-[10px] text-white shadow-md transition-transform z-10"
                                style={{
                                  width: `${skill.size}px`,
                                  height: `${skill.size}px`,
                                  background: `radial-gradient(circle at 30% 30%, ${skill.color}, #111 85%)`,
                                  boxShadow: `0 0 12px ${skill.color}aa`,
                                }}
                              >
                                <span className="drop-shadow-sm">{skill.level}%</span>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
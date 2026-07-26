"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  // Sequence Steps:
  // 0: Boy drops from Top-Left to Ground Line
  // 1: Tries pushing line -> GETS DRAGGED WITH FRICTION & SPARKS
  // 2: Relieved, runs along ground to pre-existing Ladder & 'D'
  // 3: Unfolds pre-existing ladder on line & stands it upright
  // 4: Picks pre-existing 'D' & climbs ladder
  // 5: Fixes 'D' onto "UMER MAJEE" -> NEON LIGHTS FLICKER & TURN ON!
  // 6: Tips over & Heavy Fall back to Ground Line!
  // 7: Sits up at Bottom-Right floor, wipes sweat + "شکر الحمد لله"
  const [step, setStep] = useState(0);

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  useEffect(() => {
    // Orchestrated Choreography Timings
    const t1 = setTimeout(() => setStep(1), 1200); // Push line & get DRAGGED
    const t2 = setTimeout(() => setStep(2), 2700); // Stop dragging, run along ground
    const t3 = setTimeout(() => setStep(3), 4100); // Unfold ladder
    const t4 = setTimeout(() => setStep(4), 5500); // Pick 'D' & climb
    const t5 = setTimeout(() => setStep(5), 6900); // Attach 'D' & Light Up Name
    const t6 = setTimeout(() => setStep(6), 8000); // Hard Fall back to baseline
    const t7 = setTimeout(() => setStep(7), 9000); // Sit up & Shukar Alhumdulillah

    // Progress Bar Sync (~9.5s)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 90);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearInterval(timer);
    };
  }, []);

  // Precise SVG Stage Coordinates
  const boyCoordinates: Variants = {
    0: { x: 80, y: 275, rotate: 0 },
    1: {
      x: [90, 160],
      y: [275, 273, 276, 273, 275], // Friction jitter
      rotate: [-15, -32],           // Lean-back against force
      transition: {
        x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
        y: { repeat: Infinity, duration: 0.12, ease: "linear" },
        rotate: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      },
    },
    2: { x: 500, y: 275, rotate: 0 },
    3: { x: 540, y: 275, rotate: -10 },
    4: { x: 575, y: 170, rotate: 0 },
    5: { x: 575, y: 165, rotate: 18 },
    6: { x: 690, y: 275, rotate: 90 },
    7: { x: 670, y: 270, rotate: 10 },
  };

  const ladderCoordinates: Variants = {
    0: { opacity: 1, rotate: 90, x: 570, y: 325, scaleY: 0.5 },
    1: { opacity: 1, rotate: 90, x: 570, y: 325, scaleY: 0.5 },
    2: { opacity: 1, rotate: 90, x: 570, y: 325, scaleY: 0.5 },
    3: { opacity: 1, rotate: 0, x: 585, y: 200, scaleY: 1 },
    4: { opacity: 1, rotate: 0, x: 585, y: 200, scaleY: 1 },
    5: { opacity: 1, rotate: 0, x: 585, y: 200, scaleY: 1 },
    6: { opacity: 1, rotate: 15, x: 600, y: 205, scaleY: 1 },
    7: { opacity: 1, rotate: 15, x: 600, y: 205, scaleY: 1 },
  };

  const letterDCoordinates: Variants = {
    0: { x: 520, y: 310, rotate: 75 },
    1: { x: 520, y: 310, rotate: 75 },
    2: { x: 520, y: 310, rotate: 75 },
    3: { x: 520, y: 310, rotate: 75 },
    4: { x: 580, y: 180, rotate: 0 },
  };

  const sparkVariants: Variants = {
    1: {
      opacity: [0.3, 1, 0.4, 1, 0.3],
      scale: [0.9, 1.4, 0.8, 1.5, 0.9],
      x: [115, 185],
      transition: {
        x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
        opacity: { repeat: Infinity, duration: 0.08, ease: "linear" },
        scale: { repeat: Infinity, duration: 0.1, ease: "linear" },
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: smoothEase } }}
          className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col justify-between p-4 sm:p-8 font-mono select-none text-zinc-300 overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,7,100,0.18)_0%,transparent_70%)] pointer-events-none" />

          {/* TOP BAR */}
          <div className="relative z-10 flex justify-between items-center text-xs tracking-widest text-purple-300/60 border-b border-purple-900/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span>SYSTEM.INIT</span>
            </div>
            <span>PORTFOLIO_2026</span>
          </div>

          {/* MAIN UNIFIED SVG STAGE */}
          <div className="relative z-10 w-full max-w-4xl mx-auto my-auto flex items-center justify-center">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto max-h-[75vh] overflow-visible"
            >
              {/* CENTER NAME TEXT WITH NEON FLICKER ON STEP 5 */}
              <motion.text
                x="400"
                y="180"
                textAnchor="middle"
                className="font-black text-4xl sm:text-5xl tracking-[0.2em]"
                style={{ fontStyle: "normal" }}
                animate={
                  step >= 5
                    ? {
                        fill: "#e4e4e7", // Light zinc when ON
                        opacity: [0.2, 1, 0.4, 1, 0.7, 1], // Realistic neon flicker
                        filter: [
                          "drop-shadow(0 0 0px transparent)",
                          "drop-shadow(0 0 10px #c084fc)",
                          "drop-shadow(0 0 20px #a855f7)",
                        ],
                      }
                    : {
                        fill: "#27272a", // Dark zinc (OFF State)
                        opacity: 0.6,
                        filter: "drop-shadow(0 0 0px transparent)",
                      }
                }
                transition={{
                  duration: step >= 5 ? 0.9 : 0.2,
                  ease: "easeOut",
                  opacity: { times: [0, 0.05, 0.1, 0.2, 0.4, 1], duration: 0.9 },
                }}
              >
                UMER MAJEE
              </motion.text>

              {/* ATTACHED LETTER 'D' (FLICKERS & LIGHTS UP TOGETHER WITH NAME) */}
              {step >= 5 && (
                <motion.text
                  initial={{ opacity: 0, scale: 1.8 }}
                  animate={{
                    opacity: [0.2, 1, 0.4, 1, 0.7, 1],
                    scale: 1,
                    filter: [
                      "drop-shadow(0 0 10px #c084fc)",
                      "drop-shadow(0 0 20px #a855f7)",
                    ],
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { times: [0, 0.05, 0.1, 0.2, 0.4, 1], duration: 0.9 },
                  }}
                  x="595"
                  y="180"
                  className="fill-purple-400 font-black text-4xl sm:text-5xl"
                >
                  D
                </motion.text>
              )}

              {/* LADDER */}
              <motion.g
                variants={ladderCoordinates}
                animate={`${step}`}
                transition={{ type: "spring", stiffness: 90, damping: 16, mass: 1 }}
              >
                <line x1="0" y1="0" x2="0" y2="140" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
                <line x1="30" y1="0" x2="30" y2="140" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="25" x2="30" y2="25" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="0" y1="55" x2="30" y2="55" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="0" y1="85" x2="30" y2="85" stroke="#c084fc" strokeWidth="1.8" />
                <line x1="0" y1="115" x2="30" y2="115" stroke="#c084fc" strokeWidth="1.8" />
              </motion.g>

              {/* UNATTACHED LETTER 'D' (BEFORE STEP 5) */}
              {step < 5 && (
                <motion.text
                  variants={letterDCoordinates}
                  animate={`${step}`}
                  transition={{ duration: 0.65, ease: smoothEase }}
                  className="fill-purple-400 font-black text-3xl"
                >
                  D
                </motion.text>
              )}

              {/* SPARKS ON GROUND/HANDS (DRAGGING EFFECT) */}
              <motion.path
                variants={sparkVariants}
                animate={step === 1 ? '1' : 'hidden'}
                d="M 140 322 L 145 332 L 157 329 L 148 337 L 155 347 L 142 339 L 132 348 L 138 336 L 126 330 L 139 331 Z"
                className="fill-amber-300 stroke-amber-400 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)]"
              />

              {/* BOY CHARACTER */}
              <motion.g
                initial={{ x: 30, y: 50, rotate: -20 }}
                variants={boyCoordinates}
                animate={`${step}`}
                transition={
                  step === 0
                    ? { type: "spring", stiffness: 80, damping: 12, mass: 1.4, delay: 0.1 }
                    : step === 6
                    ? { type: "spring", stiffness: 220, damping: 18 }
                    : { duration: 0.7, ease: smoothEase }
                }
              >
                {/* HEAD */}
                <circle cx="25" cy="14" r="8.5" stroke="#e4e4e7" strokeWidth="1.8" className="fill-purple-950/80" />

                {/* DYNAMIC FACIAL EXPRESSIONS */}
                {step === 0 && (
                  <g>
                    <circle cx="22" cy="12" r="1.1" className="fill-purple-200" />
                    <circle cx="28" cy="12" r="1.1" className="fill-purple-200" />
                    <line x1="22" y1="17" x2="28" y2="17" stroke="#e9d5ff" strokeWidth="1.2" />
                  </g>
                )}

                {step === 1 && (
                  <g>
                    <path d="M 19 9 L 24 13 M 31 9 L 26 13" stroke="#fcd34d" strokeWidth="1.4" />
                    <rect x="21" y="15" width="8" height="3.5" rx="0.5" stroke="#e9d5ff" strokeWidth="1" className="fill-amber-400/40" />
                    <line x1="25" y1="15" x2="25" y2="18.5" stroke="#e9d5ff" strokeWidth="0.8" />
                  </g>
                )}

                {(step === 2 || step === 3 || step === 4) && (
                  <g>
                    <path d="M 20 10 L 23 11 M 30 10 L 27 11" stroke="#e9d5ff" strokeWidth="1.2" />
                    <circle cx="22" cy="13" r="1" className="fill-purple-200" />
                    <circle cx="28" cy="13" r="1" className="fill-purple-200" />
                    <line x1="22" y1="17" x2="28" y2="16.5" stroke="#e9d5ff" strokeWidth="1.2" />
                  </g>
                )}

                {(step === 5 || step === 6) && (
                  <g>
                    <circle cx="21" cy="11" r="1.5" stroke="#e9d5ff" strokeWidth="1" className="fill-none" />
                    <circle cx="29" cy="11" r="1.5" stroke="#e9d5ff" strokeWidth="1" className="fill-none" />
                    <circle cx="25" cy="17" r="2.8" stroke="#e9d5ff" strokeWidth="1.2" className="fill-purple-900" />
                  </g>
                )}

                {step === 7 && (
                  <g>
                    <path d="M 20 13 Q 22 10 24 13" stroke="#e9d5ff" strokeWidth="1.4" strokeLinecap="round" className="fill-none" />
                    <path d="M 26 13 Q 28 10 30 13" stroke="#e9d5ff" strokeWidth="1.4" strokeLinecap="round" className="fill-none" />
                    <path d="M 22 16 Q 25 19 28 16" stroke="#e9d5ff" strokeWidth="1.4" strokeLinecap="round" className="fill-none" />
                    <path d="M 32 8 Q 34 10 32 12 Q 30 10 32 8" className="fill-cyan-300 stroke-none" />
                  </g>
                )}

                {/* BODY */}
                <path d="M 25 23 L 25 46" stroke="#d8b4fe" strokeWidth="1.8" strokeLinecap="round" />

                {/* ARMS */}
                <motion.path
                  animate={{
                    d:
                      step === 1
                        ? "M 25 27 L 46 28 M 25 31 L 48 34"
                        : step === 3
                        ? "M 25 27 L 38 38 M 25 27 L 14 36"
                        : step === 4
                        ? "M 25 27 L 10 16 M 25 27 L 40 16"
                        : step === 5
                        ? "M 25 27 L 12 12 M 25 27 L 38 12"
                        : step === 6
                        ? "M 25 27 L 4 12 M 25 27 L 46 10"
                        : step === 7
                        ? "M 25 27 L 18 12 M 25 27 L 36 34"
                        : "M 25 27 L 12 34 M 25 27 L 38 24",
                  }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  stroke="#d8b4fe"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* LEGS */}
                <motion.path
                  animate={{
                    d:
                      step === 1
                        ? "M 25 44 L 40 62 M 25 44 L 10 58"
                        : step === 4
                        ? "M 25 44 L 14 56 M 25 44 L 36 64"
                        : step === 6
                        ? "M 25 44 L 4 60 M 25 44 L 46 56"
                        : step === 7
                        ? "M 25 44 L 8 62 M 25 44 L 40 62"
                        : "M 25 44 L 16 64 M 25 44 L 34 64",
                  }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  stroke="#e4e4e7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </motion.g>

              {/* 💭 THOUGHT BUBBLE "شکر الحمد لله" */}
              {step === 7 && (
                <g>
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  >
                    <rect x="580" y="210" width="115" height="30" rx="12" fill="#2e1065" stroke="#a855f7" strokeWidth="1" />
                    <text x="637" y="230" textAnchor="middle" fill="#e9d5ff" fontSize="13" fontWeight="bold" fontFamily="serif">
                      شکر الحمد لله
                    </text>
                    <circle cx="675" cy="245" r="3" fill="#2e1065" stroke="#a855f7" strokeWidth="0.8" />
                    <circle cx="680" cy="252" r="1.5" fill="#2e1065" stroke="#a855f7" strokeWidth="0.8" />
                  </motion.g>
                </g>
              )}

              {/* SUBTITLE */}
              <text x="400" y="225" textAnchor="middle" className="fill-purple-300/70 text-xs tracking-[0.35em] uppercase font-medium mb-1">
                Dev &amp; Visual Architect
              </text>

              {/* BASE GROUND LINE PROGRESS TRACK (Y = 340) */}
              <line x1="50" y1="340" x2="750" y2="340" stroke="#3b0764" strokeWidth="3" strokeLinecap="round" />
              
              {/* ANIMATED PROGRESS FILL LINE */}
              <motion.line
                x1="50"
                y1="340"
                animate={{ x2: 50 + (700 * progress) / 100 }}
                transition={{ duration: 0.1, ease: "linear" }}
                y2="340"
                stroke="#a855f7"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* BOTTOM STATUS BAR */}
          <div className="relative z-10 flex justify-between items-center text-xs font-semibold tracking-widest text-purple-300/60 px-2">
            <span className="opacity-80">
              {step === 0 && "ENTERING FROM TOP-LEFT..."}
              {step === 1 && "PUSHING LINE! (GETTING DRAGGED, SPARKS FLYING)"}
              {step === 2 && "LINE UNSTOPPABLE! RETURNING TO BASE..."}
              {step === 3 && "UNFOLDING MOJOOD LADDER ON BOTTOM LINE..."}
              {step === 4 && "CLIMBING MOJOOD LADDER WITH LETTER 'D'..."}
              {step === 5 && "NAME COMPLETE & LIGHTS ON!"}
              {step === 6 && "WHOOPS! FALLING TO BOTTOM-RIGHT LINE!"}
              {step === 7 && "ALL SET! LAUNCHING PORTFOLIO..."}
            </span>
            <span className="text-zinc-300 text-sm font-bold">{progress}%</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
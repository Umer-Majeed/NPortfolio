"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import MagneticButton from "./MagneticButton";
import NeuralSphere from "./NeuralSphere";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Left: Text */}
        <div className="flex flex-col items-start order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-light font-medium mb-4 tracking-wide"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            <GlitchText text="Umer Majeed." />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-3xl font-bold text-muted mb-6"
          >
            Designer. Developer. AI Student.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-muted max-w-xl text-base md:text-lg mb-8"
          >
            I&ap  os;m a Graphic Designer &amp; UI/UX Designer who also codes in
            C++, Python, and TypeScript. Currently pursuing a BS in
            Artificial Intelligence at FUUAST, I bring together visual
            design and technical development to build meaningful digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton
              href="#projects"
              className="inline-block border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors"
            >
              View My Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: 3D Neural Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 md:order-2 h-[350px] md:h-[500px]"
        >
          <NeuralSphere />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
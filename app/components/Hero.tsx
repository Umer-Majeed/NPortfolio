"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
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
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
      >
        Umer Majeed.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted mb-6"
      >
        Designer. Developer. AI Student.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="text-muted max-w-xl text-base md:text-lg mb-8"
      >
        I&apos;m a Graphic Designer &amp; UI/UX Designer who also codes in
        C++, Python, and TypeScript. Currently pursuing a BS in Artificial
        Intelligence at FUUAST, I bring together visual design and
        technical development to build meaningful digital experiences.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#projects"
        className="border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors"
      >
        View My Work
      </motion.a>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import HudFrame from "./HudFrame";

export default function GithubActivity() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
      >
        GitHub Activity
      </motion.h2>
      <p className="text-muted mb-12 text-center">
        Live coding activity, straight from GitHub.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative bg-card/40 backdrop-blur-sm border border-white/5 p-6 md:p-10 overflow-hidden"
      >
        <HudFrame />
        
        {/* Scrollable Container for Chart only - HudFrame will stay fixed */}
        <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/a855f7/Umer-Majeed"
            alt="Umer Majeed's GitHub contribution chart"
            className="w-full min-w-[600px] block"
          />
        </div>
      </motion.div>

      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/Umer-Majeed/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-light hover:underline text-sm"
        >
          View full profile on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}
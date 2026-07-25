"use client";

import { motion } from "framer-motion";
import HudFrame from "./HudFrame";

const placeholders = [1, 2, 3, 4];

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 md:px-16 lg:px-24 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center"
      >
        Design Work
      </motion.h2>
      <p className="text-muted mb-12 text-center">
        Graphic design &amp; visual identity projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {placeholders.map((n) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: n * 0.1 }}
            className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 via-card to-background border border-white/5 flex items-center justify-center group"
          >
            <HudFrame />
            <span className="text-muted text-sm group-hover:text-accent-light transition-colors">
              Coming Soon
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.behance.net/gallery/208715523/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors"
        >
          View Full Portfolio on Behance &rarr;
        </a>
      </div>
    </section>
  );
}
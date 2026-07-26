"use client";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";
import HudFrame from "./HudFrame";

const works = [
  { src: "/work-1.jpg", alt: "Social media & education design work" },
  { src: "/work-2.jpg", alt: "Real estate & product design work" },
  { src: "/work-3.jpg", alt: "Food & podcast promotional design work" },
  { src: "/work-4.jpg", alt: "Thumbnails & social media campaign work" },
];

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
        {works.map((work, i) => (
          <motion.a
            key={work.src}
            href="https://www.behance.net/gallery/208715523/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-[3/4] overflow-hidden border border-white/5 group block"
          >
            <HudFrame />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={work.src}
              alt={work.alt}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-light font-medium tracking-wide">
                View on Behance
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="flex justify-center">
        <MagneticButton
          href="https://www.behance.net/gallery/208715523/Portfolio"
          className="inline-block border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors"
        >
          View Full Portfolio on Behance →
        </MagneticButton>
      </div>
    </section>
  );
}
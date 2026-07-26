"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#gallery" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);

      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-4 flex justify-between items-center transition-colors duration-300 ${
            scrolled
              ? "bg-background/70 backdrop-blur-md border-b border-white/5"
              : ""
          }`}
        >
          <a href="#" className="relative flex items-center group">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Umer Majeed logo"
              className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
          </a>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-muted text-sm hover:text-accent-light transition-colors group py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
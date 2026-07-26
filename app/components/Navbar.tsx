"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#gallery" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-5 flex justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <a href="#" className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Umer Majeed logo"
          className="h-9 w-9 object-contain"
        />
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
          
            key={link.label}
            href={link.href}
            className="text-muted text-sm hover:text-accent-light transition-colors"
          >
            {link.label}

          </a>
        ))}
      </div>
    </motion.nav>
  );
}
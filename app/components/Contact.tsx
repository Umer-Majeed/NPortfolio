"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Umer-Majeed/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mrumarmajeed/",
    icon: FaLinkedin,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/umarmajeed3",
    icon: ExternalLink,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-16 lg:px-24 py-32 flex flex-col items-center text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-accent-light tracking-widest uppercase text-sm mb-4"
      >
        What&apos;s Next?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
      >
        Let&apos;s Build Something
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted max-w-md mb-10"
      >
        Open to design collaborations, dev projects, or just a chat about AI.
        Reach out — I usually reply fast.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <MagneticButton
          href="mailto:contact2mrumer@gmail.com"
          className="inline-flex items-center gap-2 border border-accent text-accent-light px-8 py-4 rounded-md hover:bg-accent hover:text-background transition-colors text-lg mb-14"
        >
          <Mail size={20} />
          Say Hello
        </MagneticButton>
      </motion.div>

      <div className="flex gap-6">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <MagneticButton
              key={social.name}
              href={social.href}
              className="flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-card/40 backdrop-blur-sm text-muted hover:text-accent-light hover:border-accent/60 transition-colors"
            >
              <Icon size={22} />
            </MagneticButton>
          );
        })}
      </div>

      <p className="text-muted/50 text-xs mt-16">
        © 2026 Umer Majeed. All rights reserved.
      </p>
    </section>
  );
}
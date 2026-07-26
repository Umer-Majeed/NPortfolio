"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
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

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  }

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

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-md flex flex-col gap-4 mb-14 text-left"
      >
        <div>
          <label className="text-muted text-xs tracking-wide uppercase mb-1 block">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full bg-card/40 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-muted text-xs tracking-wide uppercase mb-1 block">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full bg-card/40 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-muted text-xs tracking-wide uppercase mb-1 block">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full bg-card/40 backdrop-blur-sm border border-white/10 rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
          className="inline-flex items-center justify-center gap-2 border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors text-sm font-medium disabled:opacity-60"
        >
          {status === "sending" && (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending...
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 size={16} /> Message Sent!
            </>
          )}
          {status === "error" && (
            <>
              <XCircle size={16} /> Failed — Try Again
            </>
          )}
          {status === "idle" && (
            <>
              <Send size={16} /> Send Message
            </>
          )}
        </motion.button>
      </motion.form>

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
        © 2026 Umer Majeed. Built with Next.js, Tailwind &amp; Three.js.
      </p>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function GlitchText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * text.length);

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(newText);

      if (frame >= totalFrames) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
}
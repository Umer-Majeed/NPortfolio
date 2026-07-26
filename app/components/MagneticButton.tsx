"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button"> & HTMLMotionProps<"a">, "ref"> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function MagneticButton({
  href,
  children,
  className,
  disabled,
  onClick,
  type,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const { x, y } = pos;

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        className={className}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
"use client";

import { motion } from "framer-motion";

interface AnimatedTagProps {
  text: string;
  color?: string;
  rotation: number;
  delay?: number;
  x?: number;
  y?: number;
}

export function AnimatedTag({
  text,
  rotation,
  delay = 0,
  x = 0,
  y = 0,
}: AnimatedTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotation,
        x,
        y,
      }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        rotate: rotation + 3,
        transition: { duration: 0.2 },
      }}
      className="inline-block px-4 py-2 rounded-full font-medium text-xs text-foreground bg-secondary border border-border cursor-default"
    >
      {text}
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface MotionCardAnimationProps {
  children: ReactNode;
  index?: number;
}

export default function Card({
  children,
  index = 0,
}: MotionCardAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

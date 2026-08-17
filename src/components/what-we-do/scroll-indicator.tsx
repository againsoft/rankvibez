"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function ScrollIndicator({ target }: { target: string }) {
  return (
    <motion.a
      href={`#${target}`}
      aria-label="Scroll to explore"
      className="focus-ring mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-primary/50 hover:text-primary"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={20} />
    </motion.a>
  );
}

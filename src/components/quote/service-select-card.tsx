"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

export function ServiceSelectCard({
  service,
  selected,
  onToggle,
}: {
  service: Service;
  selected: boolean;
  onToggle: () => void;
}) {
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "card-surface focus-ring relative flex h-full flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-colors",
        selected ? "border-primary/60 bg-primary-soft/40" : "border-border-subtle hover:border-border-strong"
      )}
    >
      <motion.span
        initial={false}
        animate={{ opacity: selected ? 1 : 0, scale: selected ? 1 : 0.6 }}
        transition={{ duration: 0.18 }}
        className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white"
      >
        <Check size={14} />
      </motion.span>

      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
          selected ? "bg-primary text-white" : "bg-primary-soft text-primary"
        )}
      >
        <Icon size={20} />
      </div>
      <div>
        <h3 className="pr-6 text-sm font-semibold text-foreground">{service.name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{service.short}</p>
      </div>
    </motion.button>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { locations } from "@/data/locations";

const positions = [
  { x: 50, y: 50 },
  { x: 50, y: 14 },
  { x: 82, y: 30 },
  { x: 86, y: 62 },
  { x: 74, y: 82 },
  { x: 22, y: 78 },
  { x: 16, y: 34 },
];

export function GlobalVisual() {
  const tCountries = useTranslations("countries");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full border border-border-subtle"
          style={{
            inset: `${ring * 15}%`,
          }}
        />
      ))}
      <div className="glow-orb absolute inset-[28%] rounded-full opacity-70" />

      {locations.map((loc, i) => {
        const pos = positions[i % positions.length];
        const isOffice = loc.type === "office";
        return (
          <motion.div
            key={loc.country}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span
              className={
                isOffice
                  ? "h-3 w-3 rounded-full bg-primary shadow-[0_0_0_5px_rgba(226,50,63,0.22)]"
                  : "h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(255,138,61,0.2)]"
              }
            />
            <span className="mt-2 whitespace-nowrap rounded-full border border-border-subtle bg-background/80 px-2.5 py-1 text-[10px] font-medium text-foreground/90 backdrop-blur">
              {tCountries(loc.country)}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

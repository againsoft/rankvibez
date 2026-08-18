"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const nodes = [
  { x: 60, y: 70, r: 4, delay: 0 },
  { x: 220, y: 40, r: 3, delay: 0.4 },
  { x: 340, y: 120, r: 5, delay: 0.8 },
  { x: 150, y: 190, r: 3.5, delay: 1.2 },
  { x: 300, y: 240, r: 4, delay: 0.6 },
  { x: 80, y: 260, r: 3, delay: 1.6 },
  { x: 400, y: 60, r: 3, delay: 1 },
  { x: 200, y: 300, r: 4, delay: 0.2 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [3, 7],
  [4, 6],
  [2, 6],
  [4, 7],
];

export function HeroVisual() {
  const t = useTranslations("home.heroVisual");

  return (
    <div className="relative aspect-square w-full max-w-[480px]">
      <div className="glow-orb absolute inset-0 scale-125 opacity-70" />
      <div className="absolute inset-6 rounded-[36px] border border-border-strong bg-surface/60 backdrop-blur-sm">
        <div className="bg-grid-fade absolute inset-0 rounded-[36px] opacity-30" />

        <svg viewBox="0 0 460 360" className="absolute inset-0 h-full w-full" fill="none">
          <defs>
            <linearGradient id="edge-grad" x1="0" y1="0" x2="460" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e2323f" stopOpacity="0.7" />
              <stop offset="1" stopColor="#ff8a3d" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="url(#edge-grad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeInOut" }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i % 2 === 0 ? "#e2323f" : "#ff8a3d"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.4, 1] }}
              transition={{
                opacity: { duration: 0.6, delay: n.delay },
                scale: { duration: 3, repeat: Infinity, delay: n.delay, ease: "easeInOut" },
              }}
              style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
            />
          ))}
        </svg>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute left-6 top-8 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-medium text-foreground/90"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {t("aiAnalyticsLive")}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass absolute bottom-10 right-7 flex flex-col gap-1 rounded-xl px-3.5 py-2.5 text-[11px] text-foreground/90"
        >
          <span className="text-muted-2">{t("automationRate")}</span>
          <span className="font-semibold text-foreground">{t("optimized")}</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass absolute bottom-24 left-10 rounded-xl px-3 py-2 text-[11px] font-medium text-foreground/90"
        >
          {t("agentDeployed")}
        </motion.div>
      </div>
    </div>
  );
}

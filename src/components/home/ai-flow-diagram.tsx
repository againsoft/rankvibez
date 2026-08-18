"use client";

import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export function AIFlowDiagram() {
  const t = useTranslations("aiData");
  const aiFlow = t.raw("flow") as string[];

  return (
    <div className="flex flex-col items-center gap-1">
      {aiFlow.map((step, i) => (
        <Reveal key={step} delay={i * 0.1} className="flex flex-col items-center gap-1">
          <div
            className={
              i === 1
                ? "rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 to-secondary/10 px-6 py-4 text-center shadow-[0_0_40px_-8px_rgba(226,50,63,0.5)]"
                : "card-surface rounded-2xl px-6 py-4 text-center"
            }
          >
            <span className="text-sm font-semibold text-foreground">{step}</span>
          </div>
          {i < aiFlow.length - 1 && <ArrowDown size={16} className="my-1 text-muted-2" />}
        </Reveal>
      ))}
    </div>
  );
}

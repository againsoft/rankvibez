"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  { key: "goal", options: ["erp", "ecommerce", "automation", "security"] },
  { key: "stage", options: ["manual", "fragmented", "scaling"] },
] as const;

const recommendationHrefs: Record<string, string> = {
  erp: "/services/erp",
  ecommerce: "/services/ecommerce",
  automation: "/services/ai-transformation",
  security: "/services/cyber-security",
};

export function Advisor() {
  const t = useTranslations("aiAdvisor");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = questions[step];
  const done = step >= questions.length;
  const recommendationKey = done ? answers.goal : null;

  function select(value: string) {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="card-surface relative overflow-hidden rounded-3xl p-8 sm:p-10">
      <div className="glow-orb pointer-events-none absolute -top-24 right-0 h-64 w-64 opacity-40" />
      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t("name")}</p>
          <p className="text-xs text-muted-2">{t("tagline")}</p>
        </div>
      </div>

      <div className="relative mt-8">
        {!done ? (
          <div>
            <p className="text-lg font-medium text-foreground">{t(`questions.${current.key}.prompt`)}</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {current.options.map((value) => (
                <button
                  key={value}
                  onClick={() => select(value)}
                  className={cn(
                    "focus-ring rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3.5 text-left text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary-soft"
                  )}
                >
                  {t(`questions.${current.key}.options.${value}`)}
                </button>
              ))}
            </div>
          </div>
        ) : recommendationKey ? (
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-secondary">{t("recommended")}</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              {t(`recommendations.${recommendationKey}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(`recommendations.${recommendationKey}.description`)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={recommendationHrefs[recommendationKey]}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
              >
                {t("exploreThisSolution")}
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={reset}
                className="focus-ring rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/[0.05]"
              >
                {t("startOver")}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    key: "goal",
    prompt: "What does your business need most right now?",
    options: [
      { label: "A unified system to run operations", value: "erp" },
      { label: "To sell products online", value: "ecommerce" },
      { label: "To automate repetitive work", value: "automation" },
      { label: "Stronger, more secure infrastructure", value: "security" },
    ],
  },
  {
    key: "stage",
    prompt: "How would you describe your current setup?",
    options: [
      { label: "Mostly manual / spreadsheets", value: "manual" },
      { label: "Existing tools that don't talk to each other", value: "fragmented" },
      { label: "A working system that needs to scale", value: "scaling" },
    ],
  },
];

const recommendations: Record<string, { title: string; description: string; href: string }> = {
  erp: {
    title: "ERP & AI-Driven ERP",
    description: "A unified system connecting finance, HR, inventory and operations — enhanced with AI-assisted forecasting.",
    href: "/services/erp",
  },
  ecommerce: {
    title: "E-Commerce Solutions",
    description: "A custom storefront or marketplace built for performance, with integrated order and inventory management.",
    href: "/services/ecommerce",
  },
  automation: {
    title: "AI Automation & Transformation",
    description: "AI agents and workflow automation to remove repetitive manual work across your business.",
    href: "/services/ai-transformation",
  },
  security: {
    title: "Cloud Infrastructure & Cyber Security",
    description: "Scalable cloud infrastructure paired with a practical, ongoing security posture.",
    href: "/services/cyber-security",
  },
};

export function Advisor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = questions[step];
  const done = step >= questions.length;
  const recommendation = done ? recommendations[answers.goal] : null;

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
          <p className="text-sm font-semibold text-foreground">RankVibez AI Advisor</p>
          <p className="text-xs text-muted-2">Guided, rule-based — no data leaves your browser.</p>
        </div>
      </div>

      <div className="relative mt-8">
        {!done ? (
          <div>
            <p className="text-lg font-medium text-foreground">{current.prompt}</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => select(opt.value)}
                  className={cn(
                    "focus-ring rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3.5 text-left text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary-soft"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : recommendation ? (
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-secondary">Recommended</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{recommendation.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{recommendation.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={recommendation.href}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
              >
                Explore This Solution
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={reset}
                className="focus-ring rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/[0.05]"
              >
                Start Over
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

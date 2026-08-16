import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-4">
      <Container>
        <SectionHeading
          eyebrow="Enterprise Solutions"
          title="Technology Solutions Built Around Your Business"
          description="Each solution connects real business processes to a working technology system — not a generic package."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = (Icons[solution.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
            return (
              <Reveal key={solution.name} delay={i * 0.05}>
                <div className="card-surface flex h-full flex-col rounded-2xl p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-foreground">{solution.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted-2">
                    {solution.flow.map((step, idx) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-md border border-border-subtle bg-white/[0.02] px-2 py-1">{step}</span>
                        {idx < solution.flow.length - 1 && <ChevronRight size={12} />}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

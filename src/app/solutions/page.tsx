import type { Metadata } from "next";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Technology solutions built around your business — ERP, e-commerce, AI transformation, cloud, security and digital growth.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Technology Solutions Built Around Your Business"
        description="Every solution connects a real business process to a working technology system — designed to scale as the business grows."
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => {
              const Icon = (Icons[solution.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <Reveal key={solution.name} delay={i * 0.05}>
                  <div className="card-surface flex h-full flex-col rounded-2xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{solution.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted-2">
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

      <CTASection />
    </>
  );
}

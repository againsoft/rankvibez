import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { AIFlowDiagram } from "./ai-flow-diagram";
import { aiCapabilities } from "@/data/ai";
import { ArrowRight } from "lucide-react";

export function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden py-16 sm:py-20">
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      <Container className="relative">
        <SectionHeading
          eyebrow="AI-First"
          align="center"
          title="AI Is Not the Future. It's the Infrastructure of Modern Business."
          description="We integrate artificial intelligence into software, workflows, customer experiences and business operations to help organizations work smarter and scale faster."
          className="mx-auto"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aiCapabilities.map((cap, i) => {
              const Icon = (Icons[cap.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <Reveal key={cap.title} delay={i * 0.06}>
                  <div className="card-surface h-full rounded-2xl p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-foreground">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="card-surface rounded-3xl p-8">
            <AIFlowDiagram />
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/ai" variant="secondary" size="lg">
            Explore AI at RankVibez
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

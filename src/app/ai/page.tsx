import type { Metadata } from "next";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { AIFlowDiagram } from "@/components/home/ai-flow-diagram";
import { Advisor } from "@/components/ai/advisor";
import { aiCapabilities } from "@/data/ai";

export const metadata: Metadata = {
  title: "AI",
  description: "AI is the infrastructure of modern business. Explore how RankVibez integrates AI into ERP, automation, analytics and customer operations.",
};

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="AI-First"
        title="AI Is Not the Future. It's the Infrastructure of Modern Business."
        description="We integrate artificial intelligence into software, workflows, customer experiences and business operations to help organizations work smarter and scale faster."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Try It"
            title="Not sure where to start?"
            description="Answer two quick questions and the RankVibez AI Advisor will point you to the right solution."
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <Advisor />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Make AI Part of Your Business?"
        description="From AI-driven ERP to automation and analytics — let's identify the highest-leverage place to start."
        primaryLabel="Start a Conversation"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services"
      />
    </>
  );
}

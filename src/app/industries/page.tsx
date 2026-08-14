import type { Metadata } from "next";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "RankVibez builds technology for retail, e-commerce, manufacturing, healthcare, finance and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the businesses that run the real economy."
        description="RankVibez works across industries where reliable software and infrastructure directly affect day-to-day operations."
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = (Icons[industry.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Building2;
              return (
                <Reveal key={industry.slug} delay={i * 0.04}>
                  <div className="card-surface flex h-full flex-col gap-4 rounded-2xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{industry.description}</p>
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

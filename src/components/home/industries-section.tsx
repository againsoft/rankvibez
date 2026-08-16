import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="py-4">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the businesses that run the real economy."
          description="RankVibez works across industries where reliable software and infrastructure directly affect operations."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = (Icons[industry.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Building2;
            return (
              <Reveal key={industry.slug} delay={i * 0.04}>
                <div className="card-surface group flex h-full flex-col items-start gap-3 rounded-2xl p-5 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-muted transition-colors group-hover:bg-primary-soft group-hover:text-primary">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{industry.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{industry.tagline}</p>
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

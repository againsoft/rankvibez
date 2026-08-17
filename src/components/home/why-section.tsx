import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { whyRankVibez } from "@/data/why";

export function WhySection() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Why RankVibez" title="A technology partner built for the long term." />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyRankVibez.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col gap-4 rounded-2xl p-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { technologyStack, techEcosystem } from "@/data/technology";

export const metadata: Metadata = {
  title: "Technology",
  description: "The frontend, backend, cloud, DevOps and AI technologies RankVibez builds and delivers on.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="The technology stack behind every build."
        description="A modern, proven stack across frontend, backend, cloud and AI — chosen for reliability, performance and long-term maintainability."
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyStack.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{group.title}</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow="Technology Ecosystem" align="center" title="Platforms We Work With" className="mx-auto" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {techEcosystem.map((name, i) => (
              <Reveal key={name} delay={i * 0.04}>
                <div className="card-surface flex h-24 items-center justify-center rounded-2xl px-4 text-center transition-all hover:shadow-[0_0_30px_-8px_rgba(226,50,63,0.4)]">
                  <span className="text-[15px] font-semibold tracking-tight text-muted-2 grayscale transition-all hover:text-foreground hover:grayscale-0">
                    {name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

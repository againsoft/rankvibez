import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { techEcosystem } from "@/data/technology";

export function TechEcosystemSection() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 py-4">
      <Container>
        <SectionHeading
          eyebrow="Technology Ecosystem"
          align="center"
          title="Built on the World's Leading Technology Platforms"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techEcosystem.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="card-surface group flex h-24 items-center justify-center rounded-2xl px-4 text-center transition-all hover:shadow-[0_0_30px_-8px_rgba(226,50,63,0.4)]">
                <span className="text-[15px] font-semibold tracking-tight text-muted-2 grayscale transition-all group-hover:text-foreground group-hover:grayscale-0">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-2">
          Platforms and tools RankVibez builds and delivers on. Official partnership status is shown only where verified.
        </p>
      </Container>
    </section>
  );
}

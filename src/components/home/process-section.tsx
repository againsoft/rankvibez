import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { processSteps } from "@/data/why";

export function ProcessSection() {
  return (
    <section className="py-4">
      <Container>
        <SectionHeading
          eyebrow="Process"
          align="center"
          title="From Idea to Intelligent Business System"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border-strong to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          <div className="flex flex-col gap-8 sm:gap-10">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 0.06}
                className={`relative flex items-start gap-6 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:ml-0 sm:flex-row sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                }`}
              >
                <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-surface text-xs font-bold text-primary sm:absolute ${i % 2 === 0 ? "sm:-right-5" : "sm:-left-5"}`}>
                  {step.number}
                </div>
                <div className={`card-surface w-full rounded-2xl p-5 ${i % 2 === 0 ? "sm:mr-0" : ""}`}>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { PageHero } from "./page-hero";

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <section className="pb-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

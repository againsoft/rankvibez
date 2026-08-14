import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { PortfolioCard } from "@/components/shared/portfolio-card";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioSection() {
  const featured = portfolioProjects.slice(0, 3);
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Built for Businesses Around the World"
            description="A selection of projects and concept builds spanning ERP, e-commerce, AI and infrastructure."
          />
          <Button href="/portfolio" variant="secondary" className="shrink-0">
            View Full Portfolio
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

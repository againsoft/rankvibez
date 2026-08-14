import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "RankVibez portfolio and concept projects spanning ERP, e-commerce, AI, infrastructure and digital growth.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Built for Businesses Around the World"
        description="A selection of projects and concept builds spanning ERP, e-commerce, AI and infrastructure. Concept and demo work is clearly labeled."
      />

      <section className="py-14">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { CTASection } from "@/components/shared/cta-section";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Enterprise software, cloud infrastructure, cyber security, digital growth and AI transformation services from RankVibez.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services built around your business."
        description="A full-stack service architecture spanning enterprise software, infrastructure, security and digital growth — designed to work together as one system."
      />

      {serviceCategories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category);
        return (
          <section key={category} className="py-14">
            <Container>
              <SectionHeading title={category} />
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 0.05}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}

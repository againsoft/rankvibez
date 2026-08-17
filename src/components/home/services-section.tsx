import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/data/services";

const featured = ["erp", "ecommerce", "web-development", "cloud-infrastructure", "ai-transformation", "ppc-ads"];

export function ServicesSection() {
  const featuredServices = featured.map((slug) => services.find((s) => s.slug === slug)!);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Technology services built around your business."
            description="A full-stack service architecture covering enterprise software, infrastructure, security and growth."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            View All Services
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

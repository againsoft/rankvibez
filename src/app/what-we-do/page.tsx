import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/shared/cta-section";
import { LogoMark } from "@/components/layout/logo";
import { ProcessSection } from "@/components/home/process-section";
import { ScrollIndicator } from "@/components/what-we-do/scroll-indicator";
import { OverviewStrip } from "@/components/what-we-do/overview-strip";
import { ServiceSection } from "@/components/what-we-do/service-section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "A complete, scrollable overview of everything RankVibez offers — enterprise software, cloud infrastructure, cybersecurity, digital growth and AI transformation.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="relative flex min-h-[85svh] flex-col overflow-hidden pb-8 pt-20 sm:pt-28">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-50" />

        <Container className="relative flex flex-1 flex-col items-center justify-center gap-7 text-center">
          <LogoMark className="h-12 sm:h-14" />
          <Badge>What We Do</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            One Technology Partner. <span className="text-gradient-brand">Every Capability You Need.</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Enterprise software, cloud infrastructure, cybersecurity, digital growth and AI transformation — scroll
            through to see exactly what RankVibez can build for you.
          </p>
          <Button href="/quote" size="lg">
            Request a Quotation
            <ArrowRight size={16} />
          </Button>
        </Container>

        <div className="relative flex justify-center pb-2 pt-10">
          <ScrollIndicator target="overview" />
        </div>
      </section>

      <section id="overview" className="scroll-mt-24 py-14">
        <Container>
          <SectionHeading
            eyebrow="At a Glance"
            align="center"
            title="Everything we offer, in one view."
            description="Tap any service to jump straight to the details below."
            className="mx-auto"
          />
          <div className="mt-12">
            <OverviewStrip />
          </div>
        </Container>
      </section>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <ServiceSection key={service.slug} service={service} index={i} />
        ))}
      </div>

      <ProcessSection />

      <CTASection
        title="Ready to Build What's Next?"
        description="Tell us which services you need and we'll follow up with a custom quote — no pricing games, just a conversation about your project."
        primaryLabel="Request a Quotation"
        primaryHref="/quote"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}

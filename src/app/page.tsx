import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Capabilities } from "@/components/home/capabilities";
import { AISection } from "@/components/home/ai-section";
import { ServicesSection } from "@/components/home/services-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { TechEcosystemSection } from "@/components/home/tech-ecosystem-section";
import { GlobalPresenceSection } from "@/components/home/global-presence-section";
import { WhySection } from "@/components/home/why-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/shared/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Capabilities />
      <AISection />
      <ServicesSection />
      <SolutionsSection />
      <IndustriesSection />
      <PortfolioSection />
      <TechEcosystemSection />
      <GlobalPresenceSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

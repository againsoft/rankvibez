import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Capabilities } from "@/components/home/capabilities";
import { AISection } from "@/components/home/ai-section";
import { ServicesSection } from "@/components/home/services-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { GlobalPresenceSection } from "@/components/home/global-presence-section";
import { WhySection } from "@/components/home/why-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/shared/cta-section";

type Params = Promise<{ locale: string }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

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
      <GlobalPresenceSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

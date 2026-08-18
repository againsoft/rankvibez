import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
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

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("whatWeDoPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/what-we-do"),
  };
}

export default async function WhatWeDoPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("whatWeDoPage");

  return (
    <>
      <section className="relative flex min-h-[85svh] flex-col overflow-hidden pb-8 pt-20 sm:pt-28">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-50" />

        <Container className="relative flex flex-1 flex-col items-center justify-center gap-7 text-center">
          <LogoMark className="h-12 sm:h-14" />
          <Badge>{t("badge")}</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {t("titlePrefix")} <span className="text-gradient-brand">{t("titleHighlight")}</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("description")}</p>
          <Button href="/quote" size="lg">
            {t("requestQuotation")}
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
            eyebrow={t("overviewEyebrow")}
            align="center"
            title={t("overviewTitle")}
            description={t("overviewDescription")}
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
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("requestQuotation")}
        primaryHref="/quote"
        secondaryLabel={t("ctaSecondaryLabel")}
        secondaryHref="/contact"
      />
    </>
  );
}

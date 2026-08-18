import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("portfolioPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/portfolio"),
  };
}

export default async function PortfolioPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("portfolioPage");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}

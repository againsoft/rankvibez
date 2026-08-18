import type { Metadata } from "next";
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

type Params = Promise<{ locale: string }>;
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { CTASection } from "@/components/shared/cta-section";
import { services, serviceCategories } from "@/data/services";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("servicesPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/services"),
  };
}

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("servicesPage");
  const tCategory = await getTranslations("serviceCategories");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      {serviceCategories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category);
        return (
          <section key={category} className="py-14">
            <Container>
              <SectionHeading title={tCategory(category)} />
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

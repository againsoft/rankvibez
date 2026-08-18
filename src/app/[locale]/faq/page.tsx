import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";

type Params = Promise<{ locale: string }>;

const faqIds = ["whoWeWorkWith", "pricing", "process", "ongoingSupport", "aiIntegration", "location"];

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("faqPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/faq"),
  };
}

export default async function FAQPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("faqPage");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {faqIds.map((id, i) => (
              <Reveal key={id} delay={i * 0.05} className="card-surface rounded-2xl p-6">
                <h2 className="text-base font-semibold text-foreground">{t(`items.${id}.q`)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`items.${id}.a`)}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

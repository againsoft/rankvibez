import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { whyRankVibez } from "@/data/why";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("careersPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/careers"),
  };
}

export default async function CareersPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("careersPage");
  const tWhy = await getTranslations("whyData.items");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t("whyEyebrow")} title={t("whyTitle")} />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyRankVibez.slice(0, 4).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-foreground">{tWhy(`${item.id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tWhy(`${item.id}.description`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="card-surface flex flex-col items-center gap-5 rounded-3xl p-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Mail size={22} />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">{t("noOpenRolesTitle")}</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">{t("noOpenRolesDescription")}</p>
            <Button href="/contact" size="lg">
              {t("getInTouch")}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

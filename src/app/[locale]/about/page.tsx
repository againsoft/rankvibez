import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Target, Eye, Sparkles, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { OrganogramSection } from "@/components/about/organogram-section";
import { whyRankVibez } from "@/data/why";

type Params = Promise<{ locale: string }>;

const valueIds = ["clarity", "craftsmanship", "accountability", "curiosity"];

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("aboutPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/about"),
  };
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("aboutPage");
  const tWhy = await getTranslations("whyData.items");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="card-surface rounded-2xl p-8">
              <Target className="text-primary" size={22} />
              <h2 className="mt-4 text-lg font-semibold text-foreground">{t("missionTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("missionDescription")}</p>
            </Reveal>
            <Reveal delay={0.08} className="card-surface rounded-2xl p-8">
              <Eye className="text-secondary" size={22} />
              <h2 className="mt-4 text-lg font-semibold text-foreground">{t("visionTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("visionDescription")}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow={t("valuesEyebrow")} title={t("valuesTitle")} />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueIds.map((id, i) => (
              <Reveal key={id} delay={i * 0.06}>
                <div className="rounded-2xl p-2">
                  <h3 className="text-base font-semibold text-foreground">{t(`values.${id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(`values.${id}.description`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <Sparkles size={22} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t("aiPhilosophyTitle")}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{t("aiPhilosophyDescription")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-soft text-secondary">
                <Globe2 size={22} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t("globalDeliveryTitle")}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{t("globalDeliveryDescription")}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <OrganogramSection />

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow={t("whyEyebrow")} title={t("whyTitle")} />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyRankVibez.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="rounded-2xl p-2">
                  <h3 className="text-[15px] font-semibold text-foreground">{tWhy(`${item.id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tWhy(`${item.id}.description`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

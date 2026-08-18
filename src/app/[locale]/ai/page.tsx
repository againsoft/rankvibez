import type { Metadata } from "next";
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

type Params = Promise<{ locale: string }>;
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { AIFlowDiagram } from "@/components/home/ai-flow-diagram";
import { Advisor } from "@/components/ai/advisor";
import { aiCapabilities } from "@/data/ai";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("aiPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/ai"),
  };
}

export default async function AIPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("aiPage");
  const tData = await getTranslations("aiData");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {aiCapabilities.map((cap, i) => {
                const Icon = (Icons[cap.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
                return (
                  <Reveal key={cap.id} delay={i * 0.06}>
                    <div className="card-surface h-full rounded-2xl p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-[15px] font-semibold text-foreground">{tData(`capabilities.${cap.id}.title`)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{tData(`capabilities.${cap.id}.description`)}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="card-surface rounded-3xl p-8">
              <AIFlowDiagram />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading eyebrow={t("tryItEyebrow")} title={t("tryItTitle")} description={t("tryItDescription")} />
          <div className="mx-auto mt-10 max-w-2xl">
            <Advisor />
          </div>
        </Container>
      </section>

      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("ctaPrimaryLabel")}
        secondaryLabel={t("ctaSecondaryLabel")}
        secondaryHref="/services"
      />
    </>
  );
}

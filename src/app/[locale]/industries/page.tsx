import type { Metadata } from "next";
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

type Params = Promise<{ locale: string }>;
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { industries } from "@/data/industries";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("industriesPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/industries"),
  };
}

export default async function IndustriesPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("industriesPage");
  const tData = await getTranslations("industriesData");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = (Icons[industry.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Building2;
              return (
                <Reveal key={industry.slug} delay={i * 0.04}>
                  <div className="card-surface flex h-full flex-col gap-4 rounded-2xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{tData(`${industry.slug}.name`)}</h3>
                    <p className="text-sm leading-relaxed text-muted">{tData(`${industry.slug}.description`)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

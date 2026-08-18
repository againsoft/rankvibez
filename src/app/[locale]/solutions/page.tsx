import type { Metadata } from "next";
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

type Params = Promise<{ locale: string }>;
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { solutions } from "@/data/solutions";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("solutionsPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/solutions"),
  };
}

export default async function SolutionsPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("solutionsPage");
  const tData = await getTranslations("solutionsData");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => {
              const Icon = (Icons[solution.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              const flow = tData.raw(`${solution.id}.flow`) as string[];
              return (
                <Reveal key={solution.id} delay={i * 0.05}>
                  <div className="card-surface flex h-full flex-col rounded-2xl p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{tData(`${solution.id}.name`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{tData(`${solution.id}.description`)}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted-2">
                      {flow.map((step, idx) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-md border border-border-subtle bg-white/[0.02] px-2 py-1">{step}</span>
                          {idx < flow.length - 1 && <ChevronRight size={12} />}
                        </span>
                      ))}
                    </div>
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

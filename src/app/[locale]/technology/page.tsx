import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { technologyStack, techEcosystem } from "@/data/technology";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("technologyPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/technology"),
  };
}

export default async function TechnologyPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("technologyPage");
  const tGroups = await getTranslations("technologyData.groups");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyStack.map((group, i) => (
              <Reveal key={group.id} delay={i * 0.06}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{tGroups(group.id)}</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow={t("ecosystemEyebrow")} align="center" title={t("ecosystemTitle")} className="mx-auto" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {techEcosystem.map((name, i) => (
              <Reveal key={name} delay={i * 0.04}>
                <div className="card-surface flex h-24 items-center justify-center rounded-2xl px-4 text-center transition-all hover:shadow-[0_0_30px_-8px_rgba(226,50,63,0.4)]">
                  <span className="text-[15px] font-semibold tracking-tight text-muted-2 grayscale transition-all hover:text-foreground hover:grayscale-0">
                    {name}
                  </span>
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

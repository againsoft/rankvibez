import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { GlobalVisual } from "@/components/home/global-visual";
import { locations } from "@/data/locations";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("locationsPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/locations"),
  };
}

export default async function LocationsPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("locationsPage");
  const tCountries = await getTranslations("countries");
  const tLabels = await getTranslations("locationsData.labels");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locations.map((loc, i) => (
                <Reveal key={loc.country} delay={i * 0.05}>
                  <div className="card-surface flex items-center justify-between rounded-xl px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {tCountries(loc.country)}
                        {loc.city && <span className="text-muted"> · {loc.city}</span>}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-2">{tLabels(loc.labelId)}</p>
                      {loc.address && <p className="mt-1 max-w-[220px] text-xs text-muted-2">{loc.address}</p>}
                    </div>
                    <span
                      className={
                        loc.type === "office"
                          ? "h-2 w-2 shrink-0 rounded-full bg-primary"
                          : "h-2 w-2 shrink-0 rounded-full bg-secondary"
                      }
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <GlobalVisual />
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-xs text-muted-2">{t("footnote")}</p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

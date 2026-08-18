import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { portfolioProjects, getProjectBySlug } from "@/data/portfolio";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: `portfolioData.projects.${slug}` });
  return {
    title: project.name,
    description: t("summary"),
    alternates: buildAlternates(locale, `/portfolio/${slug}`),
  };
}

export default async function PortfolioDetailPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations(`portfolioData.projects.${slug}`);
  const tLabel = await getTranslations("portfolioLabels");
  const tIndustry = await getTranslations("portfolioData.industries");
  const tCountry = await getTranslations("countries");
  const tService = await getTranslations("portfolioData.services");
  const tPage = await getTranslations("portfolioDetailPage");

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40" />
        <Container className="relative">
          <Reveal>
            <Link href="/portfolio" className="focus-ring inline-flex items-center gap-1.5 rounded text-sm text-muted hover:text-foreground">
              <ArrowLeft size={14} />
              {tPage("backToPortfolio")}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>{tLabel(project.label)}</Badge>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-2">
                {tIndustry(project.industry)} · {tCountry(project.country)}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("summary")}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span key={tech} className="rounded-full border border-border-subtle bg-white/[0.02] px-3 py-1 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Reveal className="relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-primary/15 via-surface to-secondary/10">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <span className="relative text-4xl font-bold tracking-tight text-foreground/20 sm:text-6xl">{project.name}</span>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Reveal className="card-surface rounded-2xl p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{tPage("challenge")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t("challenge")}</p>
            </Reveal>
            <Reveal delay={0.08} className="card-surface rounded-2xl p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{tPage("solution")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t("solution")}</p>
            </Reveal>
            <Reveal delay={0.16} className="card-surface rounded-2xl p-7">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{tPage("outcome")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t("outcome")}</p>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-col gap-6 border-t border-border-subtle pt-10 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-2">{tPage("servicesProvided")}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted">
                    {tService(s)}
                  </span>
                ))}
              </div>
            </div>
            <Button href="/contact" size="lg" className="shrink-0">
              {tPage("startSimilarProject")}
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

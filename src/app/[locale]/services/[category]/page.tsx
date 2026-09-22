import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { ServiceCategoryCard } from "@/components/shared/service-category-card";
import { CTASection } from "@/components/shared/cta-section";
import { serviceCategories, getCategoryBySlug, getServicesByCategory, categoryPath } from "@/data/services";

type Params = Promise<{ locale: string; category: string }>;

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, category } = await params;
  if (!getCategoryBySlug(category)) return {};
  const t = await getTranslations({ locale, namespace: `serviceCategories.${category}` });
  return {
    title: t("name"),
    description: t("short"),
    alternates: buildAlternates(locale, categoryPath(category)),
  };
}

export default async function ServiceCategoryPage({ params }: { params: Params }) {
  const { locale, category: categorySlug } = await params;
  setRequestLocale(locale);

  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const t = await getTranslations(`serviceCategories.${category.slug}`);
  const tPage = await getTranslations("serviceCategoryPage");
  const tServices = await getTranslations("servicesPage");

  const categoryServices = getServicesByCategory(category.slug);
  const otherCategories = serviceCategories.filter((c) => c.slug !== category.slug).slice(0, 3);
  const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40" />
        <Container className="relative">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <Link
              href="/services"
              className="focus-ring inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              {tServices("eyebrow")}
            </Link>
            <Badge>{tPage("serviceCount", { count: categoryServices.length })}</Badge>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon size={26} />
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              {t("name")}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("description")}</p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote" size="lg">
                {tPage("requestQuote")}
                <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {tPage("talkToTeam")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{tPage("otherCategories")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <ServiceCategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

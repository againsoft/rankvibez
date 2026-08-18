import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { ServiceCard } from "@/components/shared/service-card";
import { services, getServiceBySlug } from "@/data/services";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const t = await getTranslations({ locale, namespace: `servicesData.${slug}` });
  return {
    title: t("name"),
    description: t("short"),
    alternates: buildAlternates(locale, `/services/${slug}`),
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t = await getTranslations(`servicesData.${slug}`);
  const tCategory = await getTranslations("serviceCategories");
  const tPage = await getTranslations("serviceDetailPage");
  const capabilities = t.raw("capabilities") as string[];

  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40" />
        <Container className="relative">
          <Reveal className="flex max-w-3xl flex-col gap-5">
            <Badge>{tCategory(service.category)}</Badge>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon size={26} />
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              {t("name")}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("description")}</p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                {tPage("requestConsultation")}
                <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                {tPage("viewAllServices")}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="card-surface rounded-3xl p-8">
                <h2 className="text-xl font-semibold text-foreground">{tPage("whatsIncluded")}</h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-secondary" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-surface flex h-full flex-col justify-between rounded-3xl p-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{tPage("pricing")}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tPage("pricingDescription")}</p>
                </div>
                <div className="mt-8 rounded-2xl border border-border-strong bg-white/[0.02] p-5">
                  <p className="text-sm font-semibold text-foreground">{tPage("customPricing")}</p>
                  <p className="mt-1 text-sm text-muted">{tPage("talkToExpert")}</p>
                </div>
                <Button href={`/quote?service=${service.slug}`} className="mt-6 w-full">
                  {tPage("getCustomQuote")}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{tPage("relatedServices")}</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}

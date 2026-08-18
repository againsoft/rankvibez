import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { QuoteForm } from "@/components/quote/quote-form";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("quotePage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/quote"),
  };
}

export default async function QuotePage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("quotePage");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24">
        <Container className="mx-auto max-w-4xl">
          <Reveal>
            <Suspense fallback={<div className="card-surface h-96 animate-pulse rounded-3xl" />}>
              <QuoteForm />
            </Suspense>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { LegalPage } from "@/components/shared/legal-page";

type Params = Promise<{ locale: string }>;

const sectionIds = ["whatAreCookies", "howWeUseCookies", "managingCookies", "contact"];

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("cookiePolicyPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/cookie-policy"),
  };
}

export default async function CookiePolicyPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("cookiePolicyPage");

  return (
    <LegalPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      updated={t("updated")}
      sections={sectionIds.map((id) => ({
        heading: t(`sections.${id}.heading`),
        body: t.raw(`sections.${id}.body`) as string[],
      }))}
    />
  );
}

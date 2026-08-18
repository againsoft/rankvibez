import { routing } from "@/i18n/routing";

const siteUrl = "https://www.rankvibez.com";

/**
 * Builds `alternates.canonical`/`alternates.languages` for a page, pointing
 * hreflang at the equivalent page in every locale (not just each locale's
 * homepage), per Google's hreflang guidance.
 */
export function buildAlternates(locale: string, pathSuffix: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${siteUrl}/${l}${pathSuffix}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}${pathSuffix}`;

  return {
    canonical: `${siteUrl}/${locale}${pathSuffix}`,
    languages,
  };
}

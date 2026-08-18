import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";

const siteUrl = "https://www.rankvibez.com";

const staticRoutes = [
  "",
  "/solutions",
  "/services",
  "/industries",
  "/ai",
  "/portfolio",
  "/technology",
  "/about",
  "/locations",
  "/contact",
  "/careers",
  "/faq",
  "/blog",
  "/insights",
  "/documentation",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
];

function localizedEntry(
  route: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap {
  const now = new Date();
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${siteUrl}/${locale}${route}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}${route}`;

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.flatMap((route) =>
    localizedEntry(route, route === "" ? 1 : 0.7, "weekly")
  );

  const serviceRoutes = services.flatMap((s) =>
    localizedEntry(`/services/${s.slug}`, 0.6, "monthly")
  );

  const portfolioRoutes = portfolioProjects.flatMap((p) =>
    localizedEntry(`/portfolio/${p.slug}`, 0.5, "monthly")
  );

  return [...routes, ...serviceRoutes, ...portfolioRoutes];
}

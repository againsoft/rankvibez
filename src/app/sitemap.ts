import type { MetadataRoute } from "next";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioRoutes = portfolioProjects.map((p) => ({
    url: `${siteUrl}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...serviceRoutes, ...portfolioRoutes];
}

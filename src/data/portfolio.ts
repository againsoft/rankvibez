export type PortfolioProject = {
  slug: string;
  name: string;
  label: "Concept Project" | "Internal Demo";
  industry: string;
  country: string;
  categories: string[];
  services: string[];
  technology: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
};

export const portfolioCategories = [
  "All",
  "Software",
  "ERP",
  "E-Commerce",
  "Corporate Websites",
  "AI",
  "Infrastructure",
  "Digital Growth",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "atlas-erp-concept",
    name: "Atlas ERP",
    label: "Concept Project",
    industry: "Manufacturing",
    country: "Bangladesh",
    categories: ["ERP", "Software", "AI"],
    services: ["ERP Software", "AI-Driven ERP"],
    technology: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
    summary:
      "A concept ERP system exploring how AI-assisted forecasting and unified operations could work for a mid-size manufacturer.",
    challenge:
      "Manufacturers often run finance, inventory and production on disconnected spreadsheets and legacy tools, leading to slow decisions and stock mismatches.",
    solution:
      "Designed a unified ERP data model covering finance, inventory and production planning, with an AI layer surfacing demand forecasts and stock anomalies.",
    outcome:
      "A working concept demonstrating how AI-assisted planning can reduce manual reporting effort and highlight operational risk earlier.",
  },
  {
    slug: "northline-commerce-demo",
    name: "Northline Commerce",
    label: "Internal Demo",
    industry: "Retail",
    country: "United States",
    categories: ["E-Commerce", "Software"],
    services: ["E-Commerce Solutions"],
    technology: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    summary:
      "A demo commerce platform built to explore high-volume catalog management and checkout performance patterns.",
    challenge:
      "High-SKU retail catalogs need fast filtering, accurate inventory sync and a checkout flow that holds up under traffic spikes.",
    solution:
      "Built a demo storefront with server-rendered catalog pages, optimized checkout and a synchronized inventory layer.",
    outcome:
      "Established reusable commerce architecture patterns for catalog performance and checkout reliability.",
  },
  {
    slug: "harborcloud-infrastructure-demo",
    name: "HarborCloud Infrastructure",
    label: "Internal Demo",
    industry: "Technology",
    country: "United Kingdom",
    categories: ["Infrastructure", "AI"],
    services: ["Cloud Infrastructure", "Cyber Security"],
    technology: ["AWS", "Docker", "Cloudflare", "GitHub Actions"],
    summary:
      "An internal reference architecture for scalable, secure cloud deployment and CI/CD pipelines.",
    challenge:
      "Growing teams need infrastructure that scales safely without manual deployment risk or inconsistent environments.",
    solution:
      "Designed an infrastructure-as-code reference stack with automated CI/CD, monitoring and hardened access control.",
    outcome:
      "A reusable infrastructure blueprint for reliable, auditable deployments across environments.",
  },
  {
    slug: "meridian-corporate-concept",
    name: "Meridian Corporate Platform",
    label: "Concept Project",
    industry: "Professional Services",
    country: "Canada",
    categories: ["Corporate Websites", "Software"],
    services: ["Company Website"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "A concept corporate web platform exploring modern content architecture for professional services firms.",
    challenge:
      "Professional services firms need credible, fast, content-rich websites that are easy to maintain without a heavy CMS.",
    solution:
      "Designed a component-driven, data-driven corporate site architecture ready for lightweight CMS integration.",
    outcome:
      "A flexible corporate site pattern that balances editorial flexibility with front-end performance.",
  },
  {
    slug: "vantage-ai-advisor-concept",
    name: "Vantage AI Advisor",
    label: "Concept Project",
    industry: "Finance",
    country: "UAE",
    categories: ["AI", "Software"],
    services: ["AI-Driven Company", "AI Automation"],
    technology: ["Next.js", "LLM APIs", "FastAPI", "PostgreSQL"],
    summary:
      "A concept AI advisory assistant exploring how conversational AI could guide business users toward the right internal workflows.",
    challenge:
      "Business users often don't know which internal tool or workflow applies to a task, creating friction and support overhead.",
    solution:
      "Prototyped a server-side AI advisor that interprets natural-language requests and routes users to the right workflow or resource.",
    outcome:
      "Validated an architecture pattern for keeping AI API keys server-side while delivering a responsive advisory experience.",
  },
  {
    slug: "growthline-marketing-demo",
    name: "GrowthLine Campaign System",
    label: "Internal Demo",
    industry: "E-Commerce",
    country: "Australia",
    categories: ["Digital Growth", "E-Commerce"],
    services: ["Digital Marketing", "SEO", "Ads Campaign"],
    technology: ["Next.js", "Google Analytics", "Google Ads", "Meta Ads"],
    summary:
      "An internal demo exploring a unified reporting layer across SEO, ads and conversion analytics for an online retailer.",
    challenge:
      "Growth teams often track SEO, paid ads and conversion data in separate dashboards, making funnel-wide decisions slow.",
    solution:
      "Built a demo reporting layer consolidating organic, paid and on-site conversion signals into one funnel view.",
    outcome:
      "Demonstrated a practical pattern for connecting acquisition and conversion data for faster growth decisions.",
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

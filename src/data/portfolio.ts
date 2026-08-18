export type PortfolioProject = {
  slug: string;
  name: string;
  label: "Concept Project" | "Internal Demo";
  industry: string;
  country: string;
  categories: string[];
  services: string[];
  technology: string[];
  liveUrl?: string;
  image?: string;
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
    slug: "again-erp-concept",
    name: "AgainERP",
    label: "Concept Project",
    industry: "Manufacturing",
    country: "Bangladesh",
    categories: ["ERP", "Software", "AI"],
    services: ["ERP Software", "AI-Driven ERP"],
    technology: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
    image: "/featured-work/again-erp.png",
  },
  {
    slug: "againcart-ecommerce",
    name: "Againcart",
    label: "Internal Demo",
    industry: "Retail",
    country: "United States",
    categories: ["E-Commerce", "Software"],
    services: ["E-Commerce Solutions"],
    technology: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "/featured-work/againcart.png",
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
    image: "/featured-work/harborcloud.png",
  },
  {
    slug: "meridian-corporate-concept",
    name: "Meridian Corporate Platform",
    label: "Concept Project",
    industry: "Professional Services",
    country: "Canada",
    categories: ["Corporate Websites", "Software"],
    services: ["Web Development"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
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
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

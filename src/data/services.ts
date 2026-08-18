export type Service = {
  slug: string;
  category: "Enterprise Software" | "Cloud & Infrastructure" | "Cyber Security" | "Digital Growth" | "AI & Business Transformation";
  icon: string;
  image?: string;
};

export const services: Service[] = [
  { slug: "erp", category: "Enterprise Software", icon: "LayoutGrid", image: "/service/again-erp.png" },
  { slug: "ai-erp", category: "Enterprise Software", icon: "BrainCircuit", image: "/service/ai-driven.png" },
  { slug: "ecommerce", category: "Enterprise Software", icon: "ShoppingCart", image: "/service/ecommerce-solution.png" },
  { slug: "web-development", category: "Enterprise Software", icon: "Globe", image: "/service/web-development.png" },
  { slug: "server-maintenance", category: "Cloud & Infrastructure", icon: "Server", image: "/service/server-maintenance.png" },
  { slug: "cloud-infrastructure", category: "Cloud & Infrastructure", icon: "Cloud", image: "/service/cloud-infrastructure.png" },
  { slug: "business-email", category: "Cloud & Infrastructure", icon: "Mail", image: "/service/professional-email-service.png" },
  { slug: "cyber-security", category: "Cyber Security", icon: "ShieldCheck", image: "/service/cyber-security.png" },
  { slug: "digital-marketing", category: "Digital Growth", icon: "Megaphone", image: "/service/digital-marketing.png" },
  { slug: "seo", category: "Digital Growth", icon: "Search", image: "/service/seo.png" },
  { slug: "ads-campaign", category: "Digital Growth", icon: "Target", image: "/service/ads-campaign.png" },
  { slug: "ppc-ads", category: "Digital Growth", icon: "MousePointerClick", image: "/service/ppc.png" },
  { slug: "conversion-optimization", category: "Digital Growth", icon: "TrendingUp", image: "/service/Conversion-optimization.png" },
  { slug: "ai-transformation", category: "AI & Business Transformation", icon: "Sparkles", image: "/service/company-ai-automation.png" },
  { slug: "virtual-assistance", category: "AI & Business Transformation", icon: "Headset", image: "/service/virtual-assistance.png" },
];

export const serviceCategories = [
  "Enterprise Software",
  "Cloud & Infrastructure",
  "Cyber Security",
  "Digital Growth",
  "AI & Business Transformation",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

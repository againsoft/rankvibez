/**
 * Two-level service catalogue: every service belongs to exactly one category,
 * and both levels are routable — `/services/<category>` lists a category,
 * `/services/<category>/<service>` is the detail page.
 *
 * Copy for both levels lives in `messages/*.json` under `serviceCategories.<slug>`
 * and `servicesData.<slug>`, so adding a service means one entry here plus its
 * translations. Package/pricing tables are not modelled yet — when they land they
 * belong on `Service` as a `packages` field so this file stays the single source.
 */

export type ServiceCategory = {
  slug: string;
  icon: string;
};

export type Service = {
  slug: string;
  /** Slug of the owning `ServiceCategory`. */
  category: string;
  icon: string;
  image?: string;
  /**
   * Long-form services surfaced on the What We Do page and the overview strip.
   * Without it those pages would render all 60+ services as full sections.
   */
  highlight?: boolean;
};

/** Ordered to match the client service map — hosting stack first, then the software practice. */
export const serviceCategories: ServiceCategory[] = [
  { slug: "hosting", icon: "Server" },
  { slug: "domain", icon: "Globe2" },
  { slug: "email", icon: "Mail" },
  { slug: "ssl", icon: "Lock" },
  { slug: "vps-server", icon: "Cpu" },
  { slug: "dedicated-servers", icon: "ServerCog" },
  { slug: "cloud", icon: "Cloud" },
  { slug: "ip-pbx", icon: "PhoneCall" },
  { slug: "bulk-sms", icon: "MessageSquareText" },
  { slug: "enterprise-software", icon: "LayoutGrid" },
  { slug: "security", icon: "ShieldCheck" },
  { slug: "digital-growth", icon: "TrendingUp" },
  { slug: "ai-business-transformation", icon: "Sparkles" },
];

export const services: Service[] = [
  // Hosting
  { slug: "asp-net-hosting", category: "hosting", icon: "CodeXml" },
  { slug: "bdix-windows-hosting", category: "hosting", icon: "AppWindow" },
  { slug: "bdix-cpanel-hosting", category: "hosting", icon: "Wifi" },
  { slug: "cpanel-web-hosting", category: "hosting", icon: "Server", image: "/service/cpanel-web-hosting.png", highlight: true },
  { slug: "web-hosting", category: "hosting", icon: "Globe" },
  { slug: "mvc-hosting", category: "hosting", icon: "SquareStack" },
  { slug: "windows-hosting", category: "hosting", icon: "AppWindow", image: "/service/windows-hosting.png", highlight: true },
  { slug: "cpanel-reseller-hosting", category: "hosting", icon: "Share2", image: "/service/cpanel-reseller-hosting.png", highlight: true },

  // Domain
  { slug: "domain-registration", category: "domain", icon: "Globe2", image: "/service/domain-registration.png", highlight: true },
  { slug: "domain-renew", category: "domain", icon: "RefreshCw" },
  { slug: "domain-transfer", category: "domain", icon: "ArrowLeftRight" },
  { slug: "bulk-domain-registration", category: "domain", icon: "Layers" },
  { slug: "domain-reseller", category: "domain", icon: "Users" },

  // Email
  { slug: "bdix-email-hosting", category: "email", icon: "Wifi" },
  { slug: "business-email", category: "email", icon: "Mail", image: "/service/professional-email-service.png", highlight: true },
  { slug: "google-workspace-email", category: "email", icon: "Send" },

  // SSL
  { slug: "ssl-certificate", category: "ssl", icon: "Lock" },
  { slug: "ssl-installation", category: "ssl", icon: "FileCheck2" },
  { slug: "free-ssl", category: "ssl", icon: "BadgeCheck" },
  { slug: "wildcard-ssl", category: "ssl", icon: "LockKeyhole" },

  // VPS Server
  { slug: "managed-vps", category: "vps-server", icon: "ServerCog" },
  { slug: "self-managed-vps", category: "vps-server", icon: "Terminal" },
  { slug: "windows-vps", category: "vps-server", icon: "AppWindow" },
  { slug: "linux-vps", category: "vps-server", icon: "Terminal" },
  { slug: "cpanel-vps", category: "vps-server", icon: "PanelsTopLeft" },
  { slug: "kvm-vps", category: "vps-server", icon: "Cpu" },
  { slug: "lxpanel-vps", category: "vps-server", icon: "SquareStack" },
  { slug: "kvm-bdix-linux-vps", category: "vps-server", icon: "Terminal", image: "/service/kvm-bdix-linux-vps.png", highlight: true },
  { slug: "kvm-bdix-windows-rdp", category: "vps-server", icon: "MonitorSmartphone", image: "/service/kvm-bdix-windows-rdp.png", highlight: true },

  // Dedicated Server
  { slug: "dedicated-server-bd", category: "dedicated-servers", icon: "Server" },
  { slug: "dedicated-server-usa", category: "dedicated-servers", icon: "Globe" },
  { slug: "managed-dedicated-server", category: "dedicated-servers", icon: "ServerCog" },
  { slug: "windows-dedicated-server", category: "dedicated-servers", icon: "AppWindow" },
  { slug: "linux-dedicated-server", category: "dedicated-servers", icon: "Terminal" },
  { slug: "dedicated-server", category: "dedicated-servers", icon: "ServerCog", image: "/service/dedicated-server.png", highlight: true },
  { slug: "storage-server", category: "dedicated-servers", icon: "HardDrive", image: "/service/storage-server.png", highlight: true },
  { slug: "server-maintenance", category: "dedicated-servers", icon: "Server", image: "/service/server-maintenance.png", highlight: true },

  // Cloud
  { slug: "cloud-storage", category: "cloud", icon: "CloudUpload" },
  { slug: "cloud-hosting", category: "cloud", icon: "Cloud" },
  { slug: "ftp-storage", category: "cloud", icon: "FolderSync" },
  { slug: "windows-private-cloud", category: "cloud", icon: "AppWindow" },
  { slug: "linux-private-cloud", category: "cloud", icon: "Terminal" },
  { slug: "cloud-infrastructure", category: "cloud", icon: "Cloud", image: "/service/cloud-infrastructure.png", highlight: true },
  { slug: "iaas-vm", category: "cloud", icon: "Cpu", image: "/service/iaas-vm.png", highlight: true },
  { slug: "backup-as-a-service", category: "cloud", icon: "DatabaseBackup", image: "/service/backup-as-a-service.png", highlight: true },
  { slug: "object-storage", category: "cloud", icon: "Boxes", image: "/service/object-storage.png", highlight: true },
  { slug: "dr-as-a-service", category: "cloud", icon: "ShieldAlert", image: "/service/dr-as-a-service.png", highlight: true },
  { slug: "managed-paas", category: "cloud", icon: "Container", image: "/service/managed-paas.png", highlight: true },
  { slug: "hybrid-cloud", category: "cloud", icon: "CloudCog", image: "/service/hybrid-cloud.png", highlight: true },

  // IP PBX
  { slug: "dedicated-ip-pbx", category: "ip-pbx", icon: "PhoneCall" },
  { slug: "cloud-ip-pbx", category: "ip-pbx", icon: "Cloud" },
  { slug: "ip-number", category: "ip-pbx", icon: "Phone" },

  // Bulk SMS
  { slug: "bulk-sms-gateway", category: "bulk-sms", icon: "MessageSquareText" },
  { slug: "masking-sms", category: "bulk-sms", icon: "MessagesSquare" },

  // Enterprise Software
  { slug: "erp", category: "enterprise-software", icon: "LayoutGrid", image: "/service/again-erp.png", highlight: true },
  { slug: "ai-erp", category: "enterprise-software", icon: "BrainCircuit", image: "/service/ai-driven.png", highlight: true },
  { slug: "ecommerce", category: "enterprise-software", icon: "ShoppingCart", image: "/service/ecommerce-solution.png", highlight: true },
  { slug: "web-development", category: "enterprise-software", icon: "Globe", image: "/service/web-development.png", highlight: true },

  // Cyber Security
  { slug: "cyber-security", category: "security", icon: "ShieldCheck", image: "/service/cyber-security.png", highlight: true },

  // Digital Growth
  { slug: "digital-marketing", category: "digital-growth", icon: "Megaphone", image: "/service/digital-marketing.png", highlight: true },
  { slug: "seo", category: "digital-growth", icon: "Search", image: "/service/seo.png", highlight: true },
  { slug: "ads-campaign", category: "digital-growth", icon: "Target", image: "/service/ads-campaign.png", highlight: true },
  { slug: "ppc-ads", category: "digital-growth", icon: "MousePointerClick", image: "/service/ppc.png", highlight: true },
  { slug: "conversion-optimization", category: "digital-growth", icon: "TrendingUp", image: "/service/Conversion-optimization.png", highlight: true },

  // AI & Business Transformation
  { slug: "ai-transformation", category: "ai-business-transformation", icon: "Sparkles", image: "/service/company-ai-automation.png", highlight: true },
  { slug: "virtual-assistance", category: "ai-business-transformation", icon: "Headset", image: "/service/virtual-assistance.png", highlight: true },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServicesByCategory(categorySlug: string) {
  return services.filter((s) => s.category === categorySlug);
}

/** Canonical path for a service — always category-scoped. */
export function servicePath(service: Service) {
  return `/services/${service.category}/${service.slug}`;
}

export function categoryPath(category: ServiceCategory | string) {
  return `/services/${typeof category === "string" ? category : category.slug}`;
}

/** Services rendered in full on What We Do and the overview strip. */
export const highlightServices = services.filter((s) => s.highlight);

export type NavItem = {
  key: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { key: "home", href: "/" },
  { key: "whatWeDo", href: "/what-we-do" },
  { key: "solutions", href: "/solutions" },
  { key: "services", href: "/services" },
  { key: "ai", href: "/ai" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const footerNav = {
  solutions: [
    { key: "erp", href: "/services/erp" },
    { key: "aiErp", href: "/services/ai-erp" },
    { key: "ecommerce", href: "/services/ecommerce" },
    { key: "aiAutomation", href: "/services/ai-transformation" },
    { key: "cyberSecurity", href: "/services/cyber-security" },
    { key: "cloud", href: "/services/server-maintenance" },
  ],
  services: [
    { key: "softwareDevelopment", href: "/services/ecommerce" },
    { key: "websiteDevelopment", href: "/services/web-development" },
    { key: "serverMaintenance", href: "/services/server-maintenance" },
    { key: "professionalEmail", href: "/services/business-email" },
    { key: "seo", href: "/services/seo" },
    { key: "digitalMarketing", href: "/services/digital-marketing" },
    { key: "adsCampaign", href: "/services/ads-campaign" },
    { key: "virtualAssistance", href: "/services/virtual-assistance" },
  ],
  company: [
    { key: "about", href: "/about" },
    { key: "industries", href: "/industries" },
    { key: "portfolio", href: "/portfolio" },
    { key: "technology", href: "/technology" },
    { key: "locations", href: "/locations" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
  ],
  resources: [
    { key: "blog", href: "/blog" },
    { key: "insights", href: "/insights" },
    { key: "caseStudies", href: "/portfolio" },
    { key: "documentation", href: "/documentation" },
    { key: "faq", href: "/faq" },
  ],
};

// External link with a proper-noun label — intentionally not localized.
export const socialLinks = [{ label: "Facebook", href: "https://www.facebook.com/rankvibez" }];

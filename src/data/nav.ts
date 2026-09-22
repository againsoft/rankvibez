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
    { key: "erp", href: "/services/enterprise-software/erp" },
    { key: "aiErp", href: "/services/enterprise-software/ai-erp" },
    { key: "ecommerce", href: "/services/enterprise-software/ecommerce" },
    { key: "aiAutomation", href: "/services/ai-business-transformation/ai-transformation" },
    { key: "cyberSecurity", href: "/services/security/cyber-security" },
    { key: "cloud", href: "/services/cloud" },
  ],
  /**
   * The services column links the infrastructure categories rather than single
   * services, so its labels come from the `serviceCategories` namespace.
   */
  services: [
    { key: "hosting", href: "/services/hosting" },
    { key: "domain", href: "/services/domain" },
    { key: "email", href: "/services/email" },
    { key: "ssl", href: "/services/ssl" },
    { key: "vps-server", href: "/services/vps-server" },
    { key: "dedicated-servers", href: "/services/dedicated-servers" },
    { key: "cloud", href: "/services/cloud" },
    { key: "ip-pbx", href: "/services/ip-pbx" },
    { key: "bulk-sms", href: "/services/bulk-sms" },
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

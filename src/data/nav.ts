export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "AI", href: "/ai" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  solutions: [
    { label: "ERP", href: "/services/erp" },
    { label: "AI ERP", href: "/services/ai-erp" },
    { label: "E-Commerce", href: "/services/ecommerce" },
    { label: "AI Automation", href: "/services/ai-transformation" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "Cloud", href: "/services/server-maintenance" },
  ],
  services: [
    { label: "Software Development", href: "/services/ecommerce" },
    { label: "Website Development", href: "/services/web-development" },
    { label: "Server Maintenance", href: "/services/server-maintenance" },
    { label: "Professional Email", href: "/services/business-email" },
    { label: "SEO", href: "/services/seo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Ads Campaign", href: "/services/ads-campaign" },
    { label: "Virtual Assistance", href: "/services/virtual-assistance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Technology", href: "/technology" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Insights", href: "/insights" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Documentation", href: "/documentation" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const socialLinks = [{ label: "Facebook", href: "https://www.facebook.com/rankvibez" }];

export type Service = {
  slug: string;
  category: "Enterprise Software" | "Cloud & Infrastructure" | "Cyber Security" | "Digital Growth" | "AI & Business Transformation";
  name: string;
  short: string;
  description: string;
  icon: string;
  capabilities: string[];
  process?: string[];
};

export const services: Service[] = [
  {
    slug: "erp",
    category: "Enterprise Software",
    name: "ERP Software",
    short: "Custom ERP systems for finance, HR, inventory, sales and operations.",
    description:
      "We design and build enterprise resource planning systems tailored to how your business actually operates — connecting finance, HR, inventory, sales, purchasing and manufacturing into a single source of truth.",
    icon: "LayoutGrid",
    capabilities: [
      "Finance & accounting modules",
      "HR & payroll management",
      "Inventory & warehouse control",
      "Sales & purchasing workflows",
      "Manufacturing & production planning",
      "Custom reporting & dashboards",
    ],
  },
  {
    slug: "ai-erp",
    category: "Enterprise Software",
    name: "AI-Driven ERP",
    short: "ERP systems enhanced with AI agents, automation and intelligent analytics.",
    description:
      "We extend traditional ERP with AI agents, predictive analytics and automation — helping teams forecast demand, flag anomalies and reduce manual data entry across every department.",
    icon: "BrainCircuit",
    capabilities: [
      "AI-assisted forecasting",
      "Intelligent process automation",
      "Anomaly & fraud detection",
      "Natural-language reporting",
      "Smart approval workflows",
      "Predictive inventory planning",
    ],
  },
  {
    slug: "ecommerce",
    category: "Enterprise Software",
    name: "E-Commerce Solutions",
    short: "Custom e-commerce platforms, marketplaces and order management.",
    description:
      "We build high-performance e-commerce platforms and marketplaces — from product catalogs and checkout to order management, payments and logistics integrations.",
    icon: "ShoppingCart",
    capabilities: [
      "Custom storefronts & marketplaces",
      "Product & catalog management",
      "Order & fulfillment systems",
      "Payment gateway integration",
      "Inventory synchronization",
      "Performance & conversion optimization",
    ],
  },
  {
    slug: "web-development",
    category: "Enterprise Software",
    name: "Company Website",
    short: "Corporate websites, business portals and enterprise web applications.",
    description:
      "We design and engineer corporate websites, client portals and web applications built on modern, scalable architecture — fast, accessible and SEO-ready from day one.",
    icon: "Globe",
    capabilities: [
      "Corporate & marketing websites",
      "Client & business portals",
      "Landing pages & campaign sites",
      "Enterprise web applications",
      "Headless CMS integration",
      "SEO & performance engineering",
    ],
  },
  {
    slug: "server-maintenance",
    category: "Cloud & Infrastructure",
    name: "Server Maintenance",
    short: "Linux/Windows server management, monitoring and security.",
    description:
      "We manage and maintain Linux and Windows server environments — monitoring uptime, applying security patches, optimizing performance and handling backups so your infrastructure stays reliable.",
    icon: "Server",
    capabilities: [
      "Server monitoring & alerting",
      "Patch & update management",
      "Performance optimization",
      "Backup & disaster recovery",
      "Security hardening",
      "Incident troubleshooting",
    ],
  },
  {
    slug: "cloud-infrastructure",
    category: "Cloud & Infrastructure",
    name: "Cloud Infrastructure",
    short: "Cloud deployment, migration, scaling and architecture.",
    description:
      "We architect and manage cloud infrastructure across leading providers — designing systems that scale reliably, deploy safely and stay observable in production.",
    icon: "Cloud",
    capabilities: [
      "Cloud migration & deployment",
      "Auto-scaling architecture",
      "Infrastructure as code",
      "CI/CD pipelines",
      "Monitoring & observability",
      "Cost optimization",
    ],
  },
  {
    slug: "business-email",
    category: "Cloud & Infrastructure",
    name: "Professional Email Service",
    short: "Business email setup, migration, security and administration.",
    description:
      "We set up and administer professional business email — configuring DNS, SPF, DKIM and DMARC correctly, migrating mailboxes safely and hardening deliverability and security.",
    icon: "Mail",
    capabilities: [
      "Business email setup & migration",
      "DNS, SPF, DKIM & DMARC configuration",
      "Mailbox & domain administration",
      "Deliverability optimization",
      "Email security hardening",
      "Ongoing administration support",
    ],
  },
  {
    slug: "cyber-security",
    category: "Cyber Security",
    name: "Cyber Security",
    short: "Website, server and business infrastructure security.",
    description:
      "We assess and strengthen the security of your websites, servers and business infrastructure — identifying vulnerabilities, hardening access and building a practical, ongoing security posture.",
    icon: "ShieldCheck",
    capabilities: [
      "Security assessment & review",
      "Vulnerability scanning",
      "Server & application hardening",
      "Access control & authentication",
      "Malware detection & remediation",
      "Backup strategy & monitoring",
    ],
  },
  {
    slug: "digital-marketing",
    category: "Digital Growth",
    name: "Digital Marketing",
    short: "Full-funnel digital marketing strategies for business growth.",
    description:
      "We design full-funnel digital marketing strategies that connect brand, content, channels and analytics — built to move measurable business outcomes, not just impressions.",
    icon: "Megaphone",
    capabilities: [
      "Marketing strategy & planning",
      "Content & channel strategy",
      "Marketing analytics & reporting",
      "Brand positioning support",
      "Funnel & audience mapping",
      "Cross-channel campaign execution",
    ],
  },
  {
    slug: "seo",
    category: "Digital Growth",
    name: "SEO",
    short: "Technical, on-page, local and international SEO.",
    description:
      "We improve organic visibility through technical SEO, on-page optimization, content strategy and international SEO structuring — grounded in analytics, not guesswork.",
    icon: "Search",
    capabilities: [
      "Technical SEO audits",
      "On-page optimization",
      "Content & keyword strategy",
      "Local SEO",
      "International / multi-region SEO",
      "Analytics & performance tracking",
    ],
  },
  {
    slug: "ads-campaign",
    category: "Digital Growth",
    name: "Ads Campaign",
    short: "Google Ads, Meta Ads and performance advertising campaigns.",
    description:
      "We plan, launch and manage performance advertising across Google and Meta — building campaign structures, creative direction and optimization loops focused on return on ad spend.",
    icon: "Target",
    capabilities: [
      "Google Ads management",
      "Meta Ads management",
      "Campaign structure & targeting",
      "Creative & copy direction",
      "Conversion tracking setup",
      "Ongoing optimization & reporting",
    ],
  },
  {
    slug: "conversion-optimization",
    category: "Digital Growth",
    name: "Conversion Optimization",
    short: "Landing pages, analytics and funnel optimization.",
    description:
      "We optimize landing pages and conversion funnels using analytics, testing and UX refinement — turning existing traffic into more qualified leads and customers.",
    icon: "TrendingUp",
    capabilities: [
      "Landing page design & testing",
      "Funnel analysis",
      "Analytics implementation",
      "A/B and multivariate testing",
      "UX & copy refinement",
      "Conversion rate reporting",
    ],
  },
  {
    slug: "ai-transformation",
    category: "AI & Business Transformation",
    name: "AI-Driven Company / AI Automation",
    short: "AI transformation programs and business process automation.",
    description:
      "We help organizations integrate AI into daily operations — assessing existing workflows, identifying practical automation opportunities and deploying AI agents where they create real leverage.",
    icon: "Sparkles",
    capabilities: [
      "AI opportunity assessment",
      "Workflow automation design",
      "AI agent deployment",
      "Process re-engineering",
      "Change management support",
      "Continuous optimization",
    ],
  },
  {
    slug: "virtual-assistance",
    category: "AI & Business Transformation",
    name: "Virtual Assistance",
    short: "Professional virtual assistance for administrative and operational tasks.",
    description:
      "We provide professional virtual assistance for administrative, customer service, data and operational tasks — giving growing teams reliable operational support without the overhead.",
    icon: "Headset",
    capabilities: [
      "Administrative support",
      "Customer service support",
      "Data entry & management",
      "Scheduling & coordination",
      "Research & reporting",
      "Operational task support",
    ],
  },
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

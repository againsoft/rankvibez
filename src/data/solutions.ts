export type Solution = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  flow: string[];
};

export const solutions: Solution[] = [
  {
    name: "ERP & Business Management",
    slug: "erp",
    icon: "LayoutGrid",
    description: "Unified systems for finance, HR, inventory and operations.",
    flow: ["Business Data", "Unified ERP Core", "Reporting & Control"],
  },
  {
    name: "E-Commerce",
    slug: "ecommerce",
    icon: "ShoppingCart",
    description: "Storefronts, marketplaces and order management that scale.",
    flow: ["Catalog & Orders", "Commerce Platform", "Fulfillment & Growth"],
  },
  {
    name: "Corporate Digital Platform",
    slug: "web-development",
    icon: "Globe",
    description: "Websites and portals built for credibility and performance.",
    flow: ["Content & Brand", "Web Platform", "Engagement & Leads"],
  },
  {
    name: "AI Transformation",
    slug: "ai-transformation",
    icon: "Sparkles",
    description: "Practical AI adoption across workflows and operations.",
    flow: ["Business Process", "AI Layer", "Automated Outcomes"],
  },
  {
    name: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    icon: "Cloud",
    description: "Scalable, monitored infrastructure across cloud providers.",
    flow: ["Workloads", "Cloud Architecture", "Reliability & Scale"],
  },
  {
    name: "Cyber Security",
    slug: "cyber-security",
    icon: "ShieldCheck",
    description: "Security built into infrastructure, not bolted on after.",
    flow: ["Risk Assessment", "Hardening & Controls", "Ongoing Monitoring"],
  },
  {
    name: "Digital Growth",
    slug: "digital-marketing",
    icon: "TrendingUp",
    description: "SEO, ads and conversion systems that compound over time.",
    flow: ["Audience & Channels", "Growth Execution", "Measured Outcomes"],
  },
  {
    name: "Business Automation",
    slug: "ai-transformation",
    icon: "Workflow",
    description: "Automated workflows connecting tools, teams and data.",
    flow: ["Manual Workflow", "Automation Layer", "Time & Cost Saved"],
  },
  {
    name: "Managed Technology Services",
    slug: "server-maintenance",
    icon: "Settings2",
    description: "Ongoing support, maintenance and monitoring for peace of mind.",
    flow: ["Live Systems", "Monitoring & Support", "Continuous Improvement"],
  },
];

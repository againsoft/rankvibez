export type Industry = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail",
    icon: "Store",
    description:
      "Unified inventory, point-of-sale and e-commerce systems that keep stock, pricing and operations in sync across channels.",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: "ShoppingBag",
    description:
      "High-performance storefronts, catalog systems and order management built to handle volume and complexity.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    description:
      "ERP and production planning systems that connect procurement, manufacturing and inventory into one operational view.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description:
      "Secure administrative and operational software for healthcare organizations, built with data protection in mind.",
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    description:
      "Digital platforms for institutions and education businesses, from enrollment portals to content delivery.",
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    description:
      "Reliable, secure software and infrastructure for financial operations, reporting and client-facing platforms.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    description:
      "Property management platforms, listing systems and client portals built for real estate businesses.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    description:
      "Operational systems for tracking, fulfillment and supply chain coordination across distributed teams.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "ConciergeBell",
    description:
      "Booking, guest management and operational platforms designed around hospitality workflows.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    description:
      "Client portals, project systems and corporate platforms that reflect the credibility of a professional firm.",
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "Cpu",
    description:
      "Infrastructure, tooling and product engineering support for technology companies scaling their platforms.",
  },
  {
    slug: "ngo-nonprofit",
    name: "NGOs / Non-Profit",
    icon: "HandHeart",
    description:
      "Purpose-built digital platforms that help mission-driven organizations operate efficiently and communicate clearly.",
  },
];

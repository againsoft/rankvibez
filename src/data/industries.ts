export type Industry = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail",
    icon: "Store",
    tagline: "Inventory & POS systems",
    description:
      "Unified inventory, point-of-sale and e-commerce systems that keep stock, pricing and operations in sync across channels.",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: "ShoppingBag",
    tagline: "Storefronts & order management",
    description:
      "High-performance storefronts, catalog systems and order management built to handle volume and complexity.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    tagline: "ERP & production planning",
    description:
      "ERP and production planning systems that connect procurement, manufacturing and inventory into one operational view.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    tagline: "Secure operational software",
    description:
      "Secure administrative and operational software for healthcare organizations, built with data protection in mind.",
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    tagline: "Enrollment & content platforms",
    description:
      "Digital platforms for institutions and education businesses, from enrollment portals to content delivery.",
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    tagline: "Secure financial systems",
    description:
      "Reliable, secure software and infrastructure for financial operations, reporting and client-facing platforms.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    tagline: "Listings & property management",
    description:
      "Property management platforms, listing systems and client portals built for real estate businesses.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    tagline: "Tracking & fulfillment systems",
    description:
      "Operational systems for tracking, fulfillment and supply chain coordination across distributed teams.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "ConciergeBell",
    tagline: "Booking & guest management",
    description:
      "Booking, guest management and operational platforms designed around hospitality workflows.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    tagline: "Client portals & project systems",
    description:
      "Client portals, project systems and corporate platforms that reflect the credibility of a professional firm.",
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "Cpu",
    tagline: "Infrastructure & product engineering",
    description:
      "Infrastructure, tooling and product engineering support for technology companies scaling their platforms.",
  },
  {
    slug: "ngo-nonprofit",
    name: "NGOs / Non-Profit",
    icon: "HandHeart",
    tagline: "Mission-driven digital platforms",
    description:
      "Purpose-built digital platforms that help mission-driven organizations operate efficiently and communicate clearly.",
  },
];

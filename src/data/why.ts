export type WhyItem = {
  title: string;
  description: string;
  icon: string;
};

export const whyRankVibez: WhyItem[] = [
  {
    title: "AI-First",
    description: "We design AI into the product and workflow rather than adding it as an afterthought.",
    icon: "Sparkles",
  },
  {
    title: "Business Understanding",
    description: "Technology is built around real business processes, not generic templates.",
    icon: "Compass",
  },
  {
    title: "Full Technology Stack",
    description: "Software, cloud, infrastructure, security and growth under one technology partner.",
    icon: "Layers",
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed to evolve as the business grows, not rebuilt from scratch.",
    icon: "Network",
  },
  {
    title: "Security Mindset",
    description: "Security and reliability are considered from the beginning of every build.",
    icon: "ShieldCheck",
  },
  {
    title: "Global Delivery",
    description: "Built to support international businesses and distributed teams.",
    icon: "Globe2",
  },
  {
    title: "Long-Term Partnership",
    description: "We focus on continuous improvement, not one-time delivery.",
    icon: "Handshake",
  },
];

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand the business and goals." },
  { number: "02", title: "Strategize", description: "Define technology and AI opportunities." },
  { number: "03", title: "Design", description: "Create UX, architecture and workflows." },
  { number: "04", title: "Build", description: "Develop the software and integrations." },
  { number: "05", title: "Secure", description: "Test, harden and validate the system." },
  { number: "06", title: "Launch", description: "Deploy to production." },
  { number: "07", title: "Grow", description: "Monitor, optimize and continuously improve." },
];

export const trustSignals = [
  "AI-First Technology",
  "Enterprise Software",
  "Cloud & Infrastructure",
  "Digital Growth",
  "Global Delivery",
];

export const premiumDetails = [
  { title: "Discovery Call", description: "Start every engagement with a structured discovery conversation.", icon: "PhoneCall" },
  { title: "Architecture Review", description: "Technical architecture reviewed before development begins.", icon: "FileSearch" },
  { title: "Secure Project Workflow", description: "Structured, access-controlled delivery workflow for every project.", icon: "Lock" },
  { title: "Deployment Support", description: "Hands-on support through launch and go-live.", icon: "Rocket" },
  { title: "Documentation", description: "Clear technical documentation delivered with every project.", icon: "FileText" },
  { title: "Monitoring & Maintenance", description: "Ongoing monitoring and maintenance options after launch.", icon: "Activity" },
];

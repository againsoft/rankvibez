export type WhyItem = {
  id: string;
  icon: string;
};

export const whyRankVibez: WhyItem[] = [
  { id: "ai-first", icon: "Sparkles" },
  { id: "business-understanding", icon: "Compass" },
  { id: "full-stack", icon: "Layers" },
  { id: "scalable-architecture", icon: "Network" },
  { id: "security-mindset", icon: "ShieldCheck" },
  { id: "global-delivery", icon: "Globe2" },
  { id: "long-term-partnership", icon: "Handshake" },
];

export const processSteps = [
  { id: "discover", number: "01" },
  { id: "strategize", number: "02" },
  { id: "design", number: "03" },
  { id: "build", number: "04" },
  { id: "secure", number: "05" },
  { id: "launch", number: "06" },
  { id: "grow", number: "07" },
];

export const trustSignals = ["ai-first-technology", "enterprise-software", "cloud-infrastructure", "digital-growth", "global-delivery"];

// Not currently rendered anywhere; kept for a future "premium details" section.
export const premiumDetails = [
  { title: "Discovery Call", description: "Start every engagement with a structured discovery conversation.", icon: "PhoneCall" },
  { title: "Architecture Review", description: "Technical architecture reviewed before development begins.", icon: "FileSearch" },
  { title: "Secure Project Workflow", description: "Structured, access-controlled delivery workflow for every project.", icon: "Lock" },
  { title: "Deployment Support", description: "Hands-on support through launch and go-live.", icon: "Rocket" },
  { title: "Documentation", description: "Clear technical documentation delivered with every project.", icon: "FileText" },
  { title: "Monitoring & Maintenance", description: "Ongoing monitoring and maintenance options after launch.", icon: "Activity" },
];

export type AICapability = {
  title: string;
  description: string;
  icon: string;
};

export const aiCapabilities: AICapability[] = [
  {
    title: "AI-Driven ERP",
    description: "Intelligent enterprise resource planning with AI-assisted operations, analytics and automation.",
    icon: "LayoutGrid",
  },
  {
    title: "AI Business Automation",
    description: "Automate repetitive workflows and connect business processes through intelligent agents.",
    icon: "Workflow",
  },
  {
    title: "AI Customer Operations",
    description: "AI-powered customer support, lead qualification, recommendations and communication.",
    icon: "MessagesSquare",
  },
  {
    title: "AI Analytics",
    description: "Turn business data into actionable insights and decision support.",
    icon: "BarChart3",
  },
  {
    title: "AI Agents",
    description: "Deploy specialized AI agents for sales, operations, support, marketing and administration.",
    icon: "Bot",
  },
  {
    title: "AI Transformation",
    description: "Assess existing business operations and identify practical AI opportunities.",
    icon: "Sparkles",
  },
];

export const aiFlow = ["Business Data", "AI Intelligence Layer", "Automation", "Business Actions", "Insights & Growth"];

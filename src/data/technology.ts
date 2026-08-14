export type TechGroup = {
  title: string;
  items: string[];
};

export const techEcosystem = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Cloudflare",
  "GitHub",
  "OpenAI",
  "Stripe",
  "Vercel",
  "Docker",
  "PostgreSQL",
];

export const technologyStack: TechGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Redis"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Google Cloud", "Microsoft Azure", "Cloudflare", "Vercel"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub", "CI/CD", "Monitoring"],
  },
  {
    title: "AI",
    items: ["LLM APIs", "AI Agents", "RAG", "Automation", "AI Analytics", "AI Orchestration"],
  },
];

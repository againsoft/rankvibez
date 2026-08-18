export type TechGroup = {
  id: string;
  items: string[];
};

// Brand/product names — proper nouns, not localized.
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
  { id: "frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { id: "backend", items: ["Python", "FastAPI", "Node.js", "REST APIs"] },
  { id: "database", items: ["PostgreSQL", "Redis"] },
  { id: "cloud", items: ["AWS", "Google Cloud", "Microsoft Azure", "Cloudflare", "Vercel"] },
  { id: "devops", items: ["Docker", "GitHub", "CI/CD", "Monitoring"] },
  { id: "ai", items: ["LLM APIs", "AI Agents", "RAG", "Automation", "AI Analytics", "AI Orchestration"] },
];

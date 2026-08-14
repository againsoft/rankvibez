import {
  BrainCircuit,
  Building2,
  Workflow,
  ShoppingCart,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";

const capabilities = [
  { icon: BrainCircuit, title: "AI-First Technology", description: "AI integrated into products and workflows, not bolted on." },
  { icon: Building2, title: "Enterprise Software", description: "Custom ERP and business systems built around real operations." },
  { icon: Workflow, title: "Business Automation", description: "Automated workflows connecting teams, tools and data." },
  { icon: ShoppingCart, title: "E-Commerce Technology", description: "High-performance commerce platforms built to scale." },
  { icon: Cloud, title: "Cloud & Infrastructure", description: "Reliable, monitored infrastructure across leading providers." },
  { icon: ShieldCheck, title: "Cyber Security", description: "Security considered from architecture through to launch." },
];

export function Capabilities() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Core Capabilities"
          title="One technology partner, full capability."
          description="From AI-driven systems to secure infrastructure and measurable growth — RankVibez brings the full stack together."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.06}>
              <div className="card-surface group h-full rounded-2xl p-6 transition-colors">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <cap.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

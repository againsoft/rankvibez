import { useTranslations } from "next-intl";
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
  { id: "ai-first", icon: BrainCircuit },
  { id: "enterprise-software", icon: Building2 },
  { id: "business-automation", icon: Workflow },
  { id: "ecommerce-technology", icon: ShoppingCart },
  { id: "cloud-infrastructure", icon: Cloud },
  { id: "cyber-security", icon: ShieldCheck },
];

export function Capabilities() {
  const t = useTranslations("home.capabilities");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={i * 0.06}>
              <div className="card-surface group h-full rounded-2xl p-6 transition-colors">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <cap.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{t(`items.${cap.id}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`items.${cap.id}.description`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

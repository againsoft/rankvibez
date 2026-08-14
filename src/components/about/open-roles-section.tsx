import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { openRoles } from "@/data/team";

export function OpenRolesSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Growing With You"
          title="Specialist roles our team is built around."
          description="As RankVibez scales across AI, cloud, security and growth, these are the specialist functions we're actively building out alongside our current team."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openRoles.map((role, i) => {
            const Icon = (Icons[role.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
            return (
              <Reveal key={role.title} delay={i * 0.04}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border-subtle bg-white/[0.02] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{role.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{role.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

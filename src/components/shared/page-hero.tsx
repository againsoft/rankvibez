import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40" />
      <Container className="relative">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Badge>{eyebrow}</Badge>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">{title}</h1>
          {description && <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
        </Reveal>
      </Container>
    </section>
  );
}

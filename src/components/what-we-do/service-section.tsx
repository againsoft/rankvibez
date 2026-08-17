import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

export function ServiceSection({ service, index }: { service: Service; index: number }) {
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  const reverse = index % 2 === 1;
  const whatYouGet = service.capabilities.slice(0, 3);

  return (
    <section id={service.slug} className="scroll-mt-24 py-10">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={cn("flex flex-col items-start gap-5", reverse ? "lg:order-2" : "lg:order-1")}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon size={24} />
            </div>
            <Badge>{service.category}</Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{service.name}</h2>
            <p className="text-base leading-relaxed text-muted">{service.description}</p>

            <ul className="mt-1 flex flex-col gap-3">
              <li className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-2">What You Get</li>
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check size={16} className="mt-0.5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}`}
              className="focus-ring mt-1 inline-flex items-center gap-1.5 rounded text-sm font-medium text-secondary transition-transform hover:translate-x-1"
            >
              Explore Service
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>
            {service.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-subtle bg-background">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain p-6"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            ) : (
              <div className="card-surface relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
                <div className="glow-orb pointer-events-none absolute h-64 w-64 opacity-30" />
                <Icon size={56} className="relative text-foreground/15" />
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

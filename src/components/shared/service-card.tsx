import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface focus-ring group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      {service.image ? (
        <div className="relative h-40 overflow-hidden border-b border-border-subtle bg-background sm:h-44">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <span className="absolute right-4 top-4 rounded-full border border-border-strong bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted backdrop-blur">
            {service.category}
          </span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {!service.image && (
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon size={20} />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-2">{service.category}</span>
          </div>
        )}
        <h3 className={`text-lg font-semibold text-foreground ${service.image ? "" : "mt-5"}`}>{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-transform group-hover:translate-x-1">
          Explore Service
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

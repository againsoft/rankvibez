import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface focus-ring group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon size={20} />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-2">{service.category}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-transform group-hover:translate-x-1">
        Explore Service
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";

export function OverviewStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {services.map((service) => {
        const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
        return (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="focus-ring card-surface group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon size={20} />
            </div>
            <span className="text-xs font-medium leading-snug text-foreground">{service.name}</span>
          </a>
        );
      })}
    </div>
  );
}

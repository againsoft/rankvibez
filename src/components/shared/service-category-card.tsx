import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { categoryPath, getServicesByCategory, type ServiceCategory } from "@/data/services";

/** How many child service names to preview on the card before collapsing into "+N more". */
const PREVIEW_COUNT = 4;

export function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const t = useTranslations(`serviceCategories.${category.slug}`);
  const tData = useTranslations("servicesData");
  const tPage = useTranslations("serviceCategoryPage");
  const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;

  const categoryServices = getServicesByCategory(category.slug);
  const preview = categoryServices.slice(0, PREVIEW_COUNT);
  const remaining = categoryServices.length - preview.length;

  return (
    <Link
      href={categoryPath(category)}
      className="card-surface focus-ring group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon size={20} />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-2">
          {tPage("serviceCount", { count: categoryServices.length })}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{t("name")}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{t("short")}</p>

      <ul className="mt-5 flex flex-1 flex-wrap gap-2">
        {preview.map((service) => (
          <li
            key={service.slug}
            className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted-2"
          >
            {tData(`${service.slug}.name`)}
          </li>
        ))}
        {remaining > 0 && (
          <li className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted-2">
            {tPage("moreServices", { count: remaining })}
          </li>
        )}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-transform group-hover:translate-x-1">
        {tPage("exploreCategory")}
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const t = useTranslations(`portfolioData.projects.${project.slug}`);
  const tLabel = useTranslations("portfolioLabels");
  const tCategory = useTranslations("portfolioData.categories");
  const tCountry = useTranslations("countries");
  const tCommon = useTranslations("common");

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="card-surface focus-ring group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border-subtle bg-gradient-to-br from-primary/15 via-surface to-secondary/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-40" />
            <span className="relative text-2xl font-bold tracking-tight text-foreground/25">{project.name}</span>
          </>
        )}
        <span className="absolute right-4 top-4 rounded-full border border-border-strong bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted backdrop-blur">
          {tLabel(project.label)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-2">
          <span>{tCategory(project.categories[0])}</span>
          <span>·</span>
          <span>{tCountry(project.country)}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t("summary")}</p>
        <p className="mt-4 text-xs text-muted-2">{project.technology.join(" · ")}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-transform group-hover:translate-x-1">
          {tCommon("viewCaseStudy")}
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "@/components/shared/portfolio-card";
import { portfolioCategories, portfolioProjects } from "@/data/portfolio";

export function PortfolioGrid() {
  const tCategory = useTranslations("portfolioData.categories");
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary/60 bg-primary-soft text-foreground"
                : "border-border-subtle text-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {tCategory(cat)}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, localeMetadata, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = localeMetadata[locale];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("languageSwitcherLabel")}
        className="focus-ring flex h-9 items-center gap-1.5 rounded-full border border-border-subtle bg-white/[0.02] px-3 text-[13px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="uppercase">{locale}</span>
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      <div
        role="listbox"
        aria-label={t("languageSwitcherLabel")}
        className={cn(
          "absolute right-0 top-full z-50 mt-2 min-w-44 origin-top-right rounded-2xl border border-border-subtle bg-surface/98 p-1.5 shadow-xl backdrop-blur-xl transition-all duration-150",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        {routing.locales.map((loc) => {
          const meta = localeMetadata[loc];
          const active = loc === locale;
          return (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              role="option"
              aria-selected={active}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors",
                active ? "bg-primary-soft text-foreground" : "text-muted hover:bg-white/[0.05] hover:text-foreground"
              )}
            >
              <span aria-hidden="true">{meta.flag}</span>
              <span>{meta.nativeLabel}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

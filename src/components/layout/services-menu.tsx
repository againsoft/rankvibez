"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import {
  categoryPath,
  getServicesByCategory,
  serviceCategories,
  servicePath,
} from "@/data/services";
import { ServiceIcon } from "./service-icon";
import { cn } from "@/lib/utils";

/** Grace period so the pointer can cross the gap between the trigger and the panel. */
const CLOSE_DELAY_MS = 150;

/**
 * Desktop mega menu: categories on the left, the hovered category's services on
 * the right. The panel is absolutely positioned against the sticky header, so it
 * spans the full header width rather than hanging off the trigger.
 */
export function ServicesMegaMenu({ active }: { active: boolean }) {
  const t = useTranslations("nav");
  const tCategories = useTranslations("serviceCategories");
  const tData = useTranslations("servicesData");
  const tPage = useTranslations("serviceCategoryPage");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(serviceCategories[0].slug);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const show = () => {
    cancelClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };
  const close = () => {
    cancelClose();
    setOpen(false);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const currentServices = getServicesByCategory(current);

  return (
    <div
      ref={ref}
      onMouseEnter={show}
      onMouseLeave={scheduleClose}
      onFocus={show}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) close();
      }}
    >
      <Link
        ref={triggerRef}
        href="/services"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={close}
        className={cn(
          "focus-ring flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
          active || open ? "text-foreground" : "text-muted hover:text-foreground"
        )}
      >
        {t("services")}
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </Link>

      <div
        className={cn(
          "absolute inset-x-0 top-full border-b border-border-subtle bg-background/98 shadow-2xl backdrop-blur-xl transition-all duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        )}
      >
        <Container className="grid grid-cols-[260px_1fr] gap-8 py-8">
          <ul className="flex flex-col gap-0.5 border-r border-border-subtle pr-6">
            {serviceCategories.map((category) => {
              const selected = category.slug === current;
              return (
                <li key={category.slug}>
                  <Link
                    href={categoryPath(category)}
                    onClick={close}
                    onMouseEnter={() => setCurrent(category.slug)}
                    onFocus={() => setCurrent(category.slug)}
                    className={cn(
                      "focus-ring flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                      selected ? "bg-primary-soft text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    <ServiceIcon
                      name={category.icon}
                      size={16}
                      className={selected ? "text-primary" : "text-muted-2"}
                    />
                    <span className="flex-1">{tCategories(`${category.slug}.name`)}</span>
                    <ArrowRight
                      size={14}
                      className={cn("transition-opacity", selected ? "opacity-100" : "opacity-0")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-base font-semibold text-foreground">
                  {tCategories(`${current}.name`)}
                </p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                  {tCategories(`${current}.short`)}
                </p>
              </div>
              <Link
                href={categoryPath(current)}
                onClick={close}
                className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-full text-sm font-medium text-secondary hover:underline"
              >
                {tPage("exploreCategory")}
                <ArrowRight size={14} />
              </Link>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 xl:grid-cols-3">
              {currentServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={servicePath(service)}
                    onClick={close}
                    className="focus-ring group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-muted transition-colors hover:border-border-subtle hover:bg-white/[0.03] hover:text-foreground"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-muted-2 transition-colors group-hover:bg-primary-soft group-hover:text-primary">
                      <ServiceIcon name={service.icon} size={15} />
                    </span>
                    {tData(`${service.slug}.name`)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-border-subtle pt-4">
              <Link
                href="/services"
                onClick={close}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full text-sm text-muted hover:text-foreground"
              >
                {t("allServices")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

/** Mobile accordion: Services → category → services. */
export function MobileServicesMenu() {
  const t = useTranslations("nav");
  const tCategories = useTranslations("serviceCategories");
  const tData = useTranslations("servicesData");
  const tPage = useTranslations("serviceCategoryPage");
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="focus-ring flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/[0.05]"
      >
        {t("services")}
        <ChevronDown size={18} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="ml-3 flex flex-col border-l border-border-subtle pl-2">
          {serviceCategories.map((category) => {
            const isExpanded = expanded === category.slug;
            return (
              <div key={category.slug}>
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : category.slug)}
                  aria-expanded={isExpanded}
                  className="focus-ring flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] text-foreground/85 hover:bg-white/[0.05]"
                >
                  <ServiceIcon name={category.icon} size={16} className="text-primary" />
                  <span className="flex-1 text-left">{tCategories(`${category.slug}.name`)}</span>
                  <ChevronDown
                    size={16}
                    className={cn("text-muted-2 transition-transform", isExpanded && "rotate-180")}
                  />
                </button>

                {isExpanded && (
                  <ul className="mb-2 ml-5 flex flex-col border-l border-border-subtle pl-3">
                    {getServicesByCategory(category.slug).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service)}
                          className="focus-ring block rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/[0.05] hover:text-foreground"
                        >
                          {tData(`${service.slug}.name`)}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={categoryPath(category)}
                        className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-secondary"
                      >
                        {tPage("exploreCategory")}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            );
          })}
          <Link
            href="/services"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm text-muted hover:text-foreground"
          >
            {t("allServices")}
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}

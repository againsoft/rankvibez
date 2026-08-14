"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border-subtle bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Logo markClassName="h-10 sm:h-11" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Let&rsquo;s Build Together
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-18 z-40 origin-top border-b border-border-subtle bg-background/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/[0.05]"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-4 w-full">
            Let&rsquo;s Build Together
          </Button>
        </Container>
      </div>
    </header>
  );
}

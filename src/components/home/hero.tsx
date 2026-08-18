import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "./hero-visual";
import { trustSignals } from "@/data/why";

export function Hero() {
  const t = useTranslations("home.hero");
  const tSignals = useTranslations("whyData.trustSignals");

  return (
    <section className="relative overflow-hidden pb-8 pt-16 sm:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb pointer-events-none absolute -top-56 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-50" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-start gap-7">
            <Badge>{t("badge")}</Badge>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              {t("titlePrefix")} <span className="text-gradient-brand">{t("titleHighlight")}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t("description")}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                {t("primaryCta")}
                <ArrowRight size={16} />
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                {t("secondaryCta")}
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border-subtle pt-7">
              {trustSignals.map((signal) => (
                <span key={signal} className="text-xs font-medium uppercase tracking-[0.1em] text-muted-2">
                  {tSignals(signal)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

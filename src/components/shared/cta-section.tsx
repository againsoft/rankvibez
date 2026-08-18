import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const t = useTranslations("common.cta");

  return (
    <section className="relative py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="glow-orb pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[620px] -translate-x-1/2 opacity-60" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">{title ?? t("title")}</h2>
            <p className="text-balance text-base leading-relaxed text-muted sm:text-lg">{description ?? t("description")}</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel ?? t("primaryLabel")}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel ?? t("secondaryLabel")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

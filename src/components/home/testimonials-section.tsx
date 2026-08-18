import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";

export function TestimonialsSection() {
  const t = useTranslations("home.testimonialsSection");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative mx-auto max-w-3xl rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center sm:px-16">
          <Quote className="mx-auto mb-6 text-primary/60" size={32} />
          <p className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">{t("quote")}</p>
          <p className="mt-5 text-sm text-muted-2">{t("note")}</p>
        </Reveal>
      </Container>
    </section>
  );
}

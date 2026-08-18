import { useTranslations } from "next-intl";
import { Construction } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero } from "./page-hero";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const t = useTranslations("common.comingSoon");

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="pb-28">
        <Container>
          <div className="card-surface flex flex-col items-center gap-5 rounded-3xl p-16 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Construction size={22} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">{t("title")}</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">{t("description")}</p>
            <Button href="/contact">{t("contactUs")}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

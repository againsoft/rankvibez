import type { Metadata } from "next";
import { getTranslations, getLocale , setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { companyInfo } from "@/data/contact";

type Params = Promise<{ locale: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("contactPage"), getLocale()]);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contactPage");
  const tCountries = await getTranslations("countries");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col gap-6">
              <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">{t("headOffice")}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{companyInfo.address}</p>
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">{t("email")}</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="focus-ring mt-1 block rounded text-sm font-medium text-foreground hover:text-primary"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">{t("phone")}</p>
                  {companyInfo.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="focus-ring block rounded text-sm font-medium text-foreground hover:text-primary"
                    >
                      {phone.value}
                      <span className="ml-1.5 text-xs font-normal text-muted-2">({tCountries(phone.label)})</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-white/[0.02] p-6">
                <p className="text-sm leading-relaxed text-muted">{t("discoveryCallNote")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

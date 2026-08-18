import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { footerNav, socialLinks } from "@/data/nav";
import { FacebookIcon } from "@/components/shared/social-icons";
import { companyInfo } from "@/data/contact";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook: FacebookIcon,
};

function FooterColumn({
  title,
  links,
  t,
}: {
  title: string;
  links: { key: string; href: string }[];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="focus-ring rounded text-sm text-muted transition-colors hover:text-foreground">
              {t(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tSolutions = useTranslations("footer.solutions");
  const tServices = useTranslations("footer.services");
  const tCompany = useTranslations("footer.company");
  const tResources = useTranslations("footer.resources");

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border-subtle bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 opacity-40" />

      <Container className="relative py-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-border-subtle pb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("heading")} <span className="text-gradient-brand">{t("headingHighlight")}</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">{t("tagline")}</p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0">
            {t("cta")}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <Logo />
            <p className="max-w-[220px] text-sm leading-relaxed text-muted">{t("tagline")}</p>
          </div>
          <FooterColumn title={t("columns.solutions")} links={footerNav.solutions} t={tSolutions} />
          <FooterColumn title={t("columns.services")} links={footerNav.services} t={tServices} />
          <FooterColumn title={t("columns.company")} links={footerNav.company} t={tCompany} />
          <FooterColumn title={t("columns.resources")} links={footerNav.resources} t={tResources} />
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">{t("columns.contact")}</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${companyInfo.email}`} className="focus-ring rounded transition-colors hover:text-foreground">
                  {companyInfo.email}
                </a>
              </li>
              {companyInfo.phones.map((phone) => (
                <li key={phone.value} className="flex items-start gap-2.5">
                  <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                  <a href={phone.href} className="focus-ring rounded transition-colors hover:text-foreground">
                    {phone.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-muted-2">{t("copyright", { year: new Date().getFullYear() })}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
            <Link href="/privacy-policy" className="focus-ring rounded hover:text-foreground">
              {t("privacyPolicy")}
            </Link>
            <Link href="/terms-of-service" className="focus-ring rounded hover:text-foreground">
              {t("termsOfService")}
            </Link>
            <Link href="/cookie-policy" className="focus-ring rounded hover:text-foreground">
              {t("cookiePolicy")}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

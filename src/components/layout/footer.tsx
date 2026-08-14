import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { footerNav, socialLinks } from "@/data/nav";
import { FacebookIcon } from "@/components/shared/social-icons";
import { companyInfo } from "@/data/contact";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook: FacebookIcon,
};

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="focus-ring rounded text-sm text-muted transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border-subtle bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 opacity-40" />

      <Container className="relative py-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-border-subtle pb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&rsquo;s build something <span className="text-gradient-brand">intelligent.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              AI-driven software and technology solutions for modern businesses.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0">
            Start a Conversation
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <Logo />
            <p className="max-w-[220px] text-sm leading-relaxed text-muted">
              AI-driven software and technology solutions for modern businesses.
            </p>
          </div>
          <FooterColumn title="Solutions" links={footerNav.solutions} />
          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">Contact</h3>
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
          <p className="text-xs text-muted-2">© 2026 RankVibez. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
            <Link href="/privacy-policy" className="focus-ring rounded hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="focus-ring rounded hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="focus-ring rounded hover:text-foreground">
              Cookie Policy
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

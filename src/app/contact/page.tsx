import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { companyInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with RankVibez about your next software, AI, infrastructure or growth project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Tell us about your business and goals — we'll follow up to schedule a discovery call and scope a custom proposal."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col gap-6">
              <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">Head Office</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{companyInfo.address}</p>
                </div>
              </div>

              <div className="card-surface flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">Email</p>
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
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-2">Phone</p>
                  {companyInfo.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={phone.href}
                      className="focus-ring block rounded text-sm font-medium text-foreground hover:text-primary"
                    >
                      {phone.value}
                      <span className="ml-1.5 text-xs font-normal text-muted-2">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-white/[0.02] p-6">
                <p className="text-sm leading-relaxed text-muted">
                  For enterprise engagements, we prefer a discovery call over a fixed quote — this lets us scope
                  the right architecture before proposing pricing.
                </p>
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

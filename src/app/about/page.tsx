import type { Metadata } from "next";
import { Target, Eye, Sparkles, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { TeamSection } from "@/components/about/team-section";
import { whyRankVibez } from "@/data/why";

export const metadata: Metadata = {
  title: "About",
  description: "RankVibez is an AI-driven software and technology solutions company helping businesses build, automate, secure and grow.",
};

const values = [
  { title: "Clarity", description: "We communicate in plain, technical language — no unnecessary complexity." },
  { title: "Craftsmanship", description: "Every system is built with attention to architecture, not just features." },
  { title: "Accountability", description: "We stand behind what we build, from launch through ongoing support." },
  { title: "Curiosity", description: "We continually evaluate new technology, especially in AI, for practical value." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RankVibez"
        title="A technology partner for businesses building their next stage of growth."
        description="RankVibez is an AI-driven software and technology solutions company helping businesses build, automate, secure, market and scale their digital operations."
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="card-surface rounded-2xl p-8">
              <Target className="text-primary" size={22} />
              <h2 className="mt-4 text-lg font-semibold text-foreground">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To help businesses operate, compete and grow through intelligent software and technology.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="card-surface rounded-2xl p-8">
              <Eye className="text-secondary" size={22} />
              <h2 className="mt-4 text-lg font-semibold text-foreground">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To become a globally trusted AI-first technology company for modern businesses.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow="Values" title="What guides how we build and work." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="rounded-2xl p-2">
                  <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <Sparkles size={22} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                AI-First Philosophy
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                We don&rsquo;t treat AI as an add-on. Every system we design starts with the question: where can
                intelligence meaningfully reduce manual work, surface better decisions, or improve the customer
                experience? AI is designed into the architecture from day one, not retrofitted afterward.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-soft text-secondary">
                <Globe2 size={22} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Global Delivery
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                RankVibez operates from Dhaka, Bangladesh and delivers technology solutions to businesses across
                multiple international markets. Our team combines software engineering, cloud infrastructure,
                security and digital growth expertise to support each engagement end-to-end.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <TeamSection />

      <section className="border-y border-border-subtle bg-surface/30 py-24">
        <Container>
          <SectionHeading eyebrow="Why RankVibez" title="A technology partner built for the long term." />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyRankVibez.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl p-2">
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

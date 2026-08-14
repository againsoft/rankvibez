import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about working with RankVibez.",
};

const faqs = [
  {
    q: "What kind of businesses does RankVibez work with?",
    a: "We work with businesses that need enterprise-grade software, infrastructure, security or growth systems — from growing companies to larger organizations across retail, manufacturing, finance, healthcare, technology and other industries.",
  },
  {
    q: "How does pricing work?",
    a: "Most engagements are scoped individually through a discovery call and custom proposal. Where indicative pricing is shown, it is listed in USD as a starting point rather than a fixed final cost.",
  },
  {
    q: "What does the engagement process look like?",
    a: "We follow a structured process: discover, strategize, design, build, secure, launch and grow — with clear checkpoints and documentation at each stage.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Monitoring, maintenance and continuous improvement are available as part of a managed technology services engagement.",
  },
  {
    q: "Can RankVibez integrate AI into an existing system?",
    a: "Yes. We regularly assess existing workflows and add AI capabilities — automation, analytics or agents — into systems that are already in production.",
  },
  {
    q: "Where is RankVibez based?",
    a: "RankVibez operates from Dhaka, Bangladesh, and serves clients across multiple international markets.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Frequently Asked Questions"
        description="Answers to common questions about working with RankVibez."
      />

      <section className="pb-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05} className="card-surface rounded-2xl p-6">
                <h2 className="text-base font-semibold text-foreground">{faq.q}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

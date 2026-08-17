import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { QuoteForm } from "@/components/quote/quote-form";

export const metadata: Metadata = {
  title: "Request a Quotation",
  description:
    "Tell us which services you need and describe your requirements — RankVibez will follow up with a custom quote.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quotation"
        title="Tell us what you need. We'll send a custom quote."
        description="Select the services you're interested in, share your requirements, and our team will follow up with a tailored proposal — no pricing shown here, just a conversation about your project."
      />

      <section className="pb-24">
        <Container className="mx-auto max-w-4xl">
          <Reveal>
            <Suspense fallback={<div className="card-surface h-96 animate-pulse rounded-3xl" />}>
              <QuoteForm />
            </Suspense>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

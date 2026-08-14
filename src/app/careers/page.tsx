import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { whyRankVibez } from "@/data/why";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join RankVibez and help build AI-driven software and technology solutions for businesses around the world.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build technology that matters."
        description="RankVibez is growing its team of engineers, designers and technologists. We're not actively hiring for specific roles right now, but we're always open to hearing from strong candidates."
      />

      <section className="py-14">
        <Container>
          <SectionHeading eyebrow="Why RankVibez" title="What it's like to work here." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyRankVibez.slice(0, 4).map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="card-surface flex flex-col items-center gap-5 rounded-3xl p-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Mail size={22} />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">No open roles right now — reach out anyway.</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Send your CV and a short note to our team, and we&rsquo;ll keep it on file for future openings.
            </p>
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

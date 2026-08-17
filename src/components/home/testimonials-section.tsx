import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative mx-auto max-w-3xl rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center sm:px-16">
          <Quote className="mx-auto mb-6 text-primary/60" size={32} />
          <p className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            Trusted by businesses building their next stage of growth.
          </p>
          <p className="mt-5 text-sm text-muted-2">
            Verified client testimonials will be published here as engagements are completed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

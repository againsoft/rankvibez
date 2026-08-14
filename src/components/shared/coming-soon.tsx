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
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="pb-28">
        <Container>
          <div className="card-surface flex flex-col items-center gap-5 rounded-3xl p-16 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Construction size={22} />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              We&rsquo;re building this out. In the meantime, reach out directly and our team will help.
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

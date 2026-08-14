import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-2">Error 404</span>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Page not found.</h1>
        <p className="max-w-md text-base leading-relaxed text-muted">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href="/" size="lg">Back to Home</Button>
          <Button href="/contact" variant="secondary" size="lg">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}

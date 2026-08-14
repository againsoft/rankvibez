import { Container } from "@/components/ui/container";
import { techEcosystem } from "@/data/technology";

export function TrustStrip() {
  const loop = [...techEcosystem, ...techEcosystem];
  return (
    <section className="border-y border-border-subtle bg-surface/40 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-muted-2">
            Platforms We Work With
          </p>
          <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
              {loop.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 text-sm font-semibold tracking-tight text-muted-2 opacity-70 transition-opacity hover:text-foreground hover:opacity-100"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

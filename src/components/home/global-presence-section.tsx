import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { GlobalVisual } from "./global-visual";
import { locations } from "@/data/locations";

export function GlobalPresenceSection() {
  return (
    <section className="py-4">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Global Presence"
              title="Global Reach. Local Understanding."
              description="RankVibez operates from Dhaka and delivers technology solutions to businesses across multiple international markets."
            />

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locations.map((loc, i) => (
                <Reveal key={loc.country} delay={i * 0.05}>
                  <div className="card-surface flex items-center justify-between rounded-xl px-4 py-3.5">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {loc.country}
                        {loc.city && <span className="text-muted"> · {loc.city}</span>}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-2">{loc.label}</p>
                    </div>
                    <span
                      className={
                        loc.type === "office"
                          ? "h-2 w-2 shrink-0 rounded-full bg-primary"
                          : "h-2 w-2 shrink-0 rounded-full bg-secondary"
                      }
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <GlobalVisual />
        </div>
      </Container>
    </section>
  );
}

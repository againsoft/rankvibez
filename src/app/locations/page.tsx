import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { GlobalVisual } from "@/components/home/global-visual";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "RankVibez operates from Dhaka, Bangladesh and serves clients across the United States, United Kingdom, UAE, Saudi Arabia, Canada and Australia.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title="Global Reach. Local Understanding."
        description="RankVibez operates from Dhaka and delivers technology solutions to businesses across multiple international markets."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locations.map((loc, i) => (
                <Reveal key={loc.country} delay={i * 0.05}>
                  <div className="card-surface flex items-center justify-between rounded-xl px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {loc.country}
                        {loc.city && <span className="text-muted"> · {loc.city}</span>}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-2">{loc.label}</p>
                      {loc.address && <p className="mt-1 max-w-[220px] text-xs text-muted-2">{loc.address}</p>}
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
            <GlobalVisual />
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-xs text-muted-2">
            Locations marked as &ldquo;Serving Clients In&rdquo; represent active service markets rather than
            physical offices. Only Dhaka, Bangladesh is an operating office.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

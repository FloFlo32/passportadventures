import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Users, Plane } from "lucide-react";
import { brand } from "@/brand.config";
import { latestTripsImages } from "@/content/data/latest-trips";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: `Latest Trips | ${brand.name}`,
  description:
    "A look at recent group trips, cruises, and getaways planned by Passport Adventures. Real photos from real clients enjoying their custom itineraries.",
};

const stats = [
  { icon: Camera, label: "Moments captured", value: "13+" },
  { icon: Users, label: "Travelers along for the ride", value: "100s" },
  { icon: Plane, label: "Destinations and counting", value: "Growing" },
];

export default function LatestTripsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />

          <div className="container-px mx-auto max-w-6xl pt-20 pb-20 text-center sm:pt-28 sm:pb-24">
            <Reveal>
              <Badge variant="accent">Client adventures</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
                Latest <span className="text-gradient">Trips</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
                A snapshot of where our travelers have been lately, from cruise decks to
                island shores, all planned and booked through Passport Adventures.
              </p>
            </Reveal>

            <RevealGroup className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((s) => (
                <RevealItem key={s.label}>
                  <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card px-3 py-5 shadow-sm">
                    <s.icon className="size-5 text-primary" />
                    <span className="text-xl font-bold">{s.value}</span>
                    <span className="text-center text-xs text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Gallery */}
        <section className="container-px mx-auto max-w-6xl pb-20">
          <Reveal>
            <Gallery images={latestTripsImages} />
          </Reveal>
        </section>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold text-accent-foreground sm:text-5xl">
                Ready to plan your own adventure?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-accent-foreground/80">
                Your trip could be the next one on this page. Tell us where you want to go
                and we will build the itinerary around it.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Start planning <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/travel-packages">Browse group trips</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/content/data/tours";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";

export function HomeGroupTrips() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Group Trips
          </span>
          <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Unite and Explore Together
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Experience unforgettable adventures with friends, family, or
            colleagues. Our expertly planned group trips ensure fun,
            connection, and memories to treasure forever.
          </p>
        </div>
        <Button asChild variant="outline" size="lg" className="shrink-0 rounded-full">
          <Link href="/travel-packages">
            View All Group Trips
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
          {tours.map((tour) => (
            <ImageCard
              key={tour.slug}
              src={tour.cardImage}
              alt={tour.name}
              title={tour.name}
              description="Learn More"
              href={`/${tour.slug}`}
              className="h-full"
            />
          ))}
        </AutoSlider>
      </Reveal>
    </section>
  );
}

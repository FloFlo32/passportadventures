import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { tours } from "@/content/data/tours";

export const metadata: Metadata = {
  title: "Group Trips | Passport Adventures",
  description:
    "Experience unforgettable adventures with friends, family, or colleagues. Explore Passport Adventures' expertly planned group trips and cruises.",
};

export default function TravelPackagesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="container-px mx-auto max-w-6xl pt-10 pb-16 sm:pt-16">
          <Reveal>
            <Badge className="border-secondary bg-secondary text-secondary-foreground">
              Group Trips
            </Badge>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-bold sm:text-6xl">
              Unite and Explore Together
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              Experience unforgettable adventures with friends, family, or colleagues.
              Our expertly planned group trips ensure fun, connection, and memories to
              treasure forever.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-border bg-muted">
              <Image
                src="/ingested/passportadventures/svc-group-trip.webp"
                alt="A group of travelers enjoying a Passport Adventures trip together"
                width={1600}
                height={900}
                priority
                quality={75}
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Tour grid */}
        <section className="container-px mx-auto max-w-6xl pb-20">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Featured Trips</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            {tours.map((tour) => (
              <RevealItem key={tour.slug}>
                <ImageCard
                  href={`/${tour.slug}`}
                  src={tour.cardImage}
                  alt={tour.name}
                  eyebrow="Group Trip"
                  title={tour.name}
                  description={tour.tagline}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <AuroraBackground />
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-bold sm:text-4xl">
                Plan Your Adventure
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Have questions or ready to start your journey? Fill out our contact
                form and a dedicated travel advisor will guide you through every
                detail, helping you create unforgettable vacations filled with luxury,
                excitement, and personalized experiences.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact-us">
                    Start Now
                    <ArrowRight className="size-4" />
                  </Link>
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

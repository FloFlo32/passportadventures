import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, XCircle } from "lucide-react";
import type { Tour } from "@/content/data/tours";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AutoSlider } from "@/components/magic/auto-slider";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

/**
 * TourDetail: shared presentational layout for the 4 tour package pages.
 * Each page.tsx supplies its own `tour` (via getTour) and metadata; this
 * component keeps the visual language consistent while adapting gracefully
 * to whatever each tour's data actually contains (some tours have lighter
 * included/not-included lists, some extraSections have images and some don't).
 */
export function TourDetail({ tour }: { tour: Tour }) {
  const imageSections = tour.extraSections.filter((s) => s.image);
  const textSections = tour.extraSections.filter((s) => !s.image);
  const hasIncluded = tour.included.length > 0;
  const hasNotIncluded = tour.notIncluded.length > 0;

  return (
    <>
      {/* Hero: headline + tagline on a solid surface, real photo below (no scrim) */}
      <section className="container-px mx-auto max-w-6xl pt-10 pb-16 sm:pt-16">
        <Reveal>
          <Badge className="border-secondary bg-secondary text-secondary-foreground">
            Group Trip
          </Badge>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-bold sm:text-6xl">
            {tour.name}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            {tour.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact-us">
                Book Now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src={tour.heroImage}
              alt={tour.name}
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

      {/* Intro */}
      <section className="container-px mx-auto max-w-3xl pb-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Trip Overview
          </span>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {tour.intro}
          </p>
        </Reveal>
      </section>

      {/* Highlights strip */}
      {tour.highlights.length > 0 && (
        <section className="pb-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">Trip Highlights</h2>
            </Reveal>
          </div>
          <div className="container-px mx-auto mt-8 max-w-6xl">
            <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
              {tour.highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{h.title}</h3>
                  <p className="text-sm text-pretty text-muted-foreground">{h.text}</p>
                </div>
              ))}
            </AutoSlider>
          </div>
        </section>
      )}

      {/* Included / Not Included checklist */}
      {(hasIncluded || hasNotIncluded) && (
        <section className="container-px mx-auto max-w-6xl pb-20">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">What&apos;s Included</h2>
          </Reveal>
          <RevealGroup
            className={cn(
              "mt-8 grid gap-6",
              hasIncluded && hasNotIncluded ? "md:grid-cols-2" : "md:grid-cols-1"
            )}
          >
            {hasIncluded && (
              <RevealItem className="rounded-2xl border border-border bg-card p-7">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <CheckCircle2 className="size-5" />
                  Included
                </h3>
                <ul className="mt-5 space-y-3">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            )}
            {hasNotIncluded && (
              <RevealItem className="rounded-2xl border border-border bg-card p-7">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                  <XCircle className="size-5" />
                  Not Included
                </h3>
                <ul className="mt-5 space-y-3">
                  {tour.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            )}
          </RevealGroup>
        </section>
      )}

      {/* Extra sections with an image: alternating image/text rows */}
      {imageSections.length > 0 && (
        <section className="container-px mx-auto max-w-6xl space-y-16 pb-20">
          {imageSections.map((s, i) => (
            <Reveal key={s.title}>
              <div
                className={cn(
                  "flex flex-col items-center gap-8 md:gap-12",
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                <div className="w-full overflow-hidden rounded-3xl border border-border bg-muted md:w-1/2">
                  <Image
                    src={s.image!}
                    alt={s.title}
                    width={800}
                    height={600}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      )}

      {/* Extra sections without an image: supporting detail cards */}
      {textSections.length > 0 && (
        <section className="container-px mx-auto max-w-6xl pb-20">
          <RevealGroup
            className={cn(
              "grid gap-6",
              textSections.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
            )}
          >
            {textSections.map((s) => (
              <RevealItem
                key={s.title}
                className="h-full rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      {/* Closing CTA */}
      <section className="container-px mx-auto max-w-6xl pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
            <AuroraBackground />
            <h2 className="mx-auto max-w-xl text-balance text-3xl font-bold sm:text-4xl">
              Ready to Start Planning Your {tour.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Connect with a dedicated travel advisor who will guide you through every
              detail, from booking to boarding.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact-us">
                  Book Now
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

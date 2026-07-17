import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import { brand } from "@/brand.config";
import { services, serviceGallery } from "@/content/data/services";
import { testimonials, rating, googleReviews } from "@/content/data/reviews";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/magic/gallery";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Services | ${brand.name}`,
  description:
    "Explore group trip planning, dream vacation planning, the travel advisor program, and fun cruise adventures from Passport Adventures, Orlando's boutique travel concierge.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function teaser(text: string, max = 150) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "...";
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:grid-cols-2">
            <div>
              <Reveal>
                <Badge variant="accent">What We Offer</Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
                  Travel planning, <span className="text-gradient">handled</span> from
                  start to finish.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                  From group getaways to dream vacations crafted just for you, Passport
                  Adventures is your boutique travel concierge in Orlando, FL. Tell us
                  where you want to go, we handle every detail.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact-us">
                      Start Planning <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#gallery">See Our Trips</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/passportadventures/svc-dream-vacation.webp"
                  alt="Passport Adventures clients enjoying a planned vacation"
                  width={900}
                  height={720}
                  priority
                  quality={78}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services grid */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Our Services
            </span>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              Four ways we get you there
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/travel-planning/${service.slug}`}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-pointer",
                    i === 0 && "sm:col-span-2 sm:flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-muted",
                      i === 0 ? "aspect-[16/9] sm:aspect-[4/3] sm:w-1/2" : "aspect-[4/3]"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      quality={75}
                      sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 400px"}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      {service.price && (
                        <Badge variant="secondary" className="shrink-0">
                          {service.price}
                        </Badge>
                      )}
                    </div>
                    <p className="text-pretty text-sm text-muted-foreground">
                      {teaser(service.description)}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Gallery */}
        <section id="gallery" className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground">
              Real Trips
            </span>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              Trips We&apos;ve Planned
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              A look at the destinations, groups, and celebrations Passport Adventures
              has planned down to the last detail.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Gallery images={serviceGallery} />
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Traveler Stories
              </span>
              <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                What our travelers say
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-10">
            <AutoSlider itemClassName="w-[85%] sm:w-[60%] lg:w-[38%]">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <Quote className="size-6 text-secondary-foreground" />
                  <p className="flex-1 text-pretty text-sm text-muted-foreground">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    {t.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="size-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                        {initials(t.name)}
                      </span>
                    )}
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                </div>
              ))}
            </AutoSlider>
          </Reveal>
        </section>

        {/* Google reviews teaser */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-secondary-foreground">
                      {Array.from({ length: rating.score }).map((_, i) => (
                        <Star key={i} className="size-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">
                      {rating.score.toFixed(1)} out of 5
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Based on {rating.reviewCount} reviews on {rating.source}
                  </p>
                </div>
                <Button asChild size="lg" variant="outline">
                  <Link href="/reviews">See All Reviews</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {googleReviews.slice(0, 3).map((r) => (
                  <div
                    key={r.author}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <Quote className="size-5 text-primary" />
                    <p className="mt-3 text-pretty text-sm text-muted-foreground">
                      {r.comment}
                    </p>
                    <p className="mt-4 text-sm font-semibold">{r.author}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Let&apos;s Make Your Travel Plans a Reality
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Have questions or ready to plan your next getaway? Fill out our contact
                form, and we&apos;ll get back to you with personalized travel solutions
                crafted just for you.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Contact Us <ArrowRight className="size-4" />
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

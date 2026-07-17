import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote, ExternalLink } from "lucide-react";
import { brand } from "@/brand.config";
import { rating, googleReviews } from "@/content/data/reviews";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJQ0LdgAN-5IsRN0zgRPY-oBA";

export const metadata: Metadata = {
  title: `Reviews | ${brand.name}`,
  description:
    "See what travelers are saying about Passport Adventures, Orlando's 5-star rated travel concierge, and read real Google reviews from our clients.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-20 pb-24 sm:pt-28 sm:pb-28 lg:grid-cols-2">
            <div>
              <Reveal>
                <Badge variant="accent">Client Love</Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
                  Real trips. <span className="text-gradient">Real reviews.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                  We let our travelers do the talking. Here is what clients of Passport
                  Adventures have to say about planning their vacations with us.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="flex text-secondary-foreground">
                    {Array.from({ length: rating.score }).map((_, i) => (
                      <Star key={i} className="size-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {rating.score.toFixed(1)} out of 5, based on {rating.reviewCount}{" "}
                    reviews on {rating.source}
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/passportadventures/testimonial-3.webp"
                  alt="Passport Adventures client on a planned vacation"
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

        {/* Rating summary */}
        <section className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-12">
              <div className="flex text-secondary-foreground">
                {Array.from({ length: rating.score }).map((_, i) => (
                  <Star key={i} className="size-8 fill-current" />
                ))}
              </div>
              <p className="text-3xl font-bold">{rating.score.toFixed(1)} out of 5</p>
              <p className="text-muted-foreground">
                {rating.reviewCount} reviews on {rating.source}
              </p>
              <Button asChild size="lg" className="mt-2">
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                  Leave a Review <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* Full reviews list */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {rating.source}
            </span>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              What clients are saying
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {googleReviews.map((r) => (
              <RevealItem key={r.author}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex text-secondary-foreground">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="size-5 text-primary" />
                  </div>
                  <p className="flex-1 text-pretty text-sm text-muted-foreground">
                    {r.comment}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <span className="text-sm font-semibold">{r.author}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Ready to become our next 5-star trip?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Fill out our contact form and we will get back to you with personalized
                travel solutions crafted just for you.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Contact Us <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                    Read More on Google <ExternalLink className="size-4" />
                  </a>
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

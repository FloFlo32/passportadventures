import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Anchor, MapPin, Sparkles } from "lucide-react";
import { brand } from "@/brand.config";
import { mesha } from "@/content/data/mesha";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: `${mesha.name}, ${mesha.role} | ${brand.name}`,
  description:
    "Meet Mesha, founder of Passport Adventures. A Caribbean born, Orlando based travel advisor with cruise and Disney certifications who has spent years crafting luxury group trips on a budget.",
};

const certifications = [
  "Royal Caribbean",
  "Carnival",
  "Virgin Voyages",
  "Norwegian",
  "Disney Adventures",
];

// bio[0] is the lead-in used in the hero. bio[5] (the final line) becomes the
// pull quote. Everything in between renders as the article body.
const [lead, ...rest] = mesha.bio;
const pullQuote = rest[rest.length - 1];
const articleParagraphs = rest.slice(0, -1);

export default function AdvisorMeshaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Profile intro */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />

          <div className="container-px mx-auto max-w-6xl pt-20 pb-16 sm:pt-28">
            <RevealGroup className="grid items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
              <RevealItem>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/10">
                  <Image
                    src={mesha.image}
                    alt={`${mesha.name}, ${mesha.role} of ${brand.name}`}
                    fill
                    priority
                    quality={80}
                    sizes="(max-width: 768px) 90vw, 320px"
                    className="object-cover"
                  />
                </div>
              </RevealItem>

              <RevealItem>
                <Badge variant="accent">
                  <Sparkles className="size-3.5" /> {mesha.role}
                </Badge>
                <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
                  {mesha.name}
                </h1>
                <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <MapPin className="size-4 text-primary" /> Orlando, FL, by way of the Caribbean
                </p>
                <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                  {lead}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact-us">
                      Plan a trip with Mesha <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/travel-packages">See group trips</Link>
                  </Button>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </section>

        {/* Full bio, article + certifications sidebar */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <article className="max-w-2xl">
              <RevealGroup className="flex flex-col gap-6">
                {articleParagraphs.map((paragraph, i) => (
                  <RevealItem key={i}>
                    <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                      {paragraph}
                    </p>
                  </RevealItem>
                ))}

                <RevealItem>
                  <blockquote className="rounded-2xl border-l-4 border-primary bg-accent/40 py-5 pl-6 pr-5 text-xl font-medium italic text-foreground">
                    {pullQuote}
                  </blockquote>
                </RevealItem>
              </RevealGroup>
            </article>

            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Anchor className="size-5 text-primary" />
                    <h2 className="text-lg font-semibold">Certifications</h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Accredited across the cruise lines and specialty programs Mesha books most.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Founded
                    </p>
                    <p className="mt-1 text-2xl font-bold text-primary">2017</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {brand.name}, Orlando, FL
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Let&apos;s Make Your Travel Plans a{" "}
                <span className="text-gradient">Reality</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Reach out to Mesha and her team to start building an itinerary shaped around
                your budget, your people, and the kind of trip you actually want to take.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Contact Mesha <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${brand.contact.phone}`}>Call {brand.contact.phoneDisplay}</a>
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

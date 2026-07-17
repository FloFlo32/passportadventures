import Image from "next/image";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-3 pt-6">
      <AuroraBackground />
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-14">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                <Sparkles className="size-3.5" />
                Orlando, FL Travel Concierge
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-balance font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                Luxury Vacations{" "}
                <span className="text-primary">On a Budget</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-lg text-pretty text-lg text-muted-foreground">
                {brand.name} is a boutique travel agency based in Orlando, FL.
                We design custom group trips, dream vacations, and stress-free
                getaways tailored to you, from start to finish.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="rounded-full">
                  <a
                    href="https://www.cognitoforms.com/PassportAdventures1/HiringProcess"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Here
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={`tel:${brand.contact.phone}`}>
                    <Phone className="size-4 text-primary" />
                    {brand.contact.phoneDisplay}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative h-72 lg:h-full lg:min-h-[520px]">
            <Image
              src="/ingested/passportadventures/hero-home.webp"
              alt="Passport Adventures, luxury vacations on a budget"
              fill
              priority
              quality={80}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

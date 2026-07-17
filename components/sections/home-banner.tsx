import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export function HomeBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-primary shadow-xl">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-10 py-14 sm:p-14 sm:py-20">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
              Ready When You Are
            </span>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              Your Journey, Perfected
            </h2>
            <p className="max-w-md text-pretty text-primary-foreground/85">
              We take the stress out of travel by curating experiences that
              reflect your vision and make every moment count.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <a
                  href="https://www.cognitoforms.com/PassportAdventures1/HiringProcess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Here
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full md:min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/passportadventures/wonder-ocean.webp"
              alt="Wonder of the Seas cruise ship at sunset"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

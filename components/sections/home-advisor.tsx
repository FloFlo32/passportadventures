import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { meshaQuote } from "@/content/data/about";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export function HomeAdvisor() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <div className="grid items-stretch gap-0 md:grid-cols-[280px_1fr]">
          <div className="relative h-64 md:h-full md:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meshaQuote.image}
              alt="Mesha, your Passport Adventures travel advisor"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 py-12 sm:p-12 sm:py-16 lg:py-20">
            <Quote className="size-8 text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {meshaQuote.title}
            </span>
            <p className="text-pretty font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {meshaQuote.text}
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/advisor/mesha">
                  Meet Your Advisor
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

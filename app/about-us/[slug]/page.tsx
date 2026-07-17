import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { aboutCards } from "@/content/data/about";
import { brand } from "@/brand.config";

export function generateStaticParams() {
  return aboutCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = aboutCards.find((c) => c.slug === slug);
  if (!card) {
    return { title: `About Us | ${brand.name}` };
  }
  const description =
    card.text.length > 155 ? `${card.text.slice(0, 152)}...` : card.text;
  return {
    title: `${card.title} | ${brand.name}`,
    description,
  };
}

export default async function AboutDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = aboutCards.find((c) => c.slug === slug);

  if (!card) {
    notFound();
  }

  const others = aboutCards.filter((c) => c.slug !== card.slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 pt-10 pb-14 sm:px-6 sm:pb-20">
          <Reveal>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                <Compass className="size-3.5" />
                About {brand.name}
              </span>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {card.title}
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
          </Reveal>
        </article>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted shadow-lg shadow-primary/5 sm:aspect-[16/8]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority
                quality={78}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-pretty text-lg leading-relaxed text-foreground">
                {card.text}
              </p>
            </div>
          </div>
        </Reveal>

        {others.length > 0 && (
          <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
            <Reveal>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                More about us
              </h2>
            </Reveal>
            <RevealGroup className="mt-4 grid gap-6 sm:grid-cols-2">
              {others.map((other) => (
                <RevealItem key={other.slug}>
                  <ImageCard
                    src={other.image}
                    alt={other.title}
                    title={other.title}
                    description={other.text}
                    href={`/about-us/${other.slug}`}
                    className="h-full"
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        )}

        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-start gap-5 rounded-2xl bg-primary px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-balance text-xl font-semibold text-primary-foreground">
                Ready to start planning? Contact Passport Adventures.
              </p>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="cursor-pointer whitespace-nowrap"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

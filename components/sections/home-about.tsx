import { aboutCards } from "@/content/data/about";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export function HomeAbout() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          About Us
        </span>
        <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your Gateway to Unforgettable Travel
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          A boutique agency built on trust, expertise, and genuine care for
          every journey we plan.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((card) => (
          <RevealItem key={card.slug}>
            <ImageCard
              src={card.image}
              alt={card.title}
              title={card.title}
              description={card.text}
              href={`/about-us/${card.slug}`}
              className="h-full"
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/magic/marquee";
import { Reveal } from "@/components/magic/reveal";
import { InstagramIcon } from "@/components/icons";

const socialImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/ingested/passportadventures/gallery-${i + 1}.webp`,
  alt: `Passport Adventures travel moment ${i + 1}`,
}));

export function HomeSocial() {
  return (
    <section className="overflow-hidden py-20">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
          @passport_adv
        </span>
        <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Follow the Adventure
        </h2>
        <p className="max-w-lg text-pretty text-muted-foreground">
          Real trips, real clients, real memories. See where Passport
          Adventures is headed next.
        </p>
        <Button asChild size="lg" className="mt-2 rounded-full">
          <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="size-4" />
            Follow @passport_adv
          </a>
        </Button>
      </Reveal>

      <div className="mt-12">
        <Marquee pauseOnHover>
          {socialImages.map((img) => (
            <div
              key={img.src}
              className="size-56 shrink-0 overflow-hidden rounded-2xl border border-border sm:size-64"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

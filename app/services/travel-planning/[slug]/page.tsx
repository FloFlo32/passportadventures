import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { brand } from "@/brand.config";
import { services, getService } from "@/content/data/services";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: `Service | ${brand.name}` };
  }
  return {
    title: `${service.name} | ${brand.name}`,
    description: service.description.slice(0, 155),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((s) => s.slug !== service.slug);
  const ctaHref = service.bookingUrl ?? "/contact-us";
  const isExternal = Boolean(service.bookingUrl);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-20 pb-20 sm:pt-28 sm:pb-24 lg:grid-cols-2">
            <div>
              <Reveal>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="size-4" /> Back to Services
                </Link>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {service.price && (
                    <Badge variant="secondary" className="text-sm">
                      {service.price}
                    </Badge>
                  )}
                  <Badge variant="accent">Passport Adventures</Badge>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8">
                  <Button asChild size="lg">
                    {isExternal ? (
                      <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                        {service.bookingLabel} <ExternalLink className="size-4" />
                      </a>
                    ) : (
                      <Link href={ctaHref}>
                        {service.bookingLabel} <ArrowRight className="size-4" />
                      </Link>
                    )}
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src={service.image}
                  alt={service.name}
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

        {/* Full description */}
        <section className="container-px mx-auto max-w-3xl py-4 sm:py-8">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Reveal>
        </section>

        {/* CTA banner */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-bold sm:text-4xl">
                Ready to book your {service.name.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                {isExternal
                  ? "Take a look and reach out when you are ready to reserve your spot."
                  : "Reach out for a free consultation and we will start planning right away."}
              </p>
              <div className="mt-7 flex justify-center">
                <Button asChild size="lg">
                  {isExternal ? (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                      {service.bookingLabel} <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    <Link href={ctaHref}>
                      {service.bookingLabel} <ArrowRight className="size-4" />
                    </Link>
                  )}
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Related services */}
        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Explore More
            </span>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold sm:text-4xl">
              Other ways we can help
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <RevealItem key={s.slug}>
                <ImageCard
                  src={s.image}
                  alt={s.name}
                  title={s.name}
                  description={s.price || "Learn more"}
                  eyebrow="Service"
                  href={`/services/travel-planning/${s.slug}`}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1} className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                <ArrowLeft className="size-4" /> Back to All Services
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

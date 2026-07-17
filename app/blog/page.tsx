import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { brand } from "@/brand.config";
import { blogPosts, type BlogPost } from "@/content/data/blog-posts";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Travel tips, destination guides, and planning advice from the Passport Adventures team in Orlando, FL.",
};

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function excerptFromHtml(html: string, max = 150) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}...`;
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Calendar className="size-3.5" />
          {formatDate(post.date)}
        </span>
        <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">
          {excerptFromHtml(post.html)}
        </p>
        <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-accent-foreground transition-all group-hover:gap-2">
          Read more
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
  const heroImage = blogPosts[1]?.image ?? blogPosts[0].image;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-3 pt-6">
          <AuroraBackground />
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <div className="grid items-stretch gap-0 lg:grid-cols-2">
              <div className="flex flex-col justify-center gap-6 p-8 py-12 sm:p-12 sm:py-16 lg:p-16 lg:py-20">
                <Reveal>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                    <Sparkles className="size-3.5" />
                    Travel Journal
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h1 className="text-balance font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                    Blog
                  </h1>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="max-w-lg text-pretty text-lg text-muted-foreground">
                    Destination guides, budget tips, and planning advice from
                    the {brand.name} team, so your next trip feels effortless
                    from the first search to the final boarding call.
                  </p>
                </Reveal>
              </div>
              <Reveal
                delay={0.1}
                className="relative h-72 lg:h-full lg:min-h-[520px]"
              >
                <Image
                  src={heroImage}
                  alt="Passport Adventures travel blog"
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

        {/* Featured newest post */}
        <section className="container-px mx-auto max-w-6xl pt-16">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 md:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted md:aspect-auto md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                  Latest Story
                </span>
                <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
                  {featured.title}
                </h2>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Calendar className="size-3.5" />
                  {formatDate(featured.date)}
                </span>
                <p className="text-pretty text-muted-foreground">
                  {excerptFromHtml(featured.html, 220)}
                </p>
                <span className="inline-flex w-fit items-center gap-1 pt-1 font-semibold text-accent-foreground transition-all group-hover:gap-2">
                  Read more
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>

        {/* Post grid */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">More stories</h2>
            <p className="mt-3 text-muted-foreground">
              Fresh ideas for your next getaway, straight from our travel
              advisors.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <PostCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}

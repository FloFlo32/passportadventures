import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { brand } from "@/brand.config";
import { blogPosts, getBlogPost } from "@/content/data/blog-posts";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function excerptFromHtml(html: string, max = 155) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}...`;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };

  const description = excerptFromHtml(post.html);
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="container-px mx-auto max-w-4xl pt-10 pb-10 sm:pb-14">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={0.06} className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                quality={80}
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Calendar className="size-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                Travel Journal
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl">
              {post.title}
            </h1>
          </Reveal>
        </section>

        {/* Article body */}
        <Reveal delay={0.24}>
          <article
            className="prose-content container-px mx-auto max-w-3xl py-12 text-foreground/90
              [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-[family-name:var(--font-display)] [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground
              [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-[family-name:var(--font-display)] [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-foreground
              [&_h5]:mt-6 [&_h5]:mb-2 [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:text-foreground
              [&_p]:mt-4 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-muted-foreground
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground
              [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-muted-foreground
              [&_li]:leading-relaxed
              [&_strong]:font-semibold [&_strong]:text-foreground
              [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-primary/80
              [&_img]:mt-6 [&_img]:rounded-xl
              [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Reveal>

        {/* Closing CTA */}
        <section className="container-px mx-auto max-w-3xl pb-20">
          <Reveal>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Ready when you are
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Plan your next trip with {brand.name}
                </h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Tell us where you want to go and we will build the itinerary,
                  find the deals, and handle the details.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Contact Us
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/travel-packages">Browse Group Trips</Link>
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

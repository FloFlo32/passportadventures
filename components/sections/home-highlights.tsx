import {
  Compass,
  Award,
  Map,
  HeartHandshake,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { homeHighlights } from "@/content/data/about";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [Compass, Award, Map, HeartHandshake, ShieldCheck, Wallet];

export function HomeHighlights() {
  const items = homeHighlights.map((h, i) => ({ ...h, Icon: icons[i % icons.length] }));
  const [featured, second, ...rest] = items;
  const last = rest.pop();

  return (
    <section className="bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            Why Travel With Us
          </span>
          <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Sets Us Apart
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem className="sm:col-span-2 lg:col-span-2">
            <HighlightCard {...featured} featured />
          </RevealItem>
          <RevealItem>
            <HighlightCard {...second} />
          </RevealItem>
          {rest.map((item) => (
            <RevealItem key={item.title}>
              <HighlightCard {...item} />
            </RevealItem>
          ))}
          {last && (
            <RevealItem className="sm:col-span-2 lg:col-span-3">
              <HighlightCard {...last} banner />
            </RevealItem>
          )}
        </RevealGroup>
      </div>
    </section>
  );
}

function HighlightCard({
  title,
  text,
  Icon,
  featured = false,
  banner = false,
}: {
  title: string;
  text: string;
  Icon: LucideIcon;
  featured?: boolean;
  banner?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        featured && "justify-center bg-primary/5",
        banner && "flex-row items-center gap-6 bg-secondary/60"
      )}
    >
      <div
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-xl",
          banner ? "bg-card text-primary" : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className={cn("font-semibold text-foreground", featured ? "text-xl" : "text-lg")}>
          {title}
        </h3>
        <p className="mt-1.5 text-pretty text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

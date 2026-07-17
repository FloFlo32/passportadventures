"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/travel-packages", label: "Group Trips" },
  { href: "/services", label: "Services" },
  { href: "/advisor/mesha", label: "Your Advisor" },
  { href: "/portfolio/latest-trips", label: "Latest Trips" },
  { href: "/contact-us", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-3 z-50 w-full px-3">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 transition-all duration-300",
          scrolled
            ? "border-border/70 bg-card/90 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "border-border/40 bg-card/70 backdrop-blur-lg"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Passport Adventures"
            width={160}
            height={121}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === l.href && "bg-accent text-accent-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${brand.contact.phone}`}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4 text-primary" />
            {brand.contact.phoneDisplay}
          </a>
          <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
            <a
              href="https://www.cognitoforms.com/PassportAdventures1/HiringProcess"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Here
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  pathname === l.href && "bg-accent text-accent-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${brand.contact.phone}`}
              className="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground"
            >
              <Phone className="size-4 text-primary" />
              {brand.contact.phoneDisplay}
            </a>
            <Button asChild className="mt-1 rounded-full">
              <a
                href="https://www.cognitoforms.com/PassportAdventures1/HiringProcess"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Here
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

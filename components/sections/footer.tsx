import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons";

const explore = [
  { label: "Home", href: "/" },
  { label: "Group Trips", href: "/travel-packages" },
  { label: "Services", href: "/services" },
  { label: "Your Advisor", href: "/advisor/mesha" },
  { label: "Latest Trips", href: "/portfolio/latest-trips" },
  { label: "Blog", href: "/blog" },
];

const company = [
  { label: "Your Gateway to Unforgettable Travel", href: "/about-us/your-gateway-to-unforgettable-travel-6524344" },
  { label: "Passion Meets Professionalism", href: "/about-us/passion-meets-professionalism-6524345" },
  { label: "Tailored Travel Solutions", href: "/about-us/tailored-travel-solutions-for-every-occasion-6524346" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
];

const legal = [
  { label: "Merchant Policies", href: "/merchant-policies" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/return-and-refund-policy" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Passport Adventures"
              width={160}
              height={121}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline}. Your trusted travel concierge in Orlando, FL.
          </p>
          <div className="mt-5 flex gap-2">
            <Link
              href={brand.social.instagram}
              target="_blank"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link
              href={brand.social.facebook}
              target="_blank"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <Link
              href={brand.social.tiktok}
              target="_blank"
              aria-label="TikTok"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <TikTokIcon className="size-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2.5">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2.5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <a href={`tel:${brand.contact.phone}`} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="size-4 text-primary" />
              {brand.contact.phoneDisplay}
            </a>
            <a href={`mailto:${brand.social.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="size-4 text-primary" />
              {brand.social.email}
            </a>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {brand.contact.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="container-px mx-auto max-w-6xl text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  BRAND CONFIG — the single source of truth for this site.
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file most people need to edit to make the starter their own.
 *
 *  1. Edit the values below.
 *  2. Run:  npm run brand
 *
 *  The `brand` script propagates everything that can't be imported at runtime
 *  (package.json name, README title, theme colors in globals.css, env hints).
 *  Everything else (site name in the UI, <title>, OG metadata, footer, links)
 *  is imported directly from this file, so it updates the instant you save.
 *
 *  Colors use OKLCH — a perceptual color space. Keep the same lightness/chroma
 *  and just change the hue (the 3rd number) to re-skin the whole site:
 *    hue 265 = violet · 230 = blue · 160 = emerald · 25 = red · 70 = amber
 */

export const brand = {
  /** Product / company name. Shows in the nav, hero, footer, <title>, OG tags. */
  name: "Passport Adventures",

  /** One-line value prop. Used in the hero sub-headline + meta description. */
  tagline: "Luxury Vacations On a Budget",

  /** Longer description for SEO / Open Graph. ~150 chars is ideal. */
  description:
    "Passport Adventures is your trusted travel concierge in Orlando, FL. We specialize in custom group trips, luxury vacations on a budget, and stress-free planning. Book a consultation today.",

  /** Primary domain WITHOUT protocol. `/build` sets this to <project>.getyetti.com. */
  domain: "passportadventures.getyetti.com",

  /** Theme — drives the whole color system. Run `npm run brand` after editing. */
  theme: {
    /** Brand hue in OKLCH degrees (0–360). This single number re-skins the site. */
    hue: 212,
    /** Secondary accent hue, pulled from the logo's blush pink. */
    hue2: 19,
    /** Corner style. "sharp" = modern/editorial, "rounded" = friendly, "pill" = playful. */
    corners: "rounded" as "sharp" | "rounded" | "pill",
    /** Default color scheme on first paint. Light only, no dark mode for this brand. */
    defaultScheme: "light" as "light" | "dark",
  },

  /** Fonts. Any Google Font name works — edit, then run `npm run brand`. */
  fonts: {
    /** Big headlines. Pick something with PERSONALITY — this is what breaks the AI look. */
    display: "Fraunces",
    /** Body / UI text. Keep it clean and readable. */
    sans: "Plus Jakarta Sans",
    /** Code / labels / kbd. */
    mono: "JetBrains Mono",
  },

  /** Links shown in the footer + used by deploy scripts. */
  social: {
    github: "FloFlo32/passportadventures",
    x: "yourhandle",
    email: "info@passportadventures.org",
    instagram: "https://www.instagram.com/passport_adv",
    facebook: "https://www.facebook.com/passportadventures.org",
    tiktok: "https://www.tiktok.com/@passport_adventures",
  },

  /**
   * Contact + location. `npm run ingest` fills these from the scraped site.
   * - whatsapp: digits only, country code first, no "+". Set it and a click-to-chat
   *   widget appears (components/widget/whatsapp-widget.tsx).
   * - address + mapQuery: set them and the <Map> section renders a pin + embedded map.
   */
  contact: {
    whatsapp: "",
    phone: "+14072855000",
    phoneDisplay: "(407) 285-5000",
    bookingPhone: "+14078532006",
    bookingPhoneDisplay: "(407) 853-2006",
    address: "3174 Hill Point Street, Orlando, FL 34715",
    mapQuery: "Orlando, Florida",
  },
} as const;

export type Brand = typeof brand;
export default brand;

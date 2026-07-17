import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Map } from "@/components/sections/map";
import { ContactForm } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: `Contact Us | ${brand.name}`,
  description:
    "Get in touch with Passport Adventures in Orlando, FL. Fill out our contact form or reach us by phone or email to start planning your next getaway.",
};

const infoItems = [
  {
    icon: Phone,
    label: "Call or text",
    value: brand.contact.phoneDisplay,
    href: `tel:${brand.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: brand.social.email,
    href: `mailto:${brand.social.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: brand.contact.address,
    href: undefined,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />

          <div className="container-px mx-auto max-w-4xl pt-20 pb-20 text-center sm:pt-28 sm:pb-24">
            <Reveal>
              <Badge variant="accent">Get in touch</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
                Let&apos;s Make Your Travel Plans a{" "}
                <span className="text-gradient">Reality</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
                Have questions or ready to plan your next getaway? Fill out our contact
                form, and we&apos;ll get back to you with personalized travel solutions
                crafted just for you.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form + info */}
        <section className="container-px mx-auto max-w-6xl pb-20">
          <RevealGroup className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <RevealItem>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Tell us a little about your trip and we&apos;ll follow up with next steps.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-secondary/40 p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-accent-foreground">
                  Reach us directly
                </h2>
                <p className="text-sm text-accent-foreground/80">
                  Prefer to talk it through? Call, text, or email and a Passport
                  Adventures advisor will pick it up from there.
                </p>
                <div className="mt-2 flex flex-col gap-4">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-card text-primary ring-1 ring-primary/15">
                        <item.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground/70">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-accent-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-accent-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* Map / location */}
        <Reveal>
          <Map />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

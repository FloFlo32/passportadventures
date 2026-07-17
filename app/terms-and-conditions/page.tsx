import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { LegalHeader } from "@/components/legal/legal-header";
import { termsAndConditions } from "@/content/data/legal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${brand.name}`,
  description: `Terms and conditions for using ${brand.name}'s services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <LegalHeader
          title="Terms & Conditions"
          description="The terms that govern your use of our services."
        />
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-pretty text-base leading-relaxed text-foreground">
              {termsAndConditions}
            </p>
            <Link
              href={`tel:${brand.contact.phone}`}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="size-4" />
              Call {brand.contact.phoneDisplay}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

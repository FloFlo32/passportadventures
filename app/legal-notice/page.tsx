import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { LegalHeader } from "@/components/legal/legal-header";
import { legalNotice } from "@/content/data/legal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: `Legal Notice | ${brand.name}`,
  description: `Legal and registration information for ${brand.name}.`,
};

const fields: { label: string; value: string }[] = [
  { label: "Business Name", value: legalNotice.businessName },
  { label: "Registered Company Name", value: legalNotice.registeredName },
  { label: "Owner", value: legalNotice.owner },
  { label: "Phone Number", value: legalNotice.phoneDisplay },
  { label: "Email", value: legalNotice.email },
  { label: "Registered Office Address", value: legalNotice.address },
];

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <LegalHeader
          title="Legal Notice"
          description="The registration details for the company behind this website."
        />
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <dl className="divide-y divide-border">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="grid gap-1 px-6 py-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center sm:gap-4"
                >
                  <dt className="text-sm font-semibold text-muted-foreground">
                    {field.label}
                  </dt>
                  <dd className="text-base text-foreground">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

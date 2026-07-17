import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Wallet } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { LegalHeader } from "@/components/legal/legal-header";
import { merchantPolicies } from "@/content/data/legal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: `Merchant Policies | ${brand.name}`,
  description: `Delivery and payment policies for ${brand.name}.`,
};

const relatedPolicies = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Return & Refund Policy", href: "/return-and-refund-policy" },
];

export default function MerchantPoliciesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <LegalHeader
          title="Merchant Policies"
          description="How we deliver our services and the payment options we accept."
        />
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Truck className="size-4" />
                </span>
                <h2 className="text-base font-semibold text-foreground">
                  Delivery methods
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {merchantPolicies.deliveryMethods.map((method) => (
                  <li
                    key={method.name}
                    className="flex items-center justify-between text-sm text-muted-foreground"
                  >
                    <span>{method.name}</span>
                    <span className="font-medium text-foreground">
                      {method.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-accent-foreground">
                  <Wallet className="size-4" />
                </span>
                <h2 className="text-base font-semibold text-foreground">
                  Payment options
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {merchantPolicies.paymentMethods.map((method) => (
                  <li key={method} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {method}
                    </span>{" "}
                    accepted
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Related policies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {relatedPolicies.map((policy) => (
                <li key={policy.href}>
                  <Link
                    href={policy.href}
                    className="inline-flex cursor-pointer items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { LegalHeader } from "@/components/legal/legal-header";
import { privacyPolicy } from "@/content/data/legal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${brand.name}`,
  description: `How ${brand.name} collects, uses, and protects your personal information.`,
};

type Section = { heading?: string; body: string };

/**
 * privacyPolicy is one long real string with sections separated by blank
 * lines. A short line (no trailing period, under ~80 chars) that is
 * immediately followed by another block reads as a subheading, so pair it
 * with the block that follows it. Everything else stands alone as a
 * paragraph (e.g. the opening intro line).
 */
function toSections(text: string): Section[] {
  const blocks = text
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  const sections: Section[] = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    const looksLikeHeading =
      block.length < 80 && !block.endsWith(".") && i < blocks.length - 1;
    if (looksLikeHeading) {
      sections.push({ heading: block, body: blocks[i + 1] });
      i += 2;
    } else {
      sections.push({ body: block });
      i += 1;
    }
  }
  return sections;
}

export default function PrivacyPolicyPage() {
  const sections = toSections(privacyPolicy);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <LegalHeader
          title="Privacy Policy"
          description="How we collect, use, and share your personal information when you visit or make a purchase from this site."
        />
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="text-lg font-semibold text-foreground">
                      {section.heading}
                    </h2>
                  )}
                  <p
                    className={
                      section.heading
                        ? "mt-2 text-pretty text-sm leading-relaxed text-muted-foreground"
                        : "text-pretty text-base leading-relaxed text-foreground"
                    }
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * LegalHeader — shared simple header for the utility/legal pages
 * (legal notice, merchant policies, terms, privacy, refund policy).
 *
 * These pages are intentionally minimal per CLAUDE.md: no big animated hero,
 * just a clean labeled title with a teal eyebrow and pink accent divider so
 * they stay on-brand without forcing an unnecessary hero photo.
 */
export function LegalHeader({
  eyebrow = "Legal",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <div className="mt-4 h-1 w-16 rounded-full bg-secondary" aria-hidden="true" />
      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

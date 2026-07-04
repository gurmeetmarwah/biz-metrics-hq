import type { ProfitabilitySeoContent } from "@/lib/industries/profitability-seo";

/** Compact long-tail profitability Q&A + metric cards (HVAC-style). */
export function IndustryProfitabilitySeo({
  content,
}: {
  content: Pick<ProfitabilitySeoContent, "lead" | "sections" | "takeaways">;
}) {
  return (
    <>
      <p className="max-w-3xl text-sm text-ink-muted sm:text-base">{content.lead}</p>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {content.takeaways.map((item) => (
          <li key={item.label} className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm font-medium text-ink-muted">{item.label}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-metric-margin">{item.value}</p>
            <p className="mt-2 text-xs text-ink-faint">{item.note}</p>
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {content.sections.map((section) => (
          <li key={section.heading} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-display text-base font-semibold text-ink">{section.heading}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{section.answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

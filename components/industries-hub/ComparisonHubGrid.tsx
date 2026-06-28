import Link from "next/link";
import { hubComparisons } from "@/lib/industries-hub";

export function ComparisonHubGrid() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hubComparisons.map((comparison) => (
          <li key={comparison.href}>
            <Link
              href={comparison.href}
              className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-center justify-between gap-2 text-sm font-semibold text-ink">
                <span className="rounded-lg bg-accent-soft px-2.5 py-1 text-accent">{comparison.left}</span>
                <span className="text-xs font-bold text-ink-faint">VS</span>
                <span className="rounded-lg bg-surface-muted px-2.5 py-1 text-ink-muted">{comparison.right}</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                Side-by-side revenue, margins, startup costs, and valuation.
              </p>
              <span className="mt-auto pt-4 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Compare →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/comparisons/hvac-vs-plumbing/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Browse All Comparisons
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}

import Link from "next/link";
import { featuredCalculators } from "@/lib/industries-hub";

export function FeaturedCalculatorsGrid() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {featuredCalculators.map((calculator) => (
          <li key={calculator.href}>
            <Link
              href={calculator.href}
              className="card-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5"
            >
              <div
                className="absolute top-0 left-0 h-full w-1"
                style={{ background: calculator.accent }}
                aria-hidden="true"
              />
              <h3 className="font-display text-sm font-semibold leading-snug text-ink group-hover:text-accent">
                {calculator.label}
              </h3>
              <span className="mt-auto pt-4 text-xs font-semibold" style={{ color: calculator.accent }}>
                Open calculator →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/calculators/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Browse All Calculators
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}

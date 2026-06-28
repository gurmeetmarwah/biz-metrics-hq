import Link from "next/link";
import { mostViewedIndustries } from "@/lib/industries-hub";

export function MostViewedIndustries() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {mostViewedIndustries.map((industry, index) => (
        <li key={industry.href}>
          <Link
            href={industry.href}
            className="card-interactive group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-sm font-bold text-ink-faint">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium text-ink group-hover:text-accent">{industry.label}</span>
              <span className="mt-0.5 block text-xs text-ink-faint">{industry.views} views</span>
            </span>
            <svg
              className="size-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

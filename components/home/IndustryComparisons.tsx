import Link from "next/link";
import { comparisons } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustryComparisons() {
  return (
    <section aria-labelledby="comparisons-heading" className="border-b border-border/60 bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="comparisons-heading"
            title="Compare Businesses"
            subtitle="Side-by-side economics to help you evaluate opportunities."
          />
        </AnimateIn>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {comparisons.map((comparison, index) => (
            <li key={comparison.href}>
              <AnimateIn delay={index * 80}>
                <Link
                  href={comparison.href}
                  className="card-interactive group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-xs font-bold text-accent"
                      aria-hidden="true"
                    >
                      VS
                    </span>
                    <span className="font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                      {comparison.label}
                    </span>
                  </div>
                  <svg
                    className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

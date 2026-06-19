import Link from "next/link";
import { featuredBenchmarks } from "@/lib/benchmarks";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenchmarkRange } from "@/components/ui/BenchmarkRange";

const cardAccents = [
  "var(--metric-margin)",
  "var(--metric-salary)",
  "var(--metric-revenue)",
  "var(--metric-valuation)",
];

const metricKeys = ["revenue", "margin", "ownerSalary", "valuation"] as const;

export function FeaturedBenchmarks() {
  return (
    <section aria-labelledby="featured-heading" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="featured-heading"
            title="Featured Industry Benchmarks"
            subtitle="Interquartile ranges and medians — not single-point estimates. Every figure links to our published methodology."
          />
        </AnimateIn>

        <ul className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
          {featuredBenchmarks.map((benchmark, index) => (
            <li key={benchmark.href} className="h-full">
              <AnimateIn delay={index * 100} className="h-full">
                <article className="card-interactive group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
                  <div
                    className="h-1 w-full shrink-0"
                    style={{ background: cardAccents[index] }}
                    aria-hidden="true"
                  />
                  <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7">
                    <div className="flex min-h-[3.25rem] items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                        {benchmark.title}
                      </h3>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{
                          background: `color-mix(in srgb, ${cardAccents[index]} 12%, transparent)`,
                          color: cardAccents[index],
                        }}
                      >
                        {benchmark.industry}
                      </span>
                    </div>

                    <div
                      className="mt-4 flex min-h-[1.75rem] flex-wrap gap-2 text-xs text-ink-faint"
                      aria-label="Data provenance"
                    >
                      <span className="rounded-md bg-surface-muted px-2 py-1 font-medium">
                        n={benchmark.sampleSize}
                      </span>
                      <span className="rounded-md bg-surface-muted px-2 py-1 font-medium">
                        {benchmark.geography}
                      </span>
                      <span className="rounded-md bg-surface-muted px-2 py-1 font-medium">
                        Updated {benchmark.dataVintage}
                      </span>
                    </div>

                    <dl className="mt-4 flex-1 divide-y divide-border-subtle">
                      {metricKeys.map((key) => (
                        <BenchmarkRange
                          key={key}
                          metric={benchmark.metrics[key]}
                        />
                      ))}
                    </dl>

                    <div className="mt-auto flex flex-col gap-3 border-t border-border-subtle pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <Link
                        href="/methodology/"
                        className="text-xs font-medium text-ink-muted underline decoration-ink-faint underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        How we calculate this →
                      </Link>
                      <Link
                        href={benchmark.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                        style={{ color: cardAccents[index] }}
                      >
                        View full benchmarks
                        <svg
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

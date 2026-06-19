import Link from "next/link";
import { metrics } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const metricStyles = [
  {
    accent: "metric-accent-revenue",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.242 0l.879.659Z" />
      </svg>
    ),
  },
  {
    accent: "metric-accent-margin",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    accent: "metric-accent-valuation",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export function BrowseByMetric() {
  return (
    <section aria-labelledby="browse-metrics-heading" className="border-b border-border/60 bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="browse-metrics-heading"
            title="Browse Industry Data"
            subtitle="Jump straight to the metric that matters most to your business."
          />
        </AnimateIn>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {metrics.map((metric, index) => {
            const style = metricStyles[index];
            return (
              <li key={metric.href}>
                <AnimateIn delay={index * 100}>
                  <Link
                    href={metric.href}
                    className={`card-interactive group ${style.accent} relative flex gap-5 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8`}
                  >
                    <div
                      className="absolute top-0 left-0 h-full w-1 rounded-l-2xl"
                      style={{ background: "var(--card-accent)" }}
                      aria-hidden="true"
                    />
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200"
                      style={{
                        background: "color-mix(in srgb, var(--card-accent) 12%, transparent)",
                        color: "var(--card-accent)",
                      }}
                    >
                      {style.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-[var(--card-accent)] sm:text-xl">
                        {metric.label}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                        {metric.description}
                      </span>
                    </div>
                    <svg
                      className="size-5 shrink-0 self-center text-ink-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--card-accent)]"
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}

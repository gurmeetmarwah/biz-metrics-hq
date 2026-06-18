import Link from "next/link";
import {
  calculationSteps,
  dataSources,
  limitations,
  methodologyPillars,
  methodologySummary,
  metricDefinitions,
} from "@/lib/methodology";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MethodologySection() {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      className="border-b border-border/60 bg-surface-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="methodology-heading"
            title="Our Methodology"
            subtitle="Transparent, reproducible benchmarks built for trust. We publish how every number is sourced, calculated, and limited."
          />
        </AnimateIn>

        <AnimateIn delay={80}>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-border bg-surface px-4 py-1.5 font-medium text-ink-muted">
              Last updated {methodologySummary.lastUpdated}
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-1.5 font-medium text-ink-muted">
              {methodologySummary.updateCadence} refresh
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-1.5 font-medium text-ink-muted">
              {methodologySummary.totalSamples} data points
            </span>
          </div>
        </AnimateIn>

        {/* E-E-A-T pillars */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {methodologyPillars.map((pillar, index) => (
            <AnimateIn key={pillar.id} delay={index * 80}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-sm font-bold text-accent">
                    {pillar.title[0]}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-accent">
                      {pillar.eeAt}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* Calculation pipeline */}
        <AnimateIn delay={100}>
          <div className="mt-12">
            <h3 className="font-display text-lg font-semibold text-ink">
              How benchmarks are calculated
            </h3>
            <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-4">
              {calculationSteps.map((step) => (
                <li
                  key={step.step}
                  className="relative rounded-xl border border-border bg-surface p-4"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Metric definitions */}
          <AnimateIn delay={120}>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                Metric definitions
              </h3>
              <dl className="mt-4 divide-y divide-border-subtle rounded-xl border border-border bg-surface">
                {metricDefinitions.map((item) => (
                  <div key={item.term} className="px-5 py-4">
                    <dt className="text-sm font-semibold text-ink">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateIn>

          {/* Sources & limitations */}
          <AnimateIn delay={160}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Data sources
                </h3>
                <ul className="mt-4 space-y-2">
                  {dataSources.map((source) => (
                    <li
                      key={source}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <svg
                        className="mt-0.5 size-4 shrink-0 text-metric-revenue"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-7.5" />
                      </svg>
                      {source}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Limitations & disclaimers
                </h3>
                <ul className="mt-4 space-y-2">
                  {limitations.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <svg
                        className="mt-0.5 size-4 shrink-0 text-metric-salary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={200}>
          <div className="mt-10 rounded-2xl border border-accent/20 bg-accent-soft/50 px-6 py-5 text-center sm:px-8">
            <p className="text-sm text-ink-muted">
              Every industry page includes sample size, data vintage, and metric
              definitions. Questions about our data?{" "}
              <Link
                href="/methodology/"
                className="font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                Read the full methodology
              </Link>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import type { BusinessScorecardRating } from "@/lib/industries/business-scorecard";

type BenchmarkStat = {
  metric: string;
  value: string;
};

export function RecurringRevenueBenchmarkPanel({
  title,
  subtitle,
  benchmarks,
}: {
  title: string;
  subtitle?: string;
  benchmarks: readonly BenchmarkStat[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display font-semibold text-ink">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {benchmarks.map((item) => (
          <div
            key={item.metric}
            className="rounded-xl border border-border bg-surface-muted/30 px-4 py-4"
          >
            <dt className="text-sm text-ink-muted">{item.metric}</dt>
            <dd className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type RetentionMetric = {
  metric: string;
  value: string;
  description: string;
};

export function CustomerRetentionDashboardPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly RetentionMetric[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-surface via-surface to-accent-soft/20 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
          Pest Control Exclusive
        </p>
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <ul className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {items.map((item, i) => (
          <li
            key={item.metric}
            className={`px-6 py-6 sm:px-8 ${i < items.length - 1 ? "sm:border-r sm:border-border-subtle" : ""}`}
          >
            <p className="text-sm font-medium text-ink-muted">{item.metric}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{item.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-faint">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type InvestorScoreItem = {
  label: string;
  rating: BusinessScorecardRating;
};

export function InvestorAttractivenessPanel({
  title,
  overallRating,
  items,
}: {
  title: string;
  overallRating: number;
  items: readonly InvestorScoreItem[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent-soft/40 via-surface to-surface shadow-md">
      <div className="border-b border-accent/20 bg-gradient-to-r from-accent-soft/60 to-surface px-6 py-6 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
          Investor Attractiveness
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
          <div className="rounded-2xl border border-accent/30 bg-surface px-5 py-3 text-center shadow-sm">
            <p className="text-[10px] font-semibold tracking-wide text-ink-faint uppercase">Overall Rating</p>
            <p className="text-3xl font-bold tabular-nums text-accent">{overallRating.toFixed(1)}</p>
            <p className="text-xs text-ink-muted">out of 10</p>
          </div>
        </div>
      </div>
      <ul className="divide-y divide-border-subtle sm:grid sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={`flex flex-col items-center px-6 py-6 text-center sm:px-4 ${
              i < items.length - 1 ? "sm:border-r sm:border-border-subtle" : ""
            }`}
          >
            <span className="text-sm font-medium text-ink-muted">{item.label}</span>
            <div className="mt-3 flex items-center gap-0.5" aria-label={`${item.rating} out of 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`text-lg ${n <= item.rating ? "text-accent" : "text-border"}`}
                  aria-hidden="true"
                >
                  {n <= item.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-accent/15 bg-surface-muted/30 px-6 py-4 sm:px-8">
        <p className="text-sm text-ink-muted">
          Pest control ranks among the most acquisition-friendly home service industries — driven by
          subscription revenue, high retention, and active PE consolidation activity.
        </p>
      </div>
    </div>
  );
}

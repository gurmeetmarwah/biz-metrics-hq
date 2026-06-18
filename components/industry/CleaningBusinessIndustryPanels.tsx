import type { BusinessScorecardRating } from "@/lib/industries/business-scorecard";

type BenchmarkStat = {
  metric: string;
  value: string;
};

export function ContractRevenueBenchmarkPanel({
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

type EfficiencyMetric = {
  metric: string;
  value: string;
  description: string;
};

export function LaborEfficiencyDashboardPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly EfficiencyMetric[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-surface via-surface to-accent-soft/20 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
          Cleaning Business Exclusive
        </p>
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <ul className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 lg:grid-cols-5 lg:divide-y-0">
        {items.map((item, i) => (
          <li
            key={item.metric}
            className={`px-6 py-6 sm:px-5 ${
              i < items.length - 1 ? "lg:border-r lg:border-border-subtle" : ""
            } ${i < items.length - 2 ? "sm:border-r sm:border-border-subtle lg:border-r-0" : ""}`}
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

type SegmentData = {
  title: string;
  traits: readonly string[];
};

export function CommercialVsResidentialPanel({
  commercial,
  residential,
}: {
  commercial: SegmentData;
  residential: SegmentData;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h3 className="font-display font-semibold text-ink">{commercial.title}</h3>
        <ul className="mt-6 space-y-3">
          {commercial.traits.map((trait) => (
            <li key={trait} className="flex items-start gap-3 text-sm text-ink-muted">
              <span className="mt-0.5 text-metric-revenue" aria-hidden="true">
                ●
              </span>
              {trait}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-accent/25 bg-accent-soft/20 p-6 sm:p-8">
        <h3 className="font-display font-semibold text-ink">{residential.title}</h3>
        <ul className="mt-6 space-y-3">
          {residential.traits.map((trait) => (
            <li key={trait} className="flex items-start gap-3 text-sm text-ink-muted">
              <span className="mt-0.5 text-accent" aria-hidden="true">
                ●
              </span>
              {trait}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const barColors = [
  "bg-metric-revenue/70",
  "bg-accent/60",
  "bg-metric-margin/60",
  "bg-metric-salary/50",
  "bg-metric-valuation/55",
];

type CompositionItem = {
  label: string;
  share: number;
  description: string;
};

export function BusinessModelBenchmarkPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly CompositionItem[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-accent/25 bg-gradient-to-br from-accent-soft/30 via-surface to-surface p-6 sm:p-8">
      <p className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
        Cleaning Business Exclusive
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}

      <div className="mt-6 flex h-5 overflow-hidden rounded-full bg-surface-muted">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`${barColors[i % barColors.length]} transition-all`}
            style={{ width: `${item.share}%` }}
            title={`${item.label}: ${item.share}%`}
          />
        ))}
      </div>

      <ul className="mt-8 space-y-3">
        {items.map((item, i) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/80 px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className={`h-3 w-3 shrink-0 rounded-full ${barColors[i % barColors.length]}`}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="font-semibold text-ink">{item.label}</p>
                <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
              </div>
            </div>
            <span className="shrink-0 text-lg font-bold tabular-nums text-accent">{item.share}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type RecurringItem = {
  industry: string;
  rating: BusinessScorecardRating;
  highlight?: boolean;
};

export function RecurringRevenueComparisonPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly RecurringItem[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display font-semibold text-ink">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      <ul className="mt-6 divide-y divide-border-subtle">
        {items.map((item) => (
          <li
            key={item.industry}
            className={`flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0 ${
              item.highlight ? "rounded-xl bg-accent-soft/30 px-4 -mx-4" : ""
            }`}
          >
            <span className={`text-sm font-medium ${item.highlight ? "font-semibold text-ink" : "text-ink-muted"}`}>
              {item.industry}
            </span>
            <div className="flex items-center gap-0.5" aria-label={`${item.rating} out of 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`text-base ${n <= item.rating ? "text-accent" : "text-border"}`}
                  aria-hidden="true"
                >
                  {n <= item.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

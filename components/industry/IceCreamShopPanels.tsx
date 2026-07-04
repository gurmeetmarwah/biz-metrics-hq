import type { BusinessScorecardRating } from "@/lib/industries/business-scorecard";

type BenchmarkRow = { metric: string; value: string };

function StarRating({
  rating,
  label,
  higherIsWorse = false,
}: {
  rating: number;
  label: string;
  higherIsWorse?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${label}: ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`text-base leading-none sm:text-lg ${
            n <= rating
              ? higherIsWorse
                ? "text-ink-muted"
                : "text-accent"
              : "text-border"
          }`}
          aria-hidden="true"
        >
          {n <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function BenchmarkTable({
  title,
  subtitle,
  badge,
  items,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  items: readonly BenchmarkRow[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/50 px-5 py-4 sm:px-6">
        {badge && (
          <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
            {badge}
          </p>
        )}
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-muted/30">
            <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
            <th className="px-5 py-3.5 text-right font-semibold text-ink">Benchmark</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr
              key={row.metric}
              className={i < items.length - 1 ? "border-b border-border-subtle" : ""}
            >
              <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SalesMetricsPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly BenchmarkRow[];
}) {
  return (
    <BenchmarkTable
      title={title}
      subtitle={subtitle}
      badge="Ice Cream Exclusive"
      items={items}
    />
  );
}

export function SeasonalPerformancePanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly BenchmarkRow[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-metric-revenue/25 bg-gradient-to-br from-surface via-surface to-metric-revenue/5 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-metric-revenue uppercase">
          Signature Section
        </p>
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-muted/30">
            <th className="px-5 py-3.5 text-left font-semibold text-ink">Period</th>
            <th className="px-5 py-3.5 text-right font-semibold text-ink">Benchmark</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr
              key={row.metric}
              className={i < items.length - 1 ? "border-b border-border-subtle" : ""}
            >
              <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-metric-revenue">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MenuMixPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly { item: string; share: string; note: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/50 px-5 py-4 sm:px-6">
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-muted/30">
            <th className="px-5 py-3.5 text-left font-semibold text-ink">Menu Category</th>
            <th className="px-5 py-3.5 text-right font-semibold text-ink">Share</th>
            <th className="hidden px-5 py-3.5 text-left font-semibold text-ink sm:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr
              key={row.item}
              className={i < items.length - 1 ? "border-b border-border-subtle" : ""}
            >
              <td className="px-5 py-4 font-medium text-ink">{row.item}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-accent">
                {row.share}
              </td>
              <td className="hidden px-5 py-4 text-ink-muted sm:table-cell">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StartupCostBreakdownPanel({
  title,
  subtitle,
  items,
  totalRange,
}: {
  title: string;
  subtitle?: string;
  items: readonly { item: string; range: string; percent: string }[];
  totalRange: { low: string; median: string; high: string };
}) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((row) => (
          <article
            key={row.item}
            className="rounded-2xl border border-border bg-surface p-5 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-ink-muted">{row.item}</p>
            <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
            <p className="mt-1 text-xs text-ink-faint">{row.percent} of budget</p>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-accent/25 bg-accent-soft/20 p-6 text-center sm:p-8">
        <p className="text-sm text-ink-muted">{title}</p>
        {subtitle && <p className="mt-2 text-sm text-ink-faint">{subtitle}</p>}
        <p className="mt-4 text-3xl font-bold tabular-nums text-ink">
          {totalRange.low} – {totalRange.high}
        </p>
        <p className="mt-2 text-sm text-ink-muted">Median launch investment: {totalRange.median}</p>
      </div>
    </div>
  );
}

export function OperatingMetricsDashboard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly BenchmarkRow[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-surface via-surface to-accent-soft/20 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
          Operator Intelligence
        </p>
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <ul className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.metric}
            className={`px-6 py-6 sm:px-8 ${i < items.length - 1 ? "sm:border-r sm:border-border-subtle" : ""}`}
          >
            <p className="text-sm font-medium text-ink-muted">{item.metric}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type DessertComparison = {
  columns: readonly string[];
  rows: readonly {
    metric: string;
    values: readonly BusinessScorecardRating[];
    higherIsWorse?: boolean;
  }[];
};

export function DessertBusinessBenchmarkMatrix({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle?: string;
  data: DessertComparison;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-surface via-surface to-accent-soft/10 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/50 px-5 py-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
          BizMetricsHQ Signature
        </p>
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[44rem] text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/30">
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
              {data.columns.map((col) => (
                <th key={col} className="px-5 py-3.5 text-center font-semibold text-ink">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr
                key={row.metric}
                className={i < data.rows.length - 1 ? "border-b border-border-subtle" : ""}
              >
                <td className="px-5 py-4 font-medium text-ink-muted">{row.metric}</td>
                {row.values.map((rating, j) => (
                  <td key={data.columns[j]} className="px-5 py-4">
                    <div className="flex justify-center">
                      <StarRating
                        rating={rating}
                        label={`${row.metric} — ${data.columns[j]}`}
                        higherIsWorse={row.higherIsWorse}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

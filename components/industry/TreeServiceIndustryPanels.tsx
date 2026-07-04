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
    <div className="flex items-center gap-0.5" role="img" aria-label={`${label}: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`text-base leading-none sm:text-lg ${
            n <= rating ? (higherIsWorse ? "text-ink-muted" : "text-accent") : "text-border"
          }`}
          aria-hidden="true"
        >
          {n <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function ServiceMetricsPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly BenchmarkRow[];
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
            <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
            <th className="px-5 py-3.5 text-right font-semibold text-ink">Benchmark</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr key={row.metric} className={i < items.length - 1 ? "border-b border-border-subtle" : ""}>
              <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EquipmentDashboard({
  title,
  subtitle,
  items,
  summary,
}: {
  title: string;
  subtitle?: string;
  items: readonly { item: string; range: string; note: string }[];
  summary: readonly BenchmarkRow[];
}) {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl border-2 border-metric-valuation/25 bg-gradient-to-br from-surface via-surface to-metric-valuation/5 shadow-sm">
        <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-metric-valuation uppercase">
            Signature Section
          </p>
          <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{title}</h3>
          {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
        </div>
        <ul className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
          {items.map((row, i) => (
            <li
              key={row.item}
              className={`px-6 py-6 sm:px-8 ${i < items.length - 1 ? "sm:border-r sm:border-border-subtle" : ""}`}
            >
              <p className="font-semibold text-ink">{row.item}</p>
              <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
              <p className="mt-2 text-xs text-ink-muted">{row.note}</p>
            </li>
          ))}
        </ul>
      </div>
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summary.map((row) => (
          <div key={row.metric} className="rounded-2xl border border-border bg-surface p-5 text-center">
            <dt className="text-sm text-ink-muted">{row.metric}</dt>
            <dd className="mt-2 text-lg font-bold tabular-nums text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type ServiceMatrixRow = {
  service: string;
  avgTicket: string;
  margin: string;
  startupCost: string;
  recurringRevenue: string;
};

export function ServiceBenchmarkMatrix({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle?: string;
  rows: readonly ServiceMatrixRow[];
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
        <table className="w-full min-w-[40rem] text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/30">
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Service</th>
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Avg Ticket</th>
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Margin</th>
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Startup Cost</th>
              <th className="px-5 py-3.5 text-left font-semibold text-ink">Recurring Revenue</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.service} className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}>
                <td className="px-5 py-4 font-medium text-ink">{row.service}</td>
                <td className="px-5 py-4 tabular-nums text-ink-muted">{row.avgTicket}</td>
                <td className="px-5 py-4 text-ink-muted">{row.margin}</td>
                <td className="px-5 py-4 text-ink-muted">{row.startupCost}</td>
                <td className="px-5 py-4 text-ink-muted">{row.recurringRevenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type CrewEconomicsComparison = {
  columns: readonly string[];
  rows: readonly {
    metric: string;
    values: readonly BusinessScorecardRating[];
    higherIsWorse?: boolean;
  }[];
};

export function CrewEquipmentEconomicsMatrix({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle?: string;
  data: CrewEconomicsComparison;
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

export { StartupCostBreakdownPanel, OperatingMetricsDashboard } from "@/components/industry/PoolServiceIndustryPanels";

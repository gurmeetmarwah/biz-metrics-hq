import type { BusinessScorecardRating } from "@/lib/industries/business-scorecard";
import type { SourcedMemberMetric } from "@/lib/industries/gym";
import { MembershipEconomicsPanel } from "@/components/industry/GymIndustryPanels";

type BenchmarkRow = { metric: string; value: string; isRating?: boolean };

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
                {row.isRating ? (
                  <div className="flex justify-end">
                    <StarRating rating={5} label={row.metric} />
                  </div>
                ) : (
                  row.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MemberRetentionDashboard({
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
      badge="CrossFit Exclusive"
      items={items}
    />
  );
}

export function ClassUtilizationPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly { metric: string; value: string }[];
}) {
  return (
    <BenchmarkTable
      title={title}
      subtitle={subtitle}
      badge="Coached Fitness Intelligence"
      items={items}
    />
  );
}

export function CoachProductivityPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly { metric: string; value: string }[];
}) {
  return (
    <BenchmarkTable
      title={title}
      subtitle={subtitle}
      badge="Operator Intelligence"
      items={items}
    />
  );
}

export function MemberEconomicsDashboard({
  title,
  subtitle,
  items,
  methodologySummary,
  primarySources,
}: {
  title: string;
  subtitle?: string;
  items: readonly SourcedMemberMetric[];
  methodologySummary?: string;
  primarySources?: readonly string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-surface via-surface to-accent-soft/20 shadow-sm">
      <div className="border-b border-border-subtle bg-surface-muted/40 px-6 py-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
          CrossFit Exclusive
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
            {item.range && (
              <p className="mt-1 text-xs font-medium tabular-nums text-ink-muted">Range: {item.range}</p>
            )}
            <p className="mt-2 text-xs leading-relaxed text-ink-faint">{item.description}</p>
            {item.formula && (
              <p className="mt-2 font-mono text-[10px] leading-relaxed text-ink-faint">{item.formula}</p>
            )}
            <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">
              <span className="font-semibold text-ink-muted">Source:</span> {item.source}
            </p>
          </li>
        ))}
      </ul>
      {(methodologySummary || primarySources) && (
        <div className="border-t border-border-subtle bg-surface-muted/30 px-6 py-5 sm:px-8">
          {methodologySummary && (
            <p className="text-xs leading-relaxed text-ink-muted">{methodologySummary}</p>
          )}
          {primarySources && primarySources.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold text-ink">Primary sources</p>
              <ul className="mt-2 space-y-1.5">
                {primarySources.map((source) => (
                  <li key={source} className="flex gap-2 text-xs text-ink-muted">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

type FitnessComparison = {
  columns: readonly string[];
  rows: readonly {
    metric: string;
    values: readonly BusinessScorecardRating[];
    higherIsWorse?: boolean;
  }[];
};

export function FunctionalFitnessBenchmarkMatrix({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle?: string;
  data: FitnessComparison;
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

export { MembershipEconomicsPanel };

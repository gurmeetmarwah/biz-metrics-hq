import type { BusinessScorecardRating } from "@/lib/industries/business-scorecard";

type RecurringRevenueItem = {
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
  items: readonly RecurringRevenueItem[];
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

type MarketCondition = {
  driver: string;
  status: string;
  rating: number;
  note: string;
};

const ratingColors = [
  "bg-surface-muted",
  "bg-metric-salary/30",
  "bg-metric-margin/35",
  "bg-accent/40",
  "bg-metric-revenue/45",
];

export function MarketConditionsPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly MarketCondition[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display font-semibold text-ink">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.driver} className="rounded-xl border border-border bg-surface-muted/30 p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-ink">{item.driver}</p>
              <span
                className={`inline-flex shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  item.rating >= 4
                    ? "bg-metric-revenue/15 text-metric-revenue"
                    : item.rating <= 2
                      ? "bg-metric-salary/15 text-metric-salary"
                      : "bg-accent-soft text-accent"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`h-1.5 flex-1 rounded-full ${n <= item.rating ? ratingColors[item.rating] : "bg-surface-muted"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-muted">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

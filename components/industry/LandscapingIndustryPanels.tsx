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

export function RevenueCompositionBenchmarkPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly CompositionItem[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display font-semibold text-ink">{title}</h3>
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
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-muted/30 px-4 py-3"
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

type RevenueMixItem = {
  label: string;
  share: number;
  description: string;
};

const barColors = [
  "bg-metric-revenue/70",
  "bg-accent/60",
  "bg-metric-margin/60",
  "bg-metric-salary/50",
  "bg-metric-valuation/55",
];

export function RevenueMixPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: readonly RevenueMixItem[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display font-semibold text-ink">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-ink-muted">{subtitle}</p>}

      <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-surface-muted">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`${barColors[i % barColors.length]} transition-all`}
            style={{ width: `${item.share}%` }}
            title={`${item.label}: ${item.share}%`}
          />
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.label} className="rounded-xl border border-border bg-surface-muted/30 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 shrink-0 rounded-full ${barColors[i % barColors.length]}`}
                  aria-hidden="true"
                />
                <span className="font-semibold text-ink">{item.label}</span>
              </div>
              <span className="text-sm font-bold tabular-nums text-accent">{item.share}%</span>
            </div>
            <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

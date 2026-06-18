type CostItem = {
  label: string;
  percent: number;
  color: string;
};

type CostBreakdownChartProps = {
  items: readonly CostItem[];
};

export function CostBreakdownChart({ items }: CostBreakdownChartProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
        Cost Breakdown
      </h3>
      <div className="mt-6 flex h-4 overflow-hidden rounded-full">
        {items.map((item) => (
          <div
            key={item.label}
            style={{ width: `${item.percent}%`, background: item.color }}
            title={`${item.label}: ${item.percent}%`}
            aria-hidden="true"
          />
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5">
              <span
                className="size-3 rounded-sm"
                style={{ background: item.color }}
                aria-hidden="true"
              />
              <span className="text-ink-muted">{item.label}</span>
            </div>
            <span className="font-semibold tabular-nums text-ink">{item.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

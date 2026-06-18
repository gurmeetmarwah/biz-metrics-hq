type SnapshotItem = {
  label: string;
  value: string;
  rating: number | null;
};

const ratingColors = [
  "bg-surface-muted",
  "bg-metric-salary/30",
  "bg-metric-margin/35",
  "bg-accent/40",
  "bg-metric-revenue/45",
];

export function IndustrySnapshotScorecard({
  title,
  items,
}: {
  title: string;
  items: readonly SnapshotItem[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="border-b border-border-subtle bg-surface-muted/50 px-5 py-3.5">
        <h3 className="font-display font-semibold text-ink">{title}</h3>
      </div>
      <ul className="divide-y divide-border-subtle">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 px-5 py-4">
            <span className="text-sm font-medium text-ink-muted">{item.label}</span>
            <div className="flex items-center gap-3">
              {item.rating !== null && (
                <div className="flex gap-1" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`h-2 w-5 rounded-full ${n <= item.rating! ? ratingColors[item.rating!] : "bg-surface-muted"}`}
                    />
                  ))}
                </div>
              )}
              <span className="min-w-[5rem] text-right text-sm font-semibold text-ink">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

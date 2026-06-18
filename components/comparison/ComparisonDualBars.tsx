type DualBarItem = {
  label: string;
  restaurant: number;
  competitor: number;
};

type ComparisonDualBarsProps = {
  categories: readonly DualBarItem[];
  restaurantLabel?: string;
  competitorLabel?: string;
};

export function ComparisonDualBars({
  categories,
  restaurantLabel = "Restaurant",
  competitorLabel = "Competitor",
}: ComparisonDualBarsProps) {
  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat.label} className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm font-semibold text-ink">{cat.label}</p>
          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{restaurantLabel}</span>
                <span className="tabular-nums text-ink-muted">{cat.restaurant}/10</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-metric-margin"
                  style={{ width: `${cat.restaurant * 10}%` }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{competitorLabel}</span>
                <span className="tabular-nums text-ink-muted">{cat.competitor}/10</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-metric-salary"
                  style={{ width: `${cat.competitor * 10}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

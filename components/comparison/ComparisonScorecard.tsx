type ScoreItem = {
  label: string;
  restaurant: number;
  foodTruck: number;
};

type ComparisonScorecardProps = {
  categories: readonly ScoreItem[];
  restaurantLabel?: string;
  foodTruckLabel?: string;
};

export function ComparisonScorecard({
  categories,
  restaurantLabel = "Restaurant",
  foodTruckLabel = "Food Truck",
}: ComparisonScorecardProps) {
  const restaurantTotal = Math.round(
    categories.reduce((s, c) => s + c.restaurant, 0) / categories.length
  );
  const foodTruckTotal = Math.round(
    categories.reduce((s, c) => s + c.foodTruck, 0) / categories.length
  );

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-8 grid grid-cols-2 gap-6 text-center">
        <div>
          <p className="text-sm font-semibold text-ink">{restaurantLabel}</p>
          <p className="mt-1 font-display text-3xl font-bold tabular-nums text-metric-margin">
            {restaurantTotal}/10
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-metric-margin"
              style={{ width: `${restaurantTotal * 10}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{foodTruckLabel}</p>
          <p className="mt-1 font-display text-3xl font-bold tabular-nums text-metric-salary">
            {foodTruckTotal}/10
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-metric-salary"
              style={{ width: `${foodTruckTotal * 10}%` }}
            />
          </div>
        </div>
      </div>

      <ul className="space-y-5">
        {categories.map((cat) => (
          <li key={cat.label}>
            <p className="mb-2 text-sm font-medium text-ink-muted">{cat.label}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="flex h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="rounded-full bg-metric-margin/70"
                    style={{ width: `${cat.restaurant * 10}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="rounded-full bg-metric-salary/70"
                    style={{ width: `${cat.foodTruck * 10}%` }}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

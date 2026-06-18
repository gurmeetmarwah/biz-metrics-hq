type WinnerScoreItem = {
  label: string;
  coffeeShop: number;
  bakery: number;
};

type ComparisonWinnerScorecardProps = {
  categories: readonly WinnerScoreItem[];
};

export function ComparisonWinnerScorecard({
  categories,
}: ComparisonWinnerScorecardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((cat) => {
        const winner =
          cat.coffeeShop >= cat.bakery ? "Coffee Shop" : "Bakery";
        return (
          <div
            key={cat.label}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-sm font-semibold text-ink">{cat.label}</p>
            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Coffee Shop</span>
                  <span className="tabular-nums text-ink-muted">
                    {cat.coffeeShop}/10
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-metric-margin"
                    style={{ width: `${cat.coffeeShop * 10}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Bakery</span>
                  <span className="tabular-nums text-ink-muted">
                    {cat.bakery}/10
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-metric-salary"
                    style={{ width: `${cat.bakery * 10}%` }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-accent">
              Winner: {winner}
            </p>
          </div>
        );
      })}
    </div>
  );
}

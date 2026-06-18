type MarginTierChartProps = {
  poor: string;
  average: string;
  topQuartile: string;
};

export function MarginTierChart({ poor, average, topQuartile }: MarginTierChartProps) {
  const tiers = [
    { label: "Poor", value: poor, width: "w-1/4", color: "bg-metric-salary/35" },
    { label: "Average", value: average, width: "w-2/4", color: "bg-metric-margin/45" },
    { label: "Top Quartile", value: topQuartile, width: "w-1/4", color: "bg-metric-revenue/40" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-muted">Margin distribution</p>
      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-surface-muted">
        {tiers.map((tier) => (
          <div key={tier.label} className={`${tier.width} ${tier.color}`} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        {tiers.map((tier) => (
          <div key={tier.label}>
            <p className="text-xs font-medium text-ink-faint">{tier.label}</p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{tier.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

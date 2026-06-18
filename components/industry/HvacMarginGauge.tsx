type HvacMarginGaugeProps = {
  poor: string;
  average: string;
  good: string;
  excellent: string;
};

export function HvacMarginGauge({ poor, average, good, excellent }: HvacMarginGaugeProps) {
  const tiers = [
    { label: "Poor", value: poor, width: "w-1/5", color: "bg-metric-salary/40" },
    { label: "Average", value: average, width: "w-2/5", color: "bg-metric-margin/45" },
    { label: "Good", value: good, width: "w-1/5", color: "bg-accent/50" },
    { label: "Excellent", value: excellent, width: "w-1/5", color: "bg-metric-revenue/50" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-muted">Net margin distribution</p>
      <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-surface-muted">
        {tiers.map((tier) => (
          <div key={tier.label} className={`${tier.width} ${tier.color}`} title={tier.label} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tiers.map((tier) => (
          <div key={tier.label} className="text-center">
            <p className="text-xs font-medium text-ink-faint">{tier.label}</p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{tier.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

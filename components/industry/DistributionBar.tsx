type DistributionBarProps = {
  bottom25: string;
  median: string;
  top25: string;
  label?: string;
};

export function DistributionBar({
  bottom25,
  median,
  top25,
  label = "Distribution",
}: DistributionBarProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-muted">{label}</p>
      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-surface-muted">
        <div className="w-1/4 bg-metric-salary/40" title="Bottom 25%" />
        <div className="w-2/4 bg-metric-margin/50" title="Middle 50%" />
        <div className="w-1/4 bg-metric-revenue/40" title="Top 25%" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs font-medium text-ink-faint">Bottom 25%</p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{bottom25}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-faint">Median</p>
          <p className="mt-1 text-lg font-bold tabular-nums text-accent">{median}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-faint">Top 25%</p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{top25}</p>
        </div>
      </div>
    </div>
  );
}

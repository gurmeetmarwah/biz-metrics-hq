type DistributionBand = {
  label: string;
  description: string;
  share: string;
  examples: string;
};

export function DistributionBandCards({ bands }: { bands: readonly DistributionBand[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {bands.map((band) => (
        <li
          key={band.label}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
        >
          <p className="font-display text-lg font-semibold text-ink">{band.label}</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{band.share}</p>
          <p className="mt-2 text-sm text-ink-muted">{band.description}</p>
          <p className="mt-3 text-xs text-ink-faint">Examples: {band.examples}</p>
        </li>
      ))}
    </ul>
  );
}

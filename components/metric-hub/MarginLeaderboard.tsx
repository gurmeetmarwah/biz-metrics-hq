type LeaderboardBand = {
  label: string;
  description: string;
  industries: readonly string[];
};

export function MarginLeaderboard({ bands }: { bands: readonly LeaderboardBand[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {bands.map((band) => (
        <li
          key={band.label}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <p className="text-3xl font-bold tabular-nums text-metric-margin">{band.label}</p>
          <p className="mt-1 text-sm text-ink-muted">{band.description}</p>
          <ul className="mt-4 space-y-2">
            {band.industries.map((industry) => (
              <li key={industry} className="flex items-center gap-2 text-sm text-ink">
                <span className="size-1.5 shrink-0 rounded-full bg-metric-margin" aria-hidden="true" />
                {industry}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

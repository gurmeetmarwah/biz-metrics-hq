import { platformQuickStats } from "@/lib/platform-stats.server";

const statColors = [
  "text-accent",
  "text-metric-revenue",
  "text-metric-valuation",
  "text-metric-salary",
];

export function IndustriesStatsBar() {
  return (
    <section aria-label="Platform statistics" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {platformQuickStats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-surface px-4 py-7 text-center sm:py-8"
            >
              <dt className={`text-3xl font-bold tracking-tight tabular-nums sm:text-4xl ${statColors[index]}`}>
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

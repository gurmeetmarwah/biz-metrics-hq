import { quickStats } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";

const statColors = [
  "text-accent",
  "text-metric-revenue",
  "text-metric-valuation",
  "text-metric-salary",
];

export function QuickStats() {
  return (
    <section aria-label="Platform statistics" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {quickStats.map((stat, index) => (
            <AnimateIn key={stat.label} delay={index * 80}>
              <div className="flex h-full flex-col items-center justify-center bg-surface px-4 py-8 text-center sm:py-10">
                <span
                  className={`text-3xl font-bold tracking-tight tabular-nums sm:text-4xl ${statColors[index]}`}
                >
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium text-ink-muted">
                  {stat.label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

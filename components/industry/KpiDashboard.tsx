import Link from "next/link";
import type { BusinessScorecard } from "@/lib/industries/business-scorecard";
import { IndustryBusinessScorecard } from "@/components/industry/IndustryBusinessScorecard";

type Kpi = {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  href: string;
  accent: string;
};

type KpiDashboardProps = {
  kpis: readonly Kpi[];
  scorecard?: BusinessScorecard;
};

const accentMap: Record<string, string> = {
  "metric-revenue": "var(--metric-revenue)",
  "metric-margin": "var(--metric-margin)",
  "metric-salary": "var(--metric-salary)",
  "metric-valuation": "var(--metric-valuation)",
};

export function KpiDashboard({ kpis, scorecard }: KpiDashboardProps) {
  return (
    <section aria-label="Key performance indicators" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className={scorecard ? "lg:col-span-7" : "lg:col-span-12"}>
            <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
              {kpis.map((kpi) => (
                <Link
                  key={kpi.id}
                  href={kpi.href}
                  className="group flex min-h-[132px] flex-col items-center justify-center bg-surface px-4 py-5 text-center transition-colors duration-200 hover:bg-accent-soft/30 sm:min-h-[148px] sm:py-7"
                >
                  <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">
                    {kpi.label}
                  </span>
                  <span
                    className="mt-2 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl"
                    style={{ color: accentMap[kpi.accent] }}
                  >
                    {kpi.value}
                  </span>
                  <span className="mt-1 text-xs text-ink-faint">{kpi.sublabel}</span>
                  <span className="mt-3 text-xs font-medium text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View details ↓
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {scorecard && (
            <div className="lg:col-span-5">
              <IndustryBusinessScorecard scorecard={scorecard} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import type { BusinessScorecard } from "@/lib/industries/business-scorecard";
import { HashLink } from "@/components/ui/HashLink";
import { IndustryBusinessScorecard } from "@/components/industry/IndustryBusinessScorecard";

type Kpi = {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  href: string;
  accent: string;
};

type HubKpiDashboardProps = {
  kpis: readonly Kpi[];
  ctaLabel?: string;
  scorecard?: BusinessScorecard;
};

const accentMap: Record<string, string> = {
  "metric-revenue": "var(--metric-revenue)",
  "metric-margin": "var(--metric-margin)",
  "metric-salary": "var(--metric-salary)",
  "metric-valuation": "var(--metric-valuation)",
};

function KpiCard({
  kpi,
  ctaLabel,
  className = "",
}: {
  kpi: Kpi;
  ctaLabel: string;
  className?: string;
}) {
  return (
    <HashLink
      href={kpi.href}
      className={`group flex min-h-[132px] flex-col items-center justify-center bg-surface px-4 py-5 text-center transition-colors duration-200 hover:bg-accent-soft/30 sm:min-h-[148px] sm:py-7 ${className}`}
    >
      <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">{kpi.label}</span>
      <span
        className="mt-2 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl"
        style={{ color: accentMap[kpi.accent] }}
      >
        {kpi.value}
      </span>
      <span className="mt-1 text-xs text-ink-faint">{kpi.sublabel}</span>
      <span className="mt-3 text-xs font-semibold text-accent opacity-70 transition-opacity duration-200 group-hover:opacity-100">
        {ctaLabel}
      </span>
    </HashLink>
  );
}

export function HubKpiDashboard({
  kpis,
  ctaLabel = "View Data →",
  scorecard,
}: HubKpiDashboardProps) {
  const primaryKpis = kpis.length === 5 ? kpis.slice(0, 4) : kpis;
  const featuredKpi = kpis.length === 5 ? kpis[4] : null;

  return (
    <section aria-label="Key performance indicators" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className={scorecard ? "lg:col-span-7" : "lg:col-span-12"}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
                {primaryKpis.map((kpi) => (
                  <KpiCard key={kpi.id} kpi={kpi} ctaLabel={ctaLabel} />
                ))}
              </div>
              {featuredKpi && (
                <HashLink
                  href={featuredKpi.href}
                  className="group flex min-h-[88px] items-center justify-between gap-4 rounded-2xl border border-metric-revenue/20 bg-gradient-to-r from-metric-revenue/5 via-surface to-surface px-5 py-4 transition-colors duration-200 hover:border-metric-revenue/35 hover:from-metric-revenue/10 sm:px-6 sm:py-5"
                >
                  <div className="min-w-0 text-left">
                    <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">
                      {featuredKpi.label}
                    </span>
                    <p className="mt-1 text-xs text-ink-faint sm:text-sm">{featuredKpi.sublabel}</p>
                  </div>
                  <span
                    className="shrink-0 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl"
                    style={{ color: accentMap[featuredKpi.accent] }}
                  >
                    {featuredKpi.value}
                  </span>
                  <span className="hidden text-xs font-semibold text-accent opacity-70 transition-opacity duration-200 group-hover:opacity-100 sm:inline">
                    {ctaLabel}
                  </span>
                </HashLink>
              )}
            </div>
          </div>
          {scorecard && (
            <div className="lg:col-span-5">
              <IndustryBusinessScorecard scorecard={scorecard} className="h-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

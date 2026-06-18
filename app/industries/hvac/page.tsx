import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustrySnapshotScorecard } from "@/components/industry/IndustrySnapshotScorecard";
import { HvacBenchmarkTool } from "@/components/industry/HvacBenchmarkTool";
import { HvacMarginGauge } from "@/components/industry/HvacMarginGauge";
import { HvacValuationMiniTool } from "@/components/industry/HvacValuationMiniTool";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { hvacAttribution } from "@/lib/data-sources/hvac";
import {
  benchmarkThresholds,
  businessScorecard,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  relatedHomeServiceIndustries,
  relatedMetrics,
  revenueDistribution,
  revenueDrivers,
  revenuePercentiles,
  searchQuickLinks,
  startupCosts,
  stateBenchmarks,
  technicianProductivityMetrics,
  valuationMultiples,
} from "@/lib/industries/hvac-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "HVAC industry data hub: revenue benchmarks, profit margins, owner salaries, technician productivity, valuation multiples, geographic variation, calculators, and benchmark tools.",
};

function HubSection({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function HvacHubPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <IndustryHubHero
          title={hubMeta.title}
          subtitle={hubMeta.subtitle}
          parentLabel={hubMeta.parentLabel}
          parentHref="/"
          currentPageLabel="HVAC"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search another industry..."
          searchLabel="Search industries"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} ctaLabel="View Benchmarks →" scorecard={businessScorecard} />

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <IndustrySnapshotScorecard title="HVAC Snapshot" items={industrySnapshotRatings} />
              <div id="benchmark">
                <HvacBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="revenue-benchmark"
          title="Average HVAC Revenue"
          subtitle="Annual revenue percentiles for owner-operated HVAC companies with 5–25 employees."
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Percentile</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {revenuePercentiles.map((row, i) => (
                  <tr
                    key={row.percentile}
                    className={i < revenuePercentiles.length - 1 ? "border-b border-border-subtle" : ""}
                  >
                    <td className="px-5 py-4 font-medium text-ink-muted">{row.percentile}</td>
                    <td className="px-5 py-4 text-right font-bold tabular-nums text-metric-revenue">
                      {row.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Revenue varies significantly based on technicians, service area, and maintenance contracts.
            Distribution: 25th {revenueDistribution.bottom25} · Median {revenueDistribution.median} · 75th{" "}
            {revenueDistribution.top25}.
          </p>

          <h3 className="mt-12 font-display text-lg font-semibold text-ink">Revenue Drivers</h3>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {revenueDrivers.map((driver) => (
              <li key={driver.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold text-ink">{driver.label}</p>
                <p className="mt-2 text-sm text-ink-muted">{driver.description}</p>
                <p className="mt-3 text-sm font-bold tabular-nums text-accent">{driver.share}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="profitability"
          title="Average HVAC Profit Margin"
          subtitle="Gross and net margin benchmarks, cost structure, and expense ratios for HVAC contractors."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <HvacMarginGauge
              poor={marginTiers.poor}
              average={marginTiers.average}
              good={marginTiers.good}
              excellent={marginTiers.excellent}
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {marginMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < marginMetrics.length - 1 ? "border-b border-border-subtle" : ""}
                    >
                      <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-ink">Cost Structure</h3>
            <div className="mt-6">
              <CostStructureFlow items={costStructureFlow} />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <h3 className="border-b border-border-subtle bg-surface-muted/50 px-5 py-3.5 font-display font-semibold text-ink">
              Expense Benchmarks
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/30">
                  <th className="px-5 py-3 text-left font-semibold text-ink">Expense Category</th>
                  <th className="px-5 py-3 text-right font-semibold text-ink">% Revenue</th>
                </tr>
              </thead>
              <tbody>
                {expenseBreakdown.map((row, i) => (
                  <tr key={row.expense} className={i < expenseBreakdown.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.expense}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        <HubSection
          id="owner-economics"
          title="How Much Do HVAC Owners Make?"
          subtitle="Owner compensation by business size — small operator, median company, and multi-location owner."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerEconomicsCards.map((item) => (
              <article
                key={item.model}
                className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-4 text-2xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-sm text-ink-muted">Compensation Benchmark</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">{item.earnings}</p>
              </article>
            ))}
          </div>
        </HubSection>

        <HubSection
          id="valuation"
          title="HVAC Valuation Multiples"
          subtitle="SDE, EBITDA, and revenue multiples used to value HVAC businesses at sale."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationMultiples.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <HvacValuationMiniTool />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $2.4M revenue · $400K SDE → ~$1.24M value at 3.1× SDE
          </p>
        </HubSection>

        <HubSection
          id="geography"
          title="Geographic Variation"
          subtitle="Relative HVAC revenue performance by state — avoids creating hundreds of state pages while surfacing regional insight."
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">State</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Relative Performance</th>
                  <th className="hidden px-5 py-3.5 text-left font-semibold text-ink sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {stateBenchmarks.map((row, i) => (
                  <tr
                    key={row.state}
                    className={i < stateBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}
                  >
                    <td className="px-5 py-4 font-medium text-ink">{row.state}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          row.performance === "Above Average"
                            ? "bg-metric-revenue/15 text-metric-revenue"
                            : "bg-accent-soft text-accent"
                        }`}
                      >
                        {row.performance}
                      </span>
                    </td>
                    <td className="hidden px-5 py-4 text-ink-muted sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        <HubSection
          id="productivity"
          title="Technician Productivity"
          subtitle="How field technician capacity, ticket size, and job volume drive HVAC revenue."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                {["Technician", "Jobs / Day", "Ticket Size", "Revenue"].map((step, i, arr) => (
                  <div key={step} className="flex flex-col items-center">
                    <span className="rounded-lg border border-border bg-surface-muted/50 px-6 py-3 font-semibold text-ink">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="my-1 text-ink-faint" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink">Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {technicianProductivityMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < technicianProductivityMetrics.length - 1 ? "border-b border-border-subtle" : ""}
                    >
                      <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="comparisons"
          title="Compare HVAC To"
          subtitle="See how HVAC economics stack up against other home service industries."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection id="related-metrics" title="Related Metrics" subtitle="Jump to key HVAC benchmark sections.">
          <LinkCardGrid items={relatedMetrics} columns={3} />
        </HubSection>

        <HubSection
          id="calculators"
          title="HVAC Business Calculators"
          subtitle="Run the numbers on technician productivity, profit margin, valuation, and break-even."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="startup-costs" title="HVAC Startup Costs" subtitle="Typical investment ranges for launching an HVAC company.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCosts.map((item) => (
              <div key={item.expense} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.expense}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $195K – $480K · Varies by fleet size, inventory, and market entry strategy.
          </p>
        </HubSection>

        <HubSection id="growth" title="Growth Dashboard" subtitle="Maintenance penetration, retention, and utilization metrics that drive HVAC value.">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {growthMetrics.map((metric) => (
              <div key={metric.metric} className="rounded-2xl border border-border bg-surface p-5 text-center">
                <p className="text-xs text-ink-faint">{metric.metric}</p>
                <p className="mt-2 text-lg font-bold tabular-nums text-accent">{metric.value}</p>
              </div>
            ))}
          </div>
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions" className="bg-surface-muted/50">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Explore Home Service Industries" subtitle="Benchmarks and economics for related trades.">
          <LinkCardGrid items={relatedHomeServiceIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={hvacAttribution} />
            <p className="mt-6 text-sm text-ink-muted">
              {hubMeta.sampleSize} · U.S. data ·{" "}
              <Link href="/methodology/" className="text-accent hover:underline">
                Methodology
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustrySnapshotScorecard } from "@/components/industry/IndustrySnapshotScorecard";
import { IndustryBusinessScorecard } from "@/components/industry/IndustryBusinessScorecard";
import { IndustryBenchmarkTool } from "@/components/industry/IndustryBenchmarkTool";
import { IndustryMarginGauge } from "@/components/industry/IndustryMarginGauge";
import { IndustryValuationMiniTool } from "@/components/industry/IndustryValuationMiniTool";
import { RevenueMixPanel } from "@/components/industry/RevenueMixPanel";
import { RecurringRevenueComparisonPanel } from "@/components/industry/RoofingIndustryPanels";
import { RevenueCompositionBenchmarkPanel } from "@/components/industry/LandscapingIndustryPanels";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  costStructureFlow,
  expenseBreakdown,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  recurringRevenueComparison,
  relatedHomeServiceIndustries,
  revenueCompositionBenchmark,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/landscaping-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Landscaping industry data hub: revenue benchmarks, profit margins, owner salaries, valuation multiples, recurring revenue analysis, and benchmark tools for U.S. landscaping businesses.",
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

export default function LandscapingHubPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const marginGaugeTiers = [
    { label: "Poor", value: marginTiers.poor },
    { label: "Average", value: marginTiers.average },
    { label: "Good", value: marginTiers.good },
    { label: "Top Performer", value: marginTiers.excellent },
  ] as const;

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
          currentPageLabel="Landscaping"
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
              <IndustrySnapshotScorecard title="Industry Snapshot" items={industrySnapshotRatings} />
              <div id="benchmark">
                <IndustryBenchmarkTool
                  title="Benchmark Your Landscaping Business"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={landscapingAttribution}
                  technicianLabel="Field Crews"
                  recurringLabel="Maintenance Revenue (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Landscaping Industry Insights"
          subtitle="How maintenance contracts and project work shape landscaping economics."
        >
          <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {industryInsights.map((insight) => (
              <li key={insight.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display font-semibold text-ink">{insight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{insight.body}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="revenue-benchmark"
          title="Average Landscaping Revenue"
          subtitle="Annual revenue percentiles for owner-operated landscaping companies."
          className="bg-surface-muted/50"
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
            Distribution: 25th {revenueDistribution.bottom25} · Median {revenueDistribution.median} · 75th{" "}
            {revenueDistribution.top25}.
          </p>

          <div className="mt-12">
            <RevenueMixPanel
              title="Landscaping Revenue Mix"
              subtitle="Where landscaping company revenue typically comes from — maintenance routes plus higher-ticket project work."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="revenue-composition"
          title="Revenue Composition Benchmark"
          subtitle="Typical revenue mix for maintenance-focused landscaping operators."
        >
          <RevenueCompositionBenchmarkPanel
            title="Typical Landscaping Revenue Mix"
            subtitle="Maintenance-heavy operators with commercial accounts and project upsell — the model that drives recurring revenue and valuation premiums."
            items={revenueCompositionBenchmark}
          />
        </HubSection>

        <HubSection
          id="recurring-revenue"
          title="Recurring Revenue Analysis"
          subtitle="How landscaping compares to other home service trades on revenue stability."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RecurringRevenueComparisonPanel
              title="Revenue Stability — Recurring Revenue Score"
              subtitle="Landscaping ranks among the highest for recurring revenue potential when maintenance contracts are built intentionally."
              items={recurringRevenueComparison}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Why Recurring Revenue Matters</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Maintenance contracts provide predictable weekly cash flow, higher business valuations, and lower
                owner dependence. Top landscaping operators derive 35–55% of revenue from recurring maintenance —
                putting them on par with HVAC for revenue stability when contracts are managed well.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                See comparisons:{" "}
                <Link href="/comparisons/hvac-vs-landscaping/" className="text-accent hover:underline">
                  HVAC vs Landscaping
                </Link>
                ,{" "}
                <Link href="/comparisons/plumbing-vs-landscaping/" className="text-accent hover:underline">
                  Plumbing vs Landscaping
                </Link>
              </p>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="profitability"
          title="Landscaping Profit Margins"
          subtitle="Gross and net margin benchmarks for landscaping contractors."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <IndustryMarginGauge tiers={marginGaugeTiers} />
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
          title="How Much Do Landscaping Business Owners Make?"
          subtitle="Owner compensation from solo operator to regional landscaping company."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          title="Landscaping Business Valuation Multiples"
          subtitle="SDE, EBITDA, and revenue multiples used to value landscaping companies at sale."
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
            <IndustryValuationMiniTool
              title="Estimate Your Landscaping Business Value"
              defaults={valuationDefaults}
            />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $1.1M revenue · $198K SDE → ~$436K value at 2.2× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Landscaping Companies Do Differently"
          subtitle="Practices that separate high-performing landscaping operators from the median."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">Top Landscaping Companies Often:</h3>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {topPerformerPractices.map((practice) => (
                <li key={practice} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        <HubSection id="opportunities-risks" title="Industry Outlook">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Industry Tailwinds</h3>
              <ul className="mt-6 space-y-3">
                {industryOpportunities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="text-metric-revenue" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Industry Challenges</h3>
              <ul className="mt-6 space-y-3">
                {industryRisks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="text-metric-salary" aria-hidden="true">
                      ⚠
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="business-quality"
          title="Business Quality Dashboard"
          subtitle="Quick assessment of typical landscaping business characteristics."
          className="bg-surface-muted/50"
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection
          id="geography"
          title="Landscaping Demand by State"
          subtitle="Relative demand levels across key U.S. markets."
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">State</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Demand Level</th>
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

        <HubSection id="comparisons" title="Industry Comparisons" className="bg-surface-muted/50">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Landscaping Business Calculators"
          subtitle="Run the numbers on revenue, profit margin, crew productivity, valuation, and commercial contracts."
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="startup-costs" title="Landscaping Startup Costs" subtitle="Typical investment ranges for launching a landscaping company." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCosts.map((item) => (
              <div key={item.expense} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.expense}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $75K – $250K · Varies by market, equipment quality, and initial crew size.
          </p>
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Home Service Industries" className="bg-surface-muted/50">
          <LinkCardGrid items={relatedHomeServiceIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={landscapingAttribution} />
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

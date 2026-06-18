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
import {
  CustomerRetentionDashboardPanel,
  InvestorAttractivenessPanel,
  RecurringRevenueBenchmarkPanel,
} from "@/components/industry/PestControlIndustryPanels";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  costStructureFlow,
  customerRetentionMetrics,
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
  investorAttractivenessScore,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  recurringRevenueBenchmarks,
  recurringRevenueComparison,
  relatedHomeServiceIndustries,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/pest-control-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Pest control industry data hub: revenue benchmarks, profit margins, owner salaries, valuation multiples, recurring revenue analysis, and benchmark tools for U.S. pest control businesses.",
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

export default function PestControlHubPage() {
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
          currentPageLabel="Pest Control"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search Industry..."
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
                  title="Benchmark Your Pest Control Business"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={pestControlAttribution}
                  technicianLabel="Technicians"
                  recurringLabel="Recurring Revenue (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Pest Control Industry Insights"
          subtitle="Why recurring contracts and high retention make pest control one of the most investor-friendly home service industries."
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
          id="business-quality"
          title="Business Quality Dashboard"
          subtitle="Quick assessment of typical pest control business characteristics — recurring revenue, retention, and exit potential."
          className="bg-surface-muted/50"
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection
          id="revenue-benchmark"
          title="Average Pest Control Revenue"
          subtitle="Annual revenue percentiles for owner-operated pest control companies."
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
              title="Pest Control Revenue Mix"
              subtitle="Where pest control company revenue typically comes from — subscription contracts plus termite and specialty services."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="recurring-revenue"
          title="Recurring Revenue Analysis"
          subtitle="Pest control leads home services in subscription revenue — a key driver of valuation premiums."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RecurringRevenueBenchmarkPanel
              title="Recurring Revenue Benchmark"
              subtitle="Key metrics that separate subscription-heavy operators from one-time treatment businesses."
              benchmarks={recurringRevenueBenchmarks}
            />
            <RecurringRevenueComparisonPanel
              title="Revenue Stability — Recurring Revenue Score"
              subtitle="How pest control compares to other home service trades on recurring revenue potential."
              items={recurringRevenueComparison}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">Why Investors Like Pest Control</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Quarterly treatment contracts provide predictable cash flow, high customer retention, and acquisition-friendly
              unit economics. Top operators derive 80–90% of revenue from recurring agreements — putting pest control on
              par with HVAC and landscaping for revenue stability, but with higher profit margins and stronger exit multiples.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              See comparisons:{" "}
              <Link href="/comparisons/plumbing-vs-pest-control/" className="text-accent hover:underline">
                Plumbing vs Pest Control
              </Link>
              ,{" "}
              <Link href="/comparisons/landscaping-vs-pest-control/" className="text-accent hover:underline">
                Landscaping vs Pest Control
              </Link>
            </p>
          </div>
        </HubSection>

        <HubSection
          id="profitability"
          title="Pest Control Profit Margins"
          subtitle="Gross and net margin benchmarks for pest control operators."
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
          title="How Much Do Pest Control Owners Make?"
          subtitle="Owner compensation from solo operator to regional pest control company."
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
          title="Pest Control Business Valuation"
          subtitle="SDE, EBITDA, and revenue multiples used to value pest control companies at sale."
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
              title="Estimate Your Pest Control Business Value"
              defaults={valuationDefaults}
            />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $900K revenue · $250K SDE → ~$800K value at 3.2× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Pest Control Companies Do Differently"
          subtitle="Practices that separate high-performing pest control operators from the median."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">Top Pest Control Companies Often:</h3>
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

        <HubSection
          id="customer-retention"
          title="Customer Retention Dashboard"
          subtitle="Metrics unique to subscription-based pest control — retention, renewal, and route density."
        >
          <CustomerRetentionDashboardPanel
            title="Pest Control Retention Metrics"
            subtitle="These metrics drive recurring revenue stability and acquisition premiums."
            items={customerRetentionMetrics}
          />
        </HubSection>

        <HubSection id="opportunities-risks" title="Industry Outlook" className="bg-surface-muted/50">
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
          id="geography"
          title="Pest Control Demand by State"
          subtitle="Relative demand levels across key U.S. markets — pest pressure and population growth drive variation."
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">State</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Demand</th>
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

        <HubSection id="investor-score" title="Investor Attractiveness Score" className="bg-surface-muted/50">
          <InvestorAttractivenessPanel
            title={investorAttractivenessScore.title}
            overallRating={investorAttractivenessScore.overallRating}
            items={investorAttractivenessScore.items}
          />
        </HubSection>

        <HubSection id="comparisons" title="Industry Comparisons">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Pest Control Business Calculators"
          subtitle="Run the numbers on route density, customer lifetime value, recurring revenue, profit margin, and valuation."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="startup-costs" title="Pest Control Startup Costs" subtitle="Typical investment ranges for launching a pest control company.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCosts.map((item) => (
              <div key={item.expense} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.expense}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $50K – $150K · Varies by market, licensing requirements, and initial route size.
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
            <DataSourcesAttribution attribution={pestControlAttribution} />
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

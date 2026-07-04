import type { Metadata } from "next";
import { IndustryProfitabilitySeo } from "@/components/industry/IndustryProfitabilitySeo";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustrySnapshotScorecard } from "@/components/industry/IndustrySnapshotScorecard";
import { IndustryMarginGauge } from "@/components/industry/IndustryMarginGauge";
import { IndustryValuationMiniTool } from "@/components/industry/IndustryValuationMiniTool";
import { RevenueMixPanel } from "@/components/industry/RevenueMixPanel";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { IndustryBusinessScorecard } from "@/components/industry/IndustryBusinessScorecard";
import { IndustryBenchmarkTool } from "@/components/industry/IndustryBenchmarkTool";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";
import {
  DessertBusinessBenchmarkMatrix,
  MenuMixPanel,
  OperatingMetricsDashboard,
  SalesMetricsPanel,
  SeasonalPerformancePanel,
  StartupCostBreakdownPanel,
} from "@/components/industry/IceCreamShopPanels";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  dessertBusinessBenchmarkMatrix,
  foodBenchmarkRankings,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  profitabilitySeo,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  menuMixBenchmarks,
  operatingMetrics,
  ownerEconomicsCards,
  relatedFoodIndustries,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  salesMetrics,
  searchQuickLinks,
  seasonalPerformance,
  startupCostBreakdown,
  startupCostTotal,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/ice-cream-shop-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Ice cream shop benchmarks: annual revenue, profit margins, owner salaries, valuation multiples, seasonal performance, sales metrics, and startup costs for independent and franchise operators.",
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

export default function IceCreamShopHubPage() {
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
    { label: "Excellent", value: marginTiers.excellent },
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
          parentHref="/industries/"
          currentPageLabel="Ice Cream Shop"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search Industry"
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
                  title="Benchmark Your Ice Cream Shop"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={iceCreamShopAttribution}
                  technicianLabel="Daily Customers"
                  recurringLabel="Average Ticket ($)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Industry Insights"
          subtitle="What drives ice cream shop revenue, margins, and long-term viability."
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
          title="Revenue Benchmarks"
          subtitle="Annual revenue percentiles for U.S. independent and franchise ice cream shops."
          className="bg-surface-muted/50"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Percentile</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Annual Revenue</th>
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
              title="Revenue Sources"
              subtitle="Where ice cream shop revenue typically comes from — scoops, shakes, sundaes, cakes, beverages, and retail."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="sales-metrics"
          title="Sales Metrics"
          subtitle="Daily customer volume, ticket size, and revenue density benchmarks for ice cream retail."
        >
          <SalesMetricsPanel
            title="Sales Metrics Dashboard"
            subtitle="Key transaction and throughput metrics for median-performing shops."
            items={salesMetrics}
          />
        </HubSection>

        <HubSection
          id="seasonal-performance"
          title="Seasonal Performance"
          subtitle="How revenue distributes across seasons — a defining characteristic of ice cream shop economics."
          className="bg-surface-muted/50"
        >
          <SeasonalPerformancePanel
            title="Seasonal Revenue Breakdown"
            subtitle="Peak summer months and off-season cash flow planning for temperate U.S. markets."
            items={seasonalPerformance}
          />
        </HubSection>

        <HubSection
          id="menu-mix"
          title="Menu Mix Analysis"
          subtitle="Product category share and margin profile across soft serve, premium scoops, sundaes, and retail."
        >
          <MenuMixPanel
            title="Menu Category Benchmarks"
            subtitle="Typical product mix for independent shops balancing volume and premium ticket builders."
            items={menuMixBenchmarks}
          />
        </HubSection>

        <HubSection
          id="profitability"
          title={profitabilitySeo.sectionTitle}
          subtitle={profitabilitySeo.sectionSubtitle}
          className="bg-surface-muted/50"
        >
          <IndustryProfitabilitySeo content={profitabilitySeo} />
          <div className="mt-12" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <IndustryMarginGauge tiers={marginGaugeTiers} />
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink">Benchmark</th>
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
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Breakdown"
          subtitle="Launch investment ranges for equipment, freezers, buildout, inventory, and working capital."
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="Independent shop buildout — franchise concepts may exceed $350K."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-economics"
          title="Owner Salary"
          subtitle="Owner compensation from single-store operator to regional multi-unit operator."
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
          title="Business Valuation"
          subtitle="SDE, EBITDA, and revenue multiples used to value ice cream shops at sale."
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
            <IndustryValuationMiniTool title="Ice Cream Shop Valuation Calculator" defaults={valuationDefaults} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $720K revenue · $122K SDE → ~$342K value at 2.8× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Ice Cream Shops Do Differently"
          subtitle="Practices that separate high-performing shops from the median."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {topPerformerPractices.map((practice) => (
                <li key={practice} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    •
                  </span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        <HubSection
          id="operating-metrics"
          title="Operating Metrics Dashboard"
          subtitle="Labor, food cost, rent, and productivity benchmarks for ice cream shop operators."
        >
          <OperatingMetricsDashboard
            title="Operating Metrics"
            subtitle="P&L levers and productivity targets for well-run independent shops."
            items={operatingMetrics}
          />
        </HubSection>

        <HubSection id="opportunities-risks" title="Industry Outlook" className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Growth Opportunities</h3>
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
              <h3 className="font-display font-semibold text-ink">Business Risks</h3>
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
          subtitle="Quick assessment of typical ice cream shop characteristics — seasonality, franchise potential, and exit readiness."
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection id="comparisons" title="Food Business Comparison Hub" className="bg-surface-muted/50">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Food Industry Rankings"
          subtitle="Industry reports on margin, valuation, startup cost, seasonality, and franchise potential."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {foodBenchmarkRankings.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-display font-semibold text-ink transition-colors group-hover:text-accent">
                    {item.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View rankings
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="dessert-matrix"
          title="Dessert Business Benchmark Matrix"
          subtitle="BizMetricsHQ signature comparison — ice cream vs frozen yogurt, coffee shop, bakery, and bubble tea across seven economic dimensions."
        >
          <DessertBusinessBenchmarkMatrix
            title="Dessert Business Benchmark Matrix"
            subtitle="Star ratings compare relative strength across major dessert and beverage retail formats."
            data={dessertBusinessBenchmarkMatrix}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Ice Cream Shop Calculators"
          subtitle="Model startup costs, profit margins, valuation, break-even, food cost, labor, and average ticket."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="faqs" title={profitabilitySeo.faqSectionTitle}>
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Food Businesses" className="bg-surface-muted/50">
          <LinkCardGrid items={relatedFoodIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={iceCreamShopAttribution} showMacroSources />
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

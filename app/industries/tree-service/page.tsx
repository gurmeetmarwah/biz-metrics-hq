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
import { treeServiceAttribution } from "@/lib/data-sources/tree-service";
import {
  CrewEquipmentEconomicsMatrix,
  EquipmentDashboard,
  OperatingMetricsDashboard,
  ServiceBenchmarkMatrix,
  ServiceMetricsPanel,
  StartupCostBreakdownPanel,
} from "@/components/industry/TreeServiceIndustryPanels";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  crewEquipmentEconomicsMatrix,
  equipmentItems,
  equipmentSummary,
  homeBenchmarkRankings,
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
  operatingMetrics,
  ownerEconomicsCards,
  relatedIndustries,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  serviceBenchmarkMatrix,
  serviceMetrics,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/tree-service-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins, Equipment & Valuation | BizMetricsHQ`,
  description:
    "Tree service business benchmarks: annual revenue, profit margins, owner salaries, equipment investment, job pricing, valuation multiples, and startup costs for removal and arborist operators.",
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

export default function TreeServiceHubPage() {
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
          currentPageLabel="Tree Service"
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
                  title="Benchmark Your Tree Service Business"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={treeServiceAttribution}
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
          title="Industry Insights"
          subtitle="What drives tree service revenue, margins, and long-term business value."
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
          subtitle="Annual revenue percentiles for U.S. tree removal, trimming, and arborist companies."
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
              title="Revenue Mix"
              subtitle="Where tree service revenue typically comes from — removals, trimming, emergency work, and commercial maintenance."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="service-metrics"
          title="Service Metrics"
          subtitle="Job economics, emergency mix, and customer composition benchmarks."
        >
          <ServiceMetricsPanel
            title="Service Economics"
            subtitle="Typical job volume and revenue mix for established tree service operators."
            items={serviceMetrics}
          />
        </HubSection>

        <HubSection
          id="equipment"
          title="Equipment Dashboard"
          subtitle="Capital investment, replacement cycles, and equipment cost benchmarks — a key differentiator for tree service profitability."
          className="bg-surface-muted/50"
        >
          <EquipmentDashboard
            title="Tree Service Equipment Investment"
            subtitle="Major production assets and typical investment ranges for professional operators."
            items={equipmentItems}
            summary={equipmentSummary}
          />
        </HubSection>

        <HubSection
          id="profitability"
          title={profitabilitySeo.sectionTitle}
          subtitle={profitabilitySeo.sectionSubtitle}
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
          subtitle="Launch investment ranges for bucket trucks, chippers, insurance, and working capital."
          className="bg-surface-muted/50"
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="Single-crew tree service launch — crane and land-clearing operations may exceed $400K."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-economics"
          title="Owner Salary"
          subtitle="Owner compensation from owner-operator to regional multi-crew tree company."
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
          subtitle="SDE, EBITDA, and revenue multiples used to value tree service companies at sale."
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
            <IndustryValuationMiniTool title="Tree Service Business Valuation Calculator" defaults={valuationDefaults} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $1.25M revenue · $312K SDE → ~$1.15M value at 3.7× SDE
          </p>
        </HubSection>

        <HubSection
          id="operating-metrics"
          title="Operating Metrics"
          subtitle="Crew productivity, equipment utilization, and job throughput benchmarks."
        >
          <OperatingMetricsDashboard
            title="Operating Metrics Dashboard"
            subtitle="Production targets for well-run tree service companies with optimized crew scheduling."
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
                    <span className="capitalize">{item}</span>
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
                    <span className="capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="business-quality"
          title="Business Quality Dashboard"
          subtitle="Quick assessment of typical tree service characteristics — equipment intensity, storm revenue, and exit potential."
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection
          id="service-matrix"
          title="Tree Service Benchmark Matrix"
          subtitle="Compare average ticket, margin profile, startup cost, and recurring revenue across tree service lines."
          className="bg-surface-muted/50"
        >
          <ServiceBenchmarkMatrix
            title="Tree Service Benchmark Matrix"
            subtitle="How removal, trimming, stump grinding, arborist, and land clearing economics compare."
            rows={serviceBenchmarkMatrix}
          />
        </HubSection>

        <HubSection id="comparisons" title="Related Comparisons">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Industry Rankings"
          subtitle="Home services and outdoor business reports on margin, ticket size, recession resistance, and growth."
          className="bg-surface-muted/50"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {homeBenchmarkRankings.map((item) => (
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
          id="crew-matrix"
          title="Crew & Equipment Economics"
          subtitle="BizMetricsHQ signature comparison — tree service vs landscaping, pool service, HVAC, and plumbing across crew and equipment dimensions."
        >
          <CrewEquipmentEconomicsMatrix
            title="Crew & Equipment Economics Matrix"
            subtitle="Star ratings compare relative strength across major home service trades."
            data={crewEquipmentEconomicsMatrix}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Tree Service Calculators"
          subtitle="Model startup costs, profit margins, equipment ROI, crew revenue, job pricing, and break-even."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="faqs" title={profitabilitySeo.faqSectionTitle}>
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Industries" className="bg-surface-muted/50">
          <LinkCardGrid items={relatedIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={treeServiceAttribution} showMacroSources />
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

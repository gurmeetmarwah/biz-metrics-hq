import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustrySnapshotScorecard } from "@/components/industry/IndustrySnapshotScorecard";
import { IndustryBenchmarkTool } from "@/components/industry/IndustryBenchmarkTool";
import { IndustryMarginGauge } from "@/components/industry/IndustryMarginGauge";
import { IndustryValuationMiniTool } from "@/components/industry/IndustryValuationMiniTool";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { plumbingAttribution } from "@/lib/data-sources/plumbing";
import {
  benchmarkDefaults,
  benchmarkThresholds,
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
  relatedHomeServiceIndustries,
  revenueDistribution,
  revenueDrivers,
  revenuePercentiles,
  searchQuickLinks,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/plumbing-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Plumbing industry data hub: revenue benchmarks, profit margins, owner salaries, valuation multiples, geographic variation, calculators, and benchmark tools for U.S. plumbing companies.",
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

export default function PlumbingHubPage() {
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
    { label: "Below Average", value: marginTiers.poor },
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
          currentPageLabel="Plumbing"
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
                  title="Benchmark Your Plumbing Business"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={plumbingAttribution}
                  technicianLabel="Plumbers"
                  recurringLabel="Maintenance Contracts (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Plumbing Industry Insights"
          subtitle="What makes plumbing economics different from other home service trades."
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
          title="Average Plumbing Revenue"
          subtitle="Annual revenue percentiles for owner-operated plumbing companies."
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
          title="Plumbing Profit Margins"
          subtitle="Gross and net margin benchmarks for plumbing contractors."
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
          title="How Much Do Plumbing Business Owners Make?"
          subtitle="Owner compensation ladder from solo operator to multi-location business."
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
          title="Plumbing Business Valuation Multiples"
          subtitle="SDE, EBITDA, and revenue multiples used to value plumbing companies at sale."
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
              title="Estimated Plumbing Business Value"
              defaults={valuationDefaults}
            />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $1.6M revenue · $320K SDE → ~$896K value at 2.8× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Performers Do Differently"
          subtitle="Practices that separate high-performing plumbing companies from the median operator."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">Top Plumbing Companies Often:</h3>
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
              <h3 className="font-display font-semibold text-ink">Industry Opportunities</h3>
              <p className="mt-2 text-sm text-ink-muted">Growth drivers for plumbing operators.</p>
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
              <h3 className="font-display font-semibold text-ink">Industry Risks</h3>
              <p className="mt-2 text-sm text-ink-muted">Headwinds to monitor when planning growth.</p>
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
          title="Revenue Performance By State"
          subtitle="Relative plumbing revenue performance — no separate state pages yet."
          className="bg-surface-muted/50"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">State</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Relative Revenue</th>
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
          id="comparisons"
          title="Compare To Other Home Services"
          subtitle="See how plumbing economics stack up against related trades."
        >
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Plumbing Business Calculators"
          subtitle="Run the numbers on plumber productivity, profit margin, valuation, and break-even."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="startup-costs" title="Plumbing Startup Costs" subtitle="Typical investment ranges for launching a plumbing company.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCosts.map((item) => (
              <div key={item.expense} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.expense}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $150K – $400K · Varies by fleet size, licensing, and market entry strategy.
          </p>
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions" className="bg-surface-muted/50">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection
          id="similar-industries"
          title="Explore Other Home Service Industries"
          subtitle="Benchmarks and economics for related trades."
        >
          <LinkCardGrid items={relatedHomeServiceIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={plumbingAttribution} />
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

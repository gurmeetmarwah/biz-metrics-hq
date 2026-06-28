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
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { gymAttribution } from "@/lib/data-sources/gym";
import {
  FitnessEconomicsComparisonTable,
  MemberEconomicsDashboard,
  MemberRetentionScorecard,
  MembershipEconomicsPanel,
} from "@/components/industry/GymIndustryPanels";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  fitnessEconomicsComparison,
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
  memberEconomicsMetrics,
  memberEconomicsMethodology,
  memberRetentionScorecard,
  membershipEconomics,
  ownerEconomicsCards,
  relatedFitnessIndustries,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/gym-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, MRR, Margins & Valuation | BizMetricsHQ`,
  description:
    "Gym industry data hub: revenue benchmarks, membership economics, MRR, member retention, profit margins, owner salaries, and valuation multiples for U.S. gym businesses.",
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

export default function GymHubPage() {
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
          parentHref="/industries/"
          currentPageLabel="Gym"
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
                  title="Benchmark Your Gym Business"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={gymAttribution}
                  technicianLabel="Active Members"
                  recurringLabel="Recurring Revenue (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Gym Industry Economics"
          subtitle="Membership-driven revenue, retention economics, and why MRR is the core metric for gym operators and buyers."
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
          title="Average Gym Revenue"
          subtitle="Annual revenue percentiles for independent gyms and boutique fitness studios."
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
              title="Gym Revenue Mix"
              subtitle="Where gym revenue typically comes from — membership dues plus personal training, classes, and ancillary sales."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="membership-economics"
          title="Membership Economics"
          subtitle="The signature metrics that define gym business health — MRR, churn, and revenue per member."
        >
          <MembershipEconomicsPanel
            title="Membership Metrics"
            subtitle="Core membership economics for subscription-based gyms — sourced from HFA industry data where available."
            benchmarks={membershipEconomics}
            methodologySummary={memberEconomicsMethodology.summary}
          />
        </HubSection>

        <HubSection
          id="member-retention"
          title="Member Retention Scorecard"
          subtitle="Retention quality drives MRR stability and valuation — the metrics buyers scrutinize most."
          className="bg-surface-muted/50"
        >
          <MemberRetentionScorecard title="Member Retention" items={memberRetentionScorecard} />
        </HubSection>

        <HubSection
          id="profitability"
          title="Gym Profit Margins"
          subtitle="Gross and net margin benchmarks for gym operators."
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
          title="How Much Do Gym Owners Make?"
          subtitle="Owner compensation from solo operator to regional multi-location gym operator."
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
          title="Gym Business Valuation"
          subtitle="SDE, EBITDA, and revenue multiples used to value gym businesses at sale."
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
            <IndustryValuationMiniTool title="Estimate Gym Value" defaults={valuationDefaults} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $1.2M revenue · $280K SDE → ~$980K value at 3.5× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Gyms Do Differently"
          subtitle="Practices that separate high-performing gym operators from the median."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">Top Performing Gyms Often:</h3>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
          id="member-economics"
          title="Member Economics Dashboard"
          subtitle="The unit economics behind gym profitability — membership fee, LTV, CAC, and retention."
        >
          <MemberEconomicsDashboard
            title="Member Economics"
            subtitle="Unit economics behind gym profitability. Ranges reflect format, market, and marketing mix."
            items={memberEconomicsMetrics}
            methodologySummary={memberEconomicsMethodology.summary}
            primarySources={memberEconomicsMethodology.primarySources}
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
          id="business-quality"
          title="Business Quality Dashboard"
          subtitle="Quick assessment of typical gym business characteristics — recurring revenue, retention dependency, and exit potential."
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection id="comparisons" title="Fitness Industry Comparison" className="bg-surface-muted/50">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Fitness Benchmark Rankings"
          subtitle="How gym businesses compare across margin, valuation, recurring revenue, and startup cost."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fitnessBenchmarkRankings.map((item) => (
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
          id="fitness-dashboard"
          title="Fitness Business Economics Dashboard"
          subtitle="Compare recurring revenue, startup cost, profit margin, and valuation across major fitness formats."
          className="bg-surface-muted/50"
        >
          <FitnessEconomicsComparisonTable
            title="Fitness Format Comparison"
            subtitle="Star ratings compare relative strength across gym, pilates, yoga, and CrossFit business models."
            data={fitnessEconomicsComparison}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Gym Business Calculators"
          subtitle="Model revenue, membership growth, member lifetime value, churn, and gym valuation."
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions" className="bg-surface-muted/50">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Fitness Industries">
          <LinkCardGrid items={relatedFitnessIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={gymAttribution} showMacroSources />
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

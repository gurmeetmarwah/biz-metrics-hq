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
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";
import {
  InstructorProductivityPanel,
  ProgramPerformancePanel,
  StudentEconomicsDashboard,
  StudentRetentionDashboard,
  TuitionEconomicsPanel,
  YouthActivityBenchmarkMatrix,
} from "@/components/industry/MartialArtsSchoolPanels";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
  expenseBreakdown,
  fitnessBenchmarkRankings,
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
  instructorProductivityBenchmarks,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  programPerformanceBenchmarks,
  relatedFitnessIndustries,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  studentEconomicsMetrics,
  studentEconomicsMethodology,
  studentRetentionBenchmarks,
  topPerformerPractices,
  tuitionEconomics,
  valuationDefaults,
  valuationMultiples,
  youthActivityBenchmarkMatrix,
} from "@/lib/industries/martial-arts-school-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Tuition MRR, Margins & Valuation | BizMetricsHQ`,
  description:
    "Martial arts school benchmarks: revenue, tuition economics, student retention, program performance, instructor productivity, profit margins, owner salaries, and valuation multiples for U.S. martial arts academies.",
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

export default function MartialArtsSchoolHubPage() {
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
          currentPageLabel="Martial Arts School"
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
                  title="Benchmark Your Martial Arts School"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={martialArtsSchoolAttribution}
                  technicianLabel="Active Students"
                  recurringLabel="Recurring Tuition (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Martial Arts School Economics"
          subtitle="How martial arts academies generate stable recurring tuition revenue through student progression, family retention, and diversified program income."
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
          title="Average Martial Arts School Revenue"
          subtitle="Annual revenue percentiles for U.S. martial arts schools and academies."
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
              title="Martial Arts School Revenue Mix"
              subtitle="Where academy revenue typically comes from — tuition, belt testing, camps, merchandise, and events."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="tuition-economics"
          title="Tuition Economics"
          subtitle="Core tuition metrics — MRR, ARPU, student LTV, renewal rate, and enrollment length — the foundation of martial arts school profitability."
        >
          <TuitionEconomicsPanel
            title="Tuition & Student Metrics"
            subtitle="Subscription economics for program-based martial arts schools."
            benchmarks={tuitionEconomics}
          />
        </HubSection>

        <HubSection
          id="student-retention"
          title="Student Retention Dashboard"
          subtitle="A martial-arts-specific benchmark layer — retention, belt advancement, churn, and family renewal rates."
          className="bg-surface-muted/50"
        >
          <StudentRetentionDashboard
            title="Student Retention Metrics"
            subtitle="Targets for well-run schools with strong progression systems and family engagement."
            items={studentRetentionBenchmarks}
          />
        </HubSection>

        <HubSection
          id="program-performance"
          title="Program Performance"
          subtitle="Compare your program mix — kids, adults, privates, competition, and leadership revenue benchmarks."
        >
          <ProgramPerformancePanel
            title="Program Revenue Mix"
            subtitle="Typical revenue allocation across martial arts program lines."
            items={programPerformanceBenchmarks}
          />
        </HubSection>

        <HubSection
          id="instructor-productivity"
          title="Instructor Productivity"
          subtitle="Revenue per instructor, student load, and teaching-hour economics."
          className="bg-surface-muted/50"
        >
          <InstructorProductivityPanel
            title="Instructor Benchmarks"
            subtitle="Typical ranges for full-service martial arts academies."
            items={instructorProductivityBenchmarks}
          />
        </HubSection>

        <HubSection
          id="profitability"
          title="Profit Margin Analysis"
          subtitle="Gross, net, and EBITDA margin benchmarks for martial arts school operators."
        >
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
          title="How Much Do Martial Arts School Owners Make?"
          subtitle="Owner compensation from single-location operator to regional multi-school brand."
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
          title="Martial Arts School Business Valuation"
          subtitle="SDE, EBITDA, and revenue multiples used to value martial arts schools at sale."
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
            <IndustryValuationMiniTool title="Martial Arts School Valuation Calculator" defaults={valuationDefaults} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $780K revenue · $187K SDE → ~$729K value at 3.9× SDE
          </p>
        </HubSection>

        <HubSection
          id="top-performers"
          title="What Top Schools Do Differently"
          subtitle="Practices that separate high-performing martial arts academies from the median."
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
          id="student-economics"
          title="Student Economics"
          subtitle="Unit economics behind martial arts school profitability — tuition, LTV, churn, attendance, and referral rates."
        >
          <StudentEconomicsDashboard
            title="Student Economics"
            subtitle="Youth-activity client metrics — ranges reflect market, discipline, and program mix."
            items={studentEconomicsMetrics}
            methodologySummary={studentEconomicsMethodology.summary}
            primarySources={studentEconomicsMethodology.primarySources}
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
          subtitle="Quick assessment of typical martial arts school characteristics — recurring tuition, community loyalty, and exit potential."
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection id="comparisons" title="Fitness & Education Comparison Hub" className="bg-surface-muted/50">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Fitness Industry Rankings"
          subtitle="How martial arts schools compare across margin, valuation, recurring revenue, and startup cost."
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
          id="youth-matrix"
          title="Youth Activity Business Benchmark Matrix"
          subtitle="BizMetricsHQ signature comparison — martial arts vs dance, gym, yoga, and swim school across six economic dimensions."
        >
          <YouthActivityBenchmarkMatrix
            title="Youth Activity Business Benchmark Matrix"
            subtitle="Star ratings compare relative strength across major youth activity and fitness formats."
            data={youthActivityBenchmarkMatrix}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Martial Arts School Calculators"
          subtitle="Model revenue, tuition MRR, student LTV, capacity, instructor productivity, belt testing income, and school valuation."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Fitness & Wellness Industries" className="bg-surface-muted/50">
          <LinkCardGrid items={relatedFitnessIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={martialArtsSchoolAttribution} showMacroSources />
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

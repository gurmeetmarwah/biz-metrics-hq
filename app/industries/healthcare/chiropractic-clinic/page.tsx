import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { ChiropracticBenchmarkTool } from "@/components/industry/ChiropracticBenchmarkTool";
import { ExploreTopicGrid } from "@/components/industry/ExploreTopicGrid";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { IndustryTypeGrid } from "@/components/industry/IndustryTypeGrid";
import { RevenueBenchmarkCenter } from "@/components/industry/RevenueBenchmarkCenter";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { FeaturedInsights } from "@/components/industry/FeaturedInsights";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";
import { revenueDistribution } from "@/lib/industries/chiropractic-clinic";
import {
  benchmarkThresholds,
  businessScorecard,
  costStructureFlow,
  expenseBreakdown,
  exploreTopics,
  growthMetrics,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryInsights,
  industrySnapshot,
  ownerEconomicsCards,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  popularMetrics,
  practiceTypes,
  providerProductivityMetrics,
  recurringRevenueFlow,
  recurringRevenueMetrics,
  relatedHealthcareIndustries,
  revenueByChiropractorCountCards,
  revenueByLocationCards,
  revenueByTypeCards,
  searchQuickLinks,
  staffingBenchmarkCards,
  startupCostSummary,
  valuationDashboard,
  valuationTopics,
  wellnessPlanFlow,
  wellnessPlanTopics,
} from "@/lib/industries/healthcare/chiropractic-clinic-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Chiropractic clinic industry data hub: revenue benchmarks, EBITDA margins, owner compensation, patient economics, recurring revenue models, productivity, valuation multiples, calculators, and benchmark tools.",
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

export default function ChiropracticClinicHubPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const revenueBenchmarkGroups = [
    { title: "By Clinic Type", cards: revenueByTypeCards },
    { title: "By Chiropractor Count", cards: revenueByChiropractorCountCards },
    { title: "By Location", cards: revenueByLocationCards },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <IndustryHubHero
          title={hubMeta.title}
          subtitle={hubMeta.subtitle}
          parentLabel={hubMeta.parentLabel}
          parentHref={`/industries/${hubMeta.parentSlug}/`}
          currentPageLabel="Chiropractic Clinic"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search chiropractic metrics..."
          searchLabel="Search chiropractic metrics"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} ctaLabel="View Benchmarks →" scorecard={businessScorecard} />

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Chiropractic Clinic At A Glance
                </h2>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border-subtle bg-surface-muted/50">
                        <th className="px-5 py-3 font-semibold text-ink">Metric</th>
                        <th className="px-5 py-3 font-semibold text-ink">Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industrySnapshot.map((row, i) => (
                        <tr
                          key={row.metric}
                          className={i < industrySnapshot.length - 1 ? "border-b border-border-subtle" : ""}
                        >
                          <td className="px-5 py-3.5 font-medium text-ink-muted">{row.metric}</td>
                          <td className="px-5 py-3.5 font-semibold tabular-nums text-ink">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-ink-faint">
                  {hubMeta.sampleSize} · U.S. data ·{" "}
                  <Link href="/methodology/" className="text-accent hover:underline">
                    Methodology
                  </Link>
                </p>
              </div>
              <div id="benchmark">
                <ChiropracticBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="explore"
          title="Explore Chiropractic Economics"
          subtitle="Drill into revenue, profitability, owner compensation, startup costs, valuation, and patient economics."
        >
          <ExploreTopicGrid topics={exploreTopics} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Chiropractic Calculators"
          subtitle="Run the numbers on practice value, patient revenue, EBITDA, break-even, chiropractor productivity, and startup investment."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="types"
          title="Chiropractic Practice Types"
          subtitle="Economics and benchmarks by clinic model — general, sports, family, wellness, and multi-doctor."
        >
          <IndustryTypeGrid items={practiceTypes} />
        </HubSection>

        <HubSection
          id="revenue-benchmark"
          title="Revenue Benchmark Center"
          subtitle="Annual revenue benchmarks by clinic type, chiropractor count, and location."
          className="bg-surface-muted/50"
        >
          <RevenueBenchmarkCenter groups={revenueBenchmarkGroups} />
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Distribution:</span> Bottom quartile {revenueDistribution.bottom25} ·
            Median {revenueDistribution.median} · Top quartile {revenueDistribution.top25}.
          </div>
        </HubSection>

        <HubSection
          id="patient-economics"
          title="Patient Economics Dashboard"
          subtitle="The patient funnel from first visit through treatment plan, recurring care, and lifetime value."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Patient Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {patientEconomicsFlow.map((item, i) => (
                  <div key={item.label} className="flex w-full flex-col items-center">
                    <div
                      className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                      style={{ background: item.color, width: `${Math.max(item.percent, 20)}%` }}
                    >
                      {item.label}
                    </div>
                    {i < patientEconomicsFlow.length - 1 && (
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
                  {patientEconomicsMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < patientEconomicsMetrics.length - 1 ? "border-b border-border-subtle" : ""}
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
          id="recurring-revenue"
          title="Recurring Revenue Center"
          subtitle="How recurring care plans and visit frequency drive predictable monthly collections."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Recurring Revenue Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {recurringRevenueFlow.map((item, i) => (
                  <div key={item.label} className="flex w-full flex-col items-center">
                    <div
                      className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                      style={{ background: item.color, width: `${Math.max(item.percent, 20)}%` }}
                    >
                      {item.label}
                    </div>
                    {i < recurringRevenueFlow.length - 1 && (
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
                  {recurringRevenueMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < recurringRevenueMetrics.length - 1 ? "border-b border-border-subtle" : ""}
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
          id="wellness-plans"
          title="Wellness Plan Economics"
          subtitle="Membership economics for subscription-based chiropractic models."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Wellness Plan Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {wellnessPlanFlow.map((item, i) => (
                  <div key={item.label} className="flex w-full flex-col items-center">
                    <div
                      className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                      style={{ background: item.color, width: `${Math.max(item.percent, 20)}%` }}
                    >
                      {item.label}
                    </div>
                    {i < wellnessPlanFlow.length - 1 && (
                      <span className="my-1 text-ink-faint" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-ink">Key Wellness Plan Topics</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {wellnessPlanTopics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-border bg-surface px-3.5 py-1 text-sm font-medium text-ink-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="provider-productivity"
          title="Provider Productivity Dashboard"
          subtitle="How chiropractor capacity, patient visits, adjustments, and revenue drive clinic economics."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Provider Productivity Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                {["Chiropractor", "Patient Visits", "Adjustments", "Revenue"].map((step, i, arr) => (
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
                  {providerProductivityMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < providerProductivityMetrics.length - 1 ? "border-b border-border-subtle" : ""}
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
          id="profitability"
          title="Cost Structure Dashboard"
          subtitle="How revenue flows through clinical payroll, admin payroll, rent, marketing, and profit."
        >
          <CostStructureFlow items={costStructureFlow} />
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
          id="staffing"
          title="Staffing Benchmarks"
          subtitle="Compensation and revenue supported by key clinic roles."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {staffingBenchmarkCards.map((role) => (
              <div key={role.role} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-display font-semibold text-ink">{role.role}</p>
                <p className="mt-3 text-xs text-ink-faint">Compensation</p>
                <p className="mt-1 font-bold tabular-nums text-metric-salary">{role.compensation}</p>
                <p className="mt-4 text-xs text-ink-faint">Revenue Supported</p>
                <p className="mt-1 text-sm font-semibold text-ink-muted">{role.revenueSupported}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Role</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Compensation</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Revenue Supported</th>
                </tr>
              </thead>
              <tbody>
                {staffingBenchmarkCards.map((row, i) => (
                  <tr key={row.role} className={i < staffingBenchmarkCards.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 font-medium text-ink-muted">{row.role}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.compensation}</td>
                    <td className="px-5 py-4 text-right text-ink-muted">{row.revenueSupported}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Summary"
          subtitle="Typical investment ranges for opening or acquiring a chiropractic clinic."
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCostSummary.map((item) => (
              <div key={item.expense} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.expense}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $140K – $330K · De novo buildout vs acquisition varies significantly.
          </p>
        </HubSection>

        <HubSection
          id="owner-economics"
          title="Owner Economics"
          subtitle="Owner compensation by clinic model — solo, multi-doctor, multi-location, and wellness-focused."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerEconomicsCards.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">
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
          title="Practice Valuation Center"
          subtitle="Multiples and benchmarks used to value chiropractic clinics at sale or buy-in."
        >
          <ul className="mb-8 flex flex-wrap gap-2">
            {valuationTopics.map((topic) => (
              <li key={topic} className="rounded-full border border-border bg-surface px-3.5 py-1 text-sm font-medium text-ink-muted">
                {topic}
              </li>
            ))}
          </ul>
          <h3 className="font-display font-semibold text-ink">Valuation Dashboard</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationDashboard.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $500K revenue · $200K SDE → ~$560K value at 2.8× SDE
          </p>
        </HubSection>

        <HubSection
          id="growth"
          title="Growth Dashboard"
          subtitle="How lead flow, conversion, treatment adherence, and recurring visits drive practice value growth."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Growth Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                {["Leads", "New Patients", "Treatment Plans", "Recurring Visits", "Revenue", "Practice Value"].map(
                  (step, i, arr) => (
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
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {growthMetrics.map((metric) => (
                <div key={metric.metric} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-sm text-ink-muted">{metric.metric}</p>
                  <p className="mt-2 text-lg font-bold tabular-nums text-ink">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </HubSection>

        <HubSection
          id="comparisons"
          title="Chiropractic Comparisons"
          subtitle="Side-by-side economics for major chiropractic business decisions."
        >
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="related-industries"
          title="Related Healthcare Industries"
          subtitle="Explore benchmarks across adjacent healthcare concepts."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={relatedHealthcareIndustries} columns={3} />
        </HubSection>

        <HubSection
          id="popular-metrics"
          title="Most Popular Chiropractic Benchmarks"
          subtitle="High-traffic benchmarks for chiropractic clinic operators and buyers."
        >
          <LinkCardGrid items={popularMetrics} columns={2} />
        </HubSection>

        <HubSection
          id="insights"
          title="Industry Insights"
          subtitle="Featured insights on the metrics that matter most for chiropractic clinic owners."
          className="bg-surface-muted/50"
        >
          <FeaturedInsights items={industryInsights} />
        </HubSection>

        <HubSection
          id="data-sources"
          title="Data Sources & Methodology"
          subtitle="Transparent benchmarks aligned with Google E-E-A-T — sample size, sources, formulas, and limitations disclosed."
        >
          <DataSourcesAttribution attribution={chiropracticAttribution} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}

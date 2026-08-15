import type { Metadata } from "next";
import { buildIndustryPageMetadata, industryPageKeywords } from "@/lib/industries/industry-page-meta";
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
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";
import {
  InsuranceMetricsPanel,
  OperatingMetricsDashboard,
  PatientMetricsPanel,
  PracticeEconomicsMatrix,
  RetailSalesDashboard,
  StartupCostBreakdownPanel,
} from "@/components/industry/OptometryPracticePanels";
import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  businessScorecard,
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
  insuranceMetrics,
  marginMetrics,
  marginTiers,
  medicalBenchmarkRankings,
  operatingMetrics,
  ownerEconomicsCards,
  patientMetrics,
  practiceEconomicsMatrix,
  relatedHealthcareIndustries,
  retailSalesMetrics,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  searchQuickLinks,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/optometry-practice-hub";

export const metadata: Metadata = buildIndustryPageMetadata({
  industryLabel: "Optometry Practice",
  profitabilitySeo,
  keywords: industryPageKeywords.optometry,
});

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

export default function OptometryPracticeHubPage() {
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
          parentHref={`/industries/${hubMeta.parentSlug}/`}
          currentPageLabel="Optometry Practice"
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
                  title="Benchmark Your Optometry Practice"
                  thresholds={benchmarkThresholds}
                  defaults={benchmarkDefaults}
                  attribution={optometryPracticeAttribution}
                  technicianLabel="Associate ODs"
                  recurringLabel="Retail Revenue (%)"
                />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="industry-insights"
          title="Industry Insights"
          subtitle="What drives optometry practice revenue, margins, and long-term business value."
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
          subtitle="Annual revenue percentiles for U.S. independent and multi-location optometry practices."
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
              title="Revenue Breakdown"
              subtitle="Where optometry practice revenue typically comes from — exams, eyewear, contact lenses, and medical eye care."
              items={revenueMix}
            />
          </div>
        </HubSection>

        <HubSection
          id="patient-metrics"
          title="Patient Metrics"
          subtitle="Visit volume, retention, and revenue per patient — one of the most valuable benchmark sections for optometry operators."
        >
          <PatientMetricsPanel
            title="Patient Economics"
            subtitle="Typical patient flow and retention for established optometry practices with strong recall programs."
            items={patientMetrics}
          />
        </HubSection>

        <HubSection
          id="retail-sales"
          title="Retail Sales Dashboard"
          subtitle="Optical dispensary benchmarks — frame, lens, and contact lens revenue unique to optometry practice economics."
          className="bg-surface-muted/50"
        >
          <RetailSalesDashboard
            title="Optical Retail Benchmarks"
            subtitle="Dispensary performance metrics that separate exam-only clinics from high-margin optical operators."
            items={retailSalesMetrics}
          />
        </HubSection>

        <HubSection
          id="insurance-metrics"
          title="Insurance Metrics"
          subtitle="Vision plan, medical billing, and private-pay mix benchmarks affecting practice margins."
        >
          <InsuranceMetricsPanel
            title="Payer Mix & Reimbursement"
            subtitle="How insurance dependence and reimbursement rates shape optometry practice profitability."
            items={insuranceMetrics}
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
          subtitle="Launch investment ranges for office buildout, diagnostic equipment, optical inventory, and working capital."
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="De novo optometry practice launch — acquired practices may require less equipment capital."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-economics"
          title="Owner Salary"
          subtitle="Owner compensation from solo practice to multi-location optometry group."
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
          subtitle="EBITDA, revenue, and goodwill multiples used to value optometry practices at sale."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valuationMultiples.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <IndustryValuationMiniTool
              title="Optometry Practice Valuation Calculator"
              defaults={valuationDefaults}
            />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $1.35M revenue · $324K EBITDA → ~$1.68M value at 5.2× EBITDA
          </p>
        </HubSection>

        <HubSection
          id="operating-metrics"
          title="Operating Metrics"
          subtitle="OD productivity, optical capture rate, and per-exam-room revenue benchmarks."
          className="bg-surface-muted/50"
        >
          <OperatingMetricsDashboard
            title="Operating Metrics Dashboard"
            subtitle="Production targets for well-run optometry practices with optimized optical capture and staffing."
            items={operatingMetrics}
          />
        </HubSection>

        <HubSection id="opportunities-risks" title="Industry Outlook">
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
          subtitle="Quick assessment of typical optometry practice characteristics — recurring patients, retail revenue, and exit potential."
          className="bg-surface-muted/50"
        >
          <div className="max-w-xl">
            <IndustryBusinessScorecard scorecard={businessQualityScorecard} />
          </div>
        </HubSection>

        <HubSection
          id="comparisons"
          title="Medical Practice Comparison"
          subtitle="Compare optometry economics against dentistry, chiropractic, physical therapy, dermatology, and veterinary clinics."
        >
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Industry Rankings"
          subtitle="Medical practice reports on margin, valuation, recurring revenue, and growth across healthcare specialties."
          className="bg-surface-muted/50"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {medicalBenchmarkRankings.map((item) => (
              <li key={item.label}>
                <div
                  aria-disabled="true"
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-display font-semibold text-ink">{item.label}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">{item.description}</p>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
                    Coming soon
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="practice-matrix"
          title="Practice Economics Benchmark Matrix"
          subtitle="BizMetricsHQ signature comparison — optometry vs dentistry, chiropractic, physical therapy, and veterinary across key practice economics."
        >
          <PracticeEconomicsMatrix
            title="Practice Economics Benchmark Matrix"
            subtitle="Star ratings compare relative strength across major medical practice models."
            data={practiceEconomicsMatrix}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Optometry Calculators"
          subtitle="Model startup costs, profit margins, valuation, revenue per patient, insurance mix, optical capture, and break-even."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="faqs" title={profitabilitySeo.faqSectionTitle}>
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <HubSection id="similar-industries" title="Related Industries" className="bg-surface-muted/50">
          <LinkCardGrid items={relatedHealthcareIndustries} columns={3} />
        </HubSection>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={optometryPracticeAttribution} showMacroSources />
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

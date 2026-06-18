import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { VeterinaryBenchmarkTool } from "@/components/industry/VeterinaryBenchmarkTool";
import { ExploreTopicGrid } from "@/components/industry/ExploreTopicGrid";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { IndustryTypeGrid } from "@/components/industry/IndustryTypeGrid";
import { RevenueBenchmarkCenter } from "@/components/industry/RevenueBenchmarkCenter";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { FeaturedInsights } from "@/components/industry/FeaturedInsights";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";
import { revenueDistribution } from "@/lib/industries/veterinary-clinic";
import {
  benchmarkThresholds,
  businessScorecard,
  clientEconomicsFlow,
  clientEconomicsMetrics,
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
  popularMetrics,
  practiceTypes,
  relatedHealthcareIndustries,
  revenueByLocationCards,
  revenueByTypeCards,
  revenueByVetCountCards,
  searchQuickLinks,
  serviceMixFlow,
  serviceMixSources,
  staffingBenchmarkCards,
  startupCostSummary,
  valuationDashboard,
  valuationTopics,
  vetProductivityMetrics,
} from "@/lib/industries/healthcare/veterinary-clinic-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Veterinary clinic industry data hub: revenue benchmarks, EBITDA margins, owner compensation, client economics, startup costs, valuation multiples, calculators, and benchmark tools.",
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

export default function VeterinaryClinicHubPage() {
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
    { title: "Revenue By Practice Type", cards: revenueByTypeCards },
    { title: "Revenue By Veterinarian Count", cards: revenueByVetCountCards },
    { title: "Revenue By Location", cards: revenueByLocationCards },
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
          currentPageLabel="Veterinary Clinic"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search veterinary metrics..."
          searchLabel="Search veterinary metrics"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} ctaLabel="View Benchmarks →" scorecard={businessScorecard} />

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Veterinary Clinic At A Glance
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
                <VeterinaryBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="explore"
          title="Explore Veterinary Economics"
          subtitle="Drill into revenue, profitability, owner compensation, startup costs, valuation, and client economics."
        >
          <ExploreTopicGrid topics={exploreTopics} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Veterinary Calculators"
          subtitle="Run the numbers on clinic value, client revenue, EBITDA, break-even, productivity, and startup investment."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="types"
          title="Veterinary Practice Types"
          subtitle="Economics and benchmarks by clinic model — general, emergency, specialty, mobile, and corporate."
        >
          <IndustryTypeGrid items={practiceTypes} />
        </HubSection>

        <HubSection
          id="revenue-benchmark"
          title="Revenue Benchmark Center"
          subtitle="Annual revenue benchmarks by practice type, veterinarian count, and location."
          className="bg-surface-muted/50"
        >
          <RevenueBenchmarkCenter groups={revenueBenchmarkGroups} />
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Distribution:</span> Bottom quartile {revenueDistribution.bottom25} ·
            Median {revenueDistribution.median} · Top quartile {revenueDistribution.top25}.
          </div>
        </HubSection>

        <HubSection
          id="client-economics"
          title="Client Economics Dashboard"
          subtitle="The client funnel from new pet owner through first visit, treatment, repeat visits, and lifetime value."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Client Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {clientEconomicsFlow.map((item, i) => (
                  <div key={item.label} className="flex w-full flex-col items-center">
                    <div
                      className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                      style={{ background: item.color, width: `${Math.max(item.percent, 20)}%` }}
                    >
                      {item.label}
                    </div>
                    {i < clientEconomicsFlow.length - 1 && (
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
                  {clientEconomicsMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < clientEconomicsMetrics.length - 1 ? "border-b border-border-subtle" : ""}
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
          id="vet-productivity"
          title="Revenue Per Veterinarian"
          subtitle="How appointments, procedures, and production drive revenue per DVM."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Veterinarian Productivity Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                {["Veterinarian", "Appointments", "Procedures", "Revenue"].map((step, i, arr) => (
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
                  {vetProductivityMetrics.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i < vetProductivityMetrics.length - 1 ? "border-b border-border-subtle" : ""}
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
          id="service-mix"
          title="Pet Service Mix Analysis"
          subtitle="How exams, diagnostics, surgery, pharmacy, and preventive care combine into clinic revenue and profit."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display font-semibold text-ink">Revenue Sources</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {serviceMixSources.map((source) => (
                  <li
                    key={source}
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink-muted"
                  >
                    {source}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue to Profit Flow</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {serviceMixFlow.map((item, i) => (
                  <div key={item.label} className="flex w-full flex-col items-center">
                    <div
                      className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                      style={{ background: item.color, width: `${Math.max(item.percent, 20)}%` }}
                    >
                      {item.label}
                    </div>
                    {i < serviceMixFlow.length - 1 && (
                      <span className="my-1 text-ink-faint" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="profitability"
          title="Cost Structure Dashboard"
          subtitle="How revenue flows through clinical payroll, support staff, medical supplies, facility costs, and profit."
          className="bg-surface-muted/50"
        >
          <CostStructureFlow items={costStructureFlow} />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <h3 className="border-b border-border-subtle bg-surface-muted/50 px-5 py-3.5 font-display font-semibold text-ink">
              Expense Benchmarks
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/30">
                  <th className="px-5 py-3 text-left font-semibold text-ink">Expense</th>
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

        <HubSection id="staffing" title="Staffing Benchmarks" subtitle="Compensation and revenue supported by key clinic roles.">
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
                  <tr
                    key={row.role}
                    className={i < staffingBenchmarkCards.length - 1 ? "border-b border-border-subtle" : ""}
                  >
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
          subtitle="Typical investment ranges for opening or acquiring a veterinary clinic."
          className="bg-surface-muted/50"
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
            Total startup range: $350K – $900K · De novo buildout vs acquisition varies significantly.
          </p>
        </HubSection>

        <HubSection
          id="owner-economics"
          title="Owner Economics"
          subtitle="Owner compensation by clinic model — solo, multi-vet, multi-location, and specialty."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerEconomicsCards.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-sm text-ink-muted">Income Benchmark</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">{item.earnings}</p>
              </article>
            ))}
          </div>
        </HubSection>

        <HubSection
          id="valuation"
          title="Practice Valuation Center"
          subtitle="Multiples and benchmarks used to value veterinary clinics at sale or buy-in."
          className="bg-surface-muted/50"
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
            Example: $1.2M revenue · $320K SDE → ~$1.1M value at 3.4× SDE
          </p>
        </HubSection>

        <HubSection
          id="growth"
          title="Growth Dashboard"
          subtitle="How new clients, retention, and average invoice drive revenue growth and practice value."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Growth Funnel</h3>
              <div className="mt-6 flex flex-col items-center gap-2 text-sm">
                {["New Clients", "Revenue", "Profit", "Practice Value"].map((step, i, arr) => (
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
          title="Veterinary Comparisons"
          subtitle="Side-by-side economics for major veterinary business decisions."
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
          title="Most Popular Veterinary Benchmarks"
          subtitle="High-traffic benchmarks for veterinary clinic operators and buyers."
        >
          <LinkCardGrid items={popularMetrics} columns={2} />
        </HubSection>

        <HubSection
          id="insights"
          title="Industry Insights"
          subtitle="Featured insights on the metrics that matter most for veterinary clinic owners."
          className="bg-surface-muted/50"
        >
          <FeaturedInsights items={industryInsights} />
        </HubSection>

        <HubSection
          id="data-sources"
          title="Data Sources & Methodology"
          subtitle="Transparent benchmarks aligned with Google E-E-A-T — sample size, sources, formulas, and limitations disclosed."
        >
          <DataSourcesAttribution attribution={veterinaryAttribution} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}

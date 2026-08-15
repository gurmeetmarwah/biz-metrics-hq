import type { Metadata } from "next";
import { buildIndustryPageMetadata, industryPageKeywords } from "@/lib/industries/industry-page-meta";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustryProfitabilitySeo } from "@/components/industry/IndustryProfitabilitySeo";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { RevenueMixPanel } from "@/components/industry/RevenueMixPanel";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import {
  CustomerMetricsPanel,
  OperatingMetricsDashboard,
  StartupCostBreakdownPanel,
} from "@/components/industry/PoolServiceIndustryPanels";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";
import {
  benchmarkRows,
  businessScorecard,
  expenseMix,
  financialMetricCards,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryReports,
  kpisToTrack,
  overviewPoints,
  ownerSalaryCards,
  profitabilitySeo,
  relatedBeautyBusinesses,
  revenueDrivers,
  searchQuickLinks,
  startupCostBreakdown,
  startupCostTotal,
  valuationCards,
} from "@/lib/industries/beauty/hair-salon-hub";

export const metadata: Metadata = buildIndustryPageMetadata({
  industryLabel: "Hair Salon",
  profitabilitySeo,
  keywords: industryPageKeywords.hairSalon,
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

export default function HairSalonHubPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

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
          currentPageLabel="Hair Salon"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search Industry"
          searchLabel="Search industries"
          searchQuickLinks={searchQuickLinks}
        />

        <section className="border-b border-border/60 bg-surface">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-6 sm:px-6">
            <a
              href="#calculators"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Explore Calculators
            </a>
            <a
              href="#reports"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              View Industry Reports
            </a>
          </div>
        </section>

        <HubKpiDashboard kpis={hubKpis} ctaLabel="View Data →" scorecard={businessScorecard} />

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="overview"
          title="Hair Salon Industry Overview"
          subtitle="Market size, business models, and growth outlook for the U.S. hair salon industry."
        >
          <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {overviewPoints.map((point) => (
              <li key={point.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display font-semibold text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="benchmarks"
          title="Hair Salon Benchmarks"
          subtitle="Typical operating ranges for U.S. independent hair salons — revenue, margins, average ticket, and productivity."
          className="bg-surface-muted/50"
        >
          <CustomerMetricsPanel
            title="Hair Salon Benchmark Dashboard"
            subtitle="Directional ranges from a 210+ salon operator panel."
            items={benchmarkRows}
          />
        </HubSection>

        <HubSection
          id="revenue"
          title="Revenue Drivers"
          subtitle="The levers that move hair salon revenue — from average ticket and chair occupancy to retail and memberships."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {revenueDrivers.map((driver) => (
              <li key={driver.title} className="rounded-2xl border border-border bg-surface p-5">
                <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold text-ink">{driver.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{driver.description}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="profitability"
          title={profitabilitySeo.sectionTitle}
          subtitle={profitabilitySeo.sectionSubtitle}
          className="bg-surface-muted/50"
        >
          <IndustryProfitabilitySeo content={profitabilitySeo} />

          <div className="mt-12">
            <h3 className="font-display text-base font-semibold text-ink">Financial Metrics</h3>
            <p className="mt-2 text-sm text-ink-muted">
              The core numbers behind every hair salon — model each one with the calculators below.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {financialMetricCards.map((card) => (
                <li key={card.label} className="rounded-2xl border border-border bg-surface p-6">
                  <p className="text-sm font-medium text-ink-muted">{card.label}</p>
                  <p className="mt-2 text-2xl font-bold tabular-nums text-metric-margin">{card.value}</p>
                  <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        <HubSection
          id="expenses"
          title="Typical Expenses"
          subtitle="Where hair salon revenue goes — payroll leads, followed by rent, product, and operating overhead."
        >
          <RevenueMixPanel
            title="Hair Salon Cost Structure"
            subtitle="Typical share of revenue by expense category for a commission-model salon."
            items={expenseMix}
          />
        </HubSection>

        <HubSection
          id="kpis"
          title="KPIs Every Hair Salon Should Track"
          subtitle="The operating metrics that separate high-performing hair salons from break-even ones."
          className="bg-surface-muted/50"
        >
          <OperatingMetricsDashboard
            title="Hair Salon KPI Benchmarks"
            subtitle="Track these against your booking and POS data to find margin upside."
            items={kpisToTrack}
          />
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Breakdown"
          subtitle="What it costs to open a hair salon — buildout, stations, equipment, inventory, and working capital."
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="New-build salon launch — leasing an existing salon space can reduce buildout cost."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-salary"
          title="Owner Salary"
          subtitle="What hair salon owners earn — from solo booth-rent operators to small salon chains."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ownerSalaryCards.map((item) => (
              <article
                key={item.model}
                className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-4 text-2xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-sm text-ink-muted">Owner Compensation</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">{item.earnings}</p>
              </article>
            ))}
          </div>
        </HubSection>

        <HubSection
          id="valuation"
          title="Business Valuation"
          subtitle="SDE and revenue multiples used to value hair salons at sale."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valuationCards.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-valuation">{row.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $320K revenue · $35K SDE → ~$81K–$105K value at 2.3–3.0× SDE. Transferable staff and strong
            client retention push a salon toward the top of the range.
          </p>
        </HubSection>

        <HubSection
          id="calculators"
          title="Hair Salon Calculators"
          subtitle="Model revenue, profit, startup costs, break-even, utilization, and valuation for your salon."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="reports"
          title="Industry Reports"
          subtitle="Deep-dive reports on beauty business margins, growth, and salon pricing trends."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryReports.map((item) => (
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
                    View report
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
          id="comparisons"
          title="Hair Salon Comparisons"
          subtitle="Compare hair salon economics against barbershops, nail salons, spas, and other salon models."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={hubComparisons} columns={3} />
        </HubSection>

        <HubSection
          id="related"
          title="Related Beauty Businesses"
          subtitle="Explore benchmarks for other beauty and personal care businesses."
        >
          <LinkCardGrid items={relatedBeautyBusinesses} columns={3} />
        </HubSection>

        <HubSection id="faqs" title={profitabilitySeo.faqSectionTitle} className="bg-surface-muted/50">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <section className="border-b border-border/60 bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Want to benchmark your salon?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
              Use our free calculators to estimate revenue, profit, startup costs, and valuation for your hair salon.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#calculators"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Explore Calculators
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <DataSourcesAttribution attribution={hairSalonAttribution} showMacroSources />
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

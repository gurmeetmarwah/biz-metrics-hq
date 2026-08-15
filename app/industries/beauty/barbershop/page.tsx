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
import { barbershopAttribution } from "@/lib/data-sources/barbershop";
import {
  benchmarkRows,
  businessQuestionsSectionTitle,
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
  treatmentCards,
  valuationCards,
} from "@/lib/industries/beauty/barbershop-hub";

export const metadata: Metadata = buildIndustryPageMetadata({
  industryLabel: "Barbershop",
  profitabilitySeo,
  keywords: industryPageKeywords.barbershop,
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

export default function BarbershopHubPage() {
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
          subtitle="Revenue • Profit Margins • Startup Costs • Chair Utilization • Revenue per Barber • Business Valuation • Owner Salary • Industry Benchmarks"
          parentLabel={hubMeta.parentLabel}
          parentHref="/industries/"
          currentPageLabel="Barbershop"
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
              View Industry Report
            </a>
          </div>
        </section>

        <HubKpiDashboard kpis={hubKpis} ctaLabel="View Data →" scorecard={businessScorecard} />

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="overview"
          title="Barbershop Industry Overview"
          subtitle="Market size, business models, grooming trends, and growth outlook for the U.S. barbershop industry."
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
          title="Financial Benchmark Dashboard"
          subtitle="Directional ranges from a 150+ barbershop operator panel."
          className="bg-surface-muted/50"
        >
          <CustomerMetricsPanel
            title="Barbershop Financial Benchmarks"
            subtitle="Typical ranges for revenue, margins, barber productivity, and operating ratios."
            items={benchmarkRows}
          />
        </HubSection>

        <HubSection
          id="profitability"
          title={businessQuestionsSectionTitle}
          subtitle="High-intent answers on barbershop profitability, revenue, startup costs, owner pay, and chair utilization."
        >
          <IndustryProfitabilitySeo content={profitabilitySeo} />

          <div className="mt-12">
            <h3 className="font-display text-base font-semibold text-ink">Financial Metrics</h3>
            <p className="mt-2 text-sm text-ink-muted">
              The core numbers behind every barbershop — model each one with the calculators below.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {financialMetricCards.map((card) => (
                <li key={card.label}>
                  <Link
                    href={card.href}
                    prefetch={false}
                    className="card-interactive block h-full rounded-2xl border border-border bg-surface p-6"
                  >
                    <p className="text-sm font-medium text-ink-muted">{card.label}</p>
                    <p className="mt-2 text-2xl font-bold tabular-nums text-metric-margin">{card.value}</p>
                    <p className="mt-2 text-sm text-ink-muted">{card.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        <HubSection
          id="revenue"
          title="Revenue Drivers"
          subtitle="The levers that move barbershop revenue — from haircut volume and beard grooming to memberships and chair utilization."
          className="bg-surface-muted/50"
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
          id="expenses"
          title="Expense Breakdown"
          subtitle="Where barbershop revenue goes — barber payroll leads, followed by rent, supplies, and marketing."
        >
          <RevenueMixPanel
            title="Barbershop Cost Structure"
            subtitle="Typical share of revenue by expense category for an independent barbershop."
            items={expenseMix}
          />
        </HubSection>

        <HubSection
          id="kpis"
          title="Key Performance Indicators"
          subtitle="The operating metrics that separate high-performing barbershops from break-even ones."
          className="bg-surface-muted/50"
        >
          <OperatingMetricsDashboard
            title="Barbershop KPI Benchmarks"
            subtitle="Track these against your POS and scheduling data to find margin upside."
            items={kpisToTrack}
          />
        </HubSection>

        <HubSection
          id="services"
          title="Core Services"
          subtitle="Core service lines and their revenue profile — haircuts and beard grooming drive the majority of barbershop income."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {treatmentCards.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
                >
                  <h3 className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    {service.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    View benchmarks
                    <svg className="size-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Breakdown"
          subtitle="What it costs to open a barbershop — buildout, chairs, equipment, licensing, and working capital."
          className="bg-surface-muted/50"
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="New-build barbershop launch — leasing an existing salon space can reduce buildout cost."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-salary"
          title="Owner Income"
          subtitle="What barbershop owners earn — from solo owner-barbers to multi-location operators."
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
          subtitle="SDE and EBITDA multiples used to value barbershops at sale."
          className="bg-surface-muted/50"
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
            Example: $280K revenue · $45K SDE → ~$68K–$113K value at 1.5–2.5× SDE. Membership revenue,
            barber retention, and clean financials push a barbershop toward the top of the range.
          </p>
        </HubSection>

        <HubSection
          id="calculators"
          title="Barbershop Calculators"
          subtitle="Model revenue, profit, startup costs, break-even, chair utilization, and valuation for your barbershop."
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="reports"
          title="Industry Reports"
          subtitle="Deep-dive reports on grooming margins, growth, and barbershop industry trends."
          className="bg-surface-muted/50"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryReports.map((item) => (
              <li key={item.label}>
                {"comingSoon" in item && item.comingSoon ? (
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
                ) : (
                  <Link
                    href={"href" in item ? item.href : "#"}
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
                )}
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="comparisons"
          title="Barbershop Comparisons"
          subtitle="Compare barbershop economics against hair salons, nail salons, day spas, and other grooming businesses."
        >
          <LinkCardGrid items={hubComparisons} columns={3} />
        </HubSection>

        <HubSection
          id="related"
          title="Related Beauty Businesses"
          subtitle="Explore benchmarks for other beauty, grooming, and personal care businesses."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={relatedBeautyBusinesses} columns={3} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>

        <section className="border-b border-border/60 bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Want to benchmark your barbershop?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
              Use our free calculators to estimate revenue, profit, startup costs, chair utilization, and valuation for your barbershop.
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
            <DataSourcesAttribution attribution={barbershopAttribution} showMacroSources />
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

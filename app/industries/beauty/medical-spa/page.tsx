import type { Metadata } from "next";
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
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";
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
} from "@/lib/industries/beauty/medical-spa-hub";

export const metadata: Metadata = {
  title: "Medical Spa Industry Benchmarks — Revenue, EBITDA, Profit Margin & Valuation | BizMetricsHQ",
  description:
    "Medical spa business benchmarks: how much revenue a med spa generates, average profit margin, EBITDA, startup costs, owner income, patient lifetime value, and valuation multiples.",
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

export default function MedicalSpaHubPage() {
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
          subtitle="Revenue • Profit Margins • Startup Costs • EBITDA • Valuation • Patient Lifetime Value • Treatment Room Utilization • Industry Benchmarks"
          parentLabel={hubMeta.parentLabel}
          parentHref="/industries/"
          currentPageLabel="Medical Spa"
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
          title="Medical Spa Industry Overview"
          subtitle="Market size, business models, treatment trends, and growth outlook for the U.S. medical spa industry."
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
          subtitle="Directional ranges from a 120+ medical spa operator panel."
          className="bg-surface-muted/50"
        >
          <CustomerMetricsPanel
            title="Medical Spa Financial Benchmarks"
            subtitle="Typical ranges for revenue, margins, patient economics, and operating ratios."
            items={benchmarkRows}
          />
        </HubSection>

        <HubSection
          id="profitability"
          title={businessQuestionsSectionTitle}
          subtitle="High-intent answers on medical spa profitability, revenue, EBITDA, startup costs, and owner pay."
        >
          <IndustryProfitabilitySeo content={profitabilitySeo} />

          <div className="mt-12">
            <h3 className="font-display text-base font-semibold text-ink">Financial Metrics</h3>
            <p className="mt-2 text-sm text-ink-muted">
              The core numbers behind every medical spa — model each one with the calculators below.
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
          subtitle="The levers that move medical spa revenue — from injectable volume and laser treatments to memberships and provider productivity."
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
          subtitle="Where medical spa revenue goes — provider payroll leads, followed by injectables, marketing, and device costs."
        >
          <RevenueMixPanel
            title="Medical Spa Cost Structure"
            subtitle="Typical share of revenue by expense category for an independent medical spa."
            items={expenseMix}
          />
        </HubSection>

        <HubSection
          id="kpis"
          title="Key Performance Indicators"
          subtitle="The operating metrics that separate high-performing medical spas from break-even ones."
          className="bg-surface-muted/50"
        >
          <OperatingMetricsDashboard
            title="Medical Spa KPI Benchmarks"
            subtitle="Track these against your EMR and practice management data to find margin upside."
            items={kpisToTrack}
          />
        </HubSection>

        <HubSection
          id="treatments"
          title="Medical Spa Treatments"
          subtitle="Core treatment lines and their revenue profile — injectables, laser, and body contouring drive the majority of med spa income."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {treatmentCards.map((treatment) => (
              <li key={treatment.label}>
                <a
                  href={treatment.href}
                  className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
                >
                  <h3 className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    {treatment.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{treatment.description}</p>
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
          subtitle="What it costs to open a medical spa — buildout, laser devices, injectable inventory, licensing, and working capital."
          className="bg-surface-muted/50"
        >
          <StartupCostBreakdownPanel
            title="Total Launch Investment"
            subtitle="New-build medical spa launch — leasing an existing medical suite can reduce buildout cost."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="owner-salary"
          title="Owner Income"
          subtitle="What medical spa owners earn — from owner-injectors to multi-location operators."
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
          subtitle="SDE and EBITDA multiples used to value medical spas at sale."
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
            Example: $1.2M revenue · $264K SDE → ~$790K–$1.45M value at 3.0–5.5× SDE. Membership revenue,
            provider retention, and clean clinical financials push a medical spa toward the top of the range.
          </p>
        </HubSection>

        <HubSection
          id="calculators"
          title="Medical Spa Calculators"
          subtitle="Model revenue, profit, EBITDA, startup costs, break-even, utilization, and valuation for your medical spa."
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="reports"
          title="Industry Reports"
          subtitle="Deep-dive reports on aesthetic medicine margins, growth, and medical spa industry trends."
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
          title="Medical Spa Comparisons"
          subtitle="Compare medical spa economics against dermatology, day spas, hair salons, and other aesthetic businesses."
        >
          <LinkCardGrid items={hubComparisons} columns={3} />
        </HubSection>

        <HubSection
          id="related"
          title="Related Beauty Businesses"
          subtitle="Explore benchmarks for other beauty, wellness, and aesthetic businesses."
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
              Want to benchmark your medical spa?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
              Use our free calculators to estimate revenue, profit, EBITDA, startup costs, and valuation for your medical spa.
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
            <DataSourcesAttribution attribution={medicalSpaAttribution} showMacroSources />
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

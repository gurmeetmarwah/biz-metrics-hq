import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KpiDashboard } from "@/components/industry/KpiDashboard";
import { QuickSummaryTable } from "@/components/industry/QuickSummaryTable";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { DistributionBar } from "@/components/industry/DistributionBar";
import { DataTable } from "@/components/industry/DataTable";
import { BenchmarkTool } from "@/components/industry/BenchmarkTool";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import {
  benchmarkThresholds,
  calculators,
  comparisons,
  economicsAdvantages,
  economicsFlow,
  faqs,
  fastCasualKpis,
  fastCasualMeta,
  heroExamples,
  laborByRevenue,
  laborCostBenchmark,
  leadingBrands,
  marginByFormat,
  marginDrivers,
  marginTiers,
  ownerSalaryTiers,
  quickSummary,
  revenueByLocation,
  revenueByStoreSize,
  revenueDistribution,
  sectionNav,
  startupCosts,
  totalInvestment,
  unitEconomicsExample,
  valuationExample,
  valuationMultiples,
} from "@/lib/industries/fast-casual";
import { formatCurrency } from "@/lib/numbers";

export const metadata: Metadata = {
  title: `${fastCasualMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Fast casual restaurant economics: revenue benchmarks, profit margins, labor costs, owner salaries, startup costs, valuation multiples, and unit economics for Chipotle-style concepts.",
};

function Section({
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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-ink-muted">{subtitle}</p>
        )}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function MarginTierFourChart() {
  const tiers = [
    { label: "Poor", value: marginTiers.poor, width: "w-1/5", color: "bg-metric-salary/40" },
    { label: "Average", value: marginTiers.average, width: "w-2/5", color: "bg-metric-margin/45" },
    { label: "Strong", value: marginTiers.strong, width: "w-1/5", color: "bg-accent/40" },
    { label: "Elite", value: marginTiers.elite, width: "w-1/5", color: "bg-metric-revenue/45" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-muted">Net margin distribution</p>
      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-surface-muted">
        {tiers.map((tier) => (
          <div key={tier.label} className={`${tier.width} ${tier.color}`} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {tiers.map((tier) => (
          <div key={tier.label}>
            <p className="text-xs font-medium text-ink-faint">{tier.label}</p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{tier.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FastCasualEconomicsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const example = unitEconomicsExample;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-left text-sm text-ink-faint"
            >
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/industries/restaurant/" className="hover:text-accent">
                Restaurant
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">Fast Casual</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-metric-revenue" />
              Industry report · {fastCasualMeta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {fastCasualMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {fastCasualMeta.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-ink-muted">Examples:</span>
              {heroExamples.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="chip rounded-full border border-border bg-surface px-3.5 py-1 font-medium text-ink-muted hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <KpiDashboard kpis={fastCasualKpis} />

        <QuickSummaryTable
          title="Fast Casual At A Glance"
          rows={quickSummary}
          footnote={`Ranges reflect 25th–75th percentile across ${fastCasualMeta.sampleSize} (${fastCasualMeta.dataVintage}).`}
        />

        <IndustrySectionNav items={sectionNav} />

        {/* Economics overview */}
        <Section
          id="economics"
          title="Economics Overview"
          subtitle="How a fast casual unit converts foot traffic into profit — and why the model often beats full-service dining."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
              {economicsFlow.map((step, i) => (
                <div key={step.label}>
                  {i > 0 && (
                    <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">
                      ↓
                    </p>
                  )}
                  <p className="text-sm text-ink-muted">{step.label}</p>
                  <p className="mt-1 text-xl font-bold tabular-nums text-ink">
                    {step.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-surface-muted/30 p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Why fast casual tends to outperform full-service
              </h3>
              <ul className="mt-5 space-y-3">
                {economicsAdvantages.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                  >
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-7.5"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Revenue */}
        <Section
          id="revenue"
          title="Revenue Benchmarks"
          subtitle="Annual revenue distribution, by store size, and by location type."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DistributionBar
              bottom25={revenueDistribution.bottom25}
              median={revenueDistribution.median}
              top25={revenueDistribution.top25}
              label="Annual revenue distribution"
            />
            <DataTable
              title="Revenue By Store Size"
              columns={["Store Size", "Revenue"]}
              rows={revenueByStoreSize.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
          <div className="mt-8">
            <DataTable
              title="Revenue By Location"
              columns={["Location Type", "Revenue"]}
              rows={revenueByLocation.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
        </Section>

        {/* Profit margins */}
        <Section
          id="profit-margins"
          title="Profit Margin Benchmarks"
          subtitle="Net margin tiers, cost drivers, and comparison to other restaurant formats."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <MarginTierFourChart />
            <DataTable
              title="Fast Casual vs Other Formats"
              columns={["Format", "Margin"]}
              rows={marginByFormat.map((r) => ({
                label: r.type,
                value: r.margin,
              }))}
            />
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-ink">
              Margin Drivers
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marginDrivers.map((driver) => (
                <li
                  key={driver.title}
                  className="card-interactive rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-ink">{driver.title}</p>
                    <p className="text-sm font-bold tabular-nums text-accent">
                      {driver.range}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {driver.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Labor */}
        <Section
          id="labor"
          title="Labor Economics"
          subtitle="Staffing scales with revenue — but fast casual runs leaner than full-service."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Employees Needed"
              columns={["Revenue Level", "Employees"]}
              rows={laborByRevenue.map((r) => ({
                label: r.level,
                value: r.employees,
              }))}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Labor Cost %
              </h3>
              <p className="mt-4 text-4xl font-bold tabular-nums text-metric-margin">
                {laborCostBenchmark.range}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {laborCostBenchmark.note}
              </p>
            </div>
          </div>
        </Section>

        {/* Owner salary */}
        <Section
          id="owner-salary"
          title="How Much Do Fast Casual Owners Make?"
          subtitle="Owner compensation varies by unit count, brand, and operator involvement."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerSalaryTiers.map((tier) => (
              <article
                key={tier.tier}
                className="card-interactive rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display font-semibold text-ink">{tier.tier}</h3>
                <p className="mt-3 text-2xl font-bold tabular-nums text-metric-salary">
                  {tier.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {tier.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Valuation */}
        <Section
          id="valuation"
          title="Fast Casual Restaurant Valuation"
          subtitle="Multiples tend to run higher than traditional full-service due to scalability and brand premium."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationMultiples.map((mult) => (
              <article
                key={mult.label}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display font-semibold text-ink">{mult.label}</h3>
                <p className="mt-3 text-xl font-bold tabular-nums text-metric-valuation">
                  {mult.range}
                </p>
                <p className="mt-1 text-sm text-ink-faint">median {mult.median}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {mult.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft/30 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              Sample Valuation
            </h3>
            <div className="mt-6 flex flex-col items-center text-center sm:flex-row sm:justify-center sm:gap-8">
              <div>
                <p className="text-sm text-ink-muted">Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {valuationExample.revenue}
                </p>
              </div>
              <p className="my-2 text-2xl text-ink-faint sm:my-0" aria-hidden="true">
                ↓
              </p>
              <div>
                <p className="text-sm text-ink-muted">SDE</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {valuationExample.sde}
                </p>
              </div>
              <p className="my-2 text-2xl text-ink-faint sm:my-0" aria-hidden="true">
                ↓
              </p>
              <div>
                <p className="text-sm text-ink-muted">Estimated Value</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-valuation">
                  {valuationExample.valuation}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {valuationExample.multiple}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Startup costs */}
        <Section
          id="startup"
          title="Startup Costs"
          subtitle="All-in investment to open a fast casual location — from buildout to working capital."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Cost Breakdown"
              columns={["Cost Item", "Typical Range"]}
              rows={startupCosts.map((r) => ({
                label: r.item,
                value: r.range,
              }))}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Total Investment Range
              </h3>
              <ul className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Low", value: totalInvestment.low },
                  { label: "Typical", value: totalInvestment.typical },
                  { label: "High", value: totalInvestment.high },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-border bg-surface-muted/30 px-3 py-4"
                  >
                    <p className="text-xs font-medium text-ink-faint">{item.label}</p>
                    <p className="mt-2 text-lg font-bold tabular-nums text-accent">
                      {item.value}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                Franchise fees, real estate deposits, and pre-opening marketing can add
                $50K–$150K on top of these ranges. Urban buildouts trend toward the
                high end.
              </p>
            </div>
          </div>
        </Section>

        {/* Unit economics */}
        <Section
          id="unit-economics"
          title="Unit Economics"
          subtitle="A worked example showing how daily volume translates to annual revenue."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Example Store</h3>
              <dl className="mt-6 space-y-4">
                {[
                  {
                    label: "Customers Per Day",
                    value: formatNumber(example.customersPerDay),
                  },
                  {
                    label: "Average Ticket",
                    value: formatCurrency(example.averageTicket),
                  },
                  {
                    label: "Revenue Per Day",
                    value: formatCurrency(example.revenuePerDay),
                  },
                  {
                    label: "Revenue Per Year",
                    value: formatCurrency(example.revenuePerYear),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-border-subtle pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink-muted">{item.label}</dt>
                    <dd className="text-lg font-bold tabular-nums text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue Formula</h3>
              <p className="mt-4 rounded-xl bg-surface-muted/50 px-4 py-3 font-mono text-sm text-ink">
                Revenue = Customers/Day × Avg Ticket × Days Open
              </p>
              <div className="mt-6 space-y-3 text-sm text-ink-muted">
                <p>
                  <span className="font-semibold text-ink">Worked example:</span>
                </p>
                <p>
                  {formatNumber(example.customersPerDay)} customers ×{" "}
                  {formatCurrency(example.averageTicket)} × {example.daysOpen} days
                </p>
                <p className="text-lg font-bold tabular-nums text-metric-revenue">
                  = {formatCurrency(example.revenuePerYear)}/year
                </p>
                <p className="leading-relaxed">
                  At 12% net margin, this store generates roughly{" "}
                  {formatCurrency(Math.round(example.revenuePerYear * 0.12))} in annual
                  profit before owner compensation adjustments.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Benchmark */}
        <Section
          id="benchmark"
          title="Benchmark Your Business"
          subtitle="See how your fast casual unit compares to industry quartiles."
        >
          <BenchmarkTool thresholds={benchmarkThresholds} />
          <p className="mt-4 text-xs text-ink-faint">
            Based on {fastCasualMeta.sampleSize} U.S. fast casual locations (
            {fastCasualMeta.dataVintage}).{" "}
            <Link href="/methodology/" className="text-accent hover:underline">
              Methodology
            </Link>
          </p>
        </Section>

        {/* Comparisons */}
        <Section
          id="comparisons"
          title="Fast Casual Comparisons"
          subtitle="Side-by-side economics vs. related restaurant formats."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={comparisons} columns={2} />
        </Section>

        {/* Leading brands */}
        <Section
          id="brands"
          title="Leading Fast Casual Brands"
          subtitle="Reference points for understanding the segment — not franchise recommendations."
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Brand
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Approx Positioning
                  </th>
                </tr>
              </thead>
              <tbody>
                {leadingBrands.map((row, i) => (
                  <tr
                    key={row.brand}
                    className={
                      i < leadingBrands.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">
                      {row.brand}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.positioning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-faint">
            Brand names are used for segment context only. BizMetricsHQ is not affiliated
            with these companies.
          </p>
        </Section>

        {/* Calculators */}
        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on your fast casual restaurant."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

        {/* FAQs */}
        <Section id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={faqs} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

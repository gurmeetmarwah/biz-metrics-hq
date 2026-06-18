import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KpiDashboard } from "@/components/industry/KpiDashboard";
import { QuickSummaryTable } from "@/components/industry/QuickSummaryTable";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { DistributionBar } from "@/components/industry/DistributionBar";
import { DataTable } from "@/components/industry/DataTable";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { BakeryBenchmarkTool } from "@/components/industry/BakeryBenchmarkTool";
import { BakeryScorecard } from "@/components/industry/BakeryScorecard";
import {
  bakeryKpis,
  bakeryMeta,
  benchmarkThresholds,
  breakEvenDefaults,
  businessModelFlow,
  calculateBreakEven,
  calculators,
  comparisons,
  costStructure,
  customCakeProfitability,
  customCakeRevenue,
  dailyEconomicsExample,
  faqs,
  heroExamples,
  incomeDrivers,
  investmentLevels,
  marginTiers,
  ownerSalaryTiers,
  productMargins,
  productMix,
  profitDrivers,
  quickSummary,
  revenueByLocation,
  revenueByType,
  revenueDistribution,
  seasonality,
  sectionNav,
  startupCosts,
  valuationExample,
  valuationMultiples,
  wholesaleRetailComparison,
} from "@/lib/industries/bakery";
import { formatCurrency } from "@/lib/numbers";

export const metadata: Metadata = {
  title: `${bakeryMeta.title} — Revenue, Margins & Startup Costs | BizMetricsHQ`,
  description:
    "Bakery economics and benchmarks: can a bakery be profitable? Revenue, margins, product mix, wholesale vs retail, custom cakes, seasonality, startup costs, and valuation.",
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
    { label: "Weak", value: marginTiers.weak, width: "w-1/5", color: "bg-metric-salary/40" },
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

export default function BakeryEconomicsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const daily = dailyEconomicsExample;
  const breakEven = calculateBreakEven(breakEvenDefaults);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
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
              <span className="text-ink-muted">Bakery</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-metric-salary" />
              Industry report · {bakeryMeta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {bakeryMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {bakeryMeta.subtitle}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-faint">
              Can a bakery become a profitable business? The benchmarks below answer
              that — not just how to start one.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-ink-muted">Popular formats:</span>
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

        <KpiDashboard kpis={bakeryKpis} />

        <QuickSummaryTable
          title="Bakery At A Glance"
          rows={quickSummary}
          footnote={`Ranges reflect 25th–75th percentile across ${bakeryMeta.sampleSize} (${bakeryMeta.dataVintage}).`}
        />

        <IndustrySectionNav items={sectionNav} />

        <Section
          id="business-model"
          title="Bakery Business Model"
          subtitle="How daily orders flow through costs to profit."
        >
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
            {businessModelFlow.map((step, i) => (
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
        </Section>

        <Section
          id="revenue"
          title="Revenue Benchmarks"
          subtitle="Annual revenue distribution by bakery type and location."
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
              title="Revenue By Bakery Type"
              columns={["Bakery Type", "Revenue"]}
              rows={revenueByType.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
          <div className="mt-8">
            <DataTable
              title="Revenue By Location"
              columns={["Location", "Revenue"]}
              rows={revenueByLocation.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
        </Section>

        <Section
          id="daily-economics"
          title="Daily Unit Economics"
          subtitle="The numbers that determine whether a bakery can be profitable."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Example Bakery</h3>
              <dl className="mt-6 space-y-4">
                {[
                  {
                    label: "Customers Per Day",
                    value: formatNumber(daily.customersPerDay),
                  },
                  {
                    label: "Average Order",
                    value: formatCurrency(daily.averageOrder),
                  },
                  {
                    label: "Daily Revenue",
                    value: formatCurrency(daily.dailyRevenue),
                  },
                  {
                    label: "Monthly Revenue",
                    value: formatCurrency(daily.monthlyRevenue),
                  },
                  {
                    label: "Annual Revenue",
                    value: formatCurrency(daily.annualRevenue),
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
              <h3 className="font-display font-semibold text-ink">Revenue Model</h3>
              <p className="mt-4 rounded-xl bg-surface-muted/50 px-4 py-3 font-mono text-sm text-ink">
                Revenue = Customers/Day × Avg Order × Days Open
              </p>
              <div className="mt-6 space-y-3 text-sm text-ink-muted">
                <p>
                  <span className="font-semibold text-ink">Worked example:</span>
                </p>
                <p>
                  {formatNumber(daily.customersPerDay)} ×{" "}
                  {formatCurrency(daily.averageOrder)} × {daily.daysOpenPerYear} days
                </p>
                <p className="text-lg font-bold tabular-nums text-metric-revenue">
                  = {formatCurrency(daily.annualRevenue)}/year
                </p>
                <p className="leading-relaxed">
                  At 12% net margin, this bakery generates roughly{" "}
                  {formatCurrency(Math.round(daily.annualRevenue * 0.12))} in annual
                  profit — before owner compensation adjustments.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="product-mix"
          title="Product Mix Economics"
          subtitle="Revenue contribution and margin potential by product category."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Revenue Contribution
              </h3>
              <div className="mt-6 flex h-5 overflow-hidden rounded-full">
                {productMix.map((item) => (
                  <div
                    key={item.label}
                    style={{ width: `${item.percent}%`, background: item.color }}
                    title={`${item.label}: ${item.percent}%`}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {productMix.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-sm"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-ink-muted">{item.label}</span>
                    </div>
                    <span className="font-semibold tabular-nums text-ink">
                      {item.percent}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <DataTable
              title="Margin Comparison"
              columns={["Product", "Margin Potential"]}
              rows={productMargins.map((r) => ({
                label: r.product,
                value: r.margin,
              }))}
            />
          </div>
        </Section>

        <Section
          id="profit-margins"
          title="Profit Margin Benchmarks"
          subtitle="Margin tiers, cost structure, and profit drivers for bakery operators."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <MarginTierFourChart />
            <DataTable
              title="Cost Structure"
              columns={["Cost Category", "Typical %"]}
              rows={costStructure.map((r) => ({
                label: r.category,
                value: r.percent,
              }))}
            />
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-ink">
              Profit Drivers
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {profitDrivers.map((driver) => (
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

        <Section
          id="owner-salary"
          title="How Much Do Bakery Owners Make?"
          subtitle="Owner income varies by format, product mix, and scale."
          className="bg-surface-muted/50"
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

          <div className="mt-10 rounded-2xl border border-border bg-surface-muted/30 p-6">
            <h3 className="font-display font-semibold text-ink">Income Drivers</h3>
            <ul className="mt-4 space-y-2">
              {incomeDrivers.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-2.5 text-sm text-ink-muted"
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
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="startup"
          title="Startup Costs"
          subtitle="One of the most searched topics — what it costs to open a bakery."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Startup Cost Breakdown"
              columns={["Expense", "Typical Range"]}
              rows={startupCosts.map((r) => ({
                label: r.expense,
                value: r.range,
              }))}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Investment Levels
              </h3>
              <ul className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Home Bakery", value: investmentLevels.home },
                  { label: "Retail Bakery", value: investmentLevels.retail },
                  { label: "Commercial Bakery", value: investmentLevels.commercial },
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
                Cottage food and home-based bakeries start near $50K. Full retail
                buildouts with commercial ovens and display cases trend toward
                $200K–$300K.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="wholesale-retail"
          title="Wholesale vs Retail Economics"
          subtitle="Many operators specifically compare these two models."
          className="bg-surface-muted/50"
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Metric
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Retail
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Wholesale
                  </th>
                </tr>
              </thead>
              <tbody>
                {wholesaleRetailComparison.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i < wholesaleRetailComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">
                      {row.metric}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.retail}</td>
                    <td className="px-5 py-4 font-semibold text-ink sm:px-6">
                      {row.wholesale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="custom-cakes"
          title="Custom Cake Economics"
          subtitle="Where bakery profit potential is highest — and most seasonal."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue Sources</h3>
              <ul className="mt-6 space-y-4">
                {customCakeRevenue.map((item) => (
                  <li key={item.source}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink-muted">{item.source}</span>
                      <span className="font-semibold tabular-nums text-ink">
                        {item.percent}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted">
                      <div
                        className="h-full rounded-full bg-metric-valuation/60"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <DataTable
              title="Profitability Comparison"
              columns={["Category", "Profit Potential"]}
              rows={customCakeProfitability.map((r) => ({
                label: r.category,
                value: r.potential,
              }))}
            />
          </div>
        </Section>

        <Section
          id="break-even"
          title="Break-Even Dashboard"
          subtitle="Daily targets that show whether the model works before you sign a lease."
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Orders Needed Per Day",
                  value: formatNumber(Math.round(breakEven.ordersPerDay)),
                },
                {
                  label: "Revenue Needed Per Month",
                  value: formatCurrency(Math.round(breakEven.breakEvenRevenue)),
                },
                {
                  label: "Average Order Required",
                  value: formatCurrency(breakEven.averageOrderRequired),
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-border bg-surface-muted/30 px-4 py-5 text-center"
                >
                  <p className="text-xs text-ink-faint">{item.label}</p>
                  <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-accent/20 bg-accent-soft/40 px-5 py-4">
              <p className="text-sm leading-relaxed text-ink-muted">
                <span className="font-semibold text-ink">Example: </span>
                Need{" "}
                <span className="font-bold text-ink">
                  {formatNumber(Math.round(breakEven.ordersPerDay))} orders/day
                </span>{" "}
                or{" "}
                <span className="font-bold text-ink">
                  {formatCurrency(Math.round(breakEven.dailyRevenue))} revenue/day
                </span>{" "}
                to cover fixed costs.
              </p>
            </div>

            <p className="mt-4 text-sm text-ink-muted">
              <Link
                href="/calculators/bakery-break-even/"
                className="font-medium text-accent hover:underline"
              >
                Run the full Bakery Break-Even Calculator →
              </Link>
            </p>
          </div>
        </Section>

        <Section
          id="valuation"
          title="Bakery Valuation Benchmarks"
          subtitle="Few sites discuss bakery valuation — here is what buyers and sellers use."
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
            <h3 className="font-display text-lg font-semibold text-ink">Example</h3>
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

        <Section
          id="benchmark"
          title="Benchmark Your Bakery"
          subtitle="Compare revenue, margin, and daily orders against industry quartiles."
        >
          <BakeryBenchmarkTool thresholds={benchmarkThresholds} />
          <p className="mt-4 text-xs text-ink-faint">
            Based on {bakeryMeta.sampleSize} ({bakeryMeta.dataVintage}).{" "}
            <Link href="/methodology/" className="text-accent hover:underline">
              Methodology
            </Link>
          </p>
        </Section>

        <Section
          id="comparisons"
          title="Bakery Comparisons"
          subtitle="Side-by-side economics vs. related food businesses."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={comparisons} columns={2} />
        </Section>

        <Section
          id="seasonality"
          title="Seasonality Dashboard"
          subtitle="Most bakeries experience strong seasonality — plan cash flow accordingly."
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold text-ink-muted">
              Revenue by season (index, median = 100)
            </p>
            <ul className="mt-6 space-y-4">
              {seasonality.map((item) => (
                <li key={item.season}>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-medium text-ink">{item.season}</span>
                    <span className="font-bold tabular-nums text-accent">
                      {item.revenueIndex}
                    </span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-muted">
                    <div
                      className="h-full rounded-full bg-metric-revenue/50 transition-all"
                      style={{ width: `${Math.min(100, item.revenueIndex)}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-ink-faint">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="scorecard"
          title="Performance Scorecard"
          subtitle="Interactive Bakery Economics Score based on five operating levers."
        >
          <BakeryScorecard />
        </Section>

        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on your bakery business."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

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

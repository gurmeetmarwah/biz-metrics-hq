import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KpiDashboard } from "@/components/industry/KpiDashboard";
import { QuickSummaryTable } from "@/components/industry/QuickSummaryTable";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { DataTable } from "@/components/industry/DataTable";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { FoodTruckBenchmarkTool } from "@/components/industry/FoodTruckBenchmarkTool";
import { FoodTruckUnitCalculator } from "@/components/industry/FoodTruckUnitCalculator";
import { FoodTruckScorecard } from "@/components/industry/FoodTruckScorecard";
import {
  benchmarkThresholds,
  breakEvenDefaults,
  businessModelFlow,
  calculateBreakEven,
  calculators,
  comparisons,
  costStructure,
  dailyEconomicsExample,
  eventEconomics,
  eventProfitability,
  faqs,
  foodTruckKpis,
  foodTruckMeta,
  heroExamples,
  incomeDrivers,
  investmentRange,
  kpiContextNote,
  marginTiers,
  ownerIncomeTiers,
  profitDrivers,
  quickSummary,
  revenueByConcept,
  revenueByOperatingStyle,
  revenueDistribution,
  sectionNav,
  startupCosts,
  valuationExample,
  valuationMultiples,
} from "@/lib/industries/food-truck";
import { formatCurrency } from "@/lib/numbers";

export const metadata: Metadata = {
  title: `${foodTruckMeta.title} — Revenue, Margins & Startup Costs | BizMetricsHQ`,
  description:
    "Food truck economics: revenue benchmarks, daily unit economics, startup costs, event profitability, break-even analysis, valuation multiples, and owner income.",
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

function RevenueDistributionBar() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-muted">
        Annual revenue distribution
      </p>
      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-surface-muted">
        <div className="w-1/4 bg-metric-salary/40" />
        <div className="w-2/4 bg-metric-margin/50" />
        <div className="w-1/4 bg-metric-revenue/40" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs font-medium text-ink-faint">Low Performer</p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-ink">
            {revenueDistribution.lowPerformer}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-faint">Average</p>
          <p className="mt-1 text-lg font-bold tabular-nums text-accent">
            {revenueDistribution.average}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-faint">Top Quartile</p>
          <p className="mt-1 text-sm font-semibold tabular-nums text-ink">
            {revenueDistribution.topQuartile}
          </p>
        </div>
      </div>
    </div>
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

export default function FoodTruckEconomicsPage() {
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
              <span className="text-ink-muted">Food Truck</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-metric-salary" />
              Industry report · {foodTruckMeta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {foodTruckMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {foodTruckMeta.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-ink-muted">Popular concepts:</span>
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

        <section className="border-b border-border/60 bg-gradient-to-b from-surface via-surface to-surface-muted/30">
          <KpiDashboard kpis={foodTruckKpis} />
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
            <p className="rounded-2xl border border-border/80 bg-surface/80 px-5 py-4 text-sm text-ink-muted sm:px-6">
              <span className="font-semibold text-ink">Note: </span>
              {kpiContextNote}
            </p>
          </div>
        </section>

        <QuickSummaryTable
          title="Food Truck At A Glance"
          rows={quickSummary}
          footnote={`Ranges reflect 25th–75th percentile across ${foodTruckMeta.sampleSize} (${foodTruckMeta.dataVintage}).`}
        />

        <IndustrySectionNav items={sectionNav} />

        {/* Business model */}
        <Section
          id="business-model"
          title="Business Model Visual"
          subtitle="How daily customers flow through costs to profit."
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

        {/* Revenue */}
        <Section
          id="revenue"
          title="Revenue Benchmarks"
          subtitle="Annual revenue by concept, operating style, and performance tier."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RevenueDistributionBar />
            <DataTable
              title="Revenue By Concept"
              columns={["Food Truck Type", "Revenue"]}
              rows={revenueByConcept.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
          <div className="mt-8">
            <DataTable
              title="Revenue By Operating Style"
              columns={["Type", "Revenue"]}
              rows={revenueByOperatingStyle.map((r) => ({
                label: r.type,
                value: r.revenue,
              }))}
            />
          </div>
        </Section>

        {/* Daily economics */}
        <Section
          id="daily-economics"
          title="Daily Economics"
          subtitle="The numbers operators track every shift — the foundation of food truck profitability."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Example Day</h3>
              <dl className="mt-6 space-y-4">
                {[
                  { label: "Customers", value: formatNumber(daily.customers) },
                  {
                    label: "Average Ticket",
                    value: formatCurrency(daily.averageTicket),
                  },
                  {
                    label: "Daily Revenue",
                    value: formatCurrency(daily.dailyRevenue),
                  },
                  {
                    label: "Food Cost",
                    value: formatCurrency(daily.foodCostDaily),
                  },
                  {
                    label: "Daily Profit",
                    value: formatCurrency(daily.dailyProfit),
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
                Revenue = Customers × Average Ticket
              </p>
              <div className="mt-6 space-y-3 text-sm text-ink-muted">
                <p>
                  <span className="font-semibold text-ink">Worked example:</span>
                </p>
                <p>
                  {formatNumber(daily.customers)} ×{" "}
                  {formatCurrency(daily.averageTicket)} ={" "}
                  <span className="font-bold text-metric-revenue">
                    {formatCurrency(daily.dailyRevenue)}/day
                  </span>
                </p>
                <p className="leading-relaxed">
                  At {daily.operatingDays} operating days, that&apos;s{" "}
                  <span className="font-semibold text-ink">
                    {formatCurrency(daily.dailyRevenue * daily.operatingDays)}
                  </span>{" "}
                  annual street revenue before events and catering.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Startup */}
        <Section
          id="startup"
          title="Startup Costs"
          subtitle="All-in investment to launch — the barrier to entry and core KPI for food trucks."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Startup Cost Breakdown"
              columns={["Expense", "Range"]}
              rows={startupCosts.map((r) => ({
                label: r.expense,
                value: r.range,
              }))}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Investment Range
              </h3>
              <ul className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Budget Setup", value: investmentRange.budget },
                  { label: "Typical Setup", value: investmentRange.typical },
                  { label: "Premium Setup", value: investmentRange.premium },
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
                Used trucks and commissary kitchen sharing reduce upfront cost.
                Festival-ready builds with premium equipment trend toward $130K–$150K.
              </p>
            </div>
          </div>
        </Section>

        {/* Profit margins */}
        <Section
          id="profit-margins"
          title="Profit Margins"
          subtitle="Margin tiers, cost structure, and profit drivers unique to mobile food service."
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

        {/* Owner income */}
        <Section
          id="owner-income"
          title="How Much Do Food Truck Owners Make?"
          subtitle="Owner income varies widely based on events, catering, and trucks operated."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerIncomeTiers.map((tier) => (
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

        {/* Break-even */}
        <Section
          id="break-even"
          title="Break-Even Analysis"
          subtitle="Food truck operators think in events and daily sales — not monthly P&L alone."
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display font-semibold text-ink">
              Break-Even Dashboard
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Revenue Needed Per Month",
                  value: formatCurrency(Math.round(breakEven.breakEvenRevenue)),
                },
                {
                  label: "Customers Needed Per Day",
                  value: formatNumber(Math.round(breakEven.customersPerDay)),
                },
                {
                  label: "Events Needed Per Month",
                  value: formatNumber(Math.round(breakEven.eventsPerMonth)),
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
                  {formatNumber(Math.round(breakEven.customersPerDay))} customers/day
                </span>{" "}
                at {formatCurrency(breakEvenDefaults.averageTicket)} average ticket — or{" "}
                <span className="font-bold text-ink">
                  {formatNumber(Math.round(breakEven.eventsPerMonth))} catering
                  events/month
                </span>{" "}
                at {formatCurrency(breakEvenDefaults.cateringRevenuePerEvent)} each.
              </p>
            </div>
          </div>
        </Section>

        {/* Events */}
        <Section
          id="events"
          title="Event Economics"
          subtitle="High-margin revenue streams that separate top performers from break-even operators."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Revenue Per Event"
              columns={["Event Type", "Typical Revenue"]}
              rows={eventEconomics.map((r) => ({
                label: r.eventType,
                value: r.revenue,
              }))}
            />
            <DataTable
              title="Event Profitability"
              columns={["Event Type", "Typical Margin"]}
              rows={eventProfitability.map((r) => ({
                label: r.eventType,
                value: r.margin,
              }))}
            />
          </div>
        </Section>

        {/* Valuation */}
        <Section
          id="valuation"
          title="Food Truck Valuation"
          subtitle="Few benchmarks exist for mobile food businesses — here is what buyers and sellers use."
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
              Example Valuation
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

        {/* Benchmark */}
        <Section
          id="benchmark"
          title="Food Truck Benchmark Tool"
          subtitle="Compare revenue, margin, and daily volume against industry quartiles."
        >
          <FoodTruckBenchmarkTool thresholds={benchmarkThresholds} />
          <p className="mt-4 text-xs text-ink-faint">
            Based on {foodTruckMeta.sampleSize} U.S. food truck operators (
            {foodTruckMeta.dataVintage}).{" "}
            <Link href="/methodology/" className="text-accent hover:underline">
              Methodology
            </Link>
          </p>
        </Section>

        {/* Comparisons */}
        <Section
          id="comparisons"
          title="Food Truck Comparisons"
          subtitle="Side-by-side economics vs. related food businesses."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={comparisons} columns={2} />
        </Section>

        {/* Unit calculator */}
        <Section
          id="unit-calculator"
          title="Unit Economics Calculator"
          subtitle="Interactive revenue model from ticket size and daily customer count."
        >
          <FoodTruckUnitCalculator />
        </Section>

        {/* Success factors */}
        <Section
          id="success-factors"
          title="Success Factors Scorecard"
          subtitle="Adjust metrics to see your food truck health score."
          className="bg-surface-muted/50"
        >
          <FoodTruckScorecard />
        </Section>

        {/* Calculators */}
        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on your food truck business."
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

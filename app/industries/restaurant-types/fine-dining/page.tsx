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
import { FineDiningBenchmarkTool } from "@/components/industry/FineDiningBenchmarkTool";
import { FineDiningScorecard } from "@/components/industry/FineDiningScorecard";
import {
  benchmarkThresholds,
  calculators,
  checkBreakdown,
  comparisons,
  costStructure,
  economicsFlow,
  faqs,
  fineDiningKpis,
  fineDiningMeta,
  heroExamples,
  kpiContextNotes,
  laborByPosition,
  laborComparison,
  laborCostBenchmark,
  marginDrivers,
  marginTiers,
  ownerCompensationTiers,
  privateEvents,
  quickSummary,
  revenueByConcept,
  revenueByLocation,
  revenueDistribution,
  revenueMix,
  salaryDrivers,
  sectionNav,
  ticketBenchmarks,
  unitEconomicsExample,
  valuationExample,
  valuationMultiples,
} from "@/lib/industries/fine-dining";
import { formatCurrency } from "@/lib/numbers";

export const metadata: Metadata = {
  title: `${fineDiningMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Fine dining restaurant economics: revenue benchmarks, average check analysis, profit margins, labor costs, owner compensation, valuation multiples, and private event revenue.",
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

export default function FineDiningEconomicsPage() {
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
              <span className="text-ink-muted">Fine Dining</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-metric-valuation" />
              Industry report · {fineDiningMeta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {fineDiningMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {fineDiningMeta.subtitle}
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

        {/* Premium KPI strip */}
        <section
          aria-label="Key performance indicators"
          className="border-b border-border/60 bg-gradient-to-b from-surface via-surface to-surface-muted/30"
        >
          <KpiDashboard kpis={fineDiningKpis} />
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
            <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 sm:p-6">
              <p className="text-sm font-semibold text-ink">
                Unlike fast casual, fine dining often has:
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {kpiContextNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-valuation" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <QuickSummaryTable
          title="Fine Dining Economics At A Glance"
          rows={quickSummary}
          footnote={`Ranges reflect 25th–75th percentile across ${fineDiningMeta.sampleSize} (${fineDiningMeta.dataVintage}).`}
        />

        <IndustrySectionNav items={sectionNav} />

        {/* Unit economics */}
        <Section
          id="unit-economics"
          title="Unit Economics"
          subtitle="How guests, average check, and operating days compound into annual revenue."
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

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Sample Fine Dining Unit
              </h3>
              <dl className="mt-6 space-y-4">
                {[
                  { label: "Seats", value: formatNumber(example.seats) },
                  {
                    label: "Guests Per Day",
                    value: formatNumber(example.guestsPerDay),
                  },
                  {
                    label: "Average Check",
                    value: formatCurrency(example.averageCheck),
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
              <p className="mt-6 rounded-xl bg-surface-muted/50 px-4 py-3 font-mono text-xs text-ink sm:text-sm">
                Revenue = Guests/Day × Avg Check × Days Open
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                {formatNumber(example.guestsPerDay)} ×{" "}
                {formatCurrency(example.averageCheck)} × {example.daysOpen} days ={" "}
                <span className="font-semibold text-ink">
                  {formatCurrency(example.revenuePerYear)}
                </span>
              </p>
            </div>
          </div>
        </Section>

        {/* Revenue */}
        <Section
          id="revenue"
          title="Revenue Benchmarks"
          subtitle="Annual revenue distribution by concept type and location."
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
              title="Revenue By Concept"
              columns={["Concept", "Revenue"]}
              rows={revenueByConcept.map((r) => ({
                label: r.concept,
                value: r.revenue,
              }))}
            />
          </div>
          <div className="mt-8">
            <DataTable
              title="Revenue By Location"
              columns={["Location", "Revenue"]}
              rows={revenueByLocation.map((r) => ({
                label: r.location,
                value: r.revenue,
              }))}
            />
          </div>
        </Section>

        {/* Average check */}
        <Section
          id="average-check"
          title="Average Check Analysis"
          subtitle="Fine dining revenue is driven by check composition — food, wine, and experiential add-ons."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">
                Average Guest Spend
              </h3>
              <div className="mt-6 flex h-5 overflow-hidden rounded-full">
                {checkBreakdown.map((item) => (
                  <div
                    key={item.label}
                    style={{ width: `${item.percent}%`, background: item.color }}
                    title={`${item.label}: ${item.percent}%`}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {checkBreakdown.map((item) => (
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
              title="Ticket Size Benchmarks"
              columns={["Segment", "Average Check"]}
              rows={ticketBenchmarks.map((r) => ({
                label: r.segment,
                value: r.check,
              }))}
            />
          </div>
        </Section>

        {/* Profitability */}
        <Section
          id="profitability"
          title="Fine Dining Profit Margins"
          subtitle="Profitability dashboard — margin tiers, cost structure, and key drivers."
          className="bg-surface-muted/50"
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
          subtitle="Labor is the largest controllable cost — and the hardest to optimize in fine dining."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Labor Cost Benchmarks"
              columns={["Position", "Typical Share"]}
              rows={laborByPosition.map((r) => ({
                label: r.position,
                value: r.share,
              }))}
            />
            <div className="space-y-6">
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
              <DataTable
                title="Compare Against Other Formats"
                columns={["Format", "Labor Cost"]}
                rows={laborComparison.map((r) => ({
                  label: r.format,
                  value: r.labor,
                }))}
              />
            </div>
          </div>
        </Section>

        {/* Owner compensation */}
        <Section
          id="owner-compensation"
          title="How Much Do Fine Dining Owners Make?"
          subtitle="Owner compensation reflects concept scale, reputation, and operating model."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerCompensationTiers.map((tier) => (
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
            <h3 className="font-display font-semibold text-ink">Salary Drivers</h3>
            <ul className="mt-4 space-y-2">
              {salaryDrivers.map((factor) => (
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

        {/* Valuation */}
        <Section
          id="valuation"
          title="Fine Dining Valuation Multiples"
          subtitle="Reputation, lease terms, and owner dependency create wider multiple ranges than fast casual."
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
                <p className="text-sm text-ink-muted">Business Value</p>
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

        {/* Private events */}
        <Section
          id="private-events"
          title="Private Dining & Event Economics"
          subtitle="High-margin revenue streams that differentiate fine dining from other formats."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DataTable
              title="Private Events"
              columns={["Event Type", "Revenue Impact"]}
              rows={privateEvents.map((r) => ({
                label: r.eventType,
                value: r.impact,
              }))}
            />
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue Mix</h3>
              <div className="mt-6 flex h-5 overflow-hidden rounded-full">
                {revenueMix.map((item, i) => {
                  const colors = [
                    "var(--metric-salary)",
                    "var(--metric-valuation)",
                    "var(--metric-margin)",
                    "var(--metric-revenue)",
                  ];
                  return (
                    <div
                      key={item.source}
                      style={{
                        width: `${item.percent}%`,
                        background: colors[i],
                      }}
                      title={`${item.source}: ${item.percent}%`}
                    />
                  );
                })}
              </div>
              <ul className="mt-6 space-y-3">
                {revenueMix.map((item, i) => {
                  const colors = [
                    "var(--metric-salary)",
                    "var(--metric-valuation)",
                    "var(--metric-margin)",
                    "var(--metric-revenue)",
                  ];
                  return (
                    <li
                      key={item.source}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 rounded-sm"
                          style={{ background: colors[i] }}
                          aria-hidden="true"
                        />
                        <span className="text-ink-muted">{item.source}</span>
                      </div>
                      <span className="font-semibold tabular-nums text-ink">
                        {item.percent}%
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Section>

        {/* Benchmark */}
        <Section
          id="benchmark"
          title="Benchmark Your Restaurant"
          subtitle="Compare revenue, average check, and margin against fine dining quartiles."
        >
          <FineDiningBenchmarkTool thresholds={benchmarkThresholds} />
          <p className="mt-4 text-xs text-ink-faint">
            Based on {fineDiningMeta.sampleSize} U.S. fine dining establishments (
            {fineDiningMeta.dataVintage}).{" "}
            <Link href="/methodology/" className="text-accent hover:underline">
              Methodology
            </Link>
          </p>
        </Section>

        {/* Comparisons */}
        <Section
          id="comparisons"
          title="Fine Dining Comparisons"
          subtitle="Side-by-side economics vs. related restaurant formats."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={comparisons} columns={2} />
        </Section>

        {/* Success factors */}
        <Section
          id="success-factors"
          title="Fine Dining Success Factors"
          subtitle="Interactive scorecard — adjust metrics to see how your restaurant performs."
        >
          <FineDiningScorecard />
        </Section>

        {/* Calculators */}
        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on your fine dining restaurant."
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

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { ComparisonCoffeeShopFoodTruckScorecard } from "@/components/comparison/ComparisonCoffeeShopFoodTruckScorecard";
import { CoffeeShopVsFoodTruckDecisionTool } from "@/components/comparison/CoffeeShopVsFoodTruckDecisionTool";
import {
  breakEvenComparison,
  breakEvenExamples,
  businessModelComparison,
  calculators,
  chooseCoffeeShop,
  chooseFoodTruck,
  coffeeShopAdvantages,
  coffeeShopRevenueDist,
  coffeeShopRevenueDrivers,
  coffeeShopStartupItems,
  comparisonMeta,
  costStructureComparison,
  dailyEconomics,
  decisionSnapshot,
  faqs,
  foodTruckAdvantages,
  foodTruckRevenueDist,
  foodTruckRevenueDrivers,
  foodTruckStartupItems,
  kpiComparison,
  locationDependency,
  marginTiers,
  ownerIncomeComparison,
  relatedComparisons,
  revenueStability,
  scalingLadder,
  startupSideBySide,
  valuationComparison,
  valuationExamples,
  winnerScorecard,
  workdayTimeline,
  workloadComparison,
} from "@/lib/industries/comparisons/coffee-shop-vs-food-truck";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Coffee shop vs food truck comparison: startup costs, revenue, profit margins, workload, location dependency, valuation, and interactive decision tool.",
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
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-ink-muted">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function RevenueDistBar({
  label,
  bottom,
  median,
  top,
  accentClass,
}: {
  label: string;
  bottom: string;
  median: string;
  top: string;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-surface-muted">
        <div className="w-1/4 bg-metric-salary/35" />
        <div className={`w-2/4 ${accentClass}`} />
        <div className="w-1/4 bg-metric-revenue/35" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <p className="text-ink-faint">Bottom</p>
          <p className="mt-1 font-semibold tabular-nums text-ink">{bottom}</p>
        </div>
        <div>
          <p className="text-ink-faint">Median</p>
          <p className="mt-1 font-bold tabular-nums text-accent">{median}</p>
        </div>
        <div>
          <p className="text-ink-faint">Top Quartile</p>
          <p className="mt-1 font-semibold tabular-nums text-ink">{top}</p>
        </div>
      </div>
    </div>
  );
}

function MarginGauge({
  label,
  tiers,
}: {
  label: string;
  tiers: { weak: string; average: string; strong: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="mt-4 flex h-3 overflow-hidden rounded-full">
        <div className="w-1/3 bg-metric-salary/40" />
        <div className="w-1/3 bg-metric-margin/45" />
        <div className="w-1/3 bg-metric-revenue/40" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <span className="text-ink-muted">Weak {tiers.weak}</span>
        <span className="text-ink-muted">Avg {tiers.average}</span>
        <span className="text-ink-muted">Strong {tiers.strong}</span>
      </div>
    </div>
  );
}

function StartupVisual({
  title,
  items,
  color,
}: {
  title: string;
  items: readonly { item: string; percent: number }[];
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="font-display font-semibold text-ink">{title}</p>
      <div className="mt-4 flex h-4 overflow-hidden rounded-full">
        {items.map((item) => (
          <div
            key={item.item}
            style={{ width: `${item.percent}%`, background: color, opacity: 0.5 + item.percent / 200 }}
            title={`${item.item}: ${item.percent}%`}
          />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.item} className="flex justify-between text-ink-muted">
            <span>{item.item}</span>
            <span className="font-semibold tabular-nums text-ink">{item.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DailyEconomicsCard({
  title,
  volumeLabel,
  volume,
  averageLabel,
  averageValue,
  dailyRevenue,
  accentClass,
}: {
  title: string;
  volumeLabel: string;
  volume: number;
  averageLabel: string;
  averageValue: number;
  dailyRevenue: number;
  accentClass: string;
}) {
  const rows = [
    { metric: volumeLabel, value: volume.toLocaleString() },
    { metric: averageLabel, value: `$${averageValue.toFixed(2)}` },
    { metric: "Daily Revenue", value: `$${dailyRevenue.toLocaleString()}` },
  ];
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className={`font-display font-semibold ${accentClass}`}>{title}</p>
      <table className="mt-4 w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.metric} className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}>
              <td className="py-3 text-ink-muted">{row.metric}</td>
              <td className="py-3 text-right font-semibold tabular-nums text-ink">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkdayTimeline() {
  const startHour = 5;
  const endHour = 21;
  const span = endHour - startHour;
  const rows = [
    { ...workdayTimeline.coffeeShop, color: "bg-metric-margin" },
    { ...workdayTimeline.foodTruck, color: "bg-metric-salary/70" },
  ];
  return (
    <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-ink-muted">Typical Day</p>
      <div className="mt-6 space-y-6">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{row.label}</span>
              <span className="tabular-nums text-ink-muted">{row.start} → {row.end}</span>
            </div>
            <div className="relative mt-2 h-6 overflow-hidden rounded-full bg-surface-muted">
              <div
                className={`absolute top-0 h-full rounded-full ${row.color}`}
                style={{
                  left: `${((row.startHour - startHour) / span) * 100}%`,
                  width: `${((row.endHour - row.startHour) / span) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-xs text-ink-faint">
        <span>5 AM</span>
        <span>9 AM</span>
        <span>1 PM</span>
        <span>5 PM</span>
        <span>9 PM</span>
      </div>
    </div>
  );
}

export default function CoffeeShopVsFoodTruckPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/industries/food-beverage/coffee-shop/" className="hover:text-accent">Coffee Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">Coffee Shop vs Food Truck</span>
            </nav>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Side-by-side comparison · {comparisonMeta.dataVintage}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{comparisonMeta.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{comparisonMeta.subtitle}</p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Decision Snapshot</h2>
            <p className="mt-2 text-sm text-ink-muted">Instant answer for the most common decision factors.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Best For</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionSnapshot.map((row, i) => (
                    <tr key={row.factor} className={i < decisionSnapshot.length - 1 ? "border-b border-border-subtle" : ""}>
                      <td className="px-5 py-4 text-ink-muted sm:px-6">{row.factor}</td>
                      <td className="px-5 py-4 text-right font-semibold text-accent sm:px-6">{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="kpi-comparison" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">KPI Comparison Dashboard</h2>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
            <div className="mt-8 max-h-[70vh] overflow-auto rounded-2xl border border-border lg:max-h-none lg:overflow-visible">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="sticky top-0 z-10 bg-surface-muted/95 backdrop-blur-sm">
                  <tr className="border-b border-border-subtle">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-margin sm:px-6">Coffee Shop</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-salary sm:px-6">Food Truck</th>
                  </tr>
                </thead>
                <tbody>
                  {kpiComparison.map((row, i) => (
                    <tr key={row.metric} className={i < kpiComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                      <td className="px-5 py-4 font-medium text-ink-muted sm:px-6">{row.metric}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.coffeeShop}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.foodTruck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Winner Scorecard</h2>
            <div className="mt-8"><ComparisonCoffeeShopFoodTruckScorecard categories={winnerScorecard} /></div>
          </div>
        </section>

        <Section id="startup" title="Startup Cost Comparison" subtitle="One of the most visited sections in the coffee shop vs food truck decision.">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <StartupVisual title="Coffee Shop" items={coffeeShopStartupItems} color="var(--metric-margin)" />
            <StartupVisual title="Food Truck" items={foodTruckStartupItems} color="var(--metric-salary)" />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Expense</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Food Truck</th>
                </tr>
              </thead>
              <tbody>
                {startupSideBySide.map((row, i) => (
                  <tr key={row.category} className={i < startupSideBySide.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.category}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.foodTruck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="revenue" title="Revenue Comparison" subtitle="Annual revenue distribution and what drives each model." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RevenueDistBar label="Coffee Shop" bottom={coffeeShopRevenueDist.bottom} median={coffeeShopRevenueDist.median} top={coffeeShopRevenueDist.top} accentClass="bg-metric-margin/50" />
            <RevenueDistBar label="Food Truck" bottom={foodTruckRevenueDist.bottom} median={foodTruckRevenueDist.median} top={foodTruckRevenueDist.top} accentClass="bg-metric-salary/50" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Coffee Shop Revenue Drivers</h3>
              <ul className="mt-4 space-y-2">
                {coffeeShopRevenueDrivers.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-margin" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">Food Truck Revenue Drivers</h3>
              <ul className="mt-4 space-y-2">
                {foodTruckRevenueDrivers.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-salary" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="daily-economics" title="Daily Economics" subtitle="How customer volume and ticket size translate to daily revenue.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DailyEconomicsCard title="Coffee Shop Example" volumeLabel={dailyEconomics.coffeeShop.volumeLabel} volume={dailyEconomics.coffeeShop.volume} averageLabel={dailyEconomics.coffeeShop.averageLabel} averageValue={dailyEconomics.coffeeShop.averageValue} dailyRevenue={dailyEconomics.coffeeShop.dailyRevenue} accentClass="text-metric-margin" />
            <DailyEconomicsCard title="Food Truck Example" volumeLabel={dailyEconomics.foodTruck.volumeLabel} volume={dailyEconomics.foodTruck.volume} averageLabel={dailyEconomics.foodTruck.averageLabel} averageValue={dailyEconomics.foodTruck.averageValue} dailyRevenue={dailyEconomics.foodTruck.dailyRevenue} accentClass="text-metric-salary" />
          </div>
          <p className="mt-6 rounded-xl border border-border bg-surface-muted/30 px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Revenue Formula:</span> Revenue = Customers × Average Ticket
          </p>
        </Section>

        <Section id="profitability" title="Profitability Comparison" subtitle="Margin ranges and cost structure side by side." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MarginGauge label="Coffee Shop Margins" tiers={marginTiers.coffeeShop} />
            <MarginGauge label="Food Truck Margins" tiers={marginTiers.foodTruck} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Expense</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Food Truck</th>
                </tr>
              </thead>
              <tbody>
                {costStructureComparison.map((row, i) => (
                  <tr key={row.expense} className={i < costStructureComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.expense}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.foodTruck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="business-model" title="Business Model Comparison" subtitle="Fixed location vs mobile — a key differentiator between these models.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <p className="font-display text-lg font-semibold text-ink">Coffee Shop</p>
              <p className="mt-2 text-sm font-semibold text-metric-margin">{businessModelComparison.coffeeShop.headline}</p>
              <ul className="mt-4 space-y-2">
                {businessModelComparison.coffeeShop.traits.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-margin" />{t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{businessModelComparison.coffeeShop.description}</p>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <p className="font-display text-lg font-semibold text-ink">Food Truck</p>
              <p className="mt-2 text-sm font-semibold text-metric-salary">{businessModelComparison.foodTruck.headline}</p>
              <ul className="mt-4 space-y-2">
                {businessModelComparison.foodTruck.traits.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-salary" />{t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{businessModelComparison.foodTruck.description}</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm font-semibold text-ink">Revenue Stability</p>
            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Coffee Shop</span>
                  <span className="tabular-nums text-ink-muted">{revenueStability.coffeeShop}/10</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full rounded-full bg-metric-margin" style={{ width: `${revenueStability.coffeeShop * 10}%` }} />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Food Truck</span>
                  <span className="tabular-nums text-ink-muted">{revenueStability.foodTruck}/10</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full rounded-full bg-metric-salary" style={{ width: `${revenueStability.foodTruck * 10}%` }} />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-muted">{revenueStability.note}</p>
          </div>
        </Section>

        <Section id="owner-income" title="Owner Income Comparison" subtitle="How much can owners earn with each model?" className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerIncomeComparison.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">↓</p>
                <p className="text-sm text-ink-muted">Income Benchmark</p>
                <p className={`mt-2 text-2xl font-bold tabular-nums ${item.type === "coffeeShop" ? "text-metric-margin" : "text-metric-salary"}`}>{item.earnings}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="workload" title="Workload Comparison" subtitle="One of the most important decision factors.">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Factor</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Food Truck</th>
                </tr>
              </thead>
              <tbody>
                {workloadComparison.map((row, i) => (
                  <tr key={row.factor} className={i < workloadComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">{row.factor}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.foodTruck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WorkdayTimeline />
        </Section>

        <Section id="location-dependency" title="Location Dependency Analysis" subtitle="How each model depends on place, permits, and demand patterns." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-ink">{locationDependency.coffeeShop.title}</p>
              <p className="mt-2 text-sm text-ink-muted">Success depends on:</p>
              <ul className="mt-4 space-y-2">
                {locationDependency.coffeeShop.factors.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-margin" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-metric-margin/25 bg-metric-margin/5 p-4">
                <p className="text-sm font-semibold text-ink">{locationDependency.coffeeShop.riskType}</p>
                <p className="mt-2 text-sm text-ink-muted">{locationDependency.coffeeShop.riskNote}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-ink">{locationDependency.foodTruck.title}</p>
              <p className="mt-2 text-sm text-ink-muted">Success depends on:</p>
              <ul className="mt-4 space-y-2">
                {locationDependency.foodTruck.factors.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-salary" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-metric-salary/25 bg-metric-salary/5 p-4">
                <p className="text-sm font-semibold text-ink">{locationDependency.foodTruck.riskType}</p>
                <p className="mt-2 text-sm text-ink-muted">{locationDependency.foodTruck.riskNote}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="break-even" title="Break-Even Comparison" subtitle="How much volume each model needs to cover fixed costs.">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Food Truck</th>
                </tr>
              </thead>
              <tbody>
                {breakEvenComparison.map((row, i) => (
                  <tr key={row.metric} className={i < breakEvenComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.foodTruck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[breakEvenExamples.coffeeShop, breakEvenExamples.foodTruck].map((ex) => (
              <div key={ex.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="font-display font-semibold text-ink">{ex.label}</p>
                <p className="mt-4 text-sm text-ink-muted">Need</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-accent">{ex.volumePerDay} {ex.unit}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="valuation" title="Valuation Comparison" subtitle="What each business is worth at exit." className="bg-surface-muted/50">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Food Truck</th>
                </tr>
              </thead>
              <tbody>
                {valuationComparison.map((row, i) => (
                  <tr key={row.metric} className={i < valuationComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.foodTruck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: "Coffee Shop", ...valuationExamples.coffeeShop },
              { label: "Food Truck", ...valuationExamples.foodTruck },
            ].map((ex) => (
              <div key={ex.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="font-display font-semibold text-ink">{ex.label}</p>
                <p className="mt-4 text-sm text-ink-muted">Revenue: {ex.revenue}</p>
                <p className="my-2 text-xl text-ink-faint" aria-hidden="true">↓</p>
                <p className="text-2xl font-bold tabular-nums text-metric-valuation">Value: {ex.value}</p>
                <p className="mt-2 text-xs text-ink-faint">{ex.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="scalability" title="Scalability Comparison" subtitle="How each model grows from one unit to a regional brand.">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-margin">Coffee Shop Path</p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.coffeeShop.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-metric-margin/15 text-sm font-bold text-metric-margin">{i + 1}</span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-salary">Food Truck Path</p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.foodTruck.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-metric-salary/15 text-sm font-bold text-metric-salary">{i + 1}</span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="advantages" title="Business Model Advantages" subtitle="Core strengths of each model at a glance." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <h3 className="font-display font-semibold text-ink">Coffee Shop Advantages</h3>
              <ul className="mt-4 space-y-3">
                {coffeeShopAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <h3 className="font-display font-semibold text-ink">Food Truck Advantages</h3>
              <ul className="mt-4 space-y-3">
                {foodTruckAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who-should-choose" title="Who Should Choose What?" subtitle="Guidance based on capital, lifestyle, and long-term goals.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <h3 className="font-display font-semibold text-ink">Choose a Coffee Shop If</h3>
              <ul className="mt-4 space-y-3">
                {chooseCoffeeShop.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/industries/food-beverage/coffee-shop/" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">Explore Coffee Shop Economics →</Link>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <h3 className="font-display font-semibold text-ink">Choose a Food Truck If</h3>
              <ul className="mt-4 space-y-3">
                {chooseFoodTruck.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/industries/restaurant-types/food-truck/" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">Explore Food Truck Economics →</Link>
            </div>
          </div>
        </Section>

        <Section id="decision-tool" title="Interactive Decision Tool" subtitle="Get a personalized recommendation based on your situation.">
          <CoffeeShopVsFoodTruckDecisionTool />
        </Section>

        <Section id="calculators" title="Related Calculators" subtitle="Run the numbers on each model." className="bg-surface-muted/50">
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

        <Section id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={faqs} />
        </Section>

        <Section id="related" title="Related Comparisons" subtitle="More side-by-side economics for food businesses." className="bg-surface-muted/50">
          <LinkCardGrid items={relatedComparisons} columns={2} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { ComparisonCoffeeShopFastCasualScorecard } from "@/components/comparison/ComparisonCoffeeShopFastCasualScorecard";
import { CoffeeShopVsFastCasualDecisionTool } from "@/components/comparison/CoffeeShopVsFastCasualDecisionTool";
import {
  averageTicketComparison,
  breakEvenComparison,
  breakEvenExamples,
  businessModelOverview,
  calculators,
  capitalEfficiency,
  chooseCoffeeShop,
  chooseFastCasual,
  coffeeShopAdvantages,
  coffeeShopRevenueDist,
  coffeeShopRevenueDrivers,
  coffeeShopStartupItems,
  comparisonMeta,
  costStructureComparison,
  dailyEconomics,
  decisionSnapshot,
  deliveryComparison,
  deliveryEconomics,
  fastCasualAdvantages,
  fastCasualRevenueDist,
  fastCasualRevenueDrivers,
  fastCasualStartupItems,
  kpiComparison,
  laborIntensityComparison,
  marginTiers,
  ownerIncomeComparison,
  relatedComparisons,
  scalingLadder,
  staffingModels,
  startupSideBySide,
  ticketSizeBenchmark,
  valuationComparison,
  valuationExamples,
  winnerScorecard,
} from "@/lib/industries/comparisons/coffee-shop-vs-fast-casual";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Coffee shop vs fast casual comparison: startup costs, revenue, profit margins, labor intensity, delivery economics, capital efficiency, and interactive decision tool.",
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
    { metric: "Revenue/Day", value: `$${dailyRevenue.toLocaleString()}` },
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

export default function CoffeeShopVsFastCasualPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/industries/food-beverage/coffee-shop/" className="hover:text-accent">Coffee Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">Coffee Shop vs Fast Casual</span>
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
            <p className="mt-2 text-sm text-ink-muted">Instant answers above the fold.</p>
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
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">KPI Dashboard</h2>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
            <div className="mt-8 max-h-[70vh] overflow-auto rounded-2xl border border-border lg:max-h-none lg:overflow-visible">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="sticky top-0 z-10 bg-surface-muted/95 backdrop-blur-sm">
                  <tr className="border-b border-border-subtle">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-margin sm:px-6">Coffee Shop</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-salary sm:px-6">Fast Casual</th>
                  </tr>
                </thead>
                <tbody>
                  {kpiComparison.map((row, i) => (
                    <tr key={row.metric} className={i < kpiComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                      <td className="px-5 py-4 font-medium text-ink-muted sm:px-6">{row.metric}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.coffeeShop}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.fastCasual}</td>
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
            <div className="mt-8"><ComparisonCoffeeShopFastCasualScorecard categories={winnerScorecard} /></div>
          </div>
        </section>

        <Section id="business-model" title="Business Model Overview" subtitle="How each model earns revenue and builds customer relationships.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <p className="font-display text-lg font-semibold text-ink">Coffee Shop</p>
              <p className="mt-3 text-sm font-semibold text-ink-muted">Primary Revenue:</p>
              <ul className="mt-3 space-y-2">
                {businessModelOverview.coffeeShop.primaryRevenue.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-margin" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-ink">Revenue Stability</p>
                <p className="mt-1 text-sm font-medium text-metric-margin">{businessModelOverview.coffeeShop.stabilityLabel}</p>
                <p className="mt-2 text-sm text-ink-muted">{businessModelOverview.coffeeShop.stabilityNote}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <p className="font-display text-lg font-semibold text-ink">Fast Casual</p>
              <p className="mt-3 text-sm font-semibold text-ink-muted">Primary Revenue:</p>
              <ul className="mt-3 space-y-2">
                {businessModelOverview.fastCasual.primaryRevenue.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-salary" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-ink">Revenue Stability</p>
                <p className="mt-1 text-sm font-medium text-metric-salary">{businessModelOverview.fastCasual.stabilityLabel}</p>
                <p className="mt-2 text-sm text-ink-muted">{businessModelOverview.fastCasual.stabilityNote}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="startup" title="Startup Cost Comparison" subtitle="One of the highest-intent sections in this comparison." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <StartupVisual title="Coffee Shop Costs" items={coffeeShopStartupItems} color="var(--metric-margin)" />
            <StartupVisual title="Fast Casual Costs" items={fastCasualStartupItems} color="var(--metric-salary)" />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Cost Item</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {startupSideBySide.map((row, i) => (
                  <tr key={row.category} className={i < startupSideBySide.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.category}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="revenue" title="Revenue Comparison" subtitle="Annual revenue distribution and what drives each model.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RevenueDistBar label="Coffee Shop" bottom={coffeeShopRevenueDist.bottom} median={coffeeShopRevenueDist.median} top={coffeeShopRevenueDist.top} accentClass="bg-metric-margin/50" />
            <RevenueDistBar label="Fast Casual" bottom={fastCasualRevenueDist.bottom} median={fastCasualRevenueDist.median} top={fastCasualRevenueDist.top} accentClass="bg-metric-salary/50" />
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
              <h3 className="font-display font-semibold text-ink">Fast Casual Revenue Drivers</h3>
              <ul className="mt-4 space-y-2">
                {fastCasualRevenueDrivers.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-salary" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="daily-economics" title="Daily Economics" subtitle="How customer volume and ticket size translate to daily revenue." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DailyEconomicsCard title="Coffee Shop Example" volumeLabel={dailyEconomics.coffeeShop.volumeLabel} volume={dailyEconomics.coffeeShop.volume} averageLabel={dailyEconomics.coffeeShop.averageLabel} averageValue={dailyEconomics.coffeeShop.averageValue} dailyRevenue={dailyEconomics.coffeeShop.dailyRevenue} accentClass="text-metric-margin" />
            <DailyEconomicsCard title="Fast Casual Example" volumeLabel={dailyEconomics.fastCasual.volumeLabel} volume={dailyEconomics.fastCasual.volume} averageLabel={dailyEconomics.fastCasual.averageLabel} averageValue={dailyEconomics.fastCasual.averageValue} dailyRevenue={dailyEconomics.fastCasual.dailyRevenue} accentClass="text-metric-salary" />
          </div>
          <p className="mt-6 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Revenue Formula:</span> Revenue = Customers × Average Ticket
          </p>
        </Section>

        <Section id="avg-ticket" title="Average Ticket Comparison" subtitle="A major differentiator — coffee shops win on frequency, fast casual wins on check size.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-margin">Coffee Shop</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {averageTicketComparison.coffeeShop.items.map((item) => (
                  <li key={item} className="rounded-full border border-border bg-surface-muted/50 px-3 py-1 text-sm text-ink-muted">{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{averageTicketComparison.coffeeShop.description}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-salary">Fast Casual</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {averageTicketComparison.fastCasual.items.map((item) => (
                  <li key={item} className="rounded-full border border-border bg-surface-muted/50 px-3 py-1 text-sm text-ink-muted">{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{averageTicketComparison.fastCasual.description}</p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {ticketSizeBenchmark.map((row, i) => (
                  <tr key={row.metric} className={i < ticketSizeBenchmark.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="profitability" title="Profitability Comparison" subtitle="Margin ranges and cost structure side by side." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MarginGauge label="Coffee Shop Margins" tiers={marginTiers.coffeeShop} />
            <MarginGauge label="Fast Casual Margins" tiers={marginTiers.fastCasual} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Expense</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {costStructureComparison.map((row, i) => (
                  <tr key={row.expense} className={i < costStructureComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.expense}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="labor" title="Labor Intensity Analysis" subtitle="Staffing is one of the biggest operational differences between these models.">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {laborIntensityComparison.map((row, i) => (
                  <tr key={row.metric} className={i < laborIntensityComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-ink">Coffee Shop Staffing Model</p>
              <ul className="mt-4 space-y-2">
                {staffingModels.coffeeShop.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-margin" />{role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-ink">Fast Casual Staffing Model</p>
              <ul className="mt-4 space-y-2">
                {staffingModels.fastCasual.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-salary" />{role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="owner-income" title="Owner Income Comparison" subtitle="How much can owners earn with each model?" className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerIncomeComparison.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">↓</p>
                <p className="text-sm text-ink-muted">Owner Income</p>
                <p className={`mt-2 text-2xl font-bold tabular-nums ${item.type === "coffeeShop" ? "text-metric-margin" : "text-metric-salary"}`}>{item.earnings}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="break-even" title="Break-Even Comparison" subtitle="How much volume each model needs to cover fixed costs.">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {breakEvenComparison.map((row, i) => (
                  <tr key={row.metric} className={i < breakEvenComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[breakEvenExamples.coffeeShop, breakEvenExamples.fastCasual].map((ex) => (
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
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {valuationComparison.map((row, i) => (
                  <tr key={row.metric} className={i < valuationComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: "Coffee Shop", ...valuationExamples.coffeeShop },
              { label: "Fast Casual", ...valuationExamples.fastCasual },
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
              <p className="font-display font-semibold text-metric-salary">Fast Casual Path</p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.fastCasual.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-metric-salary/15 text-sm font-bold text-metric-salary">{i + 1}</span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="delivery" title="Delivery Economics" subtitle="A unique differentiator — fast casual captures far more off-premise revenue." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-ink">Coffee Shop</p>
              <p className="mt-2 text-lg font-semibold text-metric-margin">{deliveryEconomics.coffeeShop.label}</p>
              <p className="mt-3 text-sm text-ink-muted">{deliveryEconomics.coffeeShop.note}</p>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6 text-center">
              <p className="font-display font-semibold text-ink">Fast Casual</p>
              <p className="mt-2 text-lg font-semibold text-metric-salary">{deliveryEconomics.fastCasual.label}</p>
              <p className="mt-3 text-sm text-ink-muted">{deliveryEconomics.fastCasual.note}</p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Coffee Shop</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Fast Casual</th>
                </tr>
              </thead>
              <tbody>
                {deliveryComparison.map((row, i) => (
                  <tr key={row.metric} className={i < deliveryComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.coffeeShop}</td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.fastCasual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="advantages" title="Business Model Advantages" subtitle="Core strengths of each model at a glance.">
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
              <h3 className="font-display font-semibold text-ink">Fast Casual Advantages</h3>
              <ul className="mt-4 space-y-3">
                {fastCasualAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="who-should-choose" title="Who Should Choose What?" subtitle="Guidance based on capital, lifestyle, and growth goals." className="bg-surface-muted/50">
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
              <h3 className="font-display font-semibold text-ink">Choose Fast Casual If</h3>
              <ul className="mt-4 space-y-3">
                {chooseFastCasual.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="font-bold text-metric-revenue">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/industries/restaurant-types/fast-casual/" className="mt-6 inline-block text-sm font-medium text-accent hover:underline">Explore Fast Casual Economics →</Link>
            </div>
          </div>
        </Section>

        <Section id="capital-efficiency" title="Capital Efficiency Analysis" subtitle="Where does your money work harder? A $250,000 investment comparison.">
          <p className="mb-8 max-w-3xl text-sm text-ink-muted">
            Many entrepreneurs ask: &ldquo;Where does my money work harder?&rdquo; Here is how a {capitalEfficiency.investment} investment typically performs in each model.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-margin/25 bg-surface p-6">
              <p className="font-display font-semibold text-ink">Coffee Shop</p>
              <dl className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-border-subtle pb-3 text-sm">
                  <dt className="text-ink-muted">Revenue Generated</dt>
                  <dd className="font-bold tabular-nums text-ink">{capitalEfficiency.coffeeShop.revenue}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-3 text-sm">
                  <dt className="text-ink-muted">Profit Generated</dt>
                  <dd className="font-bold tabular-nums text-metric-margin">{capitalEfficiency.coffeeShop.profit}</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-ink-muted">Payback Period</dt>
                  <dd className="font-bold tabular-nums text-ink">{capitalEfficiency.coffeeShop.paybackYears}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-faint">{capitalEfficiency.coffeeShop.note}</p>
            </div>
            <div className="rounded-2xl border border-metric-salary/25 bg-surface p-6">
              <p className="font-display font-semibold text-ink">Fast Casual</p>
              <dl className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-border-subtle pb-3 text-sm">
                  <dt className="text-ink-muted">Revenue Generated</dt>
                  <dd className="font-bold tabular-nums text-ink">{capitalEfficiency.fastCasual.revenue}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-3 text-sm">
                  <dt className="text-ink-muted">Profit Generated</dt>
                  <dd className="font-bold tabular-nums text-metric-salary">{capitalEfficiency.fastCasual.profit}</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-ink-muted">Payback Period</dt>
                  <dd className="font-bold tabular-nums text-ink">{capitalEfficiency.fastCasual.paybackYears}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-faint">{capitalEfficiency.fastCasual.note}</p>
            </div>
          </div>
          <p className="mt-6 rounded-xl border border-accent/20 bg-accent-soft/30 px-5 py-4 text-sm text-ink-muted">{capitalEfficiency.summary}</p>
        </Section>

        <Section id="decision-tool" title="Interactive Decision Tool" subtitle="Get a personalized recommendation based on your situation.">
          <CoffeeShopVsFastCasualDecisionTool />
        </Section>

        <Section id="calculators" title="Related Calculators" subtitle="Run the numbers on each model." className="bg-surface-muted/50">
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

        <Section id="related" title="Related Comparisons" subtitle="More side-by-side economics for food businesses.">
          <LinkCardGrid items={relatedComparisons} columns={2} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

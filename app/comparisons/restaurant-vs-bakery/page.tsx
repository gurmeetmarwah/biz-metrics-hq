import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { ComparisonDualBars } from "@/components/comparison/ComparisonDualBars";
import { RestaurantVsBakeryDecisionTool } from "@/components/comparison/RestaurantVsBakeryDecisionTool";
import {
  bakeryRevenueDist,
  bakeryRevenueDrivers,
  bakeryRevenueMix,
  bakeryStartupItems,
  breakEvenComparison,
  breakEvenExamples,
  calculators,
  chooseBakery,
  chooseRestaurant,
  comparisonMeta,
  costStructureComparison,
  dailyEconomics,
  decisionSnapshot,
  faqs,
  kpiComparison,
  marginTiers,
  ownerIncomeComparison,
  profitPotentialComparison,
  relatedComparisons,
  restaurantRevenueDist,
  restaurantRevenueDrivers,
  restaurantRevenueMix,
  restaurantStartupItems,
  scalingLadder,
  startupSideBySide,
  valuationComparison,
  valuationExamples,
  visualScorecard,
  wholesaleChannels,
  workdayTimeline,
  workloadComparison,
} from "@/lib/industries/comparisons/restaurant-vs-bakery";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Restaurant vs bakery comparison: startup costs, revenue, profit margins, product mix, wholesale opportunities, workload, valuation, and interactive decision tool.",
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
        <div className="w-1/3 bg-metric-salary/40" title={`Weak: ${tiers.weak}`} />
        <div className="w-1/3 bg-metric-margin/45" title={`Average: ${tiers.average}`} />
        <div className="w-1/3 bg-metric-revenue/40" title={`Strong: ${tiers.strong}`} />
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

function RevenueMixVisual({
  title,
  items,
  color,
}: {
  title: string;
  items: readonly { label: string; percent: number }[];
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="font-display font-semibold text-ink">{title}</p>
      <div className="mt-4 flex h-4 overflow-hidden rounded-full">
        {items.map((item) => (
          <div
            key={item.label}
            style={{ width: `${item.percent}%`, background: color, opacity: 0.55 + item.percent / 300 }}
            title={`${item.label}: ${item.percent}%`}
          />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.label} className="flex justify-between text-ink-muted">
            <span>{item.label}</span>
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
            <tr
              key={row.metric}
              className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}
            >
              <td className="py-3 text-ink-muted">{row.metric}</td>
              <td className="py-3 text-right font-semibold tabular-nums text-ink">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkdayTimeline() {
  const startHour = 4;
  const endHour = 23;
  const span = endHour - startHour;

  const rows = [
    {
      label: workdayTimeline.restaurant.label,
      start: workdayTimeline.restaurant.start,
      end: workdayTimeline.restaurant.end,
      startHour: 11,
      endHour: 23,
      color: "bg-metric-margin",
    },
    {
      label: workdayTimeline.bakery.label,
      start: workdayTimeline.bakery.start,
      end: workdayTimeline.bakery.end,
      startHour: 4,
      endHour: 14,
      color: "bg-metric-salary",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-ink-muted">Typical Workday</p>
      <div className="mt-6 space-y-6">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{row.label}</span>
              <span className="tabular-nums text-ink-muted">
                {row.start} – {row.end}
              </span>
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
        <span>4 AM</span>
        <span>8 AM</span>
        <span>12 PM</span>
        <span>4 PM</span>
        <span>8 PM</span>
        <span>11 PM</span>
      </div>
    </div>
  );
}

export default function RestaurantVsBakeryPage() {
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
              <span className="text-ink-muted">Restaurant vs Bakery</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Side-by-side comparison · {comparisonMeta.dataVintage}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {comparisonMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {comparisonMeta.subtitle}
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Decision Snapshot
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Instant answers for the most common decision factors.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                      Best For
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                      Winner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {decisionSnapshot.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={
                        i < decisionSnapshot.length - 1
                          ? "border-b border-border-subtle"
                          : ""
                      }
                    >
                      <td className="px-5 py-4 text-ink-muted sm:px-6">
                        {row.factor}
                      </td>
                      <td className="px-5 py-4 text-right font-semibold text-accent sm:px-6">
                        {row.winner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="kpi-comparison" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              KPI Comparison Dashboard
            </h2>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
            <div className="mt-8 max-h-[70vh] overflow-auto rounded-2xl border border-border lg:max-h-none lg:overflow-visible">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="sticky top-0 z-10 bg-surface-muted/95 backdrop-blur-sm">
                  <tr className="border-b border-border-subtle">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                      Metric
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-margin sm:px-6">
                      Restaurant
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-salary sm:px-6">
                      Bakery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kpiComparison.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={
                        i < kpiComparison.length - 1
                          ? "border-b border-border-subtle"
                          : ""
                      }
                    >
                      <td className="px-5 py-4 font-medium text-ink-muted sm:px-6">
                        {row.metric}
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                        {row.restaurant}
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                        {row.bakery}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Visual Scorecard
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Higher bars in Operational Complexity indicate greater complexity.
            </p>
            <div className="mt-8">
              <ComparisonDualBars
                categories={visualScorecard}
                competitorLabel="Bakery"
              />
            </div>
          </div>
        </section>

        <Section
          id="startup"
          title="Startup Cost Comparison"
          subtitle="One of the highest-intent sections in the restaurant vs bakery decision."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <StartupVisual
              title="Restaurant"
              items={restaurantStartupItems}
              color="var(--metric-margin)"
            />
            <StartupVisual
              title="Bakery"
              items={bakeryStartupItems}
              color="var(--metric-salary)"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Cost Item
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {startupSideBySide.map((row, i) => (
                  <tr
                    key={row.category}
                    className={
                      i < startupSideBySide.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.category}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="revenue"
          title="Revenue Comparison"
          subtitle="Annual revenue distribution and what drives each model."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RevenueDistBar
              label="Restaurant"
              bottom={restaurantRevenueDist.bottom}
              median={restaurantRevenueDist.median}
              top={restaurantRevenueDist.top}
              accentClass="bg-metric-margin/50"
            />
            <RevenueDistBar
              label="Bakery"
              bottom={bakeryRevenueDist.bottom}
              median={bakeryRevenueDist.median}
              top={bakeryRevenueDist.top}
              accentClass="bg-metric-salary/50"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">
                Restaurant Revenue Drivers
              </h3>
              <ul className="mt-4 space-y-2">
                {restaurantRevenueDrivers.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-margin" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">
                Bakery Revenue Drivers
              </h3>
              <ul className="mt-4 space-y-2">
                {bakeryRevenueDrivers.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-metric-salary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="daily-economics"
          title="Daily Economics"
          subtitle="Where the differences between restaurant and bakery models become obvious."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DailyEconomicsCard
              title="Restaurant"
              volumeLabel="Customers Per Day"
              volume={dailyEconomics.restaurant.volume}
              averageLabel="Average Ticket"
              averageValue={dailyEconomics.restaurant.averageValue}
              dailyRevenue={dailyEconomics.restaurant.dailyRevenue}
              accentClass="text-metric-margin"
            />
            <DailyEconomicsCard
              title="Bakery"
              volumeLabel="Orders Per Day"
              volume={dailyEconomics.bakery.volume}
              averageLabel="Average Order"
              averageValue={dailyEconomics.bakery.averageValue}
              dailyRevenue={dailyEconomics.bakery.dailyRevenue}
              accentClass="text-metric-salary"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="rounded-xl border border-border bg-surface-muted/30 px-5 py-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Restaurant:</span>{" "}
              Revenue = Customers × Average Ticket
            </p>
            <p className="rounded-xl border border-border bg-surface-muted/30 px-5 py-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Bakery:</span>{" "}
              Revenue = Orders × Average Order Value
            </p>
          </div>
        </Section>

        <Section
          id="profitability"
          title="Profitability Comparison"
          subtitle="Margin ranges and cost structure side by side."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MarginGauge label="Restaurant Margins" tiers={marginTiers.restaurant} />
            <MarginGauge label="Bakery Margins" tiers={marginTiers.bakery} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Expense
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {costStructureComparison.map((row, i) => (
                  <tr
                    key={row.expense}
                    className={
                      i < costStructureComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.expense}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="product-mix"
          title="Product Mix Comparison"
          subtitle="How each business earns revenue — a key differentiator between restaurants and bakeries."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RevenueMixVisual
              title="Restaurant Revenue Mix"
              items={restaurantRevenueMix}
              color="var(--metric-margin)"
            />
            <RevenueMixVisual
              title="Bakery Revenue Mix"
              items={bakeryRevenueMix}
              color="var(--metric-salary)"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Revenue Stream
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {profitPotentialComparison.map((row, i) => (
                  <tr
                    key={row.stream}
                    className={
                      i < profitPotentialComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">
                      {row.stream}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="owner-income"
          title="Owner Income Comparison"
          subtitle="How much can owners make with each model at different scales?"
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerIncomeComparison.map((item) => (
              <article
                key={item.model}
                className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-sm text-ink-muted">Income Range</p>
                <p
                  className={`mt-2 text-2xl font-bold tabular-nums ${
                    item.type === "restaurant"
                      ? "text-metric-margin"
                      : "text-metric-salary"
                  }`}
                >
                  {item.earnings}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="workload"
          title="Workload Comparison"
          subtitle="An extremely important factor — many owners choose based on lifestyle, not just economics."
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Factor
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {workloadComparison.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={
                      i < workloadComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 font-medium text-ink sm:px-6">
                      {row.factor}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WorkdayTimeline />
        </Section>

        <Section
          id="break-even"
          title="Break-Even Comparison"
          subtitle="How much volume each model needs to cover fixed costs."
          className="bg-surface-muted/50"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Metric
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {breakEvenComparison.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i < breakEvenComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[breakEvenExamples.restaurant, breakEvenExamples.bakery].map((ex) => (
              <div
                key={ex.label}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="font-display font-semibold text-ink">{ex.label}</p>
                <p className="mt-4 text-sm text-ink-muted">Need</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-accent">
                  {ex.volumePerDay} {ex.unit}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="wholesale"
          title="Wholesale Opportunity Analysis"
          subtitle="A unique bakery advantage — restaurants rarely have an equivalent B2B revenue channel."
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Bakery Revenue Channel
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Revenue Potential
                  </th>
                </tr>
              </thead>
              <tbody>
                {wholesaleChannels.map((row, i) => (
                  <tr
                    key={row.channel}
                    className={
                      i < wholesaleChannels.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 sm:px-6">
                      <p className="font-medium text-ink">{row.channel}</p>
                      <p className="mt-1 text-xs text-ink-muted">{row.note}</p>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.potential}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 rounded-xl border border-metric-salary/25 bg-metric-salary/5 px-5 py-4 text-sm text-ink-muted">
            Restaurants generate revenue almost entirely from dine-in, takeout, and
            catering. Bakeries can layer wholesale and corporate accounts on top of
            retail — creating predictable off-peak production revenue that restaurants
            cannot easily replicate.
          </p>
        </Section>

        <Section
          id="valuation"
          title="Valuation Comparison"
          subtitle="What each business is worth at exit."
          className="bg-surface-muted/50"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Metric
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Bakery
                  </th>
                </tr>
              </thead>
              <tbody>
                {valuationComparison.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i < valuationComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.bakery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: "Restaurant", ...valuationExamples.restaurant },
              { label: "Bakery", ...valuationExamples.bakery },
            ].map((ex) => (
              <div
                key={ex.label}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="font-display font-semibold text-ink">{ex.label}</p>
                <p className="mt-4 text-sm text-ink-muted">Revenue: {ex.revenue}</p>
                <p className="my-2 text-xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-2xl font-bold tabular-nums text-metric-valuation">
                  Value: {ex.value}
                </p>
                <p className="mt-2 text-xs text-ink-faint">{ex.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="scalability"
          title="Scalability Comparison"
          subtitle="How each model grows from one unit to a regional brand."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-salary">
                Bakery Growth Path
              </p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.bakery.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-metric-salary/15 text-sm font-bold text-metric-salary">
                      {i + 1}
                    </span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-margin">
                Restaurant Growth Path
              </p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.restaurant.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-metric-margin/15 text-sm font-bold text-metric-margin">
                      {i + 1}
                    </span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="who-should-choose"
          title="Who Should Choose What?"
          subtitle="High-engagement guidance based on capital, skills, and lifestyle."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <h3 className="font-display font-semibold text-ink">
                Choose a Bakery If
              </h3>
              <ul className="mt-4 space-y-3">
                {chooseBakery.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <span className="font-bold text-metric-revenue">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/industries/restaurant-types/bakery/"
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                Explore Bakery Economics →
              </Link>
            </div>
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <h3 className="font-display font-semibold text-ink">
                Choose a Restaurant If
              </h3>
              <ul className="mt-4 space-y-3">
                {chooseRestaurant.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <span className="font-bold text-metric-revenue">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/industries/restaurant/"
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                Explore Restaurant Benchmarks →
              </Link>
            </div>
          </div>
        </Section>

        <Section
          id="decision-tool"
          title="Interactive Decision Tool"
          subtitle="Get a personalized recommendation based on your situation."
        >
          <RestaurantVsBakeryDecisionTool />
        </Section>

        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on each model."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

        <Section id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={faqs} />
        </Section>

        <Section
          id="related"
          title="Related Comparisons"
          subtitle="More side-by-side economics for food businesses."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={relatedComparisons} columns={2} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

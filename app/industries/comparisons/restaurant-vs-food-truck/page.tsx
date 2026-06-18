import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { ComparisonScorecard } from "@/components/comparison/ComparisonScorecard";
import { RestaurantVsFoodTruckDecisionTool } from "@/components/comparison/RestaurantVsFoodTruckDecisionTool";
import {
  breakEvenComparison,
  calculators,
  chooseFoodTruck,
  chooseRestaurant,
  comparisonMeta,
  costStructureComparison,
  dailySalesComparison,
  decisionSnapshot,
  faqs,
  foodTruckRevenueDist,
  foodTruckRevenueDrivers,
  foodTruckStartupItems,
  kpiComparison,
  lifestyleComparison,
  marginTiers,
  ownerIncomeComparison,
  relatedComparisons,
  restaurantRevenueDist,
  restaurantRevenueDrivers,
  restaurantStartupItems,
  scalingChallenges,
  scalingLadder,
  scorecardCategories,
  startupSideBySide,
  valuationComparison,
  valuationExamples,
} from "@/lib/industries/comparisons/restaurant-vs-food-truck";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Restaurant vs food truck comparison: startup costs, revenue, profit margins, break-even time, owner income, valuation, and interactive decision tool.",
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
      <div className={`mt-4 flex h-3 overflow-hidden rounded-full bg-surface-muted`}>
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

export default function RestaurantVsFoodTruckPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const maxBreakEvenMonths = 24;

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
              <span className="text-ink-muted">Restaurant vs Food Truck</span>
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

        {/* Decision snapshot */}
        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Decision Snapshot
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Quick answers for the most common decision factors.
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

        {/* KPI comparison - sticky header */}
        <section id="kpi-comparison" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              KPI Comparison
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
                      Food Truck
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
                        {row.foodTruck}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Visual scorecard */}
        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Visual Scorecard
            </h2>
            <div className="mt-8">
              <ComparisonScorecard categories={scorecardCategories} />
            </div>
          </div>
        </section>

        <Section
          id="startup"
          title="Startup Cost Comparison"
          subtitle="One of the biggest factors in the restaurant vs food truck decision."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <StartupVisual
              title="Restaurant Startup Costs"
              items={restaurantStartupItems}
              color="var(--metric-margin)"
            />
            <StartupVisual
              title="Food Truck Startup Costs"
              items={foodTruckStartupItems}
              color="var(--metric-salary)"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Cost Category
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Food Truck
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
                      {row.foodTruck}
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
          subtitle="Restaurants win on total revenue; food trucks win on capital efficiency."
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
              label="Food Truck"
              bottom={foodTruckRevenueDist.bottom}
              median={foodTruckRevenueDist.median}
              top={foodTruckRevenueDist.top}
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
                Food Truck Revenue Drivers
              </h3>
              <ul className="mt-4 space-y-2">
                {foodTruckRevenueDrivers.map((d) => (
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
          id="profitability"
          title="Profitability Comparison"
          subtitle="Margin vs. absolute profit — both matter depending on your goals."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MarginGauge label="Restaurant Margins" tiers={marginTiers.restaurant} />
            <MarginGauge label="Food Truck Margins" tiers={marginTiers.foodTruck} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
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
                    Food Truck
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
                      {row.foodTruck}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="break-even"
          title="Break-Even Comparison"
          subtitle="How long until each model covers its fixed costs."
          className="bg-surface-muted/50"
        >
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold text-ink-muted">Months to Break Even</p>
            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Restaurant</span>
                  <span className="tabular-nums text-ink-muted">
                    {breakEvenComparison.restaurantMonthsLabel}
                  </span>
                </div>
                <div className="mt-2 h-4 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-metric-margin"
                    style={{
                      width: `${(breakEvenComparison.restaurantMonths / maxBreakEvenMonths) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Food Truck</span>
                  <span className="tabular-nums text-ink-muted">
                    {breakEvenComparison.foodTruckMonthsLabel}
                  </span>
                </div>
                <div className="mt-2 h-4 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-metric-salary"
                    style={{
                      width: `${(breakEvenComparison.foodTruckMonths / maxBreakEvenMonths) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Daily Sales Needed
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Restaurant
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Food Truck
                  </th>
                </tr>
              </thead>
              <tbody>
                {dailySalesComparison.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i < dailySalesComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.restaurant}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.foodTruck}
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
          subtitle="How much can you make with each model at different scales?"
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
                <p className="text-sm text-ink-muted">Owner Earnings</p>
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
          id="lifestyle"
          title="Lifestyle Comparison"
          subtitle="Many entrepreneurs choose based on lifestyle — not just economics."
          className="bg-surface-muted/50"
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
                    Food Truck
                  </th>
                </tr>
              </thead>
              <tbody>
                {lifestyleComparison.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={
                      i < lifestyleComparison.length - 1
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
                      {row.foodTruck}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="scalability"
          title="Scalability Comparison"
          subtitle="How each model grows from one unit to many."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-metric-salary">Food Truck</p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.foodTruck.map((step, i) => (
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
              <p className="font-display font-semibold text-metric-margin">Restaurant</p>
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

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-ink">
              Scaling Challenges
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {scalingChallenges.map((c) => (
                <li
                  key={c.title}
                  className="rounded-xl border border-border bg-surface-muted/30 p-5"
                >
                  <p className="font-semibold text-ink">{c.title}</p>
                  <p className="mt-2 text-sm text-ink-muted">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>
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
                    Food Truck
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
                      {row.foodTruck}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: "Restaurant", ...valuationExamples.restaurant },
              { label: "Food Truck", ...valuationExamples.foodTruck },
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
          id="who-should-choose"
          title="Who Should Choose What?"
          subtitle="High-converting guidance based on capital, goals, and lifestyle."
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-metric-salary/25 bg-metric-salary/5 p-6">
              <h3 className="font-display font-semibold text-ink">
                Choose a Food Truck If
              </h3>
              <ul className="mt-4 space-y-3">
                {chooseFoodTruck.map((item) => (
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
                href="/industries/restaurant-types/food-truck/"
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                Explore Food Truck Economics →
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
          className="bg-surface-muted/50"
        >
          <RestaurantVsFoodTruckDecisionTool />
        </Section>

        <Section
          id="calculators"
          title="Comparison Calculators"
          subtitle="Run the numbers on each model."
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

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { ComparisonDualBars } from "@/components/comparison/ComparisonDualBars";
import { BakeryDualDecisionTool } from "@/components/comparison/BakeryDualDecisionTool";

type StartupItem = { item: string; percent: number };
type RevenueMixItem = { label: string; percent: number };
type Faq = { question: string; answer: string };
type LinkItem = { label: string; href?: string; comingSoon?: boolean };

export type BakeryDualComparisonData = {
  comparisonMeta: {
    slug: "bakery-vs-food-truck" | "bakery-vs-home-bakery" | "bakery-vs-fast-casual";
    title: string;
    subtitle: string;
    dataVintage: string;
  };
  comparisonLabels: {
    bakery: string;
    competitor: string;
    breadcrumbHub: { label: string; href: string };
    exploreBakery: { label: string; href: string };
    exploreCompetitor: { label: string; href: string };
  };
  decisionSnapshot: readonly { factor: string; winner: string }[];
  kpiComparison: readonly { metric: string; bakery: string; competitor: string }[];
  visualScorecard: readonly { label: string; bakery: number; competitor: number }[];
  bakeryStartupItems: readonly StartupItem[];
  competitorStartupItems: readonly StartupItem[];
  startupSideBySide: readonly { category: string; bakery: string; competitor: string }[];
  bakeryRevenueDist: { bottom: string; median: string; top: string };
  competitorRevenueDist: { bottom: string; median: string; top: string };
  bakeryRevenueDrivers: readonly string[];
  competitorRevenueDrivers: readonly string[];
  dailyEconomics: {
    bakery: {
      label: string;
      volume: number;
      averageValue: number;
      dailyRevenue: number;
    };
    competitor: {
      label: string;
      volume: number;
      averageValue: number;
      dailyRevenue: number;
    };
  };
  marginTiers: {
    bakery: { weak: string; average: string; strong: string };
    competitor: { weak: string; average: string; strong: string };
  };
  costStructureComparison: readonly { expense: string; bakery: string; competitor: string }[];
  bakeryRevenueMix: readonly RevenueMixItem[];
  competitorRevenueMix: readonly RevenueMixItem[];
  profitPotentialComparison: readonly {
    stream: string;
    bakery: string;
    competitor: string;
  }[];
  ownerIncomeComparison: readonly {
    model: string;
    earnings: string;
    type: "bakery" | "competitor";
  }[];
  workloadComparison: readonly { factor: string; bakery: string; competitor: string }[];
  workdayTimeline: {
    bakery: { start: string; end: string; label: string };
    competitor: { start: string; end: string; label: string };
  };
  breakEvenComparison: readonly { metric: string; bakery: string; competitor: string }[];
  breakEvenExamples: {
    bakery: { volumePerDay: number; unit: string; label: string };
    competitor: { volumePerDay: number; unit: string; label: string };
  };
  wholesaleChannels: readonly { channel: string; potential: string; note: string }[];
  wholesaleInsight: string;
  valuationComparison: readonly { metric: string; bakery: string; competitor: string }[];
  valuationExamples: {
    bakery: { revenue: string; value: string; note: string };
    competitor: { revenue: string; value: string; note: string };
  };
  scalingLadder: { bakery: string[]; competitor: string[] };
  chooseBakery: readonly string[];
  chooseCompetitor: readonly string[];
  calculators: readonly LinkItem[];
  relatedComparisons: readonly LinkItem[];
  faqs: readonly Faq[];
  decisionToolCopy: {
    bakery: string;
    competitor: string;
  };
  getRecommendation: (inputs: {
    budget: "under50k" | "50k-150k" | "150k-300k" | "300k+";
    experience: "baking" | "food-service" | "business" | "none";
    goal: "wholesale" | "lifestyle" | "scale" | "low-capital";
  }) => string;
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
  items: readonly StartupItem[];
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
  items: readonly RevenueMixItem[];
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
  averageValue,
  dailyRevenue,
  accentClass,
}: {
  title: string;
  volumeLabel: string;
  volume: number;
  averageValue: number;
  dailyRevenue: number;
  accentClass: string;
}) {
  const rows = [
    { metric: volumeLabel, value: volume.toLocaleString() },
    { metric: "Average Value", value: `$${averageValue.toFixed(2)}` },
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

function parseTimeToHour(time: string): number {
  const match = time.trim().match(/^(\d{1,2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let hour = Number(match[1]);
  const period = match[2].toUpperCase();
  if (period === "AM" && hour === 12) hour = 0;
  else if (period === "PM" && hour !== 12) hour += 12;
  return hour;
}

function formatHourLabel(hour: number): string {
  if (hour === 0 || hour === 24) return "12 AM";
  if (hour === 12) return "12 PM";
  if (hour < 12) return `${hour} AM`;
  return `${hour - 12} PM`;
}

function WorkdayTimeline({
  timeline,
}: {
  timeline: BakeryDualComparisonData["workdayTimeline"];
}) {
  const rows = [
    {
      label: timeline.bakery.label,
      start: timeline.bakery.start,
      end: timeline.bakery.end,
      startHour: parseTimeToHour(timeline.bakery.start),
      endHour: parseTimeToHour(timeline.bakery.end),
      color: "bg-metric-salary",
    },
    {
      label: timeline.competitor.label,
      start: timeline.competitor.start,
      end: timeline.competitor.end,
      startHour: parseTimeToHour(timeline.competitor.start),
      endHour: parseTimeToHour(timeline.competitor.end),
      color: "bg-metric-margin",
    },
  ];

  const allHours = rows.flatMap((row) => [row.startHour, row.endHour]);
  const axisStart = Math.min(4, ...allHours);
  const axisEnd = Math.max(23, ...allHours);
  const span = axisEnd - axisStart;
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount }, (_, i) =>
    Math.round(axisStart + (span * i) / (tickCount - 1))
  );

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
                  left: `${((row.startHour - axisStart) / span) * 100}%`,
                  width: `${((row.endHour - row.startHour) / span) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-xs text-ink-faint">
        {ticks.map((tick) => (
          <span key={tick}>{formatHourLabel(tick)}</span>
        ))}
      </div>
    </div>
  );
}

export function BakeryDualComparisonPage({ data }: { data: BakeryDualComparisonData }) {
  const {
    comparisonMeta,
    comparisonLabels,
    decisionSnapshot,
    kpiComparison,
    visualScorecard,
    bakeryStartupItems,
    competitorStartupItems,
    startupSideBySide,
    bakeryRevenueDist,
    competitorRevenueDist,
    bakeryRevenueDrivers,
    competitorRevenueDrivers,
    dailyEconomics,
    marginTiers,
    costStructureComparison,
    bakeryRevenueMix,
    competitorRevenueMix,
    profitPotentialComparison,
    ownerIncomeComparison,
    workloadComparison,
    workdayTimeline,
    breakEvenComparison,
    breakEvenExamples,
    wholesaleChannels,
    wholesaleInsight,
    valuationComparison,
    valuationExamples,
    scalingLadder,
    chooseBakery,
    chooseCompetitor,
    calculators,
    relatedComparisons,
    faqs,
  } = data;

  const { bakery, competitor } = comparisonLabels;

  const scorecardCategories = visualScorecard.map((item) => ({
    label: item.label,
    restaurant: item.bakery,
    competitor: item.competitor,
  }));

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
              <Link
                href={comparisonLabels.breadcrumbHub.href}
                className="hover:text-accent"
              >
                {comparisonLabels.breadcrumbHub.label}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">{comparisonMeta.title}</span>
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
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-salary sm:px-6">
                      {bakery}
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-margin sm:px-6">
                      {competitor}
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
                        {row.bakery}
                      </td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                        {row.competitor}
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
                categories={scorecardCategories}
                restaurantLabel={bakery}
                competitorLabel={competitor}
              />
            </div>
          </div>
        </section>

        <Section
          id="startup"
          title="Startup Cost Comparison"
          subtitle={`One of the highest-intent sections in the ${bakery} vs ${competitor} decision.`}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <StartupVisual
              title={bakery}
              items={bakeryStartupItems}
              color="var(--metric-salary)"
            />
            <StartupVisual
              title={competitor}
              items={competitorStartupItems}
              color="var(--metric-margin)"
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
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.competitor}
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
              label={bakery}
              bottom={bakeryRevenueDist.bottom}
              median={bakeryRevenueDist.median}
              top={bakeryRevenueDist.top}
              accentClass="bg-metric-salary/50"
            />
            <RevenueDistBar
              label={competitor}
              bottom={competitorRevenueDist.bottom}
              median={competitorRevenueDist.median}
              top={competitorRevenueDist.top}
              accentClass="bg-metric-margin/50"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">
                {bakery} Revenue Drivers
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
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">
                {competitor} Revenue Drivers
              </h3>
              <ul className="mt-4 space-y-2">
                {competitorRevenueDrivers.map((d) => (
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
          </div>
        </Section>

        <Section
          id="daily-economics"
          title="Daily Economics"
          subtitle={`Where the differences between ${bakery.toLowerCase()} and ${competitor.toLowerCase()} models become obvious.`}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DailyEconomicsCard
              title={bakery}
              volumeLabel={dailyEconomics.bakery.label}
              volume={dailyEconomics.bakery.volume}
              averageValue={dailyEconomics.bakery.averageValue}
              dailyRevenue={dailyEconomics.bakery.dailyRevenue}
              accentClass="text-metric-salary"
            />
            <DailyEconomicsCard
              title={competitor}
              volumeLabel={dailyEconomics.competitor.label}
              volume={dailyEconomics.competitor.volume}
              averageValue={dailyEconomics.competitor.averageValue}
              dailyRevenue={dailyEconomics.competitor.dailyRevenue}
              accentClass="text-metric-margin"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="rounded-xl border border-border bg-surface-muted/30 px-5 py-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink">{bakery}:</span>{" "}
              Revenue = {dailyEconomics.bakery.label} × Average Value
            </p>
            <p className="rounded-xl border border-border bg-surface-muted/30 px-5 py-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink">{competitor}:</span>{" "}
              Revenue = {dailyEconomics.competitor.label} × Average Value
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
            <MarginGauge label={`${bakery} Margins`} tiers={marginTiers.bakery} />
            <MarginGauge label={`${competitor} Margins`} tiers={marginTiers.competitor} />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Expense
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.competitor}
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
          subtitle={`How each business earns revenue — a key differentiator between ${bakery.toLowerCase()} and ${competitor.toLowerCase()} models.`}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <RevenueMixVisual
              title={`${bakery} Revenue Mix`}
              items={bakeryRevenueMix}
              color="var(--metric-salary)"
            />
            <RevenueMixVisual
              title={`${competitor} Revenue Mix`}
              items={competitorRevenueMix}
              color="var(--metric-margin)"
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
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.competitor}
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
                    item.type === "bakery"
                      ? "text-metric-salary"
                      : "text-metric-margin"
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
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WorkdayTimeline timeline={workdayTimeline} />
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
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[breakEvenExamples.bakery, breakEvenExamples.competitor].map((ex) => (
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
          subtitle="A unique bakery advantage — competitors rarely have an equivalent B2B revenue channel."
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
            {wholesaleInsight}
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
                    {bakery}
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    {competitor}
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
                      {row.bakery}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold sm:px-6">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: bakery, ...valuationExamples.bakery },
              { label: competitor, ...valuationExamples.competitor },
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
                {bakery} Growth Path
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
                {competitor} Growth Path
              </p>
              <ul className="mt-4 space-y-3">
                {scalingLadder.competitor.map((step, i) => (
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
                Choose a {bakery} If
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
                href={comparisonLabels.exploreBakery.href}
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                {comparisonLabels.exploreBakery.label}
              </Link>
            </div>
            <div className="rounded-2xl border border-metric-margin/25 bg-metric-margin/5 p-6">
              <h3 className="font-display font-semibold text-ink">
                Choose a {competitor} If
              </h3>
              <ul className="mt-4 space-y-3">
                {chooseCompetitor.map((item) => (
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
                href={comparisonLabels.exploreCompetitor.href}
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                {comparisonLabels.exploreCompetitor.label}
              </Link>
            </div>
          </div>
        </Section>

        <Section
          id="decision-tool"
          title="Interactive Decision Tool"
          subtitle="Get a personalized recommendation based on your situation."
        >
          <BakeryDualDecisionTool slug={comparisonMeta.slug} />
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

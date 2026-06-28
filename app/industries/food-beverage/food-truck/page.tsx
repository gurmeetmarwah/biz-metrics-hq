import type { Metadata } from "next";
import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { FoodTruckBenchmarkTool } from "@/components/industry/FoodTruckBenchmarkTool";
import { FoodTruckUnitCalculator } from "@/components/industry/FoodTruckUnitCalculator";
import { ExploreTopicGrid } from "@/components/industry/ExploreTopicGrid";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { IndustryTypeGrid } from "@/components/industry/IndustryTypeGrid";
import { RevenueBenchmarkCenter } from "@/components/industry/RevenueBenchmarkCenter";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { FeaturedInsights } from "@/components/industry/FeaturedInsights";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";
import {
  benchmarkThresholds,
  businessScorecard,
  breakEvenSummary,
  costStructureFlow,
  eventCompareRows,
  eventEconomicsFlow,
  eventProfitability,
  exploreTopics,
  foodTruckTypes,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryInsights,
  industrySnapshot,
  locationCompareRows,
  locationTopics,
  ownerEconomicsCards,
  popularMetrics,
  relatedFoodBeverageIndustries,
  revenueByConceptCards,
  revenueByEventTypeCards,
  revenueByLocationCards,
  searchQuickLinks,
  startupCostSummary,
  valuationSummary,
} from "@/lib/industries/food-beverage/food-truck-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Food truck industry data hub: revenue benchmarks, profit margins, startup costs, owner salaries, event economics, valuation multiples, calculators, and benchmark tools.",
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

export default function FoodTruckHubPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const revenueBenchmarkGroups = [
    { title: "Revenue By Concept", cards: revenueByConceptCards },
    { title: "Revenue By Location", cards: revenueByLocationCards },
    { title: "Revenue By Event Type", cards: revenueByEventTypeCards },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <IndustryHubHero
          title={hubMeta.title}
          subtitle={hubMeta.subtitle}
          parentLabel={hubMeta.parentLabel}
          parentHref={`/industries/${hubMeta.parentSlug}/`}
          currentPageLabel="Food Truck"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search food truck metrics..."
          searchLabel="Search food truck metrics"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} scorecard={businessScorecard} />

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Food Truck Industry At A Glance
                </h2>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border-subtle bg-surface-muted/50">
                        <th className="px-5 py-3 font-semibold text-ink">Metric</th>
                        <th className="px-5 py-3 font-semibold text-ink">Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industrySnapshot.map((row, i) => (
                        <tr
                          key={row.metric}
                          className={i < industrySnapshot.length - 1 ? "border-b border-border-subtle" : ""}
                        >
                          <td className="px-5 py-3.5 font-medium text-ink-muted">{row.metric}</td>
                          <td className="px-5 py-3.5 font-semibold tabular-nums text-ink">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-ink-faint">
                  {hubMeta.sampleSize} · U.S. data ·{" "}
                  <Link href="/methodology/" className="text-accent hover:underline">
                    Methodology
                  </Link>
                </p>
              </div>
              <div id="benchmark">
                <FoodTruckBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection id="explore" title="Explore Food Truck Economics" subtitle="Drill into revenue, margins, startup costs, owner pay, valuation, and break-even.">
          <ExploreTopicGrid topics={exploreTopics} />
        </HubSection>

        <HubSection id="calculators" title="Food Truck Calculators" subtitle="Run the numbers on profitability, investment, valuation, and break-even." className="bg-surface-muted/50">
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="types" title="Food Truck Types" subtitle="Economics and benchmarks by cuisine concept — tacos, BBQ, pizza, and more.">
          <IndustryTypeGrid items={foodTruckTypes} />
          <p className="mt-6 text-sm text-ink-muted">
            Deep-dive economics for each concept on our{" "}
            <Link href="/industries/restaurant-types/food-truck/" className="font-medium text-accent hover:underline">
              full food truck economics page
            </Link>
            .
          </p>
        </HubSection>

        <HubSection id="revenue-benchmark" title="Revenue Benchmark Center" subtitle="Annual revenue benchmarks by concept, location, and event type." className="bg-surface-muted/50">
          <RevenueBenchmarkCenter groups={revenueBenchmarkGroups} />
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Distribution:</span> Bottom quartile $180K · Median $280K · Top quartile $450K.{" "}
            <Link href="/industries/restaurant-types/food-truck/#revenue" className="font-medium text-accent hover:underline">
              View full revenue analysis →
            </Link>
          </div>
        </HubSection>

        <HubSection id="event-economics" title="Food Truck Event Economics" subtitle="How festivals, catering, and private events drive concentrated revenue and margin.">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Event Revenue Flow</h3>
              <ul className="mt-6 space-y-0">
                {eventEconomicsFlow.map((step, i) => (
                  <li key={step.label}>
                    <div className="rounded-xl border border-border-subtle bg-surface-muted/30 px-4 py-3 text-center">
                      <p className="text-sm font-medium text-ink-muted">{step.label}</p>
                      <p className="mt-1 font-bold tabular-nums text-ink">{step.value}</p>
                    </div>
                    {i < eventEconomicsFlow.length - 1 && (
                      <div className="flex justify-center py-2 text-ink-faint" aria-hidden="true">↓</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-ink">Compare Event Types</h3>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-muted/50">
                      <th className="px-5 py-3.5 text-left font-semibold text-ink">Event Type</th>
                      <th className="px-5 py-3.5 text-right font-semibold text-ink">Revenue Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventCompareRows.map((row, i) => (
                      <tr key={row.eventType} className={i < eventCompareRows.length - 1 ? "border-b border-border-subtle" : ""}>
                        <td className="px-5 py-4 text-ink-muted">{row.eventType}</td>
                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-muted/50">
                      <th className="px-5 py-3.5 text-left font-semibold text-ink">Event Type</th>
                      <th className="px-5 py-3.5 text-right font-semibold text-ink">Net Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventProfitability.map((row, i) => (
                      <tr key={row.eventType} className={i < eventProfitability.length - 1 ? "border-b border-border-subtle" : ""}>
                        <td className="px-5 py-4 text-ink-muted">{row.eventType}</td>
                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </HubSection>

        <HubSection id="daily-sales" title="Daily Sales Dashboard" subtitle="Model customers, average ticket, and operating days into daily, monthly, and annual revenue." className="bg-surface-muted/50">
          <FoodTruckUnitCalculator />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Median truck: 85 customers × $14 ticket × 280 days ≈ $333K annual street revenue before events.{" "}
            <Link href="/industries/restaurant-types/food-truck/#daily-economics" className="font-medium text-accent hover:underline">
              See daily economics example →
            </Link>
          </p>
        </HubSection>

        <HubSection id="profitability" title="Cost Structure Dashboard" subtitle="How revenue flows through food cost, labor, fuel, permits, and profit.">
          <CostStructureFlow items={costStructureFlow} />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Target net margin: 12–15%. Top performers reach 16–18% with strong event mix.{" "}
            <HashLink href="#calculators" className="font-medium text-accent hover:underline">
              Use the profit margin calculator →
            </HashLink>
          </p>
        </HubSection>

        <HubSection id="location-strategy" title="Location Strategy Center" subtitle="Street routes, business districts, and event venues — where food trucks earn the most." className="bg-surface-muted/50">
          <ul className="mb-8 flex flex-wrap gap-2">
            {locationTopics.map((topic) => (
              <li key={topic} className="rounded-full border border-border bg-surface px-3.5 py-1 text-sm font-medium text-ink-muted">
                {topic}
              </li>
            ))}
          </ul>
          <h3 className="font-display font-semibold text-ink">Compare Location Economics</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Location Type</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Revenue Potential</th>
                </tr>
              </thead>
              <tbody>
                {locationCompareRows.map((row, i) => (
                  <tr key={row.locationType} className={i < locationCompareRows.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.locationType}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        <HubSection id="startup-costs" title="Startup Cost Summary" subtitle="Typical investment ranges for launching a food truck.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {startupCostSummary.map((item) => (
              <div key={item.item} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.item}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $60K – $150K · Typical all-in: $80K – $110K
          </p>
        </HubSection>

        <HubSection id="owner-economics" title="Owner Economics" subtitle="Owner earnings by truck model — single truck, fleet, catering, and events." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerEconomicsCards.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">↓</p>
                <p className="text-sm text-ink-muted">Income Potential</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">{item.earnings}</p>
              </article>
            ))}
          </div>
        </HubSection>

        <HubSection id="valuation" title="Valuation Benchmarks" subtitle="Multiples used to value mobile food businesses at exit.">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationSummary.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">{row.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">Example: $300K revenue · $80K SDE → ~$180K value at 2.25x SDE</p>
        </HubSection>

        <HubSection id="break-even" title="Break-Even Metrics" className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Customers/Day Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.customersPerDay}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Events/Month Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.eventsPerMonth}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Payback Period</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.paybackMonths}</p>
            </div>
          </div>
        </HubSection>

        <HubSection id="comparisons" title="Food Truck vs Other Businesses" subtitle="Side-by-side economics for major food and beverage decisions.">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection id="related-industries" title="Related Food & Beverage Industries" subtitle="Explore benchmarks across adjacent concepts." className="bg-surface-muted/50">
          <LinkCardGrid items={relatedFoodBeverageIndustries} columns={3} />
        </HubSection>

        <HubSection id="popular-metrics" title="Most Popular Food Truck Metrics" subtitle="High-traffic benchmarks for operators and buyers.">
          <LinkCardGrid items={popularMetrics} columns={2} />
        </HubSection>

        <HubSection id="insights" title="Industry Insights" subtitle="Featured resources on the metrics that matter most." className="bg-surface-muted/50">
          <FeaturedInsights items={industryInsights} />
        </HubSection>

        <HubSection id="data-sources" title="Data Sources & Methodology" subtitle="Transparent benchmarks aligned with Google E-E-A-T — sample size, sources, formulas, and limitations disclosed.">
          <DataSourcesAttribution attribution={foodTruckAttribution} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}

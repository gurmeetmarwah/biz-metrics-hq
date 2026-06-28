import type { Metadata } from "next";
import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { CoffeeShopBenchmarkTool } from "@/components/industry/CoffeeShopBenchmarkTool";
import { ExploreTopicGrid } from "@/components/industry/ExploreTopicGrid";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { IndustryTypeGrid } from "@/components/industry/IndustryTypeGrid";
import { RevenueBenchmarkCenter } from "@/components/industry/RevenueBenchmarkCenter";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { FeaturedInsights } from "@/components/industry/FeaturedInsights";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import {
  benchmarkThresholds,
  businessScorecard,
  breakEvenSummary,
  coffeeShopTypes,
  costStructureFlow,
  exploreTopics,
  hubCalculators,
  hubComparisons,
  hubFaqs,
  hubKpis,
  hubMeta,
  hubSectionNav,
  industryInsights,
  industrySnapshot,
  ownerIncomeSummary,
  popularMetrics,
  relatedFoodBeverageIndustries,
  revenueByConceptCards,
  revenueByLocationCards,
  revenueBySizeCards,
  searchQuickLinks,
  startupCostSummary,
  valuationSummary,
} from "@/lib/industries/food-beverage/coffee-shop-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Coffee shop industry data hub: revenue benchmarks, profit margins, startup costs, owner salaries, valuation multiples, calculators, and benchmark tools for operators and investors.",
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
        <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">{subtitle}</p>
        )}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function CoffeeShopHubPage() {
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
    { title: "Revenue By Location", cards: revenueByLocationCards },
    { title: "Revenue By Size", cards: revenueBySizeCards },
    { title: "Revenue By Concept", cards: revenueByConceptCards },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <IndustryHubHero
          title={hubMeta.title}
          subtitle={hubMeta.subtitle}
          parentLabel={hubMeta.parentLabel}
          parentHref={`/industries/${hubMeta.parentSlug}/`}
          currentPageLabel="Coffee Shop"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search coffee shop metrics..."
          searchLabel="Search coffee shop metrics"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} scorecard={businessScorecard} />

        {/* Above-the-fold: snapshot + benchmark on desktop */}
        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Coffee Shop Industry At A Glance
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
                          className={
                            i < industrySnapshot.length - 1
                              ? "border-b border-border-subtle"
                              : ""
                          }
                        >
                          <td className="px-5 py-3.5 font-medium text-ink-muted">
                            {row.metric}
                          </td>
                          <td className="px-5 py-3.5 font-semibold tabular-nums text-ink">
                            {row.value}
                          </td>
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
                <CoffeeShopBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection
          id="explore"
          title="Explore Coffee Shop Economics"
          subtitle="Drill into revenue, margins, startup costs, owner pay, valuation, and break-even."
        >
          <ExploreTopicGrid topics={exploreTopics} />
        </HubSection>

        <HubSection
          id="calculators"
          title="Coffee Shop Calculators"
          subtitle="Run the numbers on profitability, investment, valuation, and break-even."
          className="bg-surface-muted/50"
        >
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection
          id="types"
          title="Coffee Shop Types"
          subtitle="Benchmarks by concept — independent cafes, drive-thru, roasteries, and more."
        >
          <IndustryTypeGrid items={coffeeShopTypes} />
          <p className="mt-6 text-sm text-ink-muted">
            Deep-dive economics for each concept type on our{" "}
            <Link
              href="/industries/restaurant-types/coffee-shop/"
              className="font-medium text-accent hover:underline"
            >
              full coffee shop economics page
            </Link>
            .
          </p>
        </HubSection>

        <HubSection
          id="revenue-benchmark"
          title="Revenue Benchmark Center"
          subtitle="Annual revenue benchmarks by location, size, and concept."
          className="bg-surface-muted/50"
        >
          <RevenueBenchmarkCenter groups={revenueBenchmarkGroups} />
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Distribution:</span> Bottom quartile
            $350K · Median $550K · Top quartile $850K.{" "}
            <Link
              href="/industries/restaurant-types/coffee-shop/#revenue"
              className="font-medium text-accent hover:underline"
            >
              View full revenue analysis →
            </Link>
          </div>
        </HubSection>

        <HubSection
          id="profitability"
          title="Cost Structure Dashboard"
          subtitle="How revenue flows through ingredients, labor, rent, and profit."
        >
          <CostStructureFlow items={costStructureFlow} />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Target net margin: 12–15%. Top performers reach 16–18%.{" "}
            <HashLink href="#calculators" className="font-medium text-accent hover:underline">
              Use the profit margin calculator →
            </HashLink>
          </p>
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Summary"
          subtitle="Typical investment ranges for opening a coffee shop."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCostSummary.map((item) => (
              <div
                key={item.item}
                className="rounded-xl border border-border bg-surface px-5 py-4"
              >
                <p className="text-sm text-ink-muted">{item.item}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $80K – $400K · Typical neighborhood cafe: $150K – $250K
          </p>
        </HubSection>

        <HubSection id="owner-income" title="Owner Income Benchmarks">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerIncomeSummary.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-sm font-medium text-ink-muted">{tier.tier}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">
                  {tier.range}
                </p>
              </div>
            ))}
          </div>
        </HubSection>

        <HubSection
          id="valuation"
          title="Valuation Benchmarks"
          subtitle="Multiples used to value independent coffee shops at exit."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationSummary.map((row) => (
              <div
                key={row.metric}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Example: $600K revenue · $120K SDE → ~$360K value at 3.0x SDE
          </p>
        </HubSection>

        <HubSection id="break-even" title="Break-Even Metrics">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Customers/Day Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                {breakEvenSummary.customersPerDay}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Monthly Revenue Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                {breakEvenSummary.monthlyRevenue}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Payback Period</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                {breakEvenSummary.paybackMonths}
              </p>
            </div>
          </div>
        </HubSection>

        <HubSection
          id="comparisons"
          title="Compare Coffee Shops To Other Businesses"
          subtitle="Side-by-side economics for major food and beverage decisions."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection
          id="related-industries"
          title="Related Food & Beverage Industries"
          subtitle="Explore benchmarks across adjacent concepts."
        >
          <LinkCardGrid items={relatedFoodBeverageIndustries} columns={3} />
        </HubSection>

        <HubSection
          id="popular-metrics"
          title="Most Popular Metrics"
          subtitle="High-traffic benchmarks for coffee shop operators and buyers."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={popularMetrics} columns={2} />
        </HubSection>

        <HubSection
          id="insights"
          title="Industry Insights"
          subtitle="Featured reports on the metrics that matter most."
        >
          <FeaturedInsights items={industryInsights} />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}

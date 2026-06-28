import type { Metadata } from "next";
import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHubHero } from "@/components/industry/IndustryHubHero";
import { HubKpiDashboard } from "@/components/industry/HubKpiDashboard";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { BakeryBenchmarkTool } from "@/components/industry/BakeryBenchmarkTool";
import { ExploreTopicGrid } from "@/components/industry/ExploreTopicGrid";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { IndustryTypeGrid } from "@/components/industry/IndustryTypeGrid";
import { RevenueBenchmarkCenter } from "@/components/industry/RevenueBenchmarkCenter";
import { CostStructureFlow } from "@/components/industry/CostStructureFlow";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { FeaturedInsights } from "@/components/industry/FeaturedInsights";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { bakeryAttribution } from "@/lib/data-sources/bakery";
import {
  bakeryTypes,
  benchmarkThresholds,
  businessScorecard,
  breakEvenSummary,
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
  ownerEconomicsCards,
  popularMetrics,
  productMixFlow,
  relatedFoodBeverageIndustries,
  revenueByLocationCards,
  revenueBySizeCards,
  revenueByTypeCards,
  revenueStreamAnalysis,
  searchQuickLinks,
  startupCostSummary,
  valuationSummary,
  wholesaleCards,
  wholesaleTopics,
} from "@/lib/industries/food-beverage/bakery-hub";

export const metadata: Metadata = {
  title: `${hubMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Bakery industry data hub: revenue benchmarks, profit margins, startup costs, owner salaries, valuation multiples, wholesale economics, calculators, and benchmark tools.",
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

export default function BakeryHubPage() {
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
    { title: "Revenue By Bakery Type", cards: revenueByTypeCards },
    { title: "Revenue By Size", cards: revenueBySizeCards },
    { title: "Revenue By Location", cards: revenueByLocationCards },
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
          currentPageLabel="Bakery"
          dataVintage={hubMeta.dataVintage}
          sampleSize={hubMeta.sampleSize}
          searchPlaceholder="Search bakery metrics..."
          searchLabel="Search bakery metrics"
          searchQuickLinks={searchQuickLinks}
        />

        <HubKpiDashboard kpis={hubKpis} scorecard={businessScorecard} />

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  Bakery Industry At A Glance
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
                <BakeryBenchmarkTool thresholds={benchmarkThresholds} />
              </div>
            </div>
          </div>
        </section>

        <IndustrySectionNav items={hubSectionNav} />

        <HubSection id="explore" title="Explore Bakery Economics" subtitle="Drill into revenue, margins, startup costs, owner pay, valuation, and break-even.">
          <ExploreTopicGrid topics={exploreTopics} />
        </HubSection>

        <HubSection id="calculators" title="Bakery Calculators" subtitle="Run the numbers on profitability, investment, valuation, and break-even." className="bg-surface-muted/50">
          <CalculatorHubGrid items={hubCalculators} />
        </HubSection>

        <HubSection id="types" title="Bakery Types" subtitle="Economics and benchmarks by bakery concept — retail, artisan, wholesale, and more.">
          <IndustryTypeGrid items={bakeryTypes} />
          <p className="mt-6 text-sm text-ink-muted">
            Deep-dive economics for each concept on our{" "}
            <Link href="/industries/restaurant-types/bakery/" className="font-medium text-accent hover:underline">
              full bakery economics page
            </Link>
            .
          </p>
        </HubSection>

        <HubSection id="revenue-benchmark" title="Revenue Benchmark Center" subtitle="Annual revenue benchmarks by bakery type, size, and location." className="bg-surface-muted/50">
          <RevenueBenchmarkCenter groups={revenueBenchmarkGroups} />
          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">Distribution:</span> Bottom quartile $280K · Median $450K · Top quartile $750K.{" "}
            <Link href="/industries/restaurant-types/bakery/#revenue" className="font-medium text-accent hover:underline">
              View full revenue analysis →
            </Link>
          </div>
        </HubSection>

        <HubSection id="product-mix" title="Product Mix Economics" subtitle="How revenue flows across bread, pastries, cakes, cookies, and wholesale.">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-display font-semibold text-ink">Revenue Mix</h3>
              <div className="mt-6 flex flex-col items-center gap-1 text-sm text-ink-faint" aria-hidden="true">
                <span>Revenue</span>
                <span>↓</span>
              </div>
              <div className="mt-2 flex h-5 overflow-hidden rounded-full">
                {productMixFlow.map((item) => (
                  <div
                    key={item.label}
                    style={{ width: `${item.percent}%`, background: item.color }}
                    title={`${item.label}: ${item.percent}%`}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {productMixFlow.map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-sm" style={{ background: item.color }} aria-hidden="true" />
                      <span className="text-ink-muted">{item.label}</span>
                    </div>
                    <span className="font-semibold tabular-nums text-ink">{item.percent}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink">Revenue Source</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueStreamAnalysis.map((row, i) => (
                    <tr key={row.source} className={i < revenueStreamAnalysis.length - 1 ? "border-b border-border-subtle" : ""}>
                      <td className="px-5 py-4 text-ink-muted">{row.source}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </HubSection>

        <HubSection id="profitability" title="Cost Structure Dashboard" subtitle="How revenue flows through ingredients, labor, rent, packaging, and profit." className="bg-surface-muted/50">
          <CostStructureFlow items={costStructureFlow} />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Target net margin: 10–14%. Top performers reach 15–18%.{" "}
            <HashLink href="#calculators" className="font-medium text-accent hover:underline">
              Use the profit margin calculator →
            </HashLink>
          </p>
        </HubSection>

        <HubSection id="wholesale" title="Wholesale Opportunity Center" subtitle="B2B revenue from restaurants, cafes, hotels, and grocery accounts.">
          <p className="mb-6 text-sm text-ink-muted">Wholesale bakery economics — supply channels and margin dynamics.</p>
          <ul className="mb-8 flex flex-wrap gap-2">
            {wholesaleTopics.map((topic) => (
              <li key={topic} className="rounded-full border border-border bg-surface px-3.5 py-1 text-sm font-medium text-ink-muted">
                {topic}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {wholesaleCards.map((card) => (
              <Link key={card.label} href={card.href} className="card-interactive rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{card.label}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{card.value}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/industries/restaurant-types/bakery/#wholesale-retail" className="font-medium text-accent hover:underline">
              Compare wholesale vs retail bakery economics →
            </Link>
          </p>
        </HubSection>

        <HubSection id="startup-costs" title="Startup Cost Summary" subtitle="Typical investment ranges for opening a bakery.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startupCostSummary.map((item) => (
              <div key={item.item} className="rounded-xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-ink-muted">{item.item}</p>
                <p className="mt-1 font-bold tabular-nums text-ink">{item.range}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Total startup range: $50K – $300K · Typical retail bakery: $120K – $200K
          </p>
        </HubSection>

        <HubSection id="owner-economics" title="Owner Economics" subtitle="Owner earnings by bakery model and scale." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ownerEconomicsCards.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">↓</p>
                <p className="text-sm text-ink-muted">Owner Earnings</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-metric-salary">{item.earnings}</p>
              </article>
            ))}
          </div>
        </HubSection>

        <HubSection id="valuation" title="Valuation Benchmarks" subtitle="Multiples used to value independent bakeries at exit.">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationSummary.map((row) => (
              <div key={row.metric} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-metric-valuation">{row.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">Example: $500K revenue · $100K SDE → ~$300K value at 2.8x SDE</p>
        </HubSection>

        <HubSection id="break-even" title="Break-Even Metrics" className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Orders/Day Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.ordersPerDay}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Monthly Revenue Needed</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.monthlyRevenue}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-sm text-ink-muted">Payback Period</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{breakEvenSummary.paybackMonths}</p>
            </div>
          </div>
        </HubSection>

        <HubSection id="comparisons" title="Bakery vs Other Businesses" subtitle="Side-by-side economics for major food and beverage decisions.">
          <LinkCardGrid items={hubComparisons} columns={2} />
        </HubSection>

        <HubSection id="related-industries" title="Related Food & Beverage Industries" subtitle="Explore benchmarks across adjacent concepts." className="bg-surface-muted/50">
          <LinkCardGrid items={relatedFoodBeverageIndustries} columns={3} />
        </HubSection>

        <HubSection id="popular-metrics" title="Most Popular Bakery Metrics" subtitle="High-traffic benchmarks for bakery operators and buyers.">
          <LinkCardGrid items={popularMetrics} columns={2} />
        </HubSection>

        <HubSection id="insights" title="Industry Insights" subtitle="Featured reports on the metrics that matter most. Each report cites third-party and operator-level data sources." className="bg-surface-muted/50">
          <FeaturedInsights items={industryInsights} />
        </HubSection>

        <HubSection id="data-sources" title="Data Sources & Methodology" subtitle="Transparent benchmarks aligned with Google E-E-A-T — sample size, sources, formulas, and limitations disclosed.">
          <DataSourcesAttribution attribution={bakeryAttribution} showMacroSources />
        </HubSection>

        <HubSection id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={hubFaqs} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}

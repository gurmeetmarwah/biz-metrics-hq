import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetricHubSection } from "@/components/metric-hub/MetricHubSection";
import { IndustriesHubHero } from "@/components/industries-hub/IndustriesHubHero";
import { IndustriesStatsBar } from "@/components/industries-hub/IndustriesStatsBar";
import { FeaturedRankingsGrid } from "@/components/industries-hub/FeaturedRankingsGrid";
import { IndustryCategoriesGrid } from "@/components/industries-hub/IndustryCategoriesGrid";
import { MostViewedIndustries } from "@/components/industries-hub/MostViewedIndustries";
import { ComparisonHubGrid } from "@/components/industries-hub/ComparisonHubGrid";
import { BusinessQualityRankings } from "@/components/industries-hub/BusinessQualityRankings";
import { IndustryGoalFinder } from "@/components/industries-hub/IndustryGoalFinder";
import { IndustryExplorerTable } from "@/components/industries-hub/IndustryExplorerTable";
import { FeaturedCalculatorsGrid } from "@/components/industries-hub/FeaturedCalculatorsGrid";
import { IndustryInsightsGrid } from "@/components/industries-hub/IndustryInsightsGrid";
import { IndustriesHubCTA } from "@/components/industries-hub/IndustriesHubCTA";
import { IndustriesHubFooter } from "@/components/industries-hub/IndustriesHubFooter";
import { industriesHubMeta } from "@/lib/industries-hub";

export const metadata: Metadata = {
  title: `${industriesHubMeta.title} | BizMetricsHQ`,
  description: industriesHubMeta.subtitle,
};

export default function IndustriesHubPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesHubHero />
        <IndustriesStatsBar />

        <MetricHubSection
          id="rankings"
          title="Featured Industry Rankings"
          subtitle="Traffic-ready rankings across profitability, valuation, recurring revenue, and more."
        >
          <FeaturedRankingsGrid />
        </MetricHubSection>

        <MetricHubSection
          id="categories"
          title="Industry Categories"
          subtitle="Browse the full intelligence directory — home services, healthcare, fitness, and food & beverage."
          className="bg-surface-muted/50"
        >
          <IndustryCategoriesGrid />
        </MetricHubSection>

        <MetricHubSection
          id="most-viewed"
          title="Most Viewed Industries"
          subtitle="The benchmarks entrepreneurs explore most — updated from platform traffic."
        >
          <MostViewedIndustries />
        </MetricHubSection>

        <MetricHubSection
          id="explorer"
          title="Industry Explorer"
          subtitle="Sort by revenue, margin, owner salary, or valuation multiple. Click any row for full benchmarks."
          className="bg-surface-muted/50"
        >
          <IndustryExplorerTable />
        </MetricHubSection>

        <MetricHubSection
          id="comparisons"
          title="Industry Comparison Hub"
          subtitle="Side-by-side economics to evaluate which business model fits your goals."
        >
          <ComparisonHubGrid />
        </MetricHubSection>

        <MetricHubSection
          id="quality-rankings"
          title="Business Quality Rankings"
          subtitle="Best businesses by metric — each ranking links to published benchmark data."
          className="bg-surface-muted/50"
        >
          <BusinessQualityRankings />
        </MetricHubSection>

        <MetricHubSection
          id="goal-finder"
          title="Find Businesses That Match Your Goals"
          subtitle="Filter by startup budget, recurring revenue, profitability, and scalability — or pick a preset goal."
        >
          <IndustryGoalFinder />
        </MetricHubSection>

        <MetricHubSection
          id="calculators"
          title="Featured Calculators"
          subtitle="Run the numbers on valuation, margins, revenue, break-even, and owner compensation."
          className="bg-surface-muted/50"
        >
          <FeaturedCalculatorsGrid />
        </MetricHubSection>

        <MetricHubSection
          id="insights"
          title="Industry Insights"
          subtitle="Intelligence cards — not blog posts. Deep dives into sector economics."
        >
          <IndustryInsightsGrid />
        </MetricHubSection>

        <IndustriesHubCTA />
        <IndustriesHubFooter />
      </main>
      <Footer />
    </>
  );
}

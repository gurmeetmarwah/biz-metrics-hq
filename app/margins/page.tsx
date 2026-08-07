import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetricHubHero } from "@/components/metric-hub/MetricHubHero";
import { MetricHubSection } from "@/components/metric-hub/MetricHubSection";
import { RankingTable } from "@/components/metric-hub/RankingTable";
import { ComparisonLinkGrid } from "@/components/metric-hub/BrowseByCategory";
import { IndustryCardGrid } from "@/components/metric-hub/IndustryCardGrid";
import { DriverEducationCards } from "@/components/metric-hub/DriverEducationCards";
import { MarginLeaderboard } from "@/components/metric-hub/MarginLeaderboard";
import {
  marginsHubMeta,
  marginRankings,
  highestMarginBusinesses,
  lowestMarginBusinesses,
  marginLeaderboardBands,
  marginComparisons,
  marginDrivers,
  marginsQuickLinks,
} from "@/lib/metric-hubs/margins-hub-data";

export const metadata: Metadata = {
  title: `${marginsHubMeta.title} | BizMetricsHQ`,
  description: marginsHubMeta.subtitle,
};

export default function MarginsHubPage() {
  return (
    <>
      <Header />
      <main>
        <MetricHubHero
          title={marginsHubMeta.title}
          subtitle={marginsHubMeta.subtitle}
          currentPage="Profit Margins"
          dataVintage={marginsHubMeta.dataVintage}
          sampleSize={marginsHubMeta.sampleSize}
          searchPlaceholder="Search industry profit margin benchmarks..."
          quickLinks={marginsQuickLinks}
          accent="margin"
        />

        <MetricHubSection
          id="rankings"
          title="Profitability Metric Rankings by Industry"
          subtitle="How to track business profitability metrics starts with peer medians—industries ranked by net profit margin."
        >
          <RankingTable rows={marginRankings} valueLabel="Net Margin" />
        </MetricHubSection>

        <MetricHubSection
          id="highest"
          title="Highest Margin Small Businesses"
          subtitle="Industries where owners consistently achieve strong bottom-line profitability."
          className="bg-surface-muted/50"
        >
          <IndustryCardGrid items={highestMarginBusinesses} />
        </MetricHubSection>

        <MetricHubSection
          id="lowest"
          title="Lowest Margin Small Businesses"
          subtitle="Thinner margins—often offset by volume. Still useful when you track profitability metrics against peers."
        >
          <IndustryCardGrid items={lowestMarginBusinesses} />
        </MetricHubSection>

        <MetricHubSection
          id="leaderboard"
          title="Margin Leaderboard"
          subtitle="Industries grouped by profitability tier so you can spot where your business fits."
          className="bg-surface-muted/50"
        >
          <MarginLeaderboard bands={marginLeaderboardBands} />
        </MetricHubSection>

        <MetricHubSection
          id="comparisons"
          title="Margin Comparisons"
          subtitle="Compare profit margins across related industries side by side."
        >
          <ComparisonLinkGrid items={marginComparisons} />
        </MetricHubSection>

        <MetricHubSection
          id="drivers"
          title="Understanding Cash Flow vs Profitability for Owners"
          subtitle="The operational levers—and the cash vs profit distinction—that separate top-quartile operators from the rest."
          className="bg-surface-muted/50"
        >
          <DriverEducationCards drivers={marginDrivers} />
        </MetricHubSection>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 text-center">
            <p className="text-sm text-ink-muted">Explore related intelligence hubs</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/revenue/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Revenue →
              </Link>
              <Link href="/valuation/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Valuation →
              </Link>
              <Link href="/calculators/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Calculators →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

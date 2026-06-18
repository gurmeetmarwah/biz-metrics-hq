import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetricHubHero } from "@/components/metric-hub/MetricHubHero";
import { MetricHubSection } from "@/components/metric-hub/MetricHubSection";
import { RankingTable } from "@/components/metric-hub/RankingTable";
import { BrowseByCategory, ComparisonLinkGrid } from "@/components/metric-hub/BrowseByCategory";
import { DistributionBandCards } from "@/components/metric-hub/DistributionBandCards";
import { IndustryCardGrid } from "@/components/metric-hub/IndustryCardGrid";
import { DriverEducationCards } from "@/components/metric-hub/DriverEducationCards";
import {
  revenueHubMeta,
  revenueRankings,
  browseByCategory,
  revenueDistributionBands,
  highestRevenueIndustries,
  revenueComparisons,
  revenueDrivers,
  revenueQuickLinks,
} from "@/lib/metric-hubs/revenue-hub-data";

export const metadata: Metadata = {
  title: `${revenueHubMeta.title} | BizMetricsHQ`,
  description: revenueHubMeta.subtitle,
};

export default function RevenueHubPage() {
  return (
    <>
      <Header />
      <main>
        <MetricHubHero
          title={revenueHubMeta.title}
          subtitle={revenueHubMeta.subtitle}
          currentPage="Revenue"
          dataVintage={revenueHubMeta.dataVintage}
          sampleSize={revenueHubMeta.sampleSize}
          searchPlaceholder="Search industry revenue benchmarks..."
          quickLinks={revenueQuickLinks}
          accent="revenue"
        />

        <MetricHubSection
          id="rankings"
          title="Revenue Rankings"
          subtitle="Industries ranked by median annual revenue — based on 350+ owner-operated businesses."
        >
          <RankingTable rows={revenueRankings} valueLabel="Median Revenue" />
        </MetricHubSection>

        <MetricHubSection
          id="browse"
          title="Browse Revenue By Industry"
          subtitle="Jump to revenue benchmarks by sector."
          className="bg-surface-muted/50"
        >
          <BrowseByCategory categories={browseByCategory} />
        </MetricHubSection>

        <MetricHubSection
          id="distribution"
          title="Revenue Distribution"
          subtitle="How owner-operated businesses cluster by annual revenue band."
        >
          <DistributionBandCards bands={revenueDistributionBands} />
        </MetricHubSection>

        <MetricHubSection
          id="highest"
          title="Highest Revenue Industries"
          subtitle="Top-performing sectors by median annual revenue."
          className="bg-surface-muted/50"
        >
          <IndustryCardGrid items={highestRevenueIndustries} />
        </MetricHubSection>

        <MetricHubSection
          id="comparisons"
          title="Revenue Comparisons"
          subtitle="Side-by-side revenue benchmarks for related industries."
        >
          <ComparisonLinkGrid items={revenueComparisons} />
        </MetricHubSection>

        <MetricHubSection
          id="drivers"
          title="Revenue Drivers"
          subtitle="The five factors that most influence how much a business earns."
          className="bg-surface-muted/50"
        >
          <DriverEducationCards drivers={revenueDrivers} />
        </MetricHubSection>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 text-center">
            <p className="text-sm text-ink-muted">Explore related intelligence hubs</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/margins/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Profit Margins →
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

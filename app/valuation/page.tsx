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
import { BusinessValuationMiniTool } from "@/components/metric-hub/BusinessValuationMiniTool";
import {
  valuationHubMeta,
  valuationRankings,
  valuationIndustryCards,
  valuationDrivers,
  valuationComparisons,
  acquisitionHotList,
  featuredCalculator,
  valuationQuickLinks,
} from "@/lib/metric-hubs/valuation-hub-data";

export const metadata: Metadata = {
  title: `${valuationHubMeta.title} | BizMetricsHQ`,
  description: valuationHubMeta.subtitle,
};

export default function ValuationHubPage() {
  return (
    <>
      <Header />
      <main>
        <MetricHubHero
          title={valuationHubMeta.title}
          subtitle={valuationHubMeta.subtitle}
          currentPage="Valuation"
          dataVintage={valuationHubMeta.dataVintage}
          sampleSize={valuationHubMeta.sampleSize}
          searchPlaceholder="Search industry valuation benchmarks..."
          quickLinks={valuationQuickLinks}
          accent="valuation"
        />

        <MetricHubSection
          id="rankings"
          title="Most Valuable Industries"
          subtitle="Industries ranked by median SDE multiple — what buyers pay at exit."
        >
          <RankingTable rows={valuationRankings} valueLabel="SDE Multiple" />
        </MetricHubSection>

        <MetricHubSection
          id="by-industry"
          title="Valuation Rankings"
          subtitle="SDE multiples and valuation benchmarks by industry."
          className="bg-surface-muted/50"
        >
          <IndustryCardGrid
            items={valuationIndustryCards.map((c) => ({
              label: c.label,
              href: c.href,
              median: c.multiple,
            }))}
          />
        </MetricHubSection>

        <MetricHubSection
          id="drivers"
          title="Valuation Drivers"
          subtitle="What buyers and brokers weigh when pricing a business."
        >
          <DriverEducationCards drivers={valuationDrivers} />
        </MetricHubSection>

        <MetricHubSection
          id="calculator"
          title="Business Worth Calculator"
          subtitle="Estimate your company's market value in seconds."
          className="bg-surface-muted/50"
        >
          <BusinessValuationMiniTool calculatorHref={featuredCalculator.href} />
        </MetricHubSection>

        <MetricHubSection
          id="comparisons"
          title="Compare Valuations"
          subtitle="Side-by-side valuation multiples for related industries."
        >
          <ComparisonLinkGrid items={valuationComparisons} />
        </MetricHubSection>

        <MetricHubSection
          id="acquisition"
          title="Acquisition Hot List"
          subtitle="Most attractive businesses for buyers, PE firms, and consolidators."
          className="bg-surface-muted/50"
        >
          <IndustryCardGrid items={acquisitionHotList} />
        </MetricHubSection>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 text-center">
            <p className="text-sm text-ink-muted">Explore related intelligence hubs</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/revenue/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Revenue →
              </Link>
              <Link href="/margins/" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Profit Margins →
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

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetricHubHero } from "@/components/metric-hub/MetricHubHero";
import { MetricHubSection } from "@/components/metric-hub/MetricHubSection";
import {
  PopularCalculatorsGrid,
  IndustrySpecificTools,
  CalculatorCategoryGrid,
} from "@/components/metric-hub/CalculatorHubPanels";
import {
  calculatorsHubMeta,
  popularCalculators,
  industrySpecificTools,
  calculatorCategories,
  calculatorsQuickLinks,
} from "@/lib/metric-hubs/calculators-hub-data";

export const metadata: Metadata = {
  title: `${calculatorsHubMeta.title} | BizMetricsHQ`,
  description: calculatorsHubMeta.subtitle,
};

export default function CalculatorsHubPage() {
  return (
    <>
      <Header />
      <main>
        <MetricHubHero
          title={calculatorsHubMeta.title}
          subtitle={calculatorsHubMeta.subtitle}
          currentPage="Calculators"
          dataVintage={calculatorsHubMeta.dataVintage}
          sampleSize={calculatorsHubMeta.sampleSize}
          searchPlaceholder="Search business calculators..."
          quickLinks={calculatorsQuickLinks}
          accent="calculator"
        />

        <MetricHubSection
          id="popular"
          title="Most Popular Tools"
          subtitle="Start here — benchmarked calculators used most by business owners and buyers."
        >
          <PopularCalculatorsGrid calculators={popularCalculators} />
        </MetricHubSection>

        <MetricHubSection
          id="industry-tools"
          title="Industry Specific Tools"
          subtitle="Flagship calculators tailored to each industry's key operating metric."
          className="bg-surface-muted/50"
        >
          <IndustrySpecificTools tools={industrySpecificTools} />
        </MetricHubSection>

        <MetricHubSection
          id="categories"
          title="Calculator Categories"
          subtitle="Browse all tools by business economics topic."
        >
          <CalculatorCategoryGrid categories={calculatorCategories} />
        </MetricHubSection>

        <section className="bg-surface-muted/50 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 text-center">
            <p className="text-sm text-ink-muted">Explore benchmark data behind the calculators</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/revenue/" className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Revenue Benchmarks →
              </Link>
              <Link href="/margins/" className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Profit Margins →
              </Link>
              <Link href="/valuation/" className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                Valuation Multiples →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

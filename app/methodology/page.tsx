import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MethodologySection } from "@/components/home/MethodologySection";
import { methodologySummary } from "@/lib/methodology";

export const metadata: Metadata = {
  title: "Benchmark Methodology — BizMetricsHQ",
  description:
    "How BizMetricsHQ calculates industry benchmarks: data sources, interquartile ranges, median values, sample sizes, and limitations. Built for transparency and E-E-A-T.",
};

export default function MethodologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "BizMetricsHQ Industry Benchmarks",
    description:
      "Interquartile ranges and median values for revenue, profit margins, owner salaries, and valuation multiples across U.S. small businesses.",
    url: "https://bizmetricshq.com/methodology/",
    creator: {
      "@type": "Organization",
      name: "BizMetricsHQ",
    },
    dateModified: "2026-06-01",
    temporalCoverage: "2025/2026",
    spatialCoverage: {
      "@type": "Place",
      name: "United States",
    },
    variableMeasured: [
      "Annual Revenue",
      "Net Profit Margin",
      "Owner Salary",
      "SDE Valuation Multiple",
    ],
    measurementTechnique:
      "Aggregation of business-for-sale listings, owner surveys, and public filings. Outliers beyond 2.5× IQR excluded. Median and 25th–75th percentile ranges published.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <div className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Methodology</span>
            </nav>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Benchmark Methodology
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Every figure on BizMetricsHQ is a range with a disclosed median —
              not a false-precision single number. This page documents our data
              sources, calculation steps, and known limitations. Last updated{" "}
              {methodologySummary.lastUpdated}.
            </p>
          </div>
        </div>
        <MethodologySection />
      </main>
      <Footer />
    </>
  );
}

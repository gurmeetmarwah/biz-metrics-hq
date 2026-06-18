import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryReportContent } from "@/components/industry/IndustryReportContent";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { dentalAttribution } from "@/lib/data-sources/dental";
import { hubMeta } from "@/lib/industries/healthcare/dental-practice-hub";
import {
  reportMeta,
  reportSections,
} from "@/lib/industries/healthcare/dental-industry-report-2026";

export const metadata: Metadata = {
  title: `${reportMeta.title} — Market Size, Margins & Outlook | BizMetricsHQ`,
  description: reportMeta.description,
};

export default function DentalPracticeEconomicsReportPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: reportMeta.title,
    description: reportMeta.description,
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    author: { "@type": "Organization", name: "BizMetricsHQ" },
    publisher: { "@type": "Organization", name: "BizMetricsHQ" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main>
        <div className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link
                href="/industries/healthcare/dental-practice/"
                className="hover:text-accent"
              >
                Dental Practice
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Industry Report</span>
            </nav>
            <p className="mt-6 text-xs font-semibold tracking-wider text-accent uppercase">
              Featured Report · {reportMeta.readTime} read
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {reportMeta.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {reportMeta.subtitle}
            </p>
            <p className="mt-4 text-sm text-ink-faint">
              Published {reportMeta.published} · Data vintage {reportMeta.dataVintage}
            </p>
          </div>
        </div>

        <div className="border-b border-border/60 bg-surface-muted/40">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            <h2 className="text-sm font-semibold text-ink">In This Report</h2>
            <ol className="mt-4 space-y-2 text-sm">
              {reportSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-accent hover:underline">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <article className="bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <IndustryReportContent sections={reportSections} />
          </div>
        </article>

        <section className="border-t border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <DataSourcesAttribution attribution={dentalAttribution} showMacroSources />
            <p className="mt-6 text-sm text-ink-muted">
              Featured report macro figures cross-referenced against:{" "}
              {reportMeta.sources.join(" · ")}. Operator-level benchmarks validated
              against the BizMetricsHQ dental practice panel ({hubMeta.sampleSize}).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/industries/healthcare/dental-practice/"
                className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                ← Back to Dental Practice Hub
              </Link>
              <Link
                href="/calculators/dental-practice-ebitda/"
                className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Dental EBITDA Calculator
              </Link>
              <Link
                href="/industries/healthcare/dental-practice/reports/dental-practice-valuation-2026/"
                className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Practice Valuation Report
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

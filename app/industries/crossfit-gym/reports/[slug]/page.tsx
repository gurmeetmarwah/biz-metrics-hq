import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryReportContent } from "@/components/industry/IndustryReportContent";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { crossfitGymAttribution } from "@/lib/data-sources/crossfit-gym";
import { crossfitReports, crossfitReportSlugs } from "@/lib/industries/crossfit-reports";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return crossfitReportSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = crossfitReports[slug];
  if (!report) return { title: "Report Not Found | BizMetricsHQ" };

  return {
    title: `${report.meta.title} — 2026 CrossFit Industry Report | BizMetricsHQ`,
    description: report.meta.description,
  };
}

export default async function CrossfitBenchmarkReportPage({ params }: PageProps) {
  const { slug } = await params;
  const report = crossfitReports[slug];
  if (!report) notFound();

  const { meta, sections } = report;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    author: { "@type": "Organization", name: "BizMetricsHQ" },
    publisher: { "@type": "Organization", name: "BizMetricsHQ" },
  };

  const siblingReports = crossfitReportSlugs
    .filter((s) => s !== slug)
    .map((s) => crossfitReports[s].meta);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
              <Link href="/industries/crossfit-gym/" className="hover:text-accent">
                CrossFit Gym
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Industry Report</span>
            </nav>
            <p className="mt-6 text-xs font-semibold tracking-wider text-accent uppercase">
              Fitness Rankings · {meta.readTime} read
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{meta.subtitle}</p>
            <p className="mt-4 text-sm text-ink-faint">
              Published {meta.published} · Data vintage {meta.dataVintage}
            </p>
          </div>
        </div>

        <div className="border-b border-border/60 bg-surface-muted/40">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            <h2 className="text-sm font-semibold text-ink">In This Report</h2>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((section) => (
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
            <IndustryReportContent sections={sections} />
          </div>
        </article>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink">Related CrossFit Reports</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {siblingReports.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={sibling.href}
                    className="card-interactive block rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink hover:text-accent"
                  >
                    {sibling.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <DataSourcesAttribution attribution={crossfitGymAttribution} showMacroSources />
            <p className="mt-6 text-sm text-ink-muted">
              Industry report figures cross-referenced against: {meta.sources.join(" · ")}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/industries/crossfit-gym/#rankings"
                className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                ← Back to Fitness Rankings
              </Link>
              <Link
                href="/calculators/crossfit-valuation/"
                className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                CrossFit Valuation Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

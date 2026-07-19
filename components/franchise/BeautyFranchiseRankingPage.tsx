import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryReportContent } from "@/components/industry/IndustryReportContent";
import type { FranchiseRankingReport } from "@/lib/franchise/beauty/build-franchise-rankings";
import type { ReportMeta } from "@/lib/industries/reports/types";

type Props = {
  ranking: FranchiseRankingReport;
  siblingRankings: readonly ReportMeta[];
  guideHref: string;
  guideLabel: string;
  industryNavLabel: string;
  siblingsHeading: string;
  finalCtaTitle: string;
};

function extractFaqEntities(sections: FranchiseRankingReport["sections"]) {
  const faqSection = sections.find((s) => s.id === "faq");
  if (!faqSection) return [];

  const bullets = faqSection.blocks.find((b) => b.type === "bullets");
  if (!bullets || bullets.type !== "bullets") return [];

  return bullets.items
    .map((item) => {
      const match = item.match(/^\*\*(.+?)\*\*\s*(.*)$/);
      if (!match) return null;
      return {
        "@type": "Question" as const,
        name: match[1].replace(/\?$/, "") + (match[1].endsWith("?") ? "" : "?"),
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: match[2].replace(/\*\*/g, ""),
        },
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
}

export function BeautyFranchiseRankingPage({
  ranking,
  siblingRankings,
  guideHref,
  guideLabel,
  industryNavLabel,
  siblingsHeading,
  finalCtaTitle,
}: Props) {
  const { meta, sections } = ranking;
  const faqEntities = extractFaqEntities(sections);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: "2026-07-01",
    dateModified: "2026-07-15",
    author: { "@type": "Organization", name: "BizMetricsHQ" },
    publisher: { "@type": "Organization", name: "BizMetricsHQ" },
  };

  const faqJsonLd =
    faqEntities.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities,
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Header />
      <main>
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/franchise/" className="hover:text-accent">
                Franchise Economics
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href={guideHref} className="hover:text-accent">
                {industryNavLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Rankings</span>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Franchise Rankings · {meta.readTime} read · {meta.dataVintage}
            </p>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{meta.subtitle}</p>
            <p className="mt-4 text-sm text-ink-faint">
              Published {meta.published} · Consultant-style guidance for franchise buyers and multi-unit operators
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${guideHref}#compare-brands`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Compare Franchise Brands
              </Link>
              <Link
                href={`${guideHref}#calculators`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Open Calculators
              </Link>
            </div>
          </div>
        </section>

        <div className="sticky top-16 z-30 border-b border-border/60 bg-surface/95 backdrop-blur-md">
          <div className="mx-auto max-w-3xl overflow-x-auto px-4 sm:px-6">
            <nav aria-label="Report sections" className="flex gap-1 py-2.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <article className="bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <IndustryReportContent sections={sections} />
          </div>
        </article>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink">{siblingsHeading}</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Continue research with related rankings franchise buyers use before purchasing.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {siblingRankings.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={sibling.href}
                    className="card-interactive block rounded-2xl border border-border bg-surface px-4 py-4 text-sm font-medium text-ink hover:text-accent"
                  >
                    {sibling.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{finalCtaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">
              Sources referenced: {meta.sources.join(" · ")}. Figures are directional for planning — verify current FDDs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={`${guideHref}#rankings`}
                className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                ← All Franchise Rankings
              </Link>
              <Link
                href={guideHref}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {guideLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  hairSalonFranchiseQuestions,
  hairSalonFranchiseQuestionsBySlug,
  hairSalonFranchiseQuestionSlugs,
} from "@/lib/franchise/beauty/hair-salon-questions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hairSalonFranchiseQuestionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = hairSalonFranchiseQuestionsBySlug[slug];
  if (!item) return { title: "Question Not Found | BizMetricsHQ" };

  return {
    title: `${item.question} | Hair Salon Franchise | BizMetricsHQ`,
    description: item.description,
    keywords: [...item.keywords],
  };
}

export default async function HairSalonFranchiseQuestionPage({ params }: PageProps) {
  const { slug } = await params;
  const item = hairSalonFranchiseQuestionsBySlug[slug];
  if (!item) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      },
    ],
  };

  const related = hairSalonFranchiseQuestions.filter((q) => q.slug !== slug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
              <Link href="/franchise/beauty/hair-salon/" className="hover:text-accent">
                Hair Salon Franchise
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Business Questions</span>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Franchise Financial Analysis · 2025–2026
            </p>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {item.question}
            </h1>
          </div>
        </section>

        <article className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="rounded-2xl border border-border bg-surface-muted/30 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">Analyst Answer</p>
              <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{item.answer}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/franchise/beauty/hair-salon/#compare-brands"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Compare Franchise Brands
              </Link>
              <Link
                href="/franchise/beauty/hair-salon/#calculators"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Franchise Calculators
              </Link>
            </div>
          </div>
        </article>

        <section className="bg-surface-muted/50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink">Related Business Questions</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {related.map((q) => (
                <li key={q.slug}>
                  <Link
                    href={q.href}
                    className="card-interactive block rounded-2xl border border-border bg-surface px-4 py-4 text-sm font-medium text-ink hover:text-accent"
                  >
                    {q.question}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/franchise/beauty/hair-salon/#questions"
              className="mt-8 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              ← All business questions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  brandDisplayNames,
  brandSlugs,
  franchisePageMeta,
} from "@/lib/franchise/beauty/hair-salon-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return brandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = brandDisplayNames[slug as (typeof brandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ hair salon franchise guide.`,
  };
}

export default async function HairSalonFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = brandDisplayNames[slug as (typeof brandSlugs)[number]];
  if (!name) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
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
              <Link href="/franchise/beauty/hair-salon/" className="hover:text-accent">
                Hair Salon
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">{name}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Brand profile · Coming soon · {franchisePageMeta.dataVintage}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {name} Franchise Profile
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
              Full FDD-style coverage of franchise fee, total investment, royalties, unit economics, and owner income
              for {name} is coming soon.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/franchise/beauty/hair-salon/#compare-brands"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Back to Brand Comparison
              </Link>
              <Link
                href="/franchise/beauty/hair-salon/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Hair Salon Franchise Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

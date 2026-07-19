import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Props = {
  brandName: string;
  industryLabel: string;
  guideHref: string;
  guideLabel: string;
  dataVintage?: string;
};

export function FranchiseBrandStubPage({
  brandName,
  industryLabel,
  guideHref,
  guideLabel,
  dataVintage = "2025–2026",
}: Props) {
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
              <Link href={guideHref} className="hover:text-accent">
                {industryLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">{brandName}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Brand profile · Coming soon · {dataVintage}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {brandName} Franchise Profile
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
              Full coverage of franchise fee, total investment, royalties, unit economics, and owner income for {brandName}{" "}
              is coming soon.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={`${guideHref}#compare-brands`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Back to Brand Comparison
              </Link>
              <Link
                href={guideHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
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

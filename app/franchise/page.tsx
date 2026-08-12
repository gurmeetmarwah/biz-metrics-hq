import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FranchiseCategoryIcon } from "@/components/icons/FranchiseCategoryIcon";
import {
  franchiseBrowseCards,
  franchiseCategories,
  franchiseHeroTopics,
  franchiseHubMeta,
} from "@/lib/franchise/franchise-hub-data";

export const metadata: Metadata = {
  title: `${franchiseHubMeta.title} | BizMetricsHQ`,
  description: franchiseHubMeta.subtitle,
  keywords: [
    "franchise economics",
    "franchise costs",
    "franchise fees",
    "franchise royalties",
    "restaurant franchise",
    "fast food franchise",
    "gym franchise",
    "franchise ROI",
    "franchise owner salary",
  ],
};

export default function FranchiseHubPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-mesh relative border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Franchise Economics</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Franchise Intelligence · {franchiseHubMeta.dataVintage}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {franchiseHubMeta.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {franchiseHeroTopics.join(" · ")}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {franchiseHubMeta.subtitle}
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Browse by Industry
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">
              Primary navigation into franchise economics — select an industry to explore franchise types and benchmarks.
            </p>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {franchiseBrowseCards.map((card) => {
                const category = franchiseCategories.find((c) => c.id === card.id);
                if (!category) return null;

                return (
                  <li key={card.id}>
                    <a
                      href={card.href}
                      className="card-interactive group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-5"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                        <FranchiseCategoryIcon type={category.icon} className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-display font-semibold text-ink transition-colors group-hover:text-accent">
                          {card.label}
                        </p>
                        <p className="mt-1 text-sm text-ink-muted">{card.count} franchise types</p>
                      </div>
                      <svg
                        className="size-4 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {franchiseCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`border-b border-border/60 ${index % 2 === 1 ? "bg-surface-muted/50" : "bg-surface"}`}
          >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <FranchiseCategoryIcon type={category.icon} className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {category.name} Franchises
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">{category.description}</p>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.franchises.map((item) => (
                  <li key={item.slug}>
                    {item.comingSoon ? (
                      <div
                        aria-disabled="true"
                        className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4"
                      >
                        <span className="font-medium text-ink">{item.label}</span>
                        <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
                          Coming soon
                        </span>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="card-interactive group flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4"
                      >
                        <span className="font-medium text-ink transition-colors group-hover:text-accent">
                          {item.label}
                        </span>
                        <svg
                          className="size-4 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Compare franchise costs, ROI, and owner income
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
              Start with restaurant and fast food franchise economics, then expand into fitness, beauty, and home
              services benchmarks.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/franchise/food/restaurant-franchise/"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Restaurant Franchise Costs
              </Link>
              <Link
                href="/franchise/food/restaurant-franchise/fast-food/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Fast Food Franchise Guide
              </Link>
              <Link
                href="/comparisons/hair-salon-vs-franchise-salon/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Hair Salon vs Franchise Salon
              </Link>
              <Link
                href="/industries/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Browse Industries
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

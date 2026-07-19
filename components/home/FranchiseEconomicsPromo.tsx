import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { franchiseBrowseCards, franchiseHubMeta } from "@/lib/franchise/franchise-hub-data";
import { FranchiseCategoryIcon } from "@/components/icons/FranchiseCategoryIcon";
import { franchiseCategories } from "@/lib/franchise/franchise-hub-data";

export function FranchiseEconomicsPromo() {
  return (
    <section
      aria-labelledby="franchise-economics-heading"
      className="border-b border-border/60 bg-surface-muted/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">Business Model</p>
              <h2
                id="franchise-economics-heading"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              >
                Franchise Economics
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                Explore franchise startup costs, ROI, profit margins, owner earnings, valuation, and benchmarks —
                organized by industry, not just business type.
              </p>
              <Link
                href="/franchise/"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Explore Franchise Hub
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
              {franchiseBrowseCards.map((card) => {
                const category = franchiseCategories.find((c) => c.id === card.id);
                return (
                  <li key={card.id}>
                    <Link
                      href={`/franchise/#${card.id}`}
                      className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-4"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                        {category && <FranchiseCategoryIcon type={category.icon} className="size-[18px]" />}
                      </span>
                      <span className="mt-3 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                        {card.label}
                      </span>
                      <span className="mt-1 text-xs text-ink-faint">{card.count} franchises</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimateIn>
        <p className="mt-8 text-center text-xs text-ink-faint">{franchiseHubMeta.dataVintage} · Franchise benchmarks rolling out by category</p>
      </div>
    </section>
  );
}

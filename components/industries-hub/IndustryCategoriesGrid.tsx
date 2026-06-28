import Link from "next/link";
import { industryHubCategories } from "@/lib/industries-hub";

export function IndustryCategoriesGrid() {
  return (
    <div className="space-y-8">
      {industryHubCategories.map((category) => (
        <article
          key={category.name}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div
            className="border-b border-border-subtle px-5 py-4 sm:px-6"
            style={{
              background: `color-mix(in srgb, ${category.accent} 6%, transparent)`,
            }}
          >
            <h3 className="font-display text-lg font-semibold text-ink">{category.name}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">
              {category.industries.filter((i) => !i.comingSoon).length} benchmarks live
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
            {category.industries.map((industry) => (
              <li key={industry.label}>
                {industry.comingSoon ? (
                  <div className="flex h-full min-h-[4.5rem] flex-col justify-center bg-surface px-4 py-4">
                    <span className="text-sm font-medium text-ink">{industry.label}</span>
                    <span className="mt-1 text-[11px] font-semibold text-ink-faint">Coming soon</span>
                  </div>
                ) : (
                  <Link
                    href={industry.href}
                    className="card-interactive group flex h-full min-h-[4.5rem] flex-col justify-center bg-surface px-4 py-4 transition-colors hover:bg-accent-soft/30"
                  >
                    <span className="text-sm font-medium text-ink group-hover:text-accent">
                      {industry.label}
                    </span>
                    <span className="mt-1 text-[11px] font-medium text-ink-faint opacity-0 transition-opacity group-hover:opacity-100">
                      View benchmarks →
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

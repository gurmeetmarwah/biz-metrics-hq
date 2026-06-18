import Link from "next/link";
import { industryCategories } from "@/lib/data";
import {
  categoryStyles,
  slugFromHref,
  type CategoryKey,
} from "@/lib/industry-styles";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryIcon } from "@/components/icons/IndustryIcon";
import { CategoryIcon } from "@/components/icons/CategoryIcon";

function getCategoryKey(name: string): CategoryKey {
  if (name === "Food & Beverage") return "food";
  if (name === "Healthcare") return "healthcare";
  return "home-services";
}

export function BrowseIndustries() {
  return (
    <section
      aria-labelledby="browse-industries-heading"
      className="border-b border-border/60 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="browse-industries-heading"
            title="Browse Industries"
            subtitle="Explore benchmarks by sector — food & beverage, healthcare, and home services."
          />
        </AnimateIn>

        <div className="mt-12 space-y-12">
          {industryCategories.map((category, catIndex) => {
            const key = getCategoryKey(category.name);
            const style = categoryStyles[key];

            return (
              <AnimateIn key={category.name} delay={catIndex * 100}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${style.accentClass}`}
                      style={{
                        background:
                          "color-mix(in srgb, var(--card-accent) 10%, transparent)",
                        color: "var(--card-accent)",
                      }}
                    >
                      <CategoryIcon type={style.icon} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                        {category.name}
                      </h3>
                      <p className="text-sm text-ink-faint">
                        {category.industries.length} industries
                      </p>
                    </div>
                    <div
                      className={`ml-auto hidden h-0.5 w-10 rounded-full sm:block ${style.accentClass}`}
                      style={{ background: "var(--card-accent)" }}
                      aria-hidden="true"
                    />
                  </div>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                    {category.industries.map((industry, index) => {
                      const slug = slugFromHref(industry.href);
                      const cardClass = `${style.accentClass} relative flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-surface px-4 py-4 sm:gap-4 sm:px-5 sm:py-5`;

                      return (
                        <li key={industry.label}>
                          {"comingSoon" in industry && industry.comingSoon ? (
                            <div
                              aria-disabled="true"
                              className={cardClass}
                              style={{ animationDelay: `${index * 40}ms` }}
                            >
                              <div
                                className="absolute top-0 left-0 h-full w-1 rounded-l-2xl opacity-50"
                                style={{ background: "var(--card-accent)" }}
                                aria-hidden="true"
                              />
                              <span
                                className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                                style={{
                                  background:
                                    "color-mix(in srgb, var(--card-accent) 10%, transparent)",
                                  color: "var(--card-accent)",
                                }}
                              >
                                <IndustryIcon slug={slug} className="size-[18px]" />
                              </span>
                              <span className="min-w-0 flex-1 text-sm leading-snug font-medium text-ink">
                                {industry.label}
                              </span>
                              <span className="shrink-0 rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-ink-muted">
                                Coming soon
                              </span>
                            </div>
                          ) : (
                            <Link
                              href={industry.href}
                              className={`card-interactive group ${cardClass}`}
                              style={{
                                animationDelay: `${index * 40}ms`,
                              }}
                            >
                              <div
                                className="absolute top-0 left-0 h-full w-1 rounded-l-2xl"
                                style={{ background: "var(--card-accent)" }}
                                aria-hidden="true"
                              />
                              <span
                                className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200"
                                style={{
                                  background:
                                    "color-mix(in srgb, var(--card-accent) 10%, transparent)",
                                  color: "var(--card-accent)",
                                }}
                              >
                                <IndustryIcon slug={slug} className="size-[18px]" />
                              </span>
                              <span className="min-w-0 flex-1 text-sm leading-snug font-medium text-ink transition-colors duration-200 group-hover:text-[var(--card-accent)]">
                                {industry.label}
                              </span>
                              <svg
                                className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--card-accent)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

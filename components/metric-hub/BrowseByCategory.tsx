import Link from "next/link";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";

export function ComparisonLinkGrid({ items }: { items: readonly { label: string; href: string }[] }) {
  return <LinkCardGrid items={items} columns={2} />;
}

type BrowseCategory = {
  name: string;
  industries: readonly ({ label: string; href: string } | { label: string; comingSoon: true })[];
};

export function BrowseByCategory({ categories }: { categories: readonly BrowseCategory[] }) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="font-display text-base font-semibold text-ink sm:text-lg">{category.name}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {category.industries.map((industry) => (
              <li key={industry.label}>
                {"comingSoon" in industry && industry.comingSoon ? (
                  <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-surface px-4 py-3.5">
                    <span className="text-sm font-medium text-ink">{industry.label}</span>
                    <span className="shrink-0 rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-ink-muted">
                      Coming soon
                    </span>
                  </div>
                ) : (
                  <Link
                    href={"href" in industry ? industry.href : "#"}
                    className="card-interactive block rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-ink hover:text-accent"
                  >
                    {industry.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

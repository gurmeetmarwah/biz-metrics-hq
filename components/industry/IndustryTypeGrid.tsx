import Link from "next/link";

type TypeItem = {
  label: string;
  href?: string;
  comingSoon?: boolean;
};

export function IndustryTypeGrid({ items }: { items: readonly TypeItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.label}>
          {item.comingSoon ? (
            <div
              aria-disabled="true"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="font-display font-semibold text-ink">{item.label}</span>
              <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
                Coming soon
              </span>
            </div>
          ) : (
            <Link
              href={item.href ?? "#"}
              className="card-interactive group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="font-display font-semibold text-ink transition-colors group-hover:text-accent">
                {item.label}
              </span>
              <span className="shrink-0 text-xs font-semibold text-accent">
                Economics & Benchmarks →
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

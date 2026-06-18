import Link from "next/link";

type Item = { label: string; href?: string; comingSoon?: boolean };

type LinkCardGridProps = {
  items: readonly Item[];
  columns?: 2 | 3 | 4 | 5;
};

export function LinkCardGrid({ items, columns = 2 }: LinkCardGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  }[columns];

  return (
    <ul className={`grid grid-cols-1 gap-3 ${colClass}`}>
      {items.map((item) => (
        <li key={item.label}>
          {item.comingSoon ? (
            <div
              aria-disabled="true"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="font-medium text-ink">{item.label}</span>
              <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
                Coming soon
              </span>
            </div>
          ) : (
            <Link
              href={item.href ?? "#"}
              className="card-interactive group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5"
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
  );
}

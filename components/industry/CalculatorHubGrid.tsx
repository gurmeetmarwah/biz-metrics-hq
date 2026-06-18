import Link from "next/link";

type CalculatorItem = {
  label: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export function CalculatorHubGrid({ items }: { items: readonly CalculatorItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.label}>
          {item.comingSoon ? (
            <div
              aria-disabled="true"
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display font-semibold text-ink">{item.label}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{item.description}</p>
              <span className="mt-4 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
                Coming soon
              </span>
            </div>
          ) : (
            <Link
              href={item.href ?? "#"}
              className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display font-semibold text-ink transition-colors group-hover:text-accent">
                {item.label}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Open calculator
                <svg
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

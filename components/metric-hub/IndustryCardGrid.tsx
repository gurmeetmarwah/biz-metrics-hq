import Link from "next/link";

type IndustryCard = {
  label: string;
  href: string;
  median?: string;
  note?: string;
};

export function IndustryCardGrid({ items }: { items: readonly IndustryCard[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <span className="font-display font-semibold text-ink transition-colors group-hover:text-accent">
              {item.label}
            </span>
            {item.median && (
              <span className="mt-2 text-2xl font-bold tabular-nums text-metric-revenue">{item.median}</span>
            )}
            {item.note && (
              <span className="mt-2 text-sm text-ink-muted">{item.note}</span>
            )}
            <span className="mt-auto pt-4 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              View benchmarks →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

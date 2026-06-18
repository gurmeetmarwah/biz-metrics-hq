import Link from "next/link";

type Insight = {
  title: string;
  href: string;
  metric: string;
};

export function FeaturedInsights({ items }: { items: readonly Insight[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-xs font-semibold tracking-wider text-accent uppercase">
              Featured Report
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-auto pt-4 text-sm font-semibold tabular-nums text-ink-muted">
              {item.metric}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

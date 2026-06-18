import Link from "next/link";

type BenchmarkCard = {
  label: string;
  value: string;
  href: string;
};

type BenchmarkGroup = {
  title: string;
  cards: readonly BenchmarkCard[];
};

export function RevenueBenchmarkCenter({ groups }: { groups: readonly BenchmarkGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {group.cards.map((card) => (
              <li key={card.label}>
                <Link
                  href={card.href}
                  className="card-interactive block rounded-xl border border-border bg-surface px-5 py-4"
                >
                  <p className="text-sm font-medium text-ink-muted">{card.label}</p>
                  <p className="mt-1 text-lg font-bold tabular-nums text-ink">{card.value}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

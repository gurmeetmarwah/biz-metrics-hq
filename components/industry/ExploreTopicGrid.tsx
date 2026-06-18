import Link from "next/link";

type ExploreTopic = {
  id: string;
  title: string;
  subtitle: string;
  topics: readonly string[];
  href: string;
  accent: string;
  buttonLabel?: string;
};

const accentMap: Record<string, string> = {
  "metric-revenue": "var(--metric-revenue)",
  "metric-margin": "var(--metric-margin)",
  "metric-salary": "var(--metric-salary)",
  "metric-valuation": "var(--metric-valuation)",
};

export function ExploreTopicGrid({ topics }: { topics: readonly ExploreTopic[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <li key={topic.id}>
          <article className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
            <div
              className="mb-4 h-1 w-10 rounded-full"
              style={{ background: accentMap[topic.accent] }}
              aria-hidden="true"
            />
            <h3 className="font-display text-lg font-semibold text-ink">{topic.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{topic.subtitle}</p>
            <ul className="mt-4 flex-1 space-y-1.5">
              {topic.topics.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-ink-muted">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-ink-faint"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href={topic.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {topic.buttonLabel ?? "Explore →"}
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import { businessQualityRankings } from "@/lib/industries-hub";

export function BusinessQualityRankings() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {businessQualityRankings.map((ranking) => (
        <li key={ranking.label}>
          <Link
            href={ranking.href}
            className="card-interactive group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6"
          >
            <div
              className="absolute top-0 left-0 h-full w-1"
              style={{ background: ranking.accent }}
              aria-hidden="true"
            />
            <h3 className="font-display text-base font-semibold text-ink">{ranking.label}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{ranking.description}</p>
            <span className="mt-4 text-sm font-semibold" style={{ color: ranking.accent }}>
              View ranking →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import { industryInsights } from "@/lib/industries-hub";

export function IndustryInsightsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {industryInsights.map((insight) => (
        <li key={insight.title}>
          <Link
            href={insight.href}
            className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <span className="w-fit rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
              {insight.tag}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-accent">
              {insight.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{insight.description}</p>
            <span className="mt-4 text-sm font-semibold text-accent">Read intelligence →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

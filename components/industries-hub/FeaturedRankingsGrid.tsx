import { HashLink } from "@/components/ui/HashLink";
import { featuredRankings } from "@/lib/industries-hub";

const icons: Record<string, React.ReactNode> = {
  margin: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" />
    </svg>
  ),
  valuation: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  recurring: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
    </svg>
  ),
  shield: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  startup: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.242 0l.879.659Z" />
    </svg>
  ),
};

export function FeaturedRankingsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {featuredRankings.map((ranking) => (
        <li key={ranking.title}>
          <HashLink
            href={ranking.href}
            className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
          >
            <span
              className="flex size-10 items-center justify-center rounded-xl"
              style={{
                background: `color-mix(in srgb, ${ranking.accent} 12%, transparent)`,
                color: ranking.accent,
              }}
            >
              {icons[ranking.icon]}
            </span>
            <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-ink transition-colors group-hover:opacity-90">
              {ranking.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted">{ranking.description}</p>
            <span className="mt-4 text-xs font-semibold" style={{ color: ranking.accent }}>
              View rankings →
            </span>
          </HashLink>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import { SiteSearch } from "@/components/ui/SiteSearch";

type MetricHubHeroProps = {
  title: string;
  subtitle: string;
  currentPage: string;
  dataVintage: string;
  sampleSize: string;
  searchPlaceholder: string;
  quickLinks: readonly { label: string; href: string }[];
  accent?: "revenue" | "margin" | "valuation" | "calculator";
};

const accentColors = {
  revenue: "var(--metric-revenue)",
  margin: "var(--metric-margin)",
  valuation: "var(--metric-valuation)",
  calculator: "var(--accent)",
};

export function MetricHubHero({
  title,
  subtitle,
  currentPage,
  dataVintage,
  sampleSize,
  searchPlaceholder,
  quickLinks,
  accent = "revenue",
}: MetricHubHeroProps) {
  const color = accentColors[accent];

  return (
    <section className="hero-mesh border-b border-border/60">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-ink-muted">{currentPage}</span>
        </nav>

        <p
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted"
        >
          <span className="size-1.5 rounded-full" style={{ background: color }} />
          Industry intelligence · {dataVintage} · {sampleSize}
        </p>

        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>

        <div className="relative z-10 mx-auto mt-8 max-w-lg">
          <SiteSearch
            placeholder={searchPlaceholder}
            size="large"
            variant="hero"
            label={`Search ${currentPage.toLowerCase()}`}
          />
        </div>
        <div className="relative z-0 mt-4 flex flex-wrap justify-center gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted transition-colors hover:border-accent/30 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

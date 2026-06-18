import Link from "next/link";
import { SiteSearch } from "@/components/ui/SiteSearch";

type IndustryHeroProps = {
  title: string;
  subtitle: string;
  popular: readonly { label: string; href: string }[];
};

export function IndustryHero({ title, subtitle, popular }: IndustryHeroProps) {
  return (
    <section className="hero-mesh border-b border-border/60">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link href="/industries/" className="hover:text-accent">
            Industries
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink-muted">{title.replace(" Industry Benchmarks", "")}</span>
        </nav>

        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>

        <div className="relative z-10 mx-auto mt-8 max-w-lg">
          <SiteSearch
            size="large"
            variant="hero"
            placeholder="Search another industry..."
            label="Search for another industry"
          />
        </div>

        <div className="relative z-0 mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-ink-muted">Examples:</span>
          {popular.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="chip rounded-full border border-border bg-surface px-3.5 py-1 text-sm font-medium text-ink-muted hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

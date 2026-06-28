import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { SearchInput } from "@/components/ui/SearchInput";

type CoffeeShopHubHeroProps = {
  title: string;
  subtitle: string;
  parentLabel: string;
  parentHref: string;
  dataVintage: string;
  sampleSize: string;
  searchQuickLinks: readonly { label: string; href: string }[];
};

export function CoffeeShopHubHero({
  title,
  subtitle,
  parentLabel,
  parentHref,
  dataVintage,
  sampleSize,
  searchQuickLinks,
}: CoffeeShopHubHeroProps) {
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
          <Link href={parentHref} className="hover:text-accent">
            {parentLabel}
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink-muted">Coffee Shop</span>
        </nav>

        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          Industry data hub · {dataVintage} · {sampleSize}
        </p>

        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>

        <div className="mx-auto mt-8 max-w-lg">
          <SearchInput
            size="large"
            variant="hero"
            placeholder="Search coffee shop metrics..."
            label="Search coffee shop metrics"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          {searchQuickLinks.map((item) => (
            <HashLink
              key={item.label}
              href={item.href}
              className="chip rounded-full border border-border bg-surface px-3.5 py-1 font-medium text-ink-muted hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </HashLink>
          ))}
        </div>
      </div>
    </section>
  );
}

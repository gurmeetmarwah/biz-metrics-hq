import Link from "next/link";
import { SiteSearch } from "@/components/ui/SiteSearch";
import { industriesHubMeta, industriesHubQuickLinks } from "@/lib/industries-hub";

export function IndustriesHubHero() {
  return (
    <section className="hero-mesh relative border-b border-border/60">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink-muted">Industries</span>
        </nav>

        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Industry Intelligence Directory · {industriesHubMeta.dataVintage}
        </p>

        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {industriesHubMeta.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {industriesHubMeta.subtitle}
        </p>

        <div className="relative z-10 mx-auto mt-8 max-w-xl">
          <SiteSearch
            placeholder="Search Industry..."
            size="large"
            variant="hero"
            label="Search industries"
          />
        </div>

        <div className="relative z-0 mt-6 flex flex-wrap items-center justify-center gap-2">
          {industriesHubQuickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="chip rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink-muted hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

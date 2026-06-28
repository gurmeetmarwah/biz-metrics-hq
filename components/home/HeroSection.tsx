import Link from "next/link";
import { platformStats } from "@/lib/platform-stats.server";
import { popularIndustries } from "@/lib/data";
import { SiteSearch } from "@/components/ui/SiteSearch";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-mesh relative border-b border-border/60"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="hero-fade-up hero-fade-up-delay-1 mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-metric-revenue" aria-hidden="true" />
          Ranges & medians · published methodology
        </p>

        <h1
          id="hero-heading"
          className="hero-fade-up hero-fade-up-delay-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl sm:leading-[1.15]"
        >
          Business Benchmarks{" "}
          <span className="bg-gradient-to-r from-accent to-metric-revenue bg-clip-text text-transparent">
            For Entrepreneurs
          </span>
        </h1>

        <p className="hero-fade-up hero-fade-up-delay-3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Interquartile ranges for revenue, margins, owner salaries, and
          valuation multiples across {platformStats.industries} industries and{" "}
          {platformStats.dataPages} data pages
        </p>

        <div className="hero-fade-up hero-fade-up-delay-4 relative z-10 mx-auto mt-10 max-w-xl">
          <SiteSearch
            size="large"
            variant="hero"
            label="Search for an industry"
            placeholder="Search industries, calculators..."
          />
          <p className="mt-3 text-xs text-ink-faint">
            Try &ldquo;HVAC&rdquo;, &ldquo;Dental&rdquo;, or &ldquo;Restaurant&rdquo;
          </p>
        </div>

        <div className="hero-fade-up hero-fade-up-delay-4 relative z-0 mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-medium text-ink-muted">Popular:</span>
          {popularIndustries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="chip rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink-muted hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
            >
              {industry.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

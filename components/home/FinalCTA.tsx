import { platformStats } from "@/lib/platform-stats.server";
import { SearchInput } from "@/components/ui/SearchInput";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="cta-gradient relative"
    >
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <AnimateIn>
          <h2
            id="final-cta-heading"
            className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Find Your Industry Benchmarks
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/60">
            Search {platformStats.benchmarks} benchmarks across {platformStats.dataPages}{" "}
            data pages — revenue, margin, salary, and valuation ranges with sources
            and sample sizes disclosed.
          </p>
        </AnimateIn>

        <AnimateIn delay={150} className="mx-auto mt-10 max-w-xl">
          <SearchInput
            size="large"
            variant="dark"
            placeholder="Search Industry..."
            label="Search for your industry benchmarks"
          />
        </AnimateIn>
      </div>
    </section>
  );
}

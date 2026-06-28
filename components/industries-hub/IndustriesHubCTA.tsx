import { HashLink } from "@/components/ui/HashLink";
import Link from "next/link";

import { platformStats } from "@/lib/platform-stats.server";

export function IndustriesHubCTA() {
  return (
    <section className="cta-gradient relative">
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Explore Industry Benchmarks
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
          Compare {platformStats.industries} industries across revenue, profit margins, salaries
          and valuation multiples.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <HashLink
            href="#categories"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Browse Industries
          </HashLink>
          <Link
            href="/methodology/"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Our Methodology
          </Link>
        </div>
      </div>
    </section>
  );
}

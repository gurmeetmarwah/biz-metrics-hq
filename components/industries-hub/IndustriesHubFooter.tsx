import Link from "next/link";
import { popularIndustriesFooter } from "@/lib/industries-hub";

export function IndustriesHubFooter() {
  return (
    <section className="border-t border-border/60 bg-surface-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-lg font-semibold text-ink">Popular Industries</h2>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {popularIndustriesFooter.map((industry) => (
            <li key={industry.label}>
              {"comingSoon" in industry && industry.comingSoon ? (
                <span className="block text-sm text-ink-faint">{industry.label}</span>
              ) : (
                <Link
                  href={industry.href}
                  className="block text-sm font-medium text-ink-muted transition-colors hover:text-accent"
                >
                  {industry.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

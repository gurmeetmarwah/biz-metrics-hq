import Link from "next/link";
import { calculators } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const calcIcons = ["%", "×", "—", "÷"];

export function Calculators() {
  return (
    <section aria-labelledby="calculators-heading" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="calculators-heading"
            title="Calculators"
            subtitle="Run the numbers on profit, valuation, break-even, and more."
          />
        </AnimateIn>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {calculators.map((calculator, index) => (
            <AnimateIn key={calculator.href} delay={index * 80}>
              <li>
                <Link
                  href={calculator.href}
                  className="card-interactive group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-5 sm:px-6 sm:py-6"
                >
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted font-mono text-sm font-bold text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white"
                    aria-hidden="true"
                  >
                    {calcIcons[index]}
                  </span>
                  <span className="font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                    {calculator.label}
                  </span>
                  <svg
                    className="ml-auto size-4 shrink-0 text-ink-faint opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { IndustryFaq } from "@/components/industry/IndustryFaq";

export function MartialArtsCalculatorFooter({
  relatedTools,
  dataLinks,
  faqs,
}: {
  relatedTools: readonly { label: string; href: string; description: string }[];
  dataLinks: readonly { label: string; href: string; description: string }[];
  faqs: readonly { question: string; answer: string }[];
}) {
  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Related Martial Arts Data</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dataLinks.map((link) => (
              <li key={link.href}>
                <HashLink href={link.href} prefetch={false} className="card-interactive block rounded-2xl border border-border bg-surface p-5">
                  <span className="font-semibold text-ink">{link.label}</span>
                  <p className="mt-1 text-sm text-ink-muted">{link.description}</p>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Related Tools</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedTools.map((calc) => (
              <li key={calc.href}>
                <Link href={calc.href} prefetch={false} className="card-interactive block rounded-2xl border border-border bg-surface p-5">
                  <span className="font-semibold text-ink">{calc.label}</span>
                  <p className="mt-1 text-sm text-ink-muted">{calc.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Frequently Asked Questions</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8"><IndustryFaq faqs={faqs} /></div>
        </div>
      </section>
    </>
  );
}

const numberInputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10";

export function MartialArtsNumberInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  tooltip,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      {tooltip && <span className="ml-1 text-xs text-ink-faint">({tooltip})</span>}
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className={numberInputClass}
      />
    </label>
  );
}

export { numberInputClass };

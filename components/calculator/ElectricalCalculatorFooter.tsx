import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { IndustryFaq } from "@/components/industry/IndustryFaq";

export function ElectricalCalculatorFooter({
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
          <h2 className="font-display text-xl font-semibold text-ink">Related Electrical Data</h2>
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
                <Link href={calc.href} className="card-interactive block rounded-2xl border border-border bg-surface p-5">
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

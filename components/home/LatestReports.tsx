import Link from "next/link";
import { reports } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LatestReports() {
  return (
    <section aria-labelledby="reports-heading" className="border-b border-border/60 bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <SectionHeading
            id="reports-heading"
            title="Latest Industry Reports"
            subtitle="In-depth economics research — not blog posts."
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <ul className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            {reports.map((report, index) => (
              <li key={report.href}>
                <Link
                  href={report.href}
                  className={`group flex items-center justify-between gap-4 px-5 py-5 transition-colors duration-200 hover:bg-accent-soft/40 sm:px-6 sm:py-5 ${
                    index < reports.length - 1 ? "border-b border-border-subtle" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="hidden size-9 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-ink-faint transition-colors duration-200 group-hover:bg-accent group-hover:text-white sm:flex"
                      aria-hidden="true"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </span>
                    <span className="font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                      {report.title}
                    </span>
                  </div>
                  <svg
                    className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
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
            ))}
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}

import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="flex size-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white"
                aria-hidden="true"
              >
                B
              </span>
              <p className="font-display text-sm font-semibold text-ink">
                BizMetricsHQ
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Transparent business benchmarks with published ranges, sample
              sizes, and methodology.
            </p>
            <Link
              href="/methodology/"
              className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
            >
              How we calculate benchmarks →
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-semibold tracking-wider text-ink-faint uppercase">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border-subtle pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} BizMetricsHQ. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Built for entrepreneurs who run the numbers.
          </p>
        </div>
      </div>
    </footer>
  );
}

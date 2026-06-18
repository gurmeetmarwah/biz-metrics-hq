"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { SiteSearch } from "@/components/ui/SiteSearch";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-surface/90 shadow-sm shadow-ink/[0.04] backdrop-blur-md"
          : "border-transparent bg-surface/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
          >
            <span
              className="flex size-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            >
              B
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              BizMetricsHQ
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileSearchOpen((open) => !open)}
              className="rounded-xl p-2.5 text-ink-muted transition-all duration-200 hover:bg-surface-muted hover:text-ink lg:hidden"
              aria-label="Toggle search"
              aria-expanded={mobileSearchOpen}
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <div className="hidden w-52 lg:block">
              <SiteSearch placeholder="Search" />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-xl p-2.5 text-ink-muted transition-all duration-200 hover:bg-surface-muted hover:text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="menu-slide-in border-t border-border-subtle py-3 lg:hidden">
            <SiteSearch
              placeholder="Search industries, calculators..."
              onNavigate={() => setMobileSearchOpen(false)}
            />
          </div>
        )}

        {mobileMenuOpen && (
          <nav
            className="menu-slide-in border-t border-border-subtle py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

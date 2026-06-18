"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  searchCategoryLabels,
  searchSite,
  type SiteSearchItem,
} from "@/lib/search/site-search";

type SiteSearchProps = {
  placeholder?: string;
  size?: "default" | "large";
  label?: string;
  className?: string;
  variant?: "default" | "hero" | "dark";
  onNavigate?: () => void;
};

export function SiteSearch({
  placeholder = "Search industries, calculators...",
  size = "default",
  label = "Search site",
  className = "",
  variant = "default",
  onNavigate,
}: SiteSearchProps) {
  const id = useId();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SiteSearchItem[]>([]);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isLarge = size === "large";
  const isHero = variant === "hero";
  const isDark = variant === "dark";

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    setResults(searchSite(query));
    setActiveIndex(-1);
  }, [query]);

  const navigateTo = useCallback(
    (href: string) => {
      setQuery("");
      setResults([]);
      setOpen(false);
      setFocused(false);
      inputRef.current?.blur();
      onNavigate?.();
      router.push(href);
    },
    [router, onNavigate],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateTo(results[activeIndex].href);
      return;
    }
    if (results[0]) {
      navigateTo(results[0].href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i < results.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i > 0 ? i - 1 : results.length - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div
      ref={containerRef}
      className={`relative ${showDropdown ? "z-50" : "z-0"} ${className}`}
    >
      <form role="search" onSubmit={handleSubmit}>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <div
          className={`relative rounded-2xl transition-all duration-300 ${
            isHero && !focused ? "search-hero-glow" : ""
          } ${focused ? (isDark ? "ring-4 ring-white/20" : "ring-4 ring-accent/15") : ""}`}
        >
          <svg
            className={`pointer-events-none absolute text-ink-faint transition-colors duration-200 ${
              focused ? "text-accent" : ""
            } ${isLarge ? "top-5 left-5 size-5" : "top-1/2 left-4 size-4 -translate-y-1/2"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            ref={inputRef}
            id={id}
            type="search"
            name="q"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              setFocused(true);
              if (query.trim()) setOpen(true);
            }}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls={`${id}-listbox`}
            aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
            className={`w-full rounded-2xl border text-ink transition-all duration-200 placeholder:text-ink-faint focus:outline-none ${
              isDark
                ? "border-white/10 bg-white/95 shadow-xl shadow-black/20 focus:border-white/30 focus:bg-white"
                : isHero
                  ? "border-border bg-surface shadow-lg shadow-ink/[0.06] focus:border-accent focus:shadow-xl focus:shadow-accent/10"
                  : "border-border bg-surface shadow-sm focus:border-accent focus:shadow-md focus:shadow-accent/8"
            } ${
              isLarge
                ? "py-4 pr-5 pl-12 text-base sm:py-[1.125rem] sm:pl-[3.25rem] sm:text-lg"
                : "py-2.5 pr-4 pl-11 text-sm"
            }`}
          />
        </div>
      </form>

      {showDropdown && (
        <div
          id={`${id}-listbox`}
          role="listbox"
          className={`absolute z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-ink/10 ${
            isLarge ? "left-0 right-0" : "right-0 w-[min(100vw-2rem,22rem)] sm:w-80"
          }`}
        >
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map((result, index) => (
                <li key={result.href} role="presentation">
                  <button
                    id={`${id}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => navigateTo(result.href)}
                    className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                      index === activeIndex ? "bg-accent-soft text-ink" : "text-ink hover:bg-surface-muted"
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{result.label}</span>
                      <span className="mt-0.5 block text-xs text-ink-faint">
                        {searchCategoryLabels[result.category]}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-6 text-center text-sm text-ink-muted">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      )}
    </div>
  );
}

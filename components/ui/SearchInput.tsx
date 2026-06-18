"use client";

import { useId, useState } from "react";

type SearchInputProps = {
  placeholder?: string;
  size?: "default" | "large";
  label?: string;
  className?: string;
  variant?: "default" | "hero" | "dark";
};

export function SearchInput({
  placeholder = "Search Industry...",
  size = "default",
  label,
  className = "",
  variant = "default",
}: SearchInputProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  const isLarge = size === "large";
  const isHero = variant === "hero";
  const isDark = variant === "dark";

  return (
    <form
      role="search"
      className={className}
      onSubmit={(e) => e.preventDefault()}
    >
      {label && (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <div
        className={`relative rounded-2xl transition-all duration-300 ${
          isHero && !focused ? "search-hero-glow" : ""
        } ${
          focused
            ? isDark
              ? "ring-4 ring-white/20"
              : "ring-4 ring-accent/15"
            : ""
        }`}
      >
        <svg
          className={`pointer-events-none absolute text-ink-faint transition-colors duration-200 ${
            focused ? "text-accent" : ""
          } ${
            isLarge ? "top-5 left-5 size-5" : "top-1/2 left-4 size-4 -translate-y-1/2"
          }`}
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
          id={id}
          type="search"
          name="industry"
          placeholder={placeholder}
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
        {isHero && (
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-accent/0 transition-all duration-300 ${
              focused ? "border-accent/30" : ""
            }`}
            aria-hidden="true"
          />
        )}
      </div>
    </form>
  );
}

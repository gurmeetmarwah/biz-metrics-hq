"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

type IndustrySectionNavProps = {
  items: readonly NavItem[];
};

export function IndustrySectionNav({ items }: IndustrySectionNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-16 z-40 border-b border-border/60 bg-surface/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
        <ul className="flex gap-1 py-2.5">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active === item.id
                    ? "bg-accent-soft text-accent"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

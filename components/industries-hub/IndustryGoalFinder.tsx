"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  goalPresets,
  industryProfiles,
  scoreIndustryMatch,
  type IndustryLevel,
} from "@/lib/industries-hub";

type FilterKey = "startupCost" | "recurringRevenue" | "profitability" | "scalability";

const filterLabels: { key: FilterKey; label: string }[] = [
  { key: "startupCost", label: "Startup Budget" },
  { key: "recurringRevenue", label: "Recurring Revenue" },
  { key: "profitability", label: "Profitability" },
  { key: "scalability", label: "Scalability" },
];

const levels: IndustryLevel[] = ["low", "medium", "high"];

export function IndustryGoalFinder() {
  const [filters, setFilters] = useState<Partial<Record<FilterKey, IndustryLevel>>>({
    startupCost: "low",
    recurringRevenue: "high",
    profitability: "high",
    scalability: "medium",
  });
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const recommendations = useMemo(() => {
    return [...industryProfiles]
      .filter((p) => p.live)
      .map((profile) => ({ profile, score: scoreIndustryMatch(profile, filters) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [filters]);

  const setFilter = (key: FilterKey, value: IndustryLevel) => {
    setActivePreset(null);
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (presetId: string) => {
    const preset = goalPresets.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePreset(presetId);
    setFilters((prev) => ({ ...prev, ...preset.filters }));
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-ink">
            Find the Best Business to Start
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            Choose a goal or set filters to match industries to your priorities.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {goalPresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activePreset === preset.id
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-surface text-ink-muted hover:border-accent/30 hover:text-ink"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {filterLabels.map(({ key, label }) => (
              <div key={key}>
                <p className="mb-2 text-sm font-medium text-ink">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFilter(key, level)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium capitalize transition-colors ${
                        filters[key] === level
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-border bg-surface-muted/50 text-ink-muted hover:text-ink"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="h-full rounded-2xl border border-border bg-surface-muted/40 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-ink">Recommended Industries</h3>
          <p className="mt-2 text-sm text-ink-muted">
            Ranked by how well each industry matches your selected criteria.
          </p>

          <ul className="mt-6 space-y-3">
            {recommendations.length > 0 ? (
              recommendations.map(({ profile }, index) => (
                <li key={profile.slug}>
                  <Link
                    href={profile.href}
                    className="card-interactive group flex items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-bold text-accent">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                        {profile.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-ink-faint">
                        {profile.margin} margin · {profile.revenue} revenue
                      </span>
                    </span>
                    <svg
                      className="size-4 shrink-0 text-ink-faint group-hover:text-accent"
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
              ))
            ) : (
              <li className="rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-ink-muted">
                Adjust filters to see matching industries.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

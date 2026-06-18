"use client";

import { useMemo, useState } from "react";
import {
  calculatePerformanceScore,
  successFactorDefaults,
} from "@/lib/industries/fine-dining";

const factors = [
  {
    key: "averageCheck" as const,
    label: "Average Check",
    min: 60,
    max: 200,
    step: 1,
    suffix: "$",
    prefix: true,
  },
  {
    key: "wineRevenuePct" as const,
    label: "Wine Revenue",
    min: 10,
    max: 40,
    step: 1,
    suffix: "%",
    prefix: false,
  },
  {
    key: "tableUtilization" as const,
    label: "Table Utilization",
    min: 40,
    max: 95,
    step: 1,
    suffix: "%",
    prefix: false,
  },
  {
    key: "privateEventPct" as const,
    label: "Private Event Revenue",
    min: 0,
    max: 25,
    step: 1,
    suffix: "%",
    prefix: false,
  },
  {
    key: "retentionPct" as const,
    label: "Customer Retention",
    min: 20,
    max: 60,
    step: 1,
    suffix: "%",
    prefix: false,
  },
];

export function FineDiningScorecard() {
  const [inputs, setInputs] = useState(successFactorDefaults);

  const result = useMemo(() => calculatePerformanceScore(inputs), [inputs]);

  const update = (key: keyof typeof inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ink-muted">
            Restaurant Performance Score
          </p>
          <div className="mt-2 flex items-end gap-3">
            <p className="font-display text-5xl font-bold tabular-nums text-accent">
              {result.overall}
            </p>
            <p className="pb-2 text-lg text-ink-muted">/ 100</p>
          </div>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${result.overall}%` }}
        />
      </div>

      <ul className="mt-8 space-y-6">
        {factors.map((factor) => {
          const value = inputs[factor.key];
          const score =
            result.scores[
              factor.key === "averageCheck"
                ? "averageCheck"
                : factor.key === "wineRevenuePct"
                  ? "wineRevenue"
                  : factor.key === "tableUtilization"
                    ? "tableUtilization"
                    : factor.key === "privateEventPct"
                      ? "privateEventRevenue"
                      : "customerRetention"
            ];

          return (
            <li key={factor.key}>
              <div className="flex items-center justify-between gap-4">
                <label htmlFor={factor.key} className="font-medium text-ink">
                  {factor.label}
                </label>
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {factor.prefix ? "$" : ""}
                  {value}
                  {factor.suffix}
                </span>
              </div>
              <input
                id={factor.key}
                type="range"
                min={factor.min}
                max={factor.max}
                step={factor.step}
                value={value}
                onChange={(e) => update(factor.key, Number(e.target.value))}
                className="mt-2 w-full accent-accent"
              />
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-metric-revenue/60 transition-all duration-300"
                  style={{ width: `${score}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  calculateEconomicsScore,
  successFactorDefaults,
} from "@/lib/industries/bakery";

const factors = [
  {
    key: "averageOrder" as const,
    label: "Average Order Value",
    min: 8,
    max: 40,
    step: 0.5,
    prefix: "$",
  },
  {
    key: "dailyOrders" as const,
    label: "Daily Orders",
    min: 20,
    max: 130,
    step: 1,
  },
  {
    key: "customOrdersPct" as const,
    label: "Custom Orders",
    min: 5,
    max: 45,
    step: 1,
    suffix: "%",
  },
  {
    key: "profitMarginPct" as const,
    label: "Margin",
    min: 4,
    max: 22,
    step: 0.5,
    suffix: "%",
  },
  {
    key: "laborEfficiencyPct" as const,
    label: "Labor Efficiency",
    min: 24,
    max: 42,
    step: 0.5,
    suffix: "% labor",
    invert: true,
  },
];

const scoreKeyMap = {
  averageOrder: "averageOrder",
  dailyOrders: "dailyOrders",
  customOrdersPct: "customOrders",
  profitMarginPct: "profitMargin",
  laborEfficiencyPct: "laborEfficiency",
} as const;

export function BakeryScorecard() {
  const [inputs, setInputs] = useState(successFactorDefaults);

  const result = useMemo(() => calculateEconomicsScore(inputs), [inputs]);

  const update = (key: keyof typeof inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-medium text-ink-muted">Bakery Economics Score</p>
      <div className="mt-2 flex items-end gap-3">
        <p className="font-display text-5xl font-bold tabular-nums text-accent">
          {result.overall}
        </p>
        <p className="pb-2 text-lg text-ink-muted">/ 100</p>
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
            result.scores[scoreKeyMap[factor.key] as keyof typeof result.scores];

          return (
            <li key={factor.key}>
              <div className="flex items-center justify-between gap-4">
                <label htmlFor={factor.key} className="font-medium text-ink">
                  {factor.label}
                </label>
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {factor.prefix ?? ""}
                  {value}
                  {factor.suffix ?? ""}
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

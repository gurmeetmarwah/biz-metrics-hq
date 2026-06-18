"use client";

import { useMemo, useState } from "react";
import {
  calculateHealthScore,
  successFactorDefaults,
} from "@/lib/industries/food-truck";

const factors = [
  {
    key: "ticketSize" as const,
    label: "Ticket Size",
    min: 8,
    max: 20,
    step: 0.5,
    prefix: "$",
  },
  {
    key: "customerVolume" as const,
    label: "Customer Volume",
    min: 40,
    max: 160,
    step: 1,
    prefix: "",
  },
  {
    key: "eventMixPct" as const,
    label: "Event Mix",
    min: 0,
    max: 40,
    step: 1,
    suffix: "%",
  },
  {
    key: "foodCostPct" as const,
    label: "Food Cost",
    min: 22,
    max: 40,
    step: 0.5,
    suffix: "%",
    invert: true,
  },
  {
    key: "profitMarginPct" as const,
    label: "Profit Margin",
    min: 4,
    max: 22,
    step: 0.5,
    suffix: "%",
  },
];

export function FoodTruckScorecard() {
  const [inputs, setInputs] = useState(successFactorDefaults);

  const result = useMemo(() => calculateHealthScore(inputs), [inputs]);

  const update = (key: keyof typeof inputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const scoreKeyMap = {
    ticketSize: "ticketSize",
    customerVolume: "customerVolume",
    eventMixPct: "eventMix",
    foodCostPct: "foodCost",
    profitMarginPct: "profitMargin",
  } as const;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm font-medium text-ink-muted">Food Truck Health Score</p>
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

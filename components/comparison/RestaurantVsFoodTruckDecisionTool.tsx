"use client";

import { useMemo, useState } from "react";
import {
  getRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/restaurant-vs-food-truck";

const budgetOptions = [
  { value: "50k" as const, label: "$50K" },
  { value: "100k" as const, label: "$100K" },
  { value: "250k" as const, label: "$250K" },
  { value: "500k" as const, label: "$500K+" },
];

const riskOptions = [
  { value: "low" as const, label: "Low" },
  { value: "medium" as const, label: "Medium" },
  { value: "high" as const, label: "High" },
];

const incomeOptions = [
  { value: "50k" as const, label: "$50K" },
  { value: "100k" as const, label: "$100K" },
  { value: "200k" as const, label: "$200K+" },
];

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
              value === opt.value
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-ink-muted hover:bg-surface-muted"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function RestaurantVsFoodTruckDecisionTool() {
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "100k",
    risk: "medium",
    income: "100k",
  });

  const recommendation = useMemo(() => getRecommendation(inputs), [inputs]);

  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">
        Which Is Right for You?
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Answer three questions for a personalized recommendation.
      </p>

      <div className="mt-8 space-y-6">
        <OptionGroup
          label="Budget?"
          options={budgetOptions}
          value={inputs.budget}
          onChange={(v) => update("budget", v)}
        />
        <OptionGroup
          label="Risk Tolerance?"
          options={riskOptions}
          value={inputs.risk}
          onChange={(v) => update("risk", v)}
        />
        <OptionGroup
          label="Desired Income?"
          options={incomeOptions}
          value={inputs.income}
          onChange={(v) => update("income", v)}
        />
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended Business</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">
          {recommendation}
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          {recommendation === "Food Truck"
            ? "Lower capital requirements and faster break-even fit your profile."
            : "Higher revenue potential and scalability align with your goals."}
        </p>
      </div>
    </div>
  );
}

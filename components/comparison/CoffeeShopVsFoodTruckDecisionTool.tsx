"use client";

import { useMemo, useState } from "react";
import {
  getRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/coffee-shop-vs-food-truck";

const budgetOptions = [
  { value: "under100k" as const, label: "<$100K" },
  { value: "100k-250k" as const, label: "$100K–$250K" },
  { value: "250k+" as const, label: "$250K+" },
];

const lifestyleOptions = [
  { value: "flexible" as const, label: "Flexible" },
  { value: "community" as const, label: "Community-Based" },
  { value: "growth" as const, label: "Growth Focused" },
];

const revenueGoalOptions = [
  { value: "75k" as const, label: "$75K" },
  { value: "150k" as const, label: "$150K" },
  { value: "250k+" as const, label: "$250K+" },
];

const businessStyleOptions = [
  { value: "mobile" as const, label: "Mobile" },
  { value: "fixed" as const, label: "Fixed Location" },
  { value: "either" as const, label: "Either" },
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

export function CoffeeShopVsFoodTruckDecisionTool() {
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "100k-250k",
    lifestyle: "community",
    revenueGoal: "150k",
    businessStyle: "either",
  });

  const recommendation = useMemo(() => getRecommendation(inputs), [inputs]);
  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="mt-2 text-sm text-ink-muted">
        Answer four questions for a personalized recommendation.
      </p>

      <div className="mt-8 space-y-6">
        <OptionGroup label="Budget" options={budgetOptions} value={inputs.budget} onChange={(v) => update("budget", v)} />
        <OptionGroup label="Desired Lifestyle" options={lifestyleOptions} value={inputs.lifestyle} onChange={(v) => update("lifestyle", v)} />
        <OptionGroup label="Revenue Goal" options={revenueGoalOptions} value={inputs.revenueGoal} onChange={(v) => update("revenueGoal", v)} />
        <OptionGroup label="Business Style" options={businessStyleOptions} value={inputs.businessStyle} onChange={(v) => update("businessStyle", v)} />
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended Business</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">{recommendation}</p>
        <p className="mt-3 text-sm text-ink-muted">
          {recommendation === "Coffee Shop"
            ? "Fixed location, community brand, and higher revenue potential fit your profile."
            : "Lower capital, mobility, and faster launch align with your goals."}
        </p>
      </div>
    </div>
  );
}

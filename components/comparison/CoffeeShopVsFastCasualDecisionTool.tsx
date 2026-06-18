"use client";

import { useMemo, useState } from "react";
import {
  getRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/coffee-shop-vs-fast-casual";

const budgetOptions = [
  { value: "under150k" as const, label: "<$150K" },
  { value: "150k-300k" as const, label: "$150K–$300K" },
  { value: "300k+" as const, label: "$300K+" },
];

const lifestyleOptions = [
  { value: "lifestyle" as const, label: "Lifestyle" },
  { value: "growth" as const, label: "Growth" },
  { value: "balanced" as const, label: "Balanced" },
];

const revenueGoalOptions = [
  { value: "100k" as const, label: "$100K" },
  { value: "250k" as const, label: "$250K" },
  { value: "500k+" as const, label: "$500K+" },
];

const staffingOptions = [
  { value: "low" as const, label: "Low" },
  { value: "medium" as const, label: "Medium" },
  { value: "high" as const, label: "High" },
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

export function CoffeeShopVsFastCasualDecisionTool() {
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "150k-300k",
    lifestyle: "balanced",
    revenueGoal: "250k",
    staffingComfort: "medium",
  });

  const recommendation = useMemo(() => getRecommendation(inputs), [inputs]);
  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-sm text-ink-muted">Answer four questions for a personalized recommendation.</p>
      <div className="mt-8 space-y-6">
        <OptionGroup label="Budget" options={budgetOptions} value={inputs.budget} onChange={(v) => update("budget", v)} />
        <OptionGroup label="Desired Lifestyle" options={lifestyleOptions} value={inputs.lifestyle} onChange={(v) => update("lifestyle", v)} />
        <OptionGroup label="Revenue Goal" options={revenueGoalOptions} value={inputs.revenueGoal} onChange={(v) => update("revenueGoal", v)} />
        <OptionGroup label="Staffing Comfort" options={staffingOptions} value={inputs.staffingComfort} onChange={(v) => update("staffingComfort", v)} />
      </div>
      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended Business</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">{recommendation}</p>
        <p className="mt-3 text-sm text-ink-muted">
          {recommendation === "Coffee Shop"
            ? "Lower capital, simpler ops, and lifestyle balance fit your profile."
            : "Higher revenue ceiling, growth potential, and scalability align with your goals."}
        </p>
      </div>
    </div>
  );
}

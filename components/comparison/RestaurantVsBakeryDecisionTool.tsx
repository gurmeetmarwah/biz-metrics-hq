"use client";

import { useMemo, useState } from "react";
import {
  getRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/restaurant-vs-bakery";

const budgetOptions = [
  { value: "under100k" as const, label: "<$100K" },
  { value: "100k-250k" as const, label: "$100K–$250K" },
  { value: "250k-500k" as const, label: "$250K–$500K" },
  { value: "500k+" as const, label: "$500K+" },
];

const experienceOptions = [
  { value: "hospitality" as const, label: "Hospitality" },
  { value: "baking" as const, label: "Baking" },
  { value: "business" as const, label: "Business" },
  { value: "none" as const, label: "None" },
];

const lifestyleOptions = [
  { value: "work-life" as const, label: "Work-Life Balance" },
  { value: "growth" as const, label: "Maximum Growth" },
  { value: "semi-passive" as const, label: "Semi-Passive" },
  { value: "community" as const, label: "Community Business" },
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

export function RestaurantVsBakeryDecisionTool() {
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "100k-250k",
    experience: "none",
    lifestyle: "work-life",
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
          label="Budget"
          options={budgetOptions}
          value={inputs.budget}
          onChange={(v) => update("budget", v)}
        />
        <OptionGroup
          label="Experience"
          options={experienceOptions}
          value={inputs.experience}
          onChange={(v) => update("experience", v)}
        />
        <OptionGroup
          label="Desired Lifestyle"
          options={lifestyleOptions}
          value={inputs.lifestyle}
          onChange={(v) => update("lifestyle", v)}
        />
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">
          {recommendation}
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          {recommendation === "Bakery"
            ? "Simpler operations, lower capital, and wholesale potential fit your profile."
            : "Higher revenue potential and multi-unit scaling align with your goals."}
        </p>
      </div>
    </div>
  );
}

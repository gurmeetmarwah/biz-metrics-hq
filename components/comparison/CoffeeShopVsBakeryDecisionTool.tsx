"use client";

import { useMemo, useState } from "react";
import {
  getRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/coffee-shop-vs-bakery";

const budgetOptions = [
  { value: "under100k" as const, label: "<$100K" },
  { value: "100k-250k" as const, label: "$100K–$250K" },
  { value: "250k+" as const, label: "$250K+" },
];

const experienceOptions = [
  { value: "coffee" as const, label: "Coffee Industry" },
  { value: "baking" as const, label: "Baking" },
  { value: "business" as const, label: "Business" },
  { value: "none" as const, label: "None" },
];

const styleOptions = [
  { value: "community" as const, label: "Community Business" },
  { value: "creative" as const, label: "Creative Business" },
  { value: "growth" as const, label: "Growth Business" },
  { value: "lifestyle" as const, label: "Lifestyle Business" },
];

const scheduleOptions = [
  { value: "early-morning" as const, label: "Early Morning" },
  { value: "flexible" as const, label: "Flexible" },
  { value: "long-hours" as const, label: "Long Hours" },
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

export function CoffeeShopVsBakeryDecisionTool() {
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "100k-250k",
    experience: "none",
    businessStyle: "community",
    workSchedule: "flexible",
  });

  const recommendation = useMemo(() => getRecommendation(inputs), [inputs]);
  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Which Is Right for You?</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Answer four questions for a personalized recommendation.
      </p>

      <div className="mt-8 space-y-6">
        <OptionGroup label="Budget" options={budgetOptions} value={inputs.budget} onChange={(v) => update("budget", v)} />
        <OptionGroup label="Experience" options={experienceOptions} value={inputs.experience} onChange={(v) => update("experience", v)} />
        <OptionGroup label="Preferred Business Style" options={styleOptions} value={inputs.businessStyle} onChange={(v) => update("businessStyle", v)} />
        <OptionGroup label="Desired Work Schedule" options={scheduleOptions} value={inputs.workSchedule} onChange={(v) => update("workSchedule", v)} />
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended Business</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">{recommendation}</p>
        <p className="mt-3 text-sm text-ink-muted">
          {recommendation === "Coffee Shop"
            ? "Community focus, recurring customers, and simpler operations fit your profile."
            : "Creative production, wholesale potential, and custom orders align with your goals."}
        </p>
      </div>
    </div>
  );
}

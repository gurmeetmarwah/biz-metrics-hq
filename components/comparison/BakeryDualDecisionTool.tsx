"use client";

import { useMemo, useState } from "react";
import {
  comparisonLabels as foodTruckLabels,
  decisionToolCopy as foodTruckCopy,
  getRecommendation as getFoodTruckRecommendation,
  type DecisionInputs as FoodTruckInputs,
} from "@/lib/industries/comparisons/bakery-vs-food-truck";
import {
  comparisonLabels as homeBakeryLabels,
  decisionToolCopy as homeBakeryCopy,
  getRecommendation as getHomeBakeryRecommendation,
  type DecisionInputs as HomeBakeryInputs,
} from "@/lib/industries/comparisons/bakery-vs-home-bakery";
import {
  comparisonLabels as fastCasualLabels,
  decisionToolCopy as fastCasualCopy,
  getRecommendation as getFastCasualRecommendation,
  type DecisionInputs as FastCasualInputs,
} from "@/lib/industries/comparisons/bakery-vs-fast-casual";

const budgetOptions = [
  { value: "under50k" as const, label: "<$50K" },
  { value: "50k-150k" as const, label: "$50K–$150K" },
  { value: "150k-300k" as const, label: "$150K–$300K" },
  { value: "300k+" as const, label: "$300K+" },
];

const experienceOptions = [
  { value: "baking" as const, label: "Baking" },
  { value: "food-service" as const, label: "Food Service" },
  { value: "business" as const, label: "Business" },
  { value: "none" as const, label: "None" },
];

const goalOptions = [
  { value: "wholesale" as const, label: "Wholesale & B2B" },
  { value: "lifestyle" as const, label: "Lifestyle Balance" },
  { value: "scale" as const, label: "Maximum Scale" },
  { value: "low-capital" as const, label: "Low Capital Start" },
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

type DecisionInputs = FoodTruckInputs;

const toolConfig = {
  "bakery-vs-food-truck": {
    bakeryLabel: foodTruckLabels.bakery,
    competitorLabel: foodTruckLabels.competitor,
    getRecommendation: getFoodTruckRecommendation,
    recommendationCopy: foodTruckCopy,
  },
  "bakery-vs-home-bakery": {
    bakeryLabel: homeBakeryLabels.bakery,
    competitorLabel: homeBakeryLabels.competitor,
    getRecommendation: getHomeBakeryRecommendation,
    recommendationCopy: homeBakeryCopy,
  },
  "bakery-vs-fast-casual": {
    bakeryLabel: fastCasualLabels.bakery,
    competitorLabel: fastCasualLabels.competitor,
    getRecommendation: getFastCasualRecommendation,
    recommendationCopy: fastCasualCopy,
  },
} as const;

type ComparisonSlug = keyof typeof toolConfig;

export function BakeryDualDecisionTool({ slug }: { slug: ComparisonSlug }) {
  const config = toolConfig[slug];
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "50k-150k",
    experience: "none",
    goal: "wholesale",
  });

  const recommendation = useMemo(() => config.getRecommendation(inputs), [config, inputs]);
  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const isBakery = recommendation === config.bakeryLabel;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Which Is Right for You?</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Answer three questions for a personalized recommendation.
      </p>
      <div className="mt-8 space-y-6">
        <OptionGroup label="Budget" options={budgetOptions} value={inputs.budget} onChange={(v) => update("budget", v)} />
        <OptionGroup label="Experience" options={experienceOptions} value={inputs.experience} onChange={(v) => update("experience", v)} />
        <OptionGroup label="Primary Goal" options={goalOptions} value={inputs.goal} onChange={(v) => update("goal", v)} />
      </div>
      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6 text-center">
        <p className="text-sm font-medium text-ink-muted">Recommended</p>
        <p className="mt-2 font-display text-3xl font-bold text-accent">{recommendation}</p>
        <p className="mt-3 text-sm text-ink-muted">
          {isBakery ? config.recommendationCopy.bakery : config.recommendationCopy.competitor}
        </p>
      </div>
    </div>
  );
}

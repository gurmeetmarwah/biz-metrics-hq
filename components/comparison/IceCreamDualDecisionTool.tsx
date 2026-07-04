"use client";

import { useMemo, useState } from "react";
import {
  comparisonLabels as coffeeLabels,
  decisionToolCopy as coffeeCopy,
  getRecommendation as getCoffeeRecommendation,
  type DecisionInputs,
} from "@/lib/industries/comparisons/ice-cream-shop-vs-coffee-shop";
import {
  comparisonLabels as bakeryLabels,
  decisionToolCopy as bakeryCopy,
  getRecommendation as getBakeryRecommendation,
} from "@/lib/industries/comparisons/ice-cream-shop-vs-bakery";
import {
  comparisonLabels as froyoLabels,
  decisionToolCopy as froyoCopy,
  getRecommendation as getFroyoRecommendation,
} from "@/lib/industries/comparisons/ice-cream-shop-vs-frozen-yogurt";
import {
  comparisonLabels as dessertLabels,
  decisionToolCopy as dessertCopy,
  getRecommendation as getDessertRecommendation,
} from "@/lib/industries/comparisons/ice-cream-shop-vs-dessert-cafe";
import {
  comparisonLabels as bubbleTeaLabels,
  decisionToolCopy as bubbleTeaCopy,
  getRecommendation as getBubbleTeaRecommendation,
} from "@/lib/industries/comparisons/ice-cream-shop-vs-bubble-tea";

const budgetOptions = [
  { value: "under50k" as const, label: "<$50K" },
  { value: "50k-150k" as const, label: "$50K–$150K" },
  { value: "150k-300k" as const, label: "$150K–$300K" },
  { value: "300k+" as const, label: "$300K+" },
];

const experienceOptions = [
  { value: "baking" as const, label: "Dessert / Baking" },
  { value: "food-service" as const, label: "Food Service" },
  { value: "business" as const, label: "Business" },
  { value: "none" as const, label: "None" },
];

const goalOptions = [
  { value: "wholesale" as const, label: "Catering & Events" },
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

const toolConfig = {
  "ice-cream-shop-vs-coffee-shop": {
    iceCreamLabel: coffeeLabels.iceCream,
    getRecommendation: getCoffeeRecommendation,
    recommendationCopy: coffeeCopy,
  },
  "ice-cream-shop-vs-bakery": {
    iceCreamLabel: bakeryLabels.iceCream,
    getRecommendation: getBakeryRecommendation,
    recommendationCopy: bakeryCopy,
  },
  "ice-cream-shop-vs-frozen-yogurt": {
    iceCreamLabel: froyoLabels.iceCream,
    getRecommendation: getFroyoRecommendation,
    recommendationCopy: froyoCopy,
  },
  "ice-cream-shop-vs-dessert-cafe": {
    iceCreamLabel: dessertLabels.iceCream,
    getRecommendation: getDessertRecommendation,
    recommendationCopy: dessertCopy,
  },
  "ice-cream-shop-vs-bubble-tea": {
    iceCreamLabel: bubbleTeaLabels.iceCream,
    getRecommendation: getBubbleTeaRecommendation,
    recommendationCopy: bubbleTeaCopy,
  },
} as const;

type ComparisonSlug = keyof typeof toolConfig;

export function IceCreamDualDecisionTool({ slug }: { slug: ComparisonSlug }) {
  const config = toolConfig[slug];
  const [inputs, setInputs] = useState<DecisionInputs>({
    budget: "150k-300k",
    experience: "food-service",
    goal: "scale",
  });

  const recommendation = useMemo(() => config.getRecommendation(inputs), [config, inputs]);
  const update = <K extends keyof DecisionInputs>(key: K, value: DecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const isIceCream = recommendation === config.iceCreamLabel;

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
          {isIceCream ? config.recommendationCopy.iceCream : config.recommendationCopy.competitor}
        </p>
      </div>
    </div>
  );
}

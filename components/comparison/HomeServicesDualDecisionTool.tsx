"use client";

import { useMemo, useState } from "react";
import type { HealthcareDecisionInputs } from "@/lib/industries/comparisons/healthcare-comparison-types";
import { getHomeServicesDecisionConfig } from "@/lib/industries/comparisons/home-services-decision-config";

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

export function HomeServicesDualDecisionTool({ slug }: { slug: string }) {
  const config = getHomeServicesDecisionConfig(slug);

  const [inputs, setInputs] = useState<HealthcareDecisionInputs>({
    clinicalInterest: "general",
    revenueGoal: "high",
    insuranceComfort: "medium",
    growthAmbition: "regional",
  });

  const recommendation = useMemo(() => config.getRecommendation(inputs), [config, inputs]);

  const update = <K extends keyof HealthcareDecisionInputs>(key: K, value: HealthcareDecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const copy = recommendation === config.leftLabel ? config.leftCopy : config.rightCopy;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Interactive Decision Tool</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Answer four questions to get a trade recommendation based on your capital, revenue goals, and growth plans.
      </p>

      <div className="mt-8 space-y-6">
        <OptionGroup
          label="Business Focus"
          value={inputs.clinicalInterest}
          onChange={(v) => update("clinicalInterest", v)}
          options={[
            { value: "general", label: "Residential Service" },
            { value: "specialty", label: "Commercial / Install" },
          ]}
        />
        <OptionGroup
          label="Revenue Goal"
          value={inputs.revenueGoal}
          onChange={(v) => update("revenueGoal", v)}
          options={[
            { value: "moderate", label: "$1M – $1.5M" },
            { value: "high", label: "$1.5M – $2.5M" },
            { value: "very-high", label: "$2.5M+" },
          ]}
        />
        <OptionGroup
          label="Recurring Revenue Priority"
          value={inputs.insuranceComfort}
          onChange={(v) => update("insuranceComfort", v)}
          options={[
            { value: "low", label: "Low — reactive work is fine" },
            { value: "medium", label: "Medium — want some contracts" },
            { value: "high", label: "High — maintenance plans are key" },
          ]}
        />
        <OptionGroup
          label="Growth Ambition"
          value={inputs.growthAmbition}
          onChange={(v) => update("growthAmbition", v)}
          options={[
            { value: "lifestyle", label: "Owner-operator lifestyle" },
            { value: "regional", label: "Regional multi-truck" },
            { value: "multi-location", label: "Multi-location brand" },
          ]}
        />
      </div>

      <div className="mt-8 rounded-xl border border-accent/25 bg-accent-soft/40 p-6">
        <p className="text-sm font-semibold text-accent">Recommendation: {recommendation}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy}</p>
      </div>
    </div>
  );
}

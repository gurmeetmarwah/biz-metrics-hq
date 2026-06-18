"use client";

import { useMemo, useState } from "react";
import type { HealthcareDecisionConfig, HealthcareDecisionInputs } from "@/lib/industries/comparisons/healthcare-comparison-types";
import { getHealthcareDecisionConfig } from "@/lib/industries/comparisons/healthcare-decision-config";

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

export function HealthcareDualDecisionTool({ slug }: { slug: string }) {
  const config = getHealthcareDecisionConfig(slug);

  const [inputs, setInputs] = useState<HealthcareDecisionInputs>({
    clinicalInterest: "general",
    revenueGoal: "high",
    insuranceComfort: "medium",
    growthAmbition: "regional",
  });

  const recommendation = useMemo(() => config.getRecommendation(inputs), [config, inputs]);

  const update = <K extends keyof HealthcareDecisionInputs>(key: K, value: HealthcareDecisionInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const copy =
    recommendation === config.leftLabel ? config.leftCopy : config.rightCopy;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Interactive Decision Tool</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Answer four questions to get a model recommendation based on your clinical interests and
        financial goals.
      </p>

      <div className="mt-8 space-y-6">
        <OptionGroup
          label="Clinical Interest"
          value={inputs.clinicalInterest}
          onChange={(v) => update("clinicalInterest", v)}
          options={[
            { value: "general", label: "General Care" },
            { value: "specialty", label: "Specialty Care" },
          ]}
        />
        <OptionGroup
          label="Revenue Goal"
          value={inputs.revenueGoal}
          onChange={(v) => update("revenueGoal", v)}
          options={[
            { value: "moderate", label: "Moderate" },
            { value: "high", label: "High" },
            { value: "very-high", label: "Very High" },
          ]}
        />
        <OptionGroup
          label="Insurance Reliance Comfort"
          value={inputs.insuranceComfort}
          onChange={(v) => update("insuranceComfort", v)}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />
        <OptionGroup
          label="Growth Ambition"
          value={inputs.growthAmbition}
          onChange={(v) => update("growthAmbition", v)}
          options={[
            { value: "lifestyle", label: "Lifestyle Practice" },
            { value: "regional", label: "Regional Group" },
            { value: "multi-location", label: "Multi-Location Network" },
          ]}
        />
      </div>

      <div className="mt-8 rounded-xl border border-accent/30 bg-accent-soft/50 p-6">
        <p className="text-xs font-semibold tracking-wider text-accent uppercase">Recommended Model</p>
        <p className="mt-2 font-display text-2xl font-bold text-ink">{recommendation}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy}</p>
      </div>
    </div>
  );
}

export type { HealthcareDecisionConfig };

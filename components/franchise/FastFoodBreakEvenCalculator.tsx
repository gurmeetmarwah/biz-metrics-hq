"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { formatCurrency } from "@/lib/numbers";
import { fastFoodFranchiseGuide } from "@/lib/franchise/food/fast-food-franchise";
import {
  calculateFastFoodBreakEven,
  type FastFoodBreakEvenInputs,
} from "@/lib/franchise/food/fast-food-franchise-calculator";

function formatYears(years: number | null): string {
  if (years == null || !Number.isFinite(years)) return "—";
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `~${years.toFixed(1)} years`;
}

export function FastFoodBreakEvenCalculator() {
  const [inputs, setInputs] = useState<FastFoodBreakEvenInputs>(() => ({
    ...fastFoodFranchiseGuide.breakEvenDefaults,
  }));
  const result = useMemo(() => calculateFastFoodBreakEven(inputs), [inputs]);

  const update = <K extends keyof FastFoodBreakEvenInputs>(key: K, value: FastFoodBreakEvenInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-4">
        <CurrencyInput
          id="be-investment"
          label="Investment"
          value={inputs.investment}
          onChange={(v) => update("investment", v)}
        />
        <CurrencyInput
          id="be-revenue"
          label="Annual revenue"
          value={inputs.annualRevenue}
          onChange={(v) => update("annualRevenue", v)}
        />
        <PercentInput
          id="be-margin"
          label="Operating margin"
          value={inputs.operatingMarginPct}
          onChange={(v) => update("operatingMarginPct", v)}
          max={40}
        />
        <PercentInput
          id="be-financed"
          label="Financing (% of investment)"
          value={inputs.financedPct}
          onChange={(v) => update("financedPct", v)}
          max={100}
        />
        <PercentInput
          id="be-rate"
          label="Interest rate"
          value={inputs.interestRatePct}
          onChange={(v) => update("interestRatePct", v)}
          max={30}
        />
        <PercentInput
          id="be-owner"
          label="Owner income (% of operating profit)"
          value={inputs.ownerDrawPct}
          onChange={(v) => update("ownerDrawPct", v)}
          max={100}
        />
      </div>

      <div className="mx-auto w-full max-w-md">
        {(
          [
            { label: "Investment", value: formatCurrency(inputs.investment) },
            { label: "Annual Operating Profit", value: formatCurrency(result.operatingProfit) },
            { label: "Owner Income", value: formatCurrency(result.ownerIncome) },
            { label: "Simple Payback", value: formatYears(result.paybackYears) },
          ] as const
        ).map((step, i) => (
          <div key={step.label}>
            {i > 0 && (
              <div className="flex justify-center py-2" aria-hidden="true">
                <span className="text-lg text-ink-faint">↓</span>
              </div>
            )}
            <div
              className={`rounded-2xl border border-border px-6 py-5 text-center ${
                i === 3 ? "bg-accent-soft/50" : "bg-surface"
              }`}
            >
              <p className="text-xs font-semibold tracking-wider text-ink-faint uppercase">{step.label}</p>
              <p className="mt-2 font-display text-2xl font-bold tabular-nums text-ink sm:text-3xl">{step.value}</p>
            </div>
          </div>
        ))}
        <p className="mt-4 text-center text-xs text-ink-faint">
          Illustrative model — change inputs to match your CapEx, margin, financing, and owner draw.
        </p>
      </div>
    </div>
  );
}

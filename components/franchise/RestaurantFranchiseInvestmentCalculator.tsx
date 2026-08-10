"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { formatCurrency } from "@/lib/numbers";
import {
  restaurantFranchiseBrandNames,
  restaurantFranchiseBrandSlugs,
  type RestaurantFranchiseBrandSlug,
} from "@/lib/franchise/food/restaurant-franchise";
import {
  applyBrandPreset,
  buildDefaultRestaurantFranchiseInputs,
  calculateRestaurantFranchiseInvestment,
  type RestaurantFranchiseCalcInputs,
} from "@/lib/franchise/food/restaurant-franchise-calculator";

function formatYears(years: number | null): string {
  if (years == null || !Number.isFinite(years)) return "—";
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `~${years.toFixed(1)} yrs`;
}

export function RestaurantFranchiseInvestmentCalculator() {
  const [inputs, setInputs] = useState<RestaurantFranchiseCalcInputs>(() =>
    buildDefaultRestaurantFranchiseInputs("jersey-mikes"),
  );
  const result = useMemo(() => calculateRestaurantFranchiseInvestment(inputs), [inputs]);

  const update = <K extends keyof RestaurantFranchiseCalcInputs>(
    key: K,
    value: RestaurantFranchiseCalcInputs[K],
  ) => {
    const costKeys: (keyof RestaurantFranchiseCalcInputs)[] = [
      "franchiseFee",
      "buildOut",
      "equipment",
      "realEstate",
      "workingCapital",
      "otherStartup",
    ];
    setInputs((prev) => ({
      ...prev,
      [key]: value,
      brand: costKeys.includes(key) ? "custom" : prev.brand,
    }));
  };

  const onBrandChange = (value: string) => {
    if (value === "custom") {
      setInputs((prev) => ({ ...prev, brand: "custom" }));
      return;
    }
    setInputs((prev) => applyBrandPreset(value as RestaurantFranchiseBrandSlug, prev));
  };

  const outputs = [
    { label: "Total Investment", value: formatCurrency(result.totalInvestment), accent: "var(--metric-valuation)" },
    { label: "Cash Required", value: formatCurrency(result.cashRequired), accent: "var(--metric-salary)" },
    { label: "Loan Amount", value: formatCurrency(result.loanAmount), accent: "var(--metric-revenue)" },
    { label: "Estimated Monthly Payment", value: formatCurrency(result.monthlyPayment), accent: "var(--metric-margin)" },
    { label: "Break-even Revenue", value: formatCurrency(result.breakEvenRevenue), accent: "var(--metric-revenue)" },
    { label: "Estimated Payback Period", value: formatYears(result.paybackYears), accent: "var(--metric-salary)" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Assumptions</h3>
        <div className="mt-6 space-y-4">
          <label htmlFor="franchise-brand" className="block">
            <span className="text-sm font-medium text-ink-muted">Franchise brand</span>
            <select
              id="franchise-brand"
              value={inputs.brand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              {restaurantFranchiseBrandSlugs.map((slug) => (
                <option key={slug} value={slug}>
                  {restaurantFranchiseBrandNames[slug]}
                </option>
              ))}
              <option value="custom">Custom / other brand</option>
            </select>
          </label>

          <CurrencyInput
            id="franchiseFee"
            label="Initial franchise fee"
            value={inputs.franchiseFee}
            onChange={(v) => update("franchiseFee", v)}
          />
          <CurrencyInput
            id="buildOut"
            label="Build-out cost"
            value={inputs.buildOut}
            onChange={(v) => update("buildOut", v)}
          />
          <CurrencyInput
            id="equipment"
            label="Equipment"
            value={inputs.equipment}
            onChange={(v) => update("equipment", v)}
          />
          <CurrencyInput
            id="realEstate"
            label="Real estate / lease"
            value={inputs.realEstate}
            onChange={(v) => update("realEstate", v)}
          />
          <CurrencyInput
            id="workingCapital"
            label="Working capital"
            value={inputs.workingCapital}
            onChange={(v) => update("workingCapital", v)}
          />
          <CurrencyInput
            id="otherStartup"
            label="Other startup costs"
            value={inputs.otherStartup}
            onChange={(v) => update("otherStartup", v)}
          />
          <PercentInput
            id="financedPct"
            label="Financing (% of total)"
            value={inputs.financedPct}
            onChange={(v) => update("financedPct", v)}
            max={100}
          />
          <PercentInput
            id="interestRatePct"
            label="Interest rate"
            value={inputs.interestRatePct}
            onChange={(v) => update("interestRatePct", v)}
            max={30}
          />
          <label htmlFor="loanTermYears" className="block">
            <span className="text-sm font-medium text-ink-muted">Loan term (years)</span>
            <input
              id="loanTermYears"
              type="number"
              min={1}
              max={25}
              step={1}
              value={inputs.loanTermYears}
              onChange={(e) => update("loanTermYears", Number(e.target.value) || 0)}
              className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </label>
          <PercentInput
            id="operatingMarginPct"
            label="Assumed operating margin"
            value={inputs.operatingMarginPct}
            onChange={(v) => update("operatingMarginPct", v)}
            max={40}
          />
        </div>
      </div>

      <div>
        <div className="rounded-2xl border border-border bg-surface-muted/40 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wider text-accent uppercase">
            Investment outputs
          </p>
          <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {formatCurrency(result.totalInvestment)}
          </p>
          <p className="mt-1 text-sm text-ink-muted">Total investment</p>

          <dl className="mt-8 space-y-3">
            {outputs.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-ink-muted">{row.label}</dt>
                <dd className="text-sm font-semibold tabular-nums" style={{ color: row.accent }}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            Directional estimate only — rebuild with current FDD Item 7 fees, local contractor quotes, and
            lender terms before investing. Break-even and payback use your assumed operating margin.
          </p>
        </div>
      </div>
    </div>
  );
}

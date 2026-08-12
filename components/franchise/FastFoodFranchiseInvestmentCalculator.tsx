"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { formatCurrency } from "@/lib/numbers";
import {
  fastFoodFranchiseBrandNames,
  fastFoodFranchiseBrandSlugs,
  type FastFoodFranchiseBrandSlug,
} from "@/lib/franchise/food/fast-food-franchise";
import {
  applyFastFoodBrandPreset,
  buildDefaultFastFoodFranchiseInputs,
  calculateFastFoodFranchiseInvestment,
  type FastFoodFranchiseCalcInputs,
} from "@/lib/franchise/food/fast-food-franchise-calculator";

function formatYears(years: number | null): string {
  if (years == null || !Number.isFinite(years)) return "—";
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `~${years.toFixed(1)} yrs`;
}

function formatPct(value: number | null): string {
  if (value == null || !Number.isFinite(value)) return "—";
  return `${value.toFixed(1)}%`;
}

export function FastFoodFranchiseInvestmentCalculator() {
  const [inputs, setInputs] = useState<FastFoodFranchiseCalcInputs>(() =>
    buildDefaultFastFoodFranchiseInputs("popeyes"),
  );
  const result = useMemo(() => calculateFastFoodFranchiseInvestment(inputs), [inputs]);

  const update = <K extends keyof FastFoodFranchiseCalcInputs>(
    key: K,
    value: FastFoodFranchiseCalcInputs[K],
  ) => {
    const costKeys: (keyof FastFoodFranchiseCalcInputs)[] = [
      "franchiseFee",
      "buildOut",
      "equipment",
      "realEstate",
      "workingCapital",
      "otherStartup",
      "annualRevenue",
      "operatingMarginPct",
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
    setInputs((prev) => applyFastFoodBrandPreset(value as FastFoodFranchiseBrandSlug, prev));
  };

  const outputs = [
    { label: "Total Startup Investment", value: formatCurrency(result.totalInvestment), accent: "var(--metric-valuation)" },
    { label: "Cash Required", value: formatCurrency(result.cashRequired), accent: "var(--metric-salary)" },
    { label: "Annual Revenue", value: formatCurrency(result.annualRevenue), accent: "var(--metric-revenue)" },
    { label: "Estimated Operating Profit", value: formatCurrency(result.operatingProfit), accent: "var(--metric-margin)" },
    { label: "Owner Income", value: formatCurrency(result.ownerIncome), accent: "var(--metric-salary)" },
    { label: "Break-even Revenue", value: formatCurrency(result.breakEvenRevenue), accent: "var(--metric-revenue)" },
    { label: "Estimated Payback Period", value: formatYears(result.paybackYears), accent: "var(--metric-salary)" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Assumptions</h3>
        <div className="mt-6 space-y-4">
          <label htmlFor="ff-franchise-concept" className="block">
            <span className="text-sm font-medium text-ink-muted">Franchise / concept</span>
            <select
              id="ff-franchise-concept"
              value={inputs.brand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              {fastFoodFranchiseBrandSlugs.map((slug) => (
                <option key={slug} value={slug}>
                  {fastFoodFranchiseBrandNames[slug]}
                </option>
              ))}
              <option value="custom">Custom / other concept</option>
            </select>
          </label>

          <CurrencyInput id="ff-fee" label="Initial franchise fee" value={inputs.franchiseFee} onChange={(v) => update("franchiseFee", v)} />
          <CurrencyInput id="ff-buildout" label="Build-out" value={inputs.buildOut} onChange={(v) => update("buildOut", v)} />
          <CurrencyInput id="ff-equipment" label="Equipment" value={inputs.equipment} onChange={(v) => update("equipment", v)} />
          <CurrencyInput id="ff-real-estate" label="Real estate" value={inputs.realEstate} onChange={(v) => update("realEstate", v)} />
          <CurrencyInput id="ff-working-capital" label="Working capital" value={inputs.workingCapital} onChange={(v) => update("workingCapital", v)} />
          <CurrencyInput id="ff-other" label="Other startup costs" value={inputs.otherStartup} onChange={(v) => update("otherStartup", v)} />
          <CurrencyInput id="ff-cash" label="Available cash" value={inputs.availableCash} onChange={(v) => update("availableCash", v)} />
          <CurrencyInput id="ff-loan" label="Loan amount" value={inputs.loanAmount} onChange={(v) => update("loanAmount", v)} />
          <PercentInput id="ff-rate" label="Interest rate" value={inputs.interestRatePct} onChange={(v) => update("interestRatePct", v)} max={30} />
          <CurrencyInput id="ff-revenue" label="Assumed annual revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
          <PercentInput id="ff-margin" label="Operating margin" value={inputs.operatingMarginPct} onChange={(v) => update("operatingMarginPct", v)} max={40} />
          <PercentInput id="ff-draw" label="Owner draw (% of operating profit)" value={inputs.ownerDrawPct} onChange={(v) => update("ownerDrawPct", v)} max={100} />
        </div>
      </div>

      <div>
        <div className="rounded-2xl border border-border bg-surface-muted/40 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wider text-accent uppercase">Investment outputs</p>
          <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {formatCurrency(result.totalInvestment)}
          </p>
          <p className="mt-1 text-sm text-ink-muted">Total startup investment</p>

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

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border-subtle pt-5">
            <div>
              <p className="text-xs text-ink-faint">ROI</p>
              <p className="font-semibold tabular-nums text-ink">{formatPct(result.roiPct)}</p>
            </div>
            <div>
              <p className="text-xs text-ink-faint">Cash-on-Cash</p>
              <p className="font-semibold tabular-nums text-ink">{formatPct(result.cashOnCashPct)}</p>
            </div>
          </div>

          {result.cashShortfall > 0 && (
            <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs text-red-700">
              Available cash is {formatCurrency(result.cashShortfall)} short of the estimated cash required.
            </p>
          )}

          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            Directional estimate only — rebuild with current FDD Item 7 / Item 19 figures, local contractor quotes, and
            lender terms before investing.
          </p>
        </div>
      </div>
    </div>
  );
}

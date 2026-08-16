"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { formatCurrency } from "@/lib/numbers";
import {
  coffeeShopFranchiseBrandNames,
  coffeeShopFranchiseBrandSlugs,
  type CoffeeShopFranchiseBrandSlug,
} from "@/lib/franchise/food/coffee-shop-franchise";
import {
  applyCoffeeShopBrandPreset,
  buildDefaultCoffeeShopFranchiseRoiInputs,
  calculateCoffeeShopFranchiseRoi,
  type CoffeeShopFranchiseRoiInputs,
} from "@/lib/franchise/food/coffee-shop-franchise-calculator";

function formatYears(years: number | null): string {
  if (years == null || !Number.isFinite(years)) return "—";
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `~${years.toFixed(1)} yrs`;
}

function formatPct(value: number | null): string {
  if (value == null || !Number.isFinite(value)) return "—";
  return `${value.toFixed(1)}%`;
}

export function CoffeeShopFranchiseRoiCalculator() {
  const [inputs, setInputs] = useState<CoffeeShopFranchiseRoiInputs>(() =>
    buildDefaultCoffeeShopFranchiseRoiInputs("scooters-coffee"),
  );
  const result = useMemo(() => calculateCoffeeShopFranchiseRoi(inputs), [inputs]);

  const update = <K extends keyof CoffeeShopFranchiseRoiInputs>(
    key: K,
    value: CoffeeShopFranchiseRoiInputs[K],
  ) => {
    const costKeys: (keyof CoffeeShopFranchiseRoiInputs)[] = [
      "initialInvestment",
      "franchiseFee",
      "monthlyRevenue",
      "grossMarginPct",
      "laborPct",
      "monthlyRent",
      "royaltyPct",
      "marketingPct",
      "otherMonthlyOpEx",
      "loanAmount",
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
    setInputs((prev) => applyCoffeeShopBrandPreset(value as CoffeeShopFranchiseBrandSlug, prev));
  };

  const outputs = [
    { label: "Annual Revenue", value: formatCurrency(result.annualRevenue), accent: "var(--metric-revenue)" },
    { label: "Annual EBITDA", value: formatCurrency(result.annualEbitda), accent: "var(--metric-margin)" },
    { label: "Owner Cash Flow", value: formatCurrency(result.ownerCashFlow), accent: "var(--metric-salary)" },
    {
      label: "Break-even Point (monthly sales)",
      value: formatCurrency(result.breakEvenMonthlyRevenue),
      accent: "var(--metric-revenue)",
    },
    { label: "Payback Period", value: formatYears(result.paybackYears), accent: "var(--metric-salary)" },
    { label: "5-Year ROI", value: formatPct(result.fiveYearRoiPct), accent: "var(--metric-valuation)" },
    { label: "Cash-on-Cash Return", value: formatPct(result.cashOnCashPct), accent: "var(--metric-valuation)" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Assumptions</h3>
        <div className="mt-6 space-y-4">
          <label htmlFor="csf-franchise-brand" className="block">
            <span className="text-sm font-medium text-ink-muted">Franchise brand</span>
            <select
              id="csf-franchise-brand"
              value={inputs.brand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              {coffeeShopFranchiseBrandSlugs.map((slug) => (
                <option key={slug} value={slug}>
                  {coffeeShopFranchiseBrandNames[slug]}
                </option>
              ))}
              <option value="custom">Custom / other concept</option>
            </select>
          </label>

          <CurrencyInput
            id="csf-investment"
            label="Initial investment"
            value={inputs.initialInvestment}
            onChange={(v) => update("initialInvestment", v)}
          />
          <CurrencyInput
            id="csf-fee"
            label="Franchise fee"
            value={inputs.franchiseFee}
            onChange={(v) => update("franchiseFee", v)}
          />
          <CurrencyInput
            id="csf-monthly-rev"
            label="Monthly revenue"
            value={inputs.monthlyRevenue}
            onChange={(v) => update("monthlyRevenue", v)}
          />
          <PercentInput
            id="csf-gross"
            label="Gross margin"
            value={inputs.grossMarginPct}
            onChange={(v) => update("grossMarginPct", v)}
            max={90}
          />
          <PercentInput
            id="csf-labor"
            label="Labor cost"
            value={inputs.laborPct}
            onChange={(v) => update("laborPct", v)}
            max={50}
          />
          <CurrencyInput
            id="csf-rent"
            label="Monthly rent"
            value={inputs.monthlyRent}
            onChange={(v) => update("monthlyRent", v)}
          />
          <PercentInput
            id="csf-royalty"
            label="Royalty"
            value={inputs.royaltyPct}
            onChange={(v) => update("royaltyPct", v)}
            max={15}
          />
          <PercentInput
            id="csf-marketing"
            label="Marketing fee"
            value={inputs.marketingPct}
            onChange={(v) => update("marketingPct", v)}
            max={10}
          />
          <CurrencyInput
            id="csf-other"
            label="Other monthly operating expenses"
            value={inputs.otherMonthlyOpEx}
            onChange={(v) => update("otherMonthlyOpEx", v)}
          />
          <CurrencyInput
            id="csf-loan"
            label="Financing (loan amount)"
            value={inputs.loanAmount}
            onChange={(v) => update("loanAmount", v)}
          />
          <PercentInput
            id="csf-rate"
            label="Interest rate"
            value={inputs.interestRatePct}
            onChange={(v) => update("interestRatePct", v)}
            max={30}
          />
        </div>
      </div>

      <div>
        <div className="rounded-2xl border border-border bg-surface-muted/40 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wider text-accent uppercase">ROI outputs</p>
          <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {formatCurrency(result.ownerCashFlow)}
          </p>
          <p className="mt-1 text-sm text-ink-muted">Estimated owner cash flow / year</p>

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
              <p className="text-xs text-ink-faint">Cash invested</p>
              <p className="font-semibold tabular-nums text-ink">{formatCurrency(result.cashInvested)}</p>
            </div>
            <div>
              <p className="text-xs text-ink-faint">Annual debt service</p>
              <p className="font-semibold tabular-nums text-ink">
                {formatCurrency(result.annualDebtService)}
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            Directional estimate only — rebuild with current FDD Item 7 / Item 19 figures, local contractor quotes, and
            lender terms before investing.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { CoffeeShopCalculatorFooter } from "@/components/calculator/CoffeeShopCalculatorFooter";
import {
  calculateValuation,
  coffeeShopDataLinks,
  defaultInputs,
  estimateSde,
  faqs,
  formatCurrency,
  formatMultiple,
  multipleRanges,
  relatedTools,
} from "@/lib/industries/coffee-shop-valuation-calculator";

export function CoffeeShopValuationCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const [sdeManual, setSdeManual] = useState(false);
  const result = useMemo(() => calculateValuation(inputs), [inputs]);

  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) => {
    setInputs((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "sde") setSdeManual(true);
      else if (key === "netProfit" || key === "ownerSalary") {
        setSdeManual(false);
        next.sde = estimateSde(next.netProfit, next.ownerSalary);
      }
      return next;
    });
  };

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Business Financials</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <CurrencyInput id="profit" label="Net Profit" value={inputs.netProfit} onChange={(v) => update("netProfit", v)} />
                <CurrencyInput id="salary" label="Owner Salary" value={inputs.ownerSalary} onChange={(v) => update("ownerSalary", v)} />
                <CurrencyInput id="sde" label="SDE" value={inputs.sde} onChange={(v) => update("sde", v)} tooltip={sdeManual ? "Manual override" : "Auto: Net Profit + Owner Salary"} />
                <label htmlFor="multiple" className="block">
                  <span className="text-sm font-medium text-ink-muted">SDE Multiple</span>
                  <input id="multiple" type="number" min={1} max={5} step={0.1} value={inputs.sdeMultiple}
                    onChange={(e) => update("sdeMultiple", Number(e.target.value) || 3)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">Estimated Value</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-valuation">
                  {formatCurrency(result.recommendedValue)}
                </p>
                <p className="mt-3 text-sm text-ink-muted">
                  Range: {formatCurrency(result.valueLow)} – {formatCurrency(result.valueHigh)}
                </p>
                <p className="mt-2 text-xs text-ink-faint">
                  At {formatMultiple(inputs.sdeMultiple)} SDE on {formatCurrency(inputs.sde)} SDE
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <p className="text-xs text-ink-faint">SDE-Based Value</p>
                  <p className="mt-1 font-bold tabular-nums text-ink">{formatCurrency(result.sdeValue)}</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <p className="text-xs text-ink-faint">Revenue-Based Value</p>
                  <p className="mt-1 font-bold tabular-nums text-ink">{formatCurrency(result.revenueValue)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Industry Multiples</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {multipleRanges.map((m) => (
              <li key={m.label} className="rounded-2xl border border-border bg-surface p-5 text-center">
                <p className="text-sm text-ink-muted">{m.label}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-accent">{m.range}</p>
                <p className="mt-1 text-xs text-ink-faint">Median {formatMultiple(m.median)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CoffeeShopCalculatorFooter relatedTools={relatedTools} dataLinks={coffeeShopDataLinks} faqs={faqs} />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { CoffeeShopCalculatorFooter } from "@/components/calculator/CoffeeShopCalculatorFooter";
import { coffeeShopDataLinks } from "@/lib/industries/coffee-shop-calculators-shared";
import {
  calculateLabor,
  coffeeShopIndustryAverages,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
} from "@/lib/industries/coffee-shop-labor-cost-calculator";

export function CoffeeShopLaborCostCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateLabor(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Staffing Model</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <CurrencyInput id="manager" label="Manager Salary" value={inputs.managerSalary} onChange={(v) => update("managerSalary", v)} />
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Full-Time Baristas</span>
                  <input type="number" min={0} value={inputs.fullTimeBaristas} onChange={(e) => update("fullTimeBaristas", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Part-Time Baristas</span>
                  <input type="number" min={0} value={inputs.partTimeBaristas} onChange={(e) => update("partTimeBaristas", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">FT Hourly Wage</span>
                  <input type="number" min={0} step={0.5} value={inputs.ftHourlyWage} onChange={(e) => update("ftHourlyWage", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">PT Hourly Wage</span>
                  <input type="number" min={0} step={0.5} value={inputs.ptHourlyWage} onChange={(e) => update("ptHourlyWage", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Total Labor Cost</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-ink">{formatCurrency(result.totalLabor)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Labor Cost %</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatPercent(result.laborPct)}</p>
                <p className="mt-1 text-xs text-ink-faint">Target: 28–32%</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total Staff</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{result.totalStaff}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">vs. Industry Average ({coffeeShopIndustryAverages.laborCostPct}%)</p>
                <p className="mt-2 font-semibold capitalize text-ink">
                  {result.status === "above" ? "Above benchmark — review scheduling" : result.status === "below" ? "Below benchmark — efficient staffing" : "Within benchmark range"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoffeeShopCalculatorFooter relatedTools={relatedTools} dataLinks={coffeeShopDataLinks} faqs={faqs} />
    </>
  );
}

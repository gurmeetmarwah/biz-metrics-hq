"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import { optometryDataLinks } from "@/lib/industries/optometry-calculators-shared";
import {
  calculateStaffing,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/optometry-practice-staffing-cost-calculator";

export function OptometryPracticeStaffingCostCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateStaffing(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Payroll Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <CurrencyInput id="owner" label="Owner OD Pay" value={inputs.ownerOdPay} onChange={(v) => update("ownerOdPay", v)} />
                <CurrencyInput id="associate" label="Associate OD Pay" value={inputs.associateOdPay} onChange={(v) => update("associateOdPay", v)} />
                <CurrencyInput id="optician" label="Optician Pay" value={inputs.opticianPay} onChange={(v) => update("opticianPay", v)} />
                <CurrencyInput id="admin" label="Admin Pay" value={inputs.adminPay} onChange={(v) => update("adminPay", v)} />
                <CurrencyInput id="other" label="Other Staff Pay" value={inputs.otherStaffPay} onChange={(v) => update("otherStaffPay", v)} />
                <label htmlFor="ods" className="block">
                  <span className="text-sm font-medium text-ink-muted">Number of ODs</span>
                  <input id="ods" type="number" min={1} max={10} value={inputs.odCount}
                    onChange={(e) => update("odCount", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Total Payroll</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-ink">{formatCurrency(result.totalPayroll)}</p>
                <p className="mt-2 text-sm text-ink-muted">Staffing burden: {formatPercent(result.staffingPct)} · {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per OD</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenuePerOd)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Employee</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerEmployee)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Non-OD Payroll</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.nonOdPayroll)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Non-OD % of Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.nonOdPct)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Industry Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industryBenchmarks.map((row) => (
              <li key={row.metric} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-1 font-bold text-ink">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OptometryCalculatorFooter calculatorId="staffing-cost" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}

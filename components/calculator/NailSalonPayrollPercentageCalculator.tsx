"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { NailSalonCalculatorFooter } from "@/components/calculator/NailSalonCalculatorFooter";
import {
  calculatePayroll,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  nailSalonDataLinks,
  relatedTools,
} from "@/lib/industries/nail-salon-payroll-percentage-calculator";

export function NailSalonPayrollPercentageCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculatePayroll(inputs), [inputs]);
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
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                <CurrencyInput id="tech" label="Technician Payroll" value={inputs.technicianPayroll} onChange={(v) => update("technicianPayroll", v)} />
                <CurrencyInput id="front" label="Front-desk & Support Payroll" value={inputs.frontDeskPayroll} onChange={(v) => update("frontDeskPayroll", v)} />
                <PercentInput id="taxes" label="Payroll Taxes & Benefits %" value={inputs.payrollTaxBenefitPct} onChange={(v) => update("payrollTaxBenefitPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Fully Loaded Payroll %</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatPercent(result.loadedPayrollPct)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Base Payroll</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.basePayroll)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Fully Loaded Payroll</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.loadedPayroll)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Base Payroll % (before taxes & benefits)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.basePayrollPct)}</p>
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
      <NailSalonCalculatorFooter calculatorId="payroll-percentage" relatedTools={relatedTools} dataLinks={nailSalonDataLinks} faqs={faqs} />
    </>
  );
}

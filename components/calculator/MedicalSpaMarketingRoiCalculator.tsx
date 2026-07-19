"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { MedicalSpaCalculatorFooter } from "@/components/calculator/MedicalSpaCalculatorFooter";
import {
  calculateMarketingRoi,
  defaultInputs,
  faqs,
  formatCurrency,
  formatMultiple,
  industryBenchmarks,
  medicalSpaDataLinks,
  relatedTools,
} from "@/lib/industries/medical-spa-marketing-roi-calculator";

export function MedicalSpaMarketingRoiCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateMarketingRoi(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Marketing Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="spend" label="Marketing Spend" value={inputs.marketingSpend} onChange={(v) => update("marketingSpend", v)} />
                <label htmlFor="patients" className="block">
                  <span className="text-sm font-medium text-ink-muted">New Patients Acquired</span>
                  <input id="patients" type="number" min={0} value={inputs.newPatients}
                    onChange={(e) => update("newPatients", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="revenue" label="Avg Revenue per Patient" value={inputs.avgRevenuePerPatient} onChange={(v) => update("avgRevenuePerPatient", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Marketing ROI</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatMultiple(result.roi)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue from New Patients</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenueFromNewPatients)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Net Return</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.netReturn)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Cost per New Patient</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.costPerPatient)}</p>
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
      <MedicalSpaCalculatorFooter calculatorId="marketing-roi" relatedTools={relatedTools} dataLinks={medicalSpaDataLinks} faqs={faqs} />
    </>
  );
}

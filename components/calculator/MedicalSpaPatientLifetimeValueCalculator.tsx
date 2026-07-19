"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { MedicalSpaCalculatorFooter } from "@/components/calculator/MedicalSpaCalculatorFooter";
import {
  calculatePatientLtv,
  defaultInputs,
  faqs,
  formatCurrency,
  industryBenchmarks,
  medicalSpaDataLinks,
  relatedTools,
} from "@/lib/industries/medical-spa-patient-lifetime-value-calculator";

export function MedicalSpaPatientLifetimeValueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculatePatientLtv(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const numberField = (id: string, label: string, key: keyof typeof inputs, min = 1, step = 1) => (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      <input
        id={id}
        type="number"
        min={min}
        step={step}
        value={inputs[key]}
        onChange={(e) => update(key, (Number(e.target.value) || 0) as (typeof inputs)[typeof key])}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Patient LTV Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="treatment" label="Average Treatment Value" value={inputs.averageTreatment} onChange={(v) => update("averageTreatment", v)} />
                {numberField("visits", "Visits per Year", "visitsPerYear")}
                {numberField("lifespan", "Patient Lifespan (Years)", "patientLifespanYears", 1, 0.5)}
                <PercentInput id="margin" label="Gross Margin %" value={inputs.grossMarginPct} onChange={(v) => update("grossMarginPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Patient Lifetime Value</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.lifetimeRevenue)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Value per Patient</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.annualValuePerPatient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Lifetime Gross Profit</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.lifetimeGrossProfit)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Monthly Value per Patient</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.monthlyValuePerPatient)}</p>
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
      <MedicalSpaCalculatorFooter calculatorId="patient-lifetime-value" relatedTools={relatedTools} dataLinks={medicalSpaDataLinks} faqs={faqs} />
    </>
  );
}

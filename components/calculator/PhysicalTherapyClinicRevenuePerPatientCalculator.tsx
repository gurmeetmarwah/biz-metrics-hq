"use client";

import { useMemo, useState } from "react";
import { PhysicalTherapyCalculatorFooter } from "@/components/calculator/PhysicalTherapyCalculatorFooter";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { physicalTherapyDataLinks } from "@/lib/industries/physical-therapy-calculators-shared";
import {
  calculateRevenuePerPatient,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  patientBenchmarks,
  relatedTools,
} from "@/lib/industries/physical-therapy-clinic-revenue-per-patient-calculator";

export function PhysicalTherapyClinicRevenuePerPatientCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenuePerPatient(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Patient Metrics</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="patients" className="block">
                  <span className="text-sm font-medium text-ink-muted">Active Patients</span>
                  <input
                    id="patients"
                    type="number"
                    min={100}
                    step={50}
                    value={inputs.activePatients}
                    onChange={(e) => update("activePatients", Number(e.target.value) || 1400)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="revenue"
                  label="Annual Revenue"
                  value={inputs.annualRevenue}
                  onChange={(v) => update("annualRevenue", v)}
                />
                <label htmlFor="retention" className="block">
                  <span className="text-sm font-medium text-ink-muted">Average Retention (Years)</span>
                  <input
                    id="retention"
                    type="number"
                    min={1}
                    max={15}
                    step={0.5}
                    value={inputs.retentionYears}
                    onChange={(e) => update("retentionYears", Number(e.target.value) || 3)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="newPatients" className="block">
                  <span className="text-sm font-medium text-ink-muted">New Patients Per Month</span>
                  <input
                    id="newPatients"
                    type="number"
                    min={0}
                    step={1}
                    value={inputs.newPatientsPerMonth}
                    onChange={(e) => update("newPatientsPerMonth", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="cac"
                  label="Patient Acquisition Cost"
                  value={inputs.acquisitionCost}
                  onChange={(v) => update("acquisitionCost", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Revenue Per Active Patient</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenuePerPatient)}
                  <span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">{result.tier} vs benchmark</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Patient Lifetime Value</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatCurrency(result.ltv)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">LTV : CAC Ratio</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatNumber(result.ltvToCac, 1)}:1
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">CAC Payback Period</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatNumber(result.paybackMonths, 1)} months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Patient Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {patientBenchmarks.map((row) => (
              <li key={row.metric} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-accent">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PhysicalTherapyCalculatorFooter
        calculatorId="revenue-per-patient"
        relatedTools={relatedTools}
        dataLinks={physicalTherapyDataLinks}
        faqs={faqs}
      />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import {
  calculateRevenuePerPatient,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  industryBenchmarks,
  optometryDataLinks,
  relatedTools,
} from "@/lib/industries/optometry-practice-revenue-per-patient-calculator";

export function OptometryPracticeRevenuePerPatientCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Patient Economics</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="patients" className="block">
                  <span className="text-sm font-medium text-ink-muted">Active Patients</span>
                  <input id="patients" type="number" min={1} value={inputs.activePatients}
                    onChange={(e) => update("activePatients", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="visits" className="block">
                  <span className="text-sm font-medium text-ink-muted">Annual Visits</span>
                  <input id="visits" type="number" min={1} value={inputs.annualVisits}
                    onChange={(e) => update("annualVisits", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="examFee" label="Average Exam Fee" value={inputs.examFee} onChange={(v) => update("examFee", v)} />
                <PercentInput id="capture" label="Optical Capture %" value={inputs.opticalCapturePct} onChange={(v) => update("opticalCapturePct", v)} />
                <CurrencyInput id="ticket" label="Average Optical Ticket" value={inputs.averageOpticalTicket} onChange={(v) => update("averageOpticalTicket", v)} />
                <PercentInput id="clPatients" label="Contact Lens Patients %" value={inputs.contactLensPatientsPct} onChange={(v) => update("contactLensPatientsPct", v)} />
                <CurrencyInput id="clRevenue" label="Annual CL Revenue Per Patient" value={inputs.annualContactLensRevenue} onChange={(v) => update("annualContactLensRevenue", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Revenue Per Patient</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.totalPerPatient)}</p>
                <p className="mt-2 text-sm text-ink-muted">Total practice revenue: {formatCurrency(result.totalRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Exam Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">{formatCurrency(result.examRevenuePerPatient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Optical Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-accent">{formatCurrency(result.opticalRevenuePerPatient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Contact Lens</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">{formatCurrency(result.contactRevenuePerPatient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Visits Per Patient</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">{formatNumber(result.visitsPerPatient, 1)}</p>
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
      <OptometryCalculatorFooter calculatorId="revenue-per-patient" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}

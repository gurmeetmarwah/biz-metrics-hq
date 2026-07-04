"use client";

import { useMemo, useState } from "react";
import { PercentInput } from "@/components/ui/PercentInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import { optometryDataLinks } from "@/lib/industries/optometry-calculators-shared";
import {
  calculateInsuranceMix,
  defaultInputs,
  faqs,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/optometry-practice-insurance-mix-calculator";

export function OptometryPracticeInsuranceMixCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateInsuranceMix(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Payer Mix</h2>
              <div className="mt-6 space-y-4">
                <PercentInput id="visionPct" label="Vision Plan Revenue %" value={inputs.visionPlanPct} onChange={(v) => update("visionPlanPct", v)} />
                <PercentInput id="visionMargin" label="Vision Plan Margin %" value={inputs.visionPlanMargin} onChange={(v) => update("visionPlanMargin", v)} />
                <PercentInput id="medPct" label="Medical Billing %" value={inputs.medicalBillingPct} onChange={(v) => update("medicalBillingPct", v)} />
                <PercentInput id="medMargin" label="Medical Billing Margin %" value={inputs.medicalBillingMargin} onChange={(v) => update("medicalBillingMargin", v)} />
                <PercentInput id="privatePct" label="Private Pay %" value={inputs.privatePayPct} onChange={(v) => update("privatePayPct", v)} />
                <PercentInput id="privateMargin" label="Private Pay Margin %" value={inputs.privatePayMargin} onChange={(v) => update("privatePayMargin", v)} />
                <PercentInput id="retailPct" label="Retail Optical %" value={inputs.retailOpticalPct} onChange={(v) => update("retailOpticalPct", v)} />
                <PercentInput id="retailMargin" label="Retail Optical Margin %" value={inputs.retailOpticalMargin} onChange={(v) => update("retailOpticalMargin", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Blended Margin</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-margin">{formatPercent(result.blendedMargin)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Insurance Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.insurancePct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Cash + Retail</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatPercent(result.cashRetailPct, 0)}</p>
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
      <OptometryCalculatorFooter calculatorId="insurance-mix" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}

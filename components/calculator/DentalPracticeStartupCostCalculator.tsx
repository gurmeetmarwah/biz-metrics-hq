"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { DentalCalculatorFooter } from "@/components/calculator/DentalCalculatorFooter";
import {
  calculateStartup,
  defaultInputs,
  dentalDataLinks,
  faqs,
  formatCurrency,
  presets,
  relatedTools,
} from "@/lib/industries/dental-practice-startup-cost-calculator";

export function DentalPracticeStartupCostCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateStartup(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Investment Line Items</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="equipment" label="Dental Equipment" value={inputs.dentalEquipment} onChange={(v) => update("dentalEquipment", v)} />
                <CurrencyInput id="buildout" label="Buildout & Leasehold" value={inputs.buildoutLeasehold} onChange={(v) => update("buildoutLeasehold", v)} />
                <CurrencyInput id="tech" label="Technology & Software" value={inputs.technologySoftware} onChange={(v) => update("technologySoftware", v)} />
                <CurrencyInput id="permits" label="Permits & Licenses" value={inputs.permitsLicenses} onChange={(v) => update("permitsLicenses", v)} />
                <CurrencyInput id="marketing" label="Marketing & Launch" value={inputs.marketingLaunch} onChange={(v) => update("marketingLaunch", v)} />
                <CurrencyInput id="working" label="Working Capital" value={inputs.workingCapital} onChange={(v) => update("workingCapital", v)} />
                <CurrencyInput id="acquisition" label="Acquisition Price (if buying)" value={inputs.acquisitionPrice} onChange={(v) => update("acquisitionPrice", v)} tooltip="Leave at $0 for de novo startup" />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">Total Investment</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.total)}</p>
                <p className="mt-3 text-sm text-ink-muted">{result.isAcquisition ? "Acquisition + transition costs" : "De novo startup"} · {result.tier}</p>
              </div>
              <div className="mt-4 space-y-2">
                {result.lineItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                    <span className="text-sm text-ink-muted">{item.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold tabular-nums text-ink">{formatCurrency(item.amount)}</span>
                      <span className="ml-2 text-xs text-ink-faint">{item.pct.toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Startup Presets</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {presets.map((preset) => (
              <li key={preset.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold text-ink">{preset.label}</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-accent">{formatCurrency(preset.total)}</p>
                <p className="mt-2 text-sm text-ink-muted">{preset.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DentalCalculatorFooter calculatorId="startup-cost" relatedTools={relatedTools} dataLinks={dentalDataLinks} faqs={faqs} />
    </>
  );
}

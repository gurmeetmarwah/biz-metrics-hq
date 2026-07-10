"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { HairSalonCalculatorFooter } from "@/components/calculator/HairSalonCalculatorFooter";
import {
  calculateStartup,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  hairSalonDataLinks,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/hair-salon-startup-cost-calculator";

export function HairSalonStartupCostCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Startup Line Items</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="buildout" label="Buildout & Renovation" value={inputs.buildout} onChange={(v) => update("buildout", v)} />
                <CurrencyInput id="stations" label="Stations & Equipment" value={inputs.stationsEquipment} onChange={(v) => update("stationsEquipment", v)} />
                <CurrencyInput id="furniture" label="Furniture & Fixtures" value={inputs.furnitureFixtures} onChange={(v) => update("furnitureFixtures", v)} />
                <CurrencyInput id="inventory" label="Initial Inventory" value={inputs.initialInventory} onChange={(v) => update("initialInventory", v)} />
                <CurrencyInput id="licensing" label="Licensing & Permits" value={inputs.licensingPermits} onChange={(v) => update("licensingPermits", v)} />
                <CurrencyInput id="branding" label="Branding & Marketing" value={inputs.brandingMarketing} onChange={(v) => update("brandingMarketing", v)} />
                <CurrencyInput id="working" label="Working Capital" value={inputs.workingCapital} onChange={(v) => update("workingCapital", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">Total Startup Cost</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.total)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Budget tier: {result.tier}</p>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-muted/50">
                      <th className="px-5 py-3.5 text-left font-semibold text-ink">Line Item</th>
                      <th className="px-5 py-3.5 text-right font-semibold text-ink">Amount</th>
                      <th className="px-5 py-3.5 text-right font-semibold text-ink">% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.map((row, i) => (
                      <tr key={row.label} className={i < result.breakdown.length - 1 ? "border-b border-border-subtle" : ""}>
                        <td className="px-5 py-3.5 text-ink-muted">{row.label}</td>
                        <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-ink">{formatCurrency(row.value)}</td>
                        <td className="px-5 py-3.5 text-right tabular-nums text-ink-muted">{formatPercent(row.percent, 0)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
      <HairSalonCalculatorFooter calculatorId="startup-cost" relatedTools={relatedTools} dataLinks={hairSalonDataLinks} faqs={faqs} />
    </>
  );
}

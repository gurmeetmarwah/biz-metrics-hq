"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { FoodTruckCalculatorFooter } from "@/components/calculator/FoodTruckCalculatorFooter";
import {
  calculateStartup,
  defaultInputs,
  faqs,
  foodTruckDataLinks,
  formatCurrency,
  presets,
  relatedTools,
} from "@/lib/industries/food-truck-startup-cost-calculator";

export function FoodTruckStartupCostCalculator() {
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
                <CurrencyInput id="truck" label="Truck Purchase" value={inputs.truckPurchase} onChange={(v) => update("truckPurchase", v)} />
                <CurrencyInput id="equipment" label="Kitchen Equipment" value={inputs.kitchenEquipment} onChange={(v) => update("kitchenEquipment", v)} />
                <CurrencyInput id="permits" label="Permits & Licenses" value={inputs.permits} onChange={(v) => update("permits", v)} />
                <CurrencyInput id="branding" label="Branding & Wrap" value={inputs.brandingWrap} onChange={(v) => update("brandingWrap", v)} />
                <CurrencyInput id="inventory" label="Initial Inventory" value={inputs.initialInventory} onChange={(v) => update("initialInventory", v)} />
                <CurrencyInput id="working" label="Working Capital" value={inputs.workingCapital} onChange={(v) => update("workingCapital", v)} />
                <CurrencyInput id="commissary" label="Commissary Deposit" value={inputs.commissaryDeposit} onChange={(v) => update("commissaryDeposit", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-accent/5 p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Total Startup Investment</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-ink">{formatCurrency(result.total)}</p>
                <p className="mt-3 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">
                  {result.tier} Tier
                </p>
              </div>
              <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-6">
                {result.lineItems.map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">{item.label}</span>
                    <span className="font-semibold tabular-nums text-ink">
                      {formatCurrency(item.amount)} ({item.pct.toFixed(0)}%)
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Investment Presets</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {presets.map((preset) => (
              <li key={preset.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold text-ink">{preset.label}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-accent">{formatCurrency(preset.total)}</p>
                <p className="mt-2 text-sm text-ink-muted">{preset.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FoodTruckCalculatorFooter calculatorId="startup-cost" relatedTools={relatedTools} dataLinks={foodTruckDataLinks} faqs={faqs} />
    </>
  );
}

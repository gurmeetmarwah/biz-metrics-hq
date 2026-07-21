"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import {
  buildDefaultInputs,
  calculateFitnessFranchise,
  type FitnessFranchiseCalculatorSlug,
  type FitnessFranchiseVertical,
} from "@/lib/franchise/fitness/franchise-calculators";

type Props = {
  vertical: FitnessFranchiseVertical;
  slug: FitnessFranchiseCalculatorSlug;
};

export function FitnessFranchiseCalculator({ vertical, slug }: Props) {
  const [inputs, setInputs] = useState(() => buildDefaultInputs(vertical));
  const result = useMemo(() => calculateFitnessFranchise(slug, inputs), [slug, inputs]);

  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 lg:max-w-md">
            <h2 className="font-display text-lg font-semibold text-ink">Assumptions</h2>
            <div className="mt-6 space-y-4">
              {(slug === "startup-cost" || slug === "roi" || slug === "payback-period" || slug === "cash-flow") && (
                <>
                  <CurrencyInput id="franchiseFee" label="Franchise Fee" value={inputs.franchiseFee} onChange={(v) => update("franchiseFee", v)} />
                  <CurrencyInput id="buildout" label="Leasehold / Buildout" value={inputs.buildout} onChange={(v) => update("buildout", v)} />
                  <CurrencyInput id="equipment" label="Equipment" value={inputs.equipment} onChange={(v) => update("equipment", v)} />
                  <CurrencyInput id="workingCapital" label="Working Capital" value={inputs.workingCapital} onChange={(v) => update("workingCapital", v)} />
                  <CurrencyInput id="launchMarketing" label="Launch Marketing" value={inputs.launchMarketing} onChange={(v) => update("launchMarketing", v)} />
                  <CurrencyInput id="otherStartup" label="Other / Contingency" value={inputs.otherStartup} onChange={(v) => update("otherStartup", v)} />
                </>
              )}

              {(slug === "roi" ||
                slug === "royalty-fee" ||
                slug === "payback-period" ||
                slug === "owner-salary" ||
                slug === "cash-flow" ||
                slug === "ebitda" ||
                slug === "valuation") && (
                <>
                  <CurrencyInput id="annualRevenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                  <PercentInput id="ebitdaMarginPct" label="EBITDA Margin %" value={inputs.ebitdaMarginPct} onChange={(v) => update("ebitdaMarginPct", v)} />
                  <PercentInput id="royaltyPct" label="Royalty %" value={inputs.royaltyPct} onChange={(v) => update("royaltyPct", v)} />
                  <PercentInput id="marketingPct" label="Marketing Fund %" value={inputs.marketingPct} onChange={(v) => update("marketingPct", v)} />
                </>
              )}

              {(slug === "owner-salary" || slug === "cash-flow" || slug === "valuation") && (
                <CurrencyInput id="ownerSalary" label="Owner Salary / Draw" value={inputs.ownerSalary} onChange={(v) => update("ownerSalary", v)} />
              )}

              {slug === "valuation" && (
                <label htmlFor="sdeMultiple" className="block">
                  <span className="text-sm font-medium text-ink-muted">SDE Multiple</span>
                  <input
                    id="sdeMultiple"
                    type="number"
                    step="0.1"
                    min="1"
                    max="8"
                    value={inputs.sdeMultiple}
                    onChange={(e) => update("sdeMultiple", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
              )}

              {(slug === "break-even" || slug === "membership-revenue") && (
                <>
                  <CurrencyInput id="members" label="Active Members" value={inputs.members} onChange={(v) => update("members", v)} />
                  <CurrencyInput id="avgMonthlyDues" label="Avg Monthly Dues" value={inputs.avgMonthlyDues} onChange={(v) => update("avgMonthlyDues", v)} />
                  <CurrencyInput id="ancillaryMonthly" label="Ancillary $/Member/Month" value={inputs.ancillaryMonthly} onChange={(v) => update("ancillaryMonthly", v)} />
                </>
              )}

              {slug === "break-even" && (
                <>
                  <CurrencyInput id="fixedMonthlyCosts" label="Monthly Fixed Costs" value={inputs.fixedMonthlyCosts} onChange={(v) => update("fixedMonthlyCosts", v)} />
                  <PercentInput id="variableCostPct" label="Variable Cost %" value={inputs.variableCostPct} onChange={(v) => update("variableCostPct", v)} />
                  <PercentInput id="royaltyPctBe" label="Royalty %" value={inputs.royaltyPct} onChange={(v) => update("royaltyPct", v)} />
                  <PercentInput id="marketingPctBe" label="Marketing Fund %" value={inputs.marketingPct} onChange={(v) => update("marketingPct", v)} />
                </>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl border border-border bg-surface-muted/40 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">{result.headlineLabel}</p>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{result.headline}</p>
              <dl className="mt-8 space-y-3">
                {result.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-ink-muted">{row.label}</dt>
                    <dd className="text-sm font-semibold tabular-nums text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-ink-faint">
                Directional estimate only — rebuild with current FDD fees, local rent, payroll, and membership pricing before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

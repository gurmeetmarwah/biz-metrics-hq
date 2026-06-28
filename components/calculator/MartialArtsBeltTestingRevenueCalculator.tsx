"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { MartialArtsCalculatorFooter, MartialArtsNumberInput } from "@/components/calculator/MartialArtsCalculatorFooter";
import { formatPercent, martialArtsDataLinks } from "@/lib/industries/martial-arts-calculators-shared";
import {
  beltTestingBenchmarks,
  calculateBeltTestingRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  martialArtsIndustryAverages,
  relatedTools,
} from "@/lib/industries/martial-arts-belt-testing-revenue-calculator";

export function MartialArtsBeltTestingRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateBeltTestingRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Belt Testing Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Model promotion fee revenue from testing cycles and student progression.</p>
              <div className="mt-6 space-y-4">
                <MartialArtsNumberInput
                  id="students"
                  label="Active Students"
                  value={inputs.activeStudents}
                  onChange={(v) => update("activeStudents", v)}
                  max={2000}
                />
                <MartialArtsNumberInput
                  id="tests"
                  label="Belt Tests Per Year"
                  value={inputs.beltTestsPerYear}
                  onChange={(v) => update("beltTestsPerYear", v)}
                  max={12}
                />
                <CurrencyInput
                  id="fee"
                  label="Average Belt Test Fee"
                  value={inputs.averageBeltTestFee}
                  onChange={(v) => update("averageBeltTestFee", v)}
                />
                <PercentInput
                  id="pass-rate"
                  label="Pass Rate"
                  value={inputs.passRatePct}
                  onChange={(v) => update("passRatePct", v)}
                />
                <PercentInput
                  id="eligible"
                  label="Eligible Students %"
                  value={inputs.eligibleStudentPct}
                  onChange={(v) => update("eligibleStudentPct", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Annual Belt Testing Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.annualBeltRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.monthlyBeltRevenue)}/mo
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Promotions Per Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{Math.round(result.promotionsPerYear)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Eligible Students</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{Math.round(result.eligibleStudents)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Student / Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerStudentAnnual)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">% of Median School Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.pctOfMedianSchoolRevenue, 1)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">
                  $55K – $95K annual belt revenue · ~{formatPercent(10, 0)} of median school revenue
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  Median school ~{formatCurrency(martialArtsIndustryAverages.revenue)} · target ~{formatCurrency(result.impliedAnnualFromBenchmark)}/yr from belt testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Belt Testing Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Industry Range</th>
                </tr>
              </thead>
              <tbody>
                {beltTestingBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < beltTestingBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <MartialArtsCalculatorFooter relatedTools={relatedTools} dataLinks={martialArtsDataLinks} faqs={faqs} />
    </>
  );
}

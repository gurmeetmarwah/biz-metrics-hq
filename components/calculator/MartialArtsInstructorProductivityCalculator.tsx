"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { MartialArtsCalculatorFooter, MartialArtsNumberInput } from "@/components/calculator/MartialArtsCalculatorFooter";
import { formatPercent, martialArtsDataLinks } from "@/lib/industries/martial-arts-calculators-shared";
import {
  calculateInstructorProductivity,
  defaultInputs,
  faqs,
  formatCurrency,
  martialArtsIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/martial-arts-instructor-productivity-calculator";

export function MartialArtsInstructorProductivityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateInstructorProductivity(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Instructor Schedule</h2>
              <p className="mt-1 text-sm text-ink-muted">Model revenue per instructor from classes and private lessons.</p>
              <div className="mt-6 space-y-4">
                <MartialArtsNumberInput
                  id="instructors"
                  label="Instructor Count"
                  value={inputs.instructorCount}
                  onChange={(v) => update("instructorCount", v)}
                  max={50}
                />
                <MartialArtsNumberInput
                  id="classes"
                  label="Group Classes Per Instructor / Week"
                  value={inputs.classesPerInstructorPerWeek}
                  onChange={(v) => update("classesPerInstructorPerWeek", v)}
                  max={40}
                />
                <MartialArtsNumberInput
                  id="privates"
                  label="Private Lessons Per Instructor / Month"
                  value={inputs.privatesPerInstructorPerMonth}
                  onChange={(v) => update("privatesPerInstructorPerMonth", v)}
                  max={120}
                />
                <CurrencyInput
                  id="group-rev"
                  label="Avg Group Class Revenue"
                  value={inputs.avgGroupClassRevenue}
                  onChange={(v) => update("avgGroupClassRevenue", v)}
                />
                <CurrencyInput
                  id="private-rev"
                  label="Avg Private Lesson Revenue"
                  value={inputs.avgPrivateLessonRevenue}
                  onChange={(v) => update("avgPrivateLessonRevenue", v)}
                />
                <MartialArtsNumberInput
                  id="hours"
                  label="Teaching Hours Per Week"
                  value={inputs.teachingHoursPerWeek}
                  onChange={(v) => update("teachingHoursPerWeek", v)}
                  max={50}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Annual Revenue Per Instructor</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.annualRevenuePerInstructor)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.totalAnnualRevenue)} total school revenue
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Weekly Revenue / Instructor</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.weeklyRevenuePerInstructor)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Teaching Hour</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerTeachingHour)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.utilizationPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">$110K – $185K revenue per instructor annually</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmark >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmark)} vs ~{formatCurrency(martialArtsIndustryAverages.revenuePerInstructorAnnual)} median
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Productivity Benchmarks</h2>
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
                {productivityBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < productivityBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
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

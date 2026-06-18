"use client";

import { useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  benchmarkTierStyles,
  calculateValuation,
  comparisonTable,
  defaultValuationInputs,
  estimateSde,
  formatCurrency,
  formatMultiple,
  industryMedianSdeMultiple,
  relatedMetricsLinks,
  restaurantTypeOptions,
  valuationFaqs,
  type RestaurantType,
  type ValuationInputs,
} from "@/lib/industries/restaurant-valuation-calculator";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { CurrencyInput } from "@/components/ui/CurrencyInput";

export function RestaurantValuationCalculator() {
  const [inputs, setInputs] = useState<ValuationInputs>(defaultValuationInputs);
  const [sdeManual, setSdeManual] = useState(true);
  const sdeManualRef = useRef(true);
  const [calculated, setCalculated] = useState(true);
  const [revenueBoost, setRevenueBoost] = useState(10);
  const [targetMargin, setTargetMargin] = useState(12);
  const [addLocation, setAddLocation] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const syncSde = useCallback(
    (next: ValuationInputs) =>
      estimateSde(next.revenue, next.netProfit, next.ownership),
    []
  );

  const update = <K extends keyof ValuationInputs>(
    key: K,
    value: ValuationInputs[K]
  ) => {
    setInputs((prev) => {
      const next = { ...prev, [key]: value };

      if (key === "sde") {
        sdeManualRef.current = true;
        setSdeManual(true);
      } else if (
        key === "revenue" ||
        key === "netProfit" ||
        key === "ownership"
      ) {
        sdeManualRef.current = false;
        setSdeManual(false);
        next.sde = syncSde(next);
      }

      return next;
    });
    setCalculated(true);
  };

  const result = useMemo(() => calculateValuation(inputs), [inputs]);

  const scenarios = useMemo(() => {
    const boostedRevenue = inputs.revenue * (1 + revenueBoost / 100);
    const marginDelta = targetMargin - result.profitMargin;
    const boostedProfit =
      inputs.netProfit + inputs.revenue * (marginDelta / 100);
    const boostedSdeRevenue = inputs.sde * (1 + revenueBoost / 100);
    const boostedSdeMargin =
      inputs.sde + Math.max(0, inputs.revenue * (marginDelta / 100) * 0.7);

    const revenueScenario = calculateValuation({
      ...inputs,
      revenue: boostedRevenue,
      sde: boostedSdeRevenue,
      netProfit: inputs.netProfit * (1 + revenueBoost / 100),
    });

    const marginScenario = calculateValuation({
      ...inputs,
      netProfit: Math.max(0, boostedProfit),
      sde: boostedSdeMargin,
    });

    const locationScenario = calculateValuation({
      ...inputs,
      locations: inputs.locations + 1,
    });

    return {
      revenue: revenueScenario,
      margin: marginScenario,
      location: addLocation ? locationScenario : null,
    };
  }, [inputs, revenueBoost, targetMargin, addLocation, result.profitMargin]);

  const gaugePosition = Math.min(
    100,
    Math.max(0, (result.sdeMultiple / 4.5) * 100)
  );

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const text = `Restaurant Valuation Summary\nEstimated Value: ${formatCurrency(result.expectedValue)}\nRange: ${formatCurrency(result.lowEstimate)} – ${formatCurrency(result.highEstimate)}\nSDE Multiple: ${formatMultiple(result.sdeMultiple)}\nBenchmark: ${result.benchmarkTier}\n\nCalculated at BizMetricsHQ`;
    if (navigator.share) {
      await navigator.share({
        title: "Restaurant Valuation Summary",
        text,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Valuation summary copied to clipboard.");
    }
  };

  const tierStyle = benchmarkTierStyles[result.benchmarkTier];

  return (
    <div className="flex flex-col">
      {/* Primary calculator */}
      <section className="no-print border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Left: inputs */}
            <div className="order-1 flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">
                Restaurant Information
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Enter financials from your P&amp;L or tax returns.
              </p>

              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="val-revenue"
                  label="Annual Revenue"
                  value={inputs.revenue}
                  onChange={(v) => update("revenue", v)}
                />
                <CurrencyInput
                  id="val-profit"
                  label="Annual Net Profit"
                  value={inputs.netProfit}
                  onChange={(v) => update("netProfit", v)}
                />
                <CurrencyInput
                  id="val-sde"
                  label="Seller's Discretionary Earnings (SDE)"
                  value={inputs.sde}
                  onChange={(v) => update("sde", v)}
                  tooltip="Net profit + owner salary + discretionary add-backs. Auto-estimated when you change revenue or profit — edit directly to override."
                />
                <p className="text-xs text-ink-faint">
                  {sdeManual
                    ? "Linked to revenue & profit when you update those fields. Edit SDE directly to override."
                    : "SDE auto-estimated from revenue and profit. Edit SDE to set manually."}
                </p>

                <label htmlFor="val-type" className="block">
                  <span className="text-sm font-medium text-ink-muted">
                    Restaurant Type
                  </span>
                  <select
                    id="val-type"
                    value={inputs.restaurantType}
                    onChange={(e) =>
                      update("restaurantType", e.target.value as RestaurantType)
                    }
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  >
                    {restaurantTypeOptions.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="val-locations" className="block">
                  <span className="text-sm font-medium text-ink-muted">
                    Number of Locations
                  </span>
                  <select
                    id="val-locations"
                    value={inputs.locations}
                    onChange={(e) =>
                      update("locations", Number(e.target.value))
                    }
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5+</option>
                  </select>
                </label>

                <label htmlFor="val-years" className="block">
                  <span className="text-sm font-medium text-ink-muted">
                    Years in Business
                  </span>
                  <input
                    id="val-years"
                    type="number"
                    min={0}
                    max={50}
                    value={inputs.yearsInBusiness}
                    onChange={(e) =>
                      update("yearsInBusiness", Number(e.target.value) || 0)
                    }
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>

                <fieldset>
                  <legend className="text-sm font-medium text-ink-muted">
                    Ownership
                  </legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(
                      [
                        ["owner-operated", "Owner-operated"],
                        ["manager-operated", "Manager-operated"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => update("ownership", value)}
                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                          inputs.ownership === value
                            ? "border-accent bg-accent-soft text-accent"
                            : "border-border bg-surface text-ink-muted hover:border-border"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="mt-6 w-full rounded-xl bg-ink py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink/90 focus:outline-none focus:ring-4 focus:ring-ink/20"
              >
                Calculate Valuation
              </button>
            </div>

            {/* Right: results */}
            <div className="order-2 flex-1">
              <div
                className={`rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-accent-soft/20 p-6 shadow-sm sm:p-8 ${
                  calculated ? "" : "opacity-60"
                }`}
              >
                <p className="text-sm font-medium text-ink-muted">
                  Estimated Business Value
                </p>
                <p className="mt-2 font-display text-4xl font-bold tracking-tight text-ink tabular-nums sm:text-5xl">
                  {formatCurrency(result.expectedValue)}
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-ink">Valuation Range</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { label: "Low Estimate", value: result.lowEstimate },
                      { label: "Expected Value", value: result.expectedValue },
                      { label: "High Estimate", value: result.highEstimate },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl border px-3 py-4 text-center ${
                          item.label === "Expected Value"
                            ? "border-accent/30 bg-accent-soft/40"
                            : "border-border bg-surface"
                        }`}
                      >
                        <p className="text-xs text-ink-faint">{item.label}</p>
                        <p className="mt-1 text-sm font-bold tabular-nums text-ink sm:text-base">
                          {formatCurrency(item.value)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`}
                  >
                    {result.benchmarkTier}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini report */}
      <section className="border-b border-border/60 bg-surface-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div
            ref={reportRef}
            id="valuation-report"
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              Restaurant Valuation Summary
            </h2>
            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { label: "Estimated Value", value: formatCurrency(result.expectedValue) },
                { label: "Revenue", value: formatCurrency(inputs.revenue) },
                { label: "Profit Margin", value: `${result.profitMargin}%` },
                { label: "SDE Multiple", value: formatMultiple(result.sdeMultiple) },
                { label: "Benchmark Ranking", value: result.benchmarkTier },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-surface-muted/50 px-4 py-3"
                >
                  <dt className="text-xs font-medium text-ink-faint">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums text-ink sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="no-print mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-muted"
              >
                Download PDF
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Share Result
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple breakdown */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Valuation Multiple Breakdown
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            How your valuation translates across common pricing methods.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                label: "Revenue Multiple",
                value: formatMultiple(result.revenueMultiple),
                note: "Value ÷ annual revenue",
                color: "var(--metric-salary)",
              },
              {
                label: "SDE Multiple",
                value: formatMultiple(result.sdeMultiple),
                note: "Primary method for Main Street sales",
                color: "var(--metric-margin)",
              },
              {
                label: "EBITDA Multiple",
                value: formatMultiple(result.ebitdaMultiple),
                note: "Used for larger or absentee-owned ops",
                color: "var(--metric-valuation)",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <p className="text-sm font-medium text-ink-muted">{item.label}</p>
                <p
                  className="mt-2 text-3xl font-bold tabular-nums"
                  style={{ color: item.color }}
                >
                  {item.value}
                </p>
                <p className="mt-2 text-xs text-ink-faint">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benchmark */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            How Your Restaurant Compares
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium text-ink-faint sm:text-sm">
              <span>Below Average</span>
              <span>Average</span>
              <span>Strong</span>
              <span>Premium</span>
            </div>
            <div className="relative mt-4">
              <div className="flex h-3 overflow-hidden rounded-full">
                <div className="w-1/4 bg-metric-salary/35" />
                <div className="w-1/4 bg-accent/40" />
                <div className="w-1/4 bg-metric-revenue/40" />
                <div className="w-1/4 bg-metric-valuation/40" />
              </div>
              <div
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${gaugePosition}%` }}
              >
                <div className="size-4 rounded-full border-2 border-surface bg-ink shadow-md" />
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-muted/50 px-5 py-4">
                <p className="text-sm text-ink-muted">Your valuation multiple</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatMultiple(result.sdeMultiple)} SDE
                </p>
              </div>
              <div className="rounded-xl bg-surface-muted/50 px-5 py-4">
                <p className="text-sm text-ink-muted">Industry median</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatMultiple(industryMedianSdeMultiple)} SDE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value drivers */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Value Drivers
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Factors affecting your valuation multiple based on your inputs.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-metric-revenue/20 bg-metric-revenue/5 p-6">
              <h3 className="font-semibold text-ink">Factors Increasing Value</h3>
              <ul className="mt-4 space-y-2.5">
                {result.positiveDrivers.map((d, i) => (
                  <li
                    key={`pos-${i}`}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-bold text-metric-revenue"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-metric-salary/20 bg-metric-salary/5 p-6">
              <h3 className="font-semibold text-ink">Factors Reducing Value</h3>
              <ul className="mt-4 space-y-2.5">
                {result.negativeDrivers.map((d, i) => (
                  <li
                    key={`neg-${i}`}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-bold text-metric-salary"
                      aria-hidden="true"
                    >
                      !
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="no-print border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            What-If Scenarios
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Model how operational improvements could change your valuation.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <label htmlFor="rev-boost" className="font-semibold text-ink">
                Increase Revenue +{revenueBoost}%
              </label>
              <input
                id="rev-boost"
                type="range"
                min={0}
                max={30}
                value={revenueBoost}
                onChange={(e) => setRevenueBoost(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-ink-muted">
                  Current: {formatCurrency(result.expectedValue)}
                </span>
                <span aria-hidden="true">→</span>
                <span className="font-bold text-accent">
                  Projected: {formatCurrency(scenarios.revenue.expectedValue)}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <label htmlFor="margin-target" className="font-semibold text-ink">
                Increase Profit Margin to {targetMargin}%
              </label>
              <p className="mt-1 text-xs text-ink-faint">
                Current margin: {result.profitMargin}%
              </p>
              <input
                id="margin-target"
                type="range"
                min={Math.ceil(result.profitMargin)}
                max={25}
                value={targetMargin}
                onChange={(e) => setTargetMargin(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-ink-muted">
                  Current: {formatCurrency(result.expectedValue)}
                </span>
                <span aria-hidden="true">→</span>
                <span className="font-bold text-accent">
                  Projected: {formatCurrency(scenarios.margin.expectedValue)}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">Add Second Location</p>
                  <p className="mt-1 text-xs text-ink-faint">
                    Models valuation impact of an additional unit
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAddLocation((v) => !v)}
                  className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
                    addLocation
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-ink-muted"
                  }`}
                >
                  {addLocation ? "On" : "Off"}
                </button>
              </div>
              {addLocation && scenarios.location && (
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-ink-muted">
                    Current: {formatCurrency(result.expectedValue)}
                  </span>
                  <span aria-hidden="true">→</span>
                  <span className="font-bold text-accent">
                    Projected: {formatCurrency(scenarios.location.expectedValue)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Valuation Multiples by Restaurant Type
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Restaurant Type
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Typical Multiple
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr
                    key={row.type}
                    className={
                      i < comparisonTable.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.type}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.multiple}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sale readiness */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Business Sale Readiness
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            How prepared your restaurant is for a successful sale process.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-end gap-4">
              <p className="font-display text-5xl font-bold tabular-nums text-accent">
                {result.saleReadinessScore}
              </p>
              <p className="pb-2 text-lg text-ink-muted">/ 100</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${result.saleReadinessScore}%` }}
              />
            </div>
            <ul className="mt-6 space-y-3">
              {result.saleReadinessItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-ink-muted"
                >
                  <span
                    className={
                      item.met ? "text-metric-revenue" : "text-ink-faint"
                    }
                    aria-hidden="true"
                  >
                    {item.met ? "☑" : "☐"}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related metrics */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Related Restaurant Metrics
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedMetricsLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="card-interactive group flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6"
                >
                  <span className="font-semibold text-ink group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="mt-1 text-sm text-ink-muted">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8">
            <IndustryFaq faqs={valuationFaqs} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/methodology/" className="text-accent hover:underline">
              How we calculate restaurant valuation benchmarks →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

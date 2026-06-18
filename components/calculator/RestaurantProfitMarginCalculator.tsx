"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  benchmarkBands,
  defaultInputs,
  formatCurrency,
  formatPercent,
  getMarginStatus,
  industryAverages,
  marginTiers,
  parseInput,
  profitCalculatorFaqs,
  relatedDataLinks,
  statusStyles,
  type MarginStatus,
} from "@/lib/industries/restaurant-profit-calculator";
import { IndustryFaq } from "@/components/industry/IndustryFaq";

type CalcInputs = typeof defaultInputs;

function CurrencyInput({
  label,
  value,
  onChange,
  id,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  id: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      <div className="relative mt-1.5">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-faint">
          $
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value.toLocaleString("en-US")}
          onChange={(e) => onChange(parseInput(e.target.value))}
          className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-8 text-sm tabular-nums text-ink transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
        />
      </div>
    </label>
  );
}

function StatusBadge({ status }: { status: MarginStatus }) {
  const style = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${style.bg} ${style.text} ${style.border}`}
    >
      <span aria-hidden="true">{style.icon}</span>
      {status}
    </span>
  );
}

export function RestaurantProfitMarginCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>(defaultInputs);
  const [revenueBoost, setRevenueBoost] = useState(10);
  const [laborCut, setLaborCut] = useState(5);
  const [calculated, setCalculated] = useState(true);

  const update = (key: keyof CalcInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
    setCalculated(true);
  };

  const results = useMemo(() => {
    const { revenue, foodCosts, laborCosts, rent, marketing, otherExpenses } =
      inputs;
    const totalCosts = foodCosts + laborCosts + rent + marketing + otherExpenses;
    const netProfit = revenue - totalCosts;
    const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

    const foodPct = revenue > 0 ? (foodCosts / revenue) * 100 : 0;
    const laborPct = revenue > 0 ? (laborCosts / revenue) * 100 : 0;
    const rentPct = revenue > 0 ? (rent / revenue) * 100 : 0;
    const marketingPct = revenue > 0 ? (marketing / revenue) * 100 : 0;
    const otherPct = revenue > 0 ? (otherExpenses / revenue) * 100 : 0;

    const status = getMarginStatus(marginPct);

    const breakdown = [
      { label: "Food Cost", amount: foodCosts, pct: foodPct, color: "var(--metric-salary)" },
      { label: "Labor", amount: laborCosts, pct: laborPct, color: "var(--metric-margin)" },
      { label: "Rent", amount: rent, pct: rentPct, color: "var(--metric-revenue)" },
      { label: "Marketing", amount: marketing, pct: marketingPct, color: "var(--metric-valuation)" },
      { label: "Other", amount: otherExpenses, pct: otherPct, color: "var(--ink-faint)" },
      { label: "Net Profit", amount: netProfit, pct: marginPct, color: "var(--accent)" },
    ];

    return {
      netProfit,
      marginPct,
      status,
      totalCosts,
      foodPct,
      laborPct,
      rentPct,
      marketingPct,
      otherPct,
      breakdown,
    };
  }, [inputs]);

  const diagnostics = useMemo(() => {
    const items = [];
    const { revenue, laborCosts, foodCosts } = inputs;
    const { laborPct, foodPct } = results;

    if (laborPct > industryAverages.laborCostPct) {
      const profitGain = Math.round(laborCosts * 0.05);
      items.push({
        type: "warning" as const,
        title: "Labor cost is above industry average",
        body: `Your labor cost is ${formatPercent(laborPct)}. Industry average is ${industryAverages.laborCostPct}%. Reducing labor costs by 5% could improve profit by ${formatCurrency(profitGain)}.`,
      });
    } else {
      items.push({
        type: "success" as const,
        title: "Labor cost is competitive",
        body: `Your labor cost is ${formatPercent(laborPct)} vs. industry average of ${industryAverages.laborCostPct}%. You're managing staffing efficiently relative to peers.`,
      });
    }

    if (foodPct > industryAverages.foodCostPct) {
      items.push({
        type: "warning" as const,
        title: "Food cost is above benchmark",
        body: `Food cost is ${formatPercent(foodPct)} vs. industry average of ${industryAverages.foodCostPct}%. Review portion sizes, waste tracking, and vendor contracts.`,
      });
    } else {
      items.push({
        type: "success" as const,
        title: "Food cost is outperforming peers",
        body: `Food cost is ${formatPercent(foodPct)}. Industry average is ${industryAverages.foodCostPct}%. Strong cost control on the COGS line.`,
      });
    }

    const rentPct = results.rentPct;
    if (rentPct > industryAverages.rentPct + 2) {
      items.push({
        type: "warning" as const,
        title: "Rent burden is elevated",
        body: `Rent is ${formatPercent(rentPct)} of revenue vs. industry average of ${industryAverages.rentPct}%. High fixed costs compress margin flexibility.`,
      });
    }

    return items;
  }, [inputs, results]);

  const scenarios = useMemo(() => {
    const { revenue, laborCosts, foodCosts, rent, marketing, otherExpenses } =
      inputs;

    const revScenario = revenue * (1 + revenueBoost / 100);
    const revCosts = foodCosts + laborCosts + rent + marketing + otherExpenses;
    const revProfit = revScenario - revCosts;
    const revMargin = revScenario > 0 ? (revProfit / revScenario) * 100 : 0;

    const laborScenario = laborCosts * (1 - laborCut / 100);
    const laborTotal =
      foodCosts + laborScenario + rent + marketing + otherExpenses;
    const laborProfit = revenue - laborTotal;
    const laborMargin = revenue > 0 ? (laborProfit / revenue) * 100 : 0;

    return {
      revenue: { margin: revMargin, profit: revProfit },
      labor: { margin: laborMargin, profit: laborProfit },
    };
  }, [inputs, revenueBoost, laborCut]);

  const markerPosition = Math.min(
    100,
    Math.max(0, (results.marginPct / 25) * 100)
  );

  return (
    <div className="flex flex-col">
      {/* Calculator + Results — mobile: calculator first, results second */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Inputs */}
            <div className="order-1 flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">
                Your Numbers
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Enter annual figures from your P&amp;L or estimates.
              </p>
              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="revenue"
                  label="Annual Revenue"
                  value={inputs.revenue}
                  onChange={(v) => update("revenue", v)}
                />
                <CurrencyInput
                  id="food"
                  label="Food Costs"
                  value={inputs.foodCosts}
                  onChange={(v) => update("foodCosts", v)}
                />
                <CurrencyInput
                  id="labor"
                  label="Labor Costs"
                  value={inputs.laborCosts}
                  onChange={(v) => update("laborCosts", v)}
                />
                <CurrencyInput
                  id="rent"
                  label="Rent"
                  value={inputs.rent}
                  onChange={(v) => update("rent", v)}
                />
                <CurrencyInput
                  id="marketing"
                  label="Marketing"
                  value={inputs.marketing}
                  onChange={(v) => update("marketing", v)}
                />
                <CurrencyInput
                  id="other"
                  label="Other Expenses"
                  value={inputs.otherExpenses}
                  onChange={(v) => update("otherExpenses", v)}
                />
              </div>
              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="mt-6 w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/20"
              >
                Calculate Profit Margin
              </button>
            </div>

            {/* Results */}
            <div className="order-2 flex-1">
              <h2 className="font-display text-lg font-semibold text-ink lg:sr-only">
                Results
              </h2>
              <div
                className={`rounded-2xl border border-border bg-surface-muted/30 p-6 transition-opacity sm:p-8 ${
                  calculated ? "opacity-100" : "opacity-60"
                }`}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-ink-muted">Net Profit</p>
                    <p className="mt-1 text-3xl font-bold tabular-nums text-ink sm:text-4xl">
                      {formatCurrency(results.netProfit)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-muted">
                      Profit Margin
                    </p>
                    <p className="mt-1 text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                      {formatPercent(results.marginPct)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-surface px-5 py-4">
                  <p className="text-sm text-ink-muted">Industry Benchmark</p>
                  <p className="mt-1 font-semibold text-ink">
                    Average Restaurant: {industryAverages.marginRange}
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">
                    Median {industryAverages.marginPct}% · 680+ U.S. independents
                  </p>
                </div>

                <div className="mt-6">
                  <StatusBadge status={results.status} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark visual */}
      <section className="order-3 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Where You Stand
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              {benchmarkBands.map((band) => (
                <div key={band.label}>
                  <p className="font-semibold text-ink">{band.label}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{band.range}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6">
              <div className="flex h-4 overflow-hidden rounded-full">
                <div className="w-1/5 bg-metric-salary/40" title="Poor" />
                <div className="w-2/5 bg-metric-margin/45" title="Average" />
                <div className="w-2/5 bg-metric-revenue/40" title="Strong" />
              </div>
              <div
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${markerPosition}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className="size-4 rounded-full border-2 border-surface bg-accent shadow-md" />
                  <span className="mt-2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                    Your Margin: {formatPercent(results.marginPct, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profit breakdown */}
      <section className="order-4 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Profit Breakdown
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            How every dollar of revenue flows through your cost structure.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink">
                Revenue · {formatCurrency(inputs.revenue)}
              </p>
              <ul className="mt-5 space-y-3 border-l-2 border-border pl-5">
                {results.breakdown.slice(0, -1).map((item) => (
                  <li key={item.label} className="relative">
                    <span
                      className="absolute top-2.5 -left-[1.35rem] size-2 rounded-full"
                      style={{ background: item.color }}
                      aria-hidden="true"
                    />
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-ink-muted">{item.label}</span>
                      <span className="text-sm font-semibold tabular-nums text-ink">
                        {formatCurrency(item.amount)}{" "}
                        <span className="font-normal text-ink-faint">
                          ({formatPercent(item.pct, 0)})
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
                <li className="relative border-t border-border-subtle pt-3">
                  <span
                    className="absolute top-5 -left-[1.35rem] size-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-ink">Net Profit</span>
                    <span className="text-sm font-bold tabular-nums text-accent">
                      {formatCurrency(results.netProfit)} (
                      {formatPercent(results.marginPct, 0)})
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink-muted">
                Visual split
              </p>
              <div className="mt-4 flex h-6 overflow-hidden rounded-full">
                {results.breakdown.slice(0, -1).map((item) => (
                  <div
                    key={item.label}
                    style={{
                      width: `${Math.max(0, item.pct)}%`,
                      background: item.color,
                    }}
                    title={`${item.label}: ${formatPercent(item.pct, 0)}`}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-2.5">
                {results.breakdown.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-sm"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-ink-muted">{item.label}</span>
                    </div>
                    <span className="font-semibold tabular-nums text-ink">
                      {formatPercent(item.pct, 0)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How you compare */}
      <section className="order-5 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            How Does Your Restaurant Compare?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Quartile benchmarks from 680+ independent restaurants — not generic
            small-business averages.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marginTiers.map((tier) => {
              const active =
                results.marginPct >= tier.min && results.marginPct <= tier.max;
              return (
                <li
                  key={tier.id}
                  className={`rounded-2xl border p-5 transition-colors ${
                    active
                      ? "border-accent bg-accent-soft/50 shadow-sm"
                      : "border-border bg-surface"
                  }`}
                >
                  <p className="font-display font-semibold text-ink">
                    {tier.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                    {tier.range}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {tier.description}
                  </p>
                  {active && (
                    <span className="mt-3 inline-block text-xs font-semibold text-accent">
                      ← You are here
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Cost diagnostics */}
      <section className="order-6 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Cost Diagnostics
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Actionable insights based on your cost structure vs. industry norms.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 space-y-4">
            {diagnostics.map((item) => (
              <li
                key={item.title}
                className={`rounded-2xl border p-5 sm:p-6 ${
                  item.type === "warning"
                    ? "border-metric-salary/25 bg-metric-salary/5"
                    : "border-metric-revenue/25 bg-metric-revenue/5"
                }`}
              >
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scenario tool */}
      <section className="order-7 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Scenario Modeling
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            See how small changes to revenue or labor affect your margin.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <label htmlFor="revenue-boost" className="block">
                <span className="font-semibold text-ink">Increase Revenue</span>
                <span className="ml-2 text-accent">+{revenueBoost}%</span>
              </label>
              <input
                id="revenue-boost"
                type="range"
                min={0}
                max={25}
                step={1}
                value={revenueBoost}
                onChange={(e) => setRevenueBoost(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Margin becomes{" "}
                <span className="font-bold text-accent">
                  {formatPercent(scenarios.revenue.margin)}
                </span>
              </p>
              <p className="mt-1 text-xs text-ink-faint">
                Net profit: {formatCurrency(scenarios.revenue.profit)} (costs
                held constant)
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <label htmlFor="labor-cut" className="block">
                <span className="font-semibold text-ink">Reduce Labor</span>
                <span className="ml-2 text-metric-revenue">−{laborCut}%</span>
              </label>
              <input
                id="labor-cut"
                type="range"
                min={0}
                max={15}
                step={1}
                value={laborCut}
                onChange={(e) => setLaborCut(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Margin becomes{" "}
                <span className="font-bold text-accent">
                  {formatPercent(scenarios.labor.margin)}
                </span>
              </p>
              <p className="mt-1 text-xs text-ink-faint">
                Net profit: {formatCurrency(scenarios.labor.profit)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related data */}
      <section className="order-8 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Related Restaurant Data
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedDataLinks.map((link) => (
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
      <section className="order-9 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8">
            <IndustryFaq faqs={profitCalculatorFaqs} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/methodology/" className="text-accent hover:underline">
              How we calculate restaurant benchmarks →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/numbers";

const OPERATING_DAYS_PER_MONTH = 22;
const MONTHS_PER_YEAR = 12;

export function FoodTruckUnitCalculator() {
  const [averageTicket, setAverageTicket] = useState(14);
  const [customersPerDay, setCustomersPerDay] = useState(85);

  const results = useMemo(() => {
    const dailyRevenue = averageTicket * customersPerDay;
    const monthlyRevenue = dailyRevenue * OPERATING_DAYS_PER_MONTH;
    const annualRevenue = monthlyRevenue * MONTHS_PER_YEAR;
    return { dailyRevenue, monthlyRevenue, annualRevenue };
  }, [averageTicket, customersPerDay]);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">
        Unit Economics Calculator
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Model daily volume into monthly and annual revenue.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">
            Average Ticket ($)
          </span>
          <input
            type="number"
            min={5}
            max={30}
            step={0.5}
            value={averageTicket}
            onChange={(e) => setAverageTicket(Number(e.target.value) || 0)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">
            Customers Per Day
          </span>
          <input
            type="number"
            min={20}
            max={250}
            value={customersPerDay}
            onChange={(e) => setCustomersPerDay(Number(e.target.value) || 0)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
      </div>

      <p className="mt-4 rounded-xl bg-surface-muted/50 px-4 py-3 font-mono text-sm text-ink">
        Revenue = Customers × Average Ticket
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Daily Revenue", value: formatCurrency(results.dailyRevenue) },
          {
            label: "Monthly Revenue",
            value: formatCurrency(results.monthlyRevenue),
          },
          {
            label: "Annual Revenue",
            value: formatCurrency(results.annualRevenue),
          },
        ].map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-border bg-surface-muted/30 px-4 py-4 text-center"
          >
            <p className="text-xs text-ink-faint">{item.label}</p>
            <p className="mt-2 text-xl font-bold tabular-nums text-accent">
              {item.value}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-faint">
        Monthly assumes {OPERATING_DAYS_PER_MONTH} operating days.
      </p>
    </div>
  );
}

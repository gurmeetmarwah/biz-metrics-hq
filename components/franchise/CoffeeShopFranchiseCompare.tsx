"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  coffeeShopFranchiseGuide as data,
  type CoffeeBusinessModel,
  type CoffeeInvestmentBand,
  type CoffeeInvestorType,
} from "@/lib/franchise/food/coffee-shop-franchise";

const investmentOptions: { value: CoffeeInvestmentBand | "all"; label: string }[] = [
  { value: "all", label: "All investments" },
  { value: "under-250k", label: "Under $250K" },
  { value: "250k-500k", label: "$250K–$500K" },
  { value: "500k-plus", label: "$500K+" },
];

const modelOptions: { value: CoffeeBusinessModel | "all"; label: string }[] = [
  { value: "all", label: "All models" },
  { value: "drive-thru", label: "Drive-thru" },
  { value: "cafe", label: "Café" },
  { value: "drive-thru-cafe", label: "Drive-thru + café" },
  { value: "kiosk", label: "Kiosk" },
];

const investorOptions: { value: CoffeeInvestorType | "all"; label: string }[] = [
  { value: "all", label: "All investor types" },
  { value: "first-time", label: "First-time franchisee" },
  { value: "owner-operator", label: "Owner-operator" },
  { value: "multi-unit", label: "Multi-unit investor" },
];

export function CoffeeShopFranchiseCompare() {
  const [investment, setInvestment] = useState<CoffeeInvestmentBand | "all">("all");
  const [model, setModel] = useState<CoffeeBusinessModel | "all">("all");
  const [investor, setInvestor] = useState<CoffeeInvestorType | "all">("all");

  const brands = useMemo(() => {
    return data.franchiseBrands.filter((brand) => {
      if (investment !== "all" && brand.investmentBand !== investment) return false;
      if (model !== "all" && !brand.models.includes(model)) return false;
      if (investor !== "all" && !brand.investorTypes.includes(investor)) return false;
      return true;
    });
  }, [investment, model, investor]);

  return (
    <div>
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <label className="block">
          <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Investment</span>
          <select
            value={investment}
            onChange={(e) => setInvestment(e.target.value as CoffeeInvestmentBand | "all")}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          >
            {investmentOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Business model</span>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as CoffeeBusinessModel | "all")}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          >
            {modelOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Investor type</span>
          <select
            value={investor}
            onChange={(e) => setInvestor(e.target.value as CoffeeInvestorType | "all")}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          >
            {investorOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/50">
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Investment</th>
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise Fee</th>
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Royalty</th>
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Locations</th>
              <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Business Model</th>
            </tr>
          </thead>
          <tbody>
            {brands.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-ink-muted sm:px-5">
                  No brands match these filters. Reset filters to see all coffee franchises.
                </td>
              </tr>
            ) : (
              brands.map((brand) => (
                <tr key={brand.slug} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-3.5 sm:px-5">
                    <Link href={brand.href} className="font-semibold text-accent hover:underline">
                      {brand.label}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.investment}</td>
                  <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.franchiseFee}</td>
                  <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.royalty}</td>
                  <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.locations}</td>
                  <td className="px-4 py-3.5 text-ink-muted sm:px-5">{brand.businessModel}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-ink-faint">
        Ranges are directional industry estimates for planning — confirm current FDD disclosures for each brand.
        Highly searched brands (Dunkin&apos;, Dutch Bros, Scooter&apos;s, 7 Brew, Tim Hortons, and others) are included for
        comparison.
      </p>
    </div>
  );
}

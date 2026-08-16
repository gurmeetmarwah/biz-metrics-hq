"use client";

import { useState } from "react";
import Link from "next/link";
import { CoffeeShopFranchiseRoiCalculator } from "@/components/franchise/CoffeeShopFranchiseRoiCalculator";
import { CoffeeShopFranchiseRoyaltyCalculator } from "@/components/calculator/CoffeeShopFranchiseRoyaltyCalculator";
import { CoffeeShopPaybackCalculator } from "@/components/calculator/CoffeeShopPaybackCalculator";

const tabs = [
  { id: "roi", label: "Franchise ROI" },
  { id: "royalty", label: "Royalty Fees" },
  { id: "payback", label: "Payback Period" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function CoffeeShopFranchiseCalculatorTools() {
  const [tab, setTab] = useState<TabId>("royalty");

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Coffee franchise calculators">
        {tabs.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "bg-accent text-white"
                  : "border border-border bg-surface text-ink hover:border-accent hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface" role="tabpanel">
        {tab === "roi" && <CoffeeShopFranchiseRoiCalculator />}
        {tab === "royalty" && <CoffeeShopFranchiseRoyaltyCalculator showFooter={false} />}
        {tab === "payback" && <CoffeeShopPaybackCalculator showFooter={false} />}
      </div>

      <p className="mt-4 text-center text-sm text-ink-muted">
        Open full pages:{" "}
        <Link href="/calculators/coffee-shop-franchise-roi/" className="font-semibold text-accent hover:underline">
          ROI
        </Link>
        {" · "}
        <Link
          href="/calculators/coffee-shop-franchise-royalty/"
          className="font-semibold text-accent hover:underline"
        >
          Royalty
        </Link>
        {" · "}
        <Link href="/calculators/coffee-shop-payback/" className="font-semibold text-accent hover:underline">
          Payback
        </Link>
      </p>
    </div>
  );
}

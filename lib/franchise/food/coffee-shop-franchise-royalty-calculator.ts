import { formatCurrency, formatPercent } from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Franchise Royalty Fee Calculator",
  shortTitle: "Franchise Royalty Calculator",
  subtitle:
    "Estimate annual royalty and marketing fund cost at different coffee franchise revenue levels.",
  description:
    "Free coffee franchise royalty calculator. Model royalty %, marketing fees, and total ongoing fee drag versus independent cafe margins.",
};

export const introContent = {
  lead: "Royalty and marketing fees permanently reduce coffee franchise cash flow. This calculator shows the annual fee stack so you can underwrite brands before comparing AUVs.",
  bullets: [
    "Annual Royalty = Revenue × Royalty %",
    "Marketing Fund = Revenue × Marketing %",
    "Typical coffee franchise royalty: 5–6%; marketing: 1.5–5%",
  ],
  audience: "Built for coffee franchise buyers comparing Dunkin', Dutch Bros, Scooter's, 7 Brew, and similar systems.",
};

export type CoffeeFranchiseRoyaltyInputs = {
  annualRevenue: number;
  royaltyPct: number;
  marketingPct: number;
};

export const defaultInputs: CoffeeFranchiseRoyaltyInputs = {
  annualRevenue: 750000,
  royaltyPct: 5.5,
  marketingPct: 2.5,
};

export function calculateCoffeeFranchiseRoyalty(inputs: CoffeeFranchiseRoyaltyInputs) {
  const revenue = Math.max(0, inputs.annualRevenue);
  const royaltyPct = Math.min(100, Math.max(0, inputs.royaltyPct));
  const marketingPct = Math.min(100, Math.max(0, inputs.marketingPct));
  const annualRoyalty = revenue * (royaltyPct / 100);
  const annualMarketing = revenue * (marketingPct / 100);
  const totalAnnualFees = annualRoyalty + annualMarketing;
  const totalFeePct = royaltyPct + marketingPct;
  const monthlyFees = totalAnnualFees / 12;
  const fiveYearFees = totalAnnualFees * 5;

  return {
    annualRoyalty,
    annualMarketing,
    totalAnnualFees,
    totalFeePct,
    monthlyFees,
    fiveYearFees,
  };
}

export const faqs = [
  {
    question: "What is a typical coffee franchise royalty fee?",
    answer:
      "Most coffee franchises charge about 5–6% of gross sales in royalties, plus a marketing or brand fund of roughly 1.5–5%. Combined ongoing fees often land near 7–11% of revenue depending on the brand.",
  },
  {
    question: "Are marketing fees the same as royalties?",
    answer:
      "No. Royalties usually fund franchisor operations and support; marketing fees fund national or regional advertising. Both reduce owner cash flow and should be modeled together.",
  },
  {
    question: "How do royalties affect coffee franchise profit margins?",
    answer:
      "A 5.5% royalty on $750K revenue is about $41K per year before marketing. That fee stack is a primary reason franchise net margins can trail well-run independents even when AUV is higher.",
  },
  {
    question: "Should I compare brands on royalty rate alone?",
    answer:
      "No. A lower royalty with weaker AUV or higher CapEx can underperform a slightly higher royalty with stronger throughput and support. Underwrite after-fee cash flow and payback.",
  },
] as const;

export const relatedTools = [
  {
    label: "Coffee Shop Franchise ROI Calculator",
    href: "/calculators/coffee-shop-franchise-roi/",
    description: "Model investment, fees, EBITDA, and cash-on-cash return.",
  },
  {
    label: "Coffee Shop Payback Calculator",
    href: "/calculators/coffee-shop-payback/",
    description: "Estimate years to recover coffee franchise CapEx.",
  },
  {
    label: "Coffee Shop Franchise Guide",
    href: "/franchise/food/coffee-shop-franchise/",
    description: "Compare Dunkin', Dutch Bros, Scooter's, 7 Brew, and more.",
  },
  {
    label: "Coffee Shop Profit Margin Calculator",
    href: "/calculators/coffee-shop-profit-margin/",
    description: "Benchmark cafe margins before and after fees.",
  },
] as const;

export const franchiseDataLinks = [
  {
    label: "Compare Coffee Franchises",
    href: "/franchise/food/coffee-shop-franchise/#compare-brands",
    description: "Investment, fee, and format filters across leading brands.",
  },
  {
    label: "Coffee Franchise Economics",
    href: "/franchise/food/coffee-shop-franchise/#economics",
    description: "AUV, ticket, labor, and royalty benchmarks.",
  },
  {
    label: "Drive-Thru vs Café",
    href: "/franchise/food/coffee-shop-franchise/#drive-thru-vs-cafe",
    description: "How format choice changes fee burden and EBITDA.",
  },
  {
    label: "Independent Coffee Shop Benchmarks",
    href: "/industries/food-beverage/coffee-shop/",
    description: "Margin and cost structure without royalties.",
  },
] as const;

export { formatCurrency, formatPercent };

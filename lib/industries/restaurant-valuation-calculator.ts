export const valuationCalculatorMeta = {
  title:
    "Restaurant Valuation Calculator & Industry Benchmark Tool",
  shortTitle: "Restaurant Valuation Calculator",
  subtitle:
    "Estimate the value of your restaurant using industry valuation multiples and financial benchmarks.",
  description:
    "Professional restaurant valuation calculator with SDE multiples, valuation ranges, sale readiness score, and scenario modeling. Built for buyers, sellers, and investors evaluating independent restaurants.",
};

export const introContent = {
  lead: "Whether you're buying, selling, raising capital, or evaluating a franchise opportunity, restaurant valuation starts with Seller's Discretionary Earnings (SDE) and the right industry multiple. This tool estimates your business value as a range — never a false-precision single number.",
  bullets: [
    "SDE = net profit + owner compensation + discretionary add-backs",
    "Independent restaurants typically sell for 1.8x–3.5x SDE depending on concept",
    "Revenue multiples (0.3x–0.6x) are secondary for thin-margin concepts",
  ],
  audience:
    "Used by business buyers, sellers, SBA lenders, and franchise investors evaluating Main Street restaurant acquisitions.",
};

export type RestaurantType =
  | "fast-casual"
  | "casual-dining"
  | "fine-dining"
  | "food-truck"
  | "coffee-shop"
  | "bakery";

export type OwnershipType = "owner-operated" | "manager-operated";

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  sde: number;
  restaurantType: RestaurantType;
  locations: number;
  yearsInBusiness: number;
  ownership: OwnershipType;
};

export const defaultValuationInputs: ValuationInputs = {
  revenue: 850000,
  netProfit: 68000,
  sde: 200000,
  restaurantType: "casual-dining",
  locations: 1,
  yearsInBusiness: 8,
  ownership: "owner-operated",
};

export const restaurantTypeOptions = [
  {
    value: "fast-casual" as const,
    label: "Fast Casual",
    sdeRange: "2.0x – 3.5x",
    sdeLow: 2.0,
    sdeHigh: 3.5,
    sdeMedian: 2.8,
  },
  {
    value: "casual-dining" as const,
    label: "Casual Dining",
    sdeRange: "2.0x – 3.5x",
    sdeLow: 2.0,
    sdeHigh: 3.5,
    sdeMedian: 2.75,
  },
  {
    value: "fine-dining" as const,
    label: "Fine Dining",
    sdeRange: "2.0x – 4.0x",
    sdeLow: 2.0,
    sdeHigh: 4.0,
    sdeMedian: 3.0,
  },
  {
    value: "food-truck" as const,
    label: "Food Truck",
    sdeRange: "1.5x – 2.5x",
    sdeLow: 1.5,
    sdeHigh: 2.5,
    sdeMedian: 2.0,
  },
  {
    value: "coffee-shop" as const,
    label: "Coffee Shop",
    sdeRange: "2.0x – 3.0x",
    sdeLow: 2.0,
    sdeHigh: 3.0,
    sdeMedian: 2.5,
  },
  {
    value: "bakery" as const,
    label: "Bakery",
    sdeRange: "2.0x – 3.0x",
    sdeLow: 2.0,
    sdeHigh: 3.0,
    sdeMedian: 2.4,
  },
];

export const comparisonTable = [
  { type: "Food Truck", multiple: "1.5x – 2.5x SDE" },
  { type: "Coffee Shop", multiple: "2.0x – 3.0x SDE" },
  { type: "Casual Dining", multiple: "2.0x – 3.5x SDE" },
  { type: "Fine Dining", multiple: "2.0x – 4.0x SDE" },
  { type: "Fast Casual", multiple: "2.0x – 3.5x SDE" },
  { type: "Bakery", multiple: "2.0x – 3.0x SDE" },
] as const;

export const industryMedianSdeMultiple = 2.5;

export type BenchmarkTier =
  | "Below Average"
  | "Average"
  | "Strong"
  | "Premium";

export function getBenchmarkTier(multiple: number): BenchmarkTier {
  if (multiple < 2.2) return "Below Average";
  if (multiple < 2.8) return "Average";
  if (multiple < 3.5) return "Strong";
  return "Premium";
}

export const benchmarkTierStyles: Record<
  BenchmarkTier,
  { bg: string; text: string; border: string }
> = {
  "Below Average": {
    bg: "bg-metric-salary/10",
    text: "text-metric-salary",
    border: "border-metric-salary/25",
  },
  Average: {
    bg: "bg-accent-soft",
    text: "text-accent",
    border: "border-accent/25",
  },
  Strong: {
    bg: "bg-metric-revenue/10",
    text: "text-metric-revenue",
    border: "border-metric-revenue/25",
  },
  Premium: {
    bg: "bg-metric-valuation/10",
    text: "text-metric-valuation",
    border: "border-metric-valuation/25",
  },
};

export type ValuationResult = {
  expectedValue: number;
  lowEstimate: number;
  highEstimate: number;
  sdeMultiple: number;
  revenueMultiple: number;
  ebitdaMultiple: number;
  profitMargin: number;
  benchmarkTier: BenchmarkTier;
  positiveDrivers: string[];
  negativeDrivers: string[];
  saleReadinessScore: number;
  saleReadinessItems: { label: string; met: boolean }[];
};

function getTypeConfig(type: RestaurantType) {
  return (
    restaurantTypeOptions.find((t) => t.value === type) ??
    restaurantTypeOptions[1]
  );
}

/** Estimate SDE from profit + typical owner comp when user adjusts revenue/profit */
export function estimateSde(
  revenue: number,
  netProfit: number,
  ownership: OwnershipType
): number {
  const ownerCompRate = ownership === "owner-operated" ? 0.09 : 0.04;
  const discretionaryAddbacks = revenue * 0.02;
  return Math.round(netProfit + revenue * ownerCompRate + discretionaryAddbacks);
}

export function calculateValuation(inputs: ValuationInputs): ValuationResult {
  const typeConfig = getTypeConfig(inputs.restaurantType);
  let multiple = typeConfig.sdeMedian;

  const margin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const positiveDrivers: string[] = [];
  const negativeDrivers: string[] = [];

  if (margin >= 10) {
    multiple += 0.2;
    positiveDrivers.push("Strong profitability above industry median");
  } else if (margin >= 8) {
    multiple += 0.15;
    positiveDrivers.push("Consistent profitability");
  } else if (margin >= 5) {
    multiple -= 0.05;
    negativeDrivers.push("Margins below industry median (8%)");
  } else if (margin > 0) {
    multiple -= 0.2;
    negativeDrivers.push("Low profit margins");
  } else {
    multiple -= 0.35;
    negativeDrivers.push("Unprofitable or break-even operations");
  }

  if (inputs.locations >= 2) {
    multiple += inputs.locations >= 5 ? 0.55 : 0.35;
    positiveDrivers.push("Multiple locations");
  } else {
    negativeDrivers.push("Single-location concentration risk");
  }

  if (inputs.ownership === "manager-operated") {
    multiple += 0.35;
    positiveDrivers.push("Manager-operated (less owner dependency)");
  } else {
    negativeDrivers.push("Owner-dependent operations");
  }

  if (inputs.yearsInBusiness >= 8) {
    multiple += 0.15;
    positiveDrivers.push("Long operating history");
  } else if (inputs.yearsInBusiness >= 3) {
    negativeDrivers.push("Moderate operating history — buyers prefer 5+ years");
  } else {
    multiple -= 0.15;
    negativeDrivers.push("Limited operating history");
  }

  if (inputs.sde > 150000) {
    positiveDrivers.push("Strong SDE supports SBA and conventional financing");
  } else if (inputs.sde < 100000) {
    multiple -= 0.1;
    negativeDrivers.push("Low SDE limits qualified buyer pool");
  }

  if (inputs.revenue > 0 && inputs.netProfit > 0) {
    const sdeToRevenue = inputs.sde / inputs.revenue;
    if (sdeToRevenue < 0.15) {
      negativeDrivers.push("SDE appears low relative to revenue — verify add-backs");
    }
  }

  multiple = Math.max(
    typeConfig.sdeLow,
    Math.min(typeConfig.sdeHigh + 0.4, multiple)
  );

  const expectedValue = Math.round(inputs.sde * multiple);
  const spread = Math.max(0.35, (typeConfig.sdeHigh - typeConfig.sdeLow) * 0.2);
  const lowEstimate = Math.round(inputs.sde * (multiple - spread));
  const highEstimate = Math.round(inputs.sde * (multiple + spread));

  const revenueMultiple =
    inputs.revenue > 0 ? expectedValue / inputs.revenue : 0;
  const ebitdaBase = inputs.sde * 1.05;
  const ebitdaMultiple =
    ebitdaBase > 0 ? expectedValue / ebitdaBase : 0;

  const saleReadinessItems = [
    { label: "Profitable", met: inputs.netProfit > 0 },
    { label: "Financial records available", met: inputs.sde > 0 },
    {
      label: "Multiple years operating",
      met: inputs.yearsInBusiness >= 3,
    },
    {
      label: "Manager-operated",
      met: inputs.ownership === "manager-operated",
    },
    { label: "Multiple locations", met: inputs.locations >= 2 },
  ];

  const saleReadinessScore = saleReadinessItems.filter((i) => i.met).length * 20;

  if (positiveDrivers.length === 0) {
    positiveDrivers.push("Established restaurant concept with revenue base");
  }

  if (negativeDrivers.length === 0) {
    negativeDrivers.push(
      "Lease terms and remaining term length can materially affect sale price"
    );
    negativeDrivers.push(
      "Restaurant industry buyer pool is smaller than generic small business markets"
    );
  }

  return {
    expectedValue,
    lowEstimate,
    highEstimate,
    sdeMultiple: Math.round(multiple * 10) / 10,
    revenueMultiple: Math.round(revenueMultiple * 100) / 100,
    ebitdaMultiple: Math.round(ebitdaMultiple * 10) / 10,
    profitMargin: Math.round(margin * 10) / 10,
    benchmarkTier: getBenchmarkTier(multiple),
    positiveDrivers,
    negativeDrivers,
    saleReadinessScore,
    saleReadinessItems,
  };
}

export const relatedMetricsLinks = [
  {
    label: "Restaurant Revenue Benchmark",
    href: "/industries/restaurant/#revenue",
    description: "Median $850K — revenue by concept type.",
  },
  {
    label: "Restaurant Profit Margin",
    href: "/industries/restaurant/profit-margin-calculator/",
    description: "Calculate margin and compare to industry quartiles.",
  },
  {
    label: "Restaurant Owner Salary",
    href: "/industries/restaurant/#owner-salary",
    description: "Owner compensation ranges by restaurant size.",
  },
  {
    label: "Restaurant Startup Cost",
    href: "/industries/restaurant/#revenue",
    description: "Typical opening investment $275K–$750K.",
  },
] as const;

export const valuationFaqs = [
  {
    question: "How much is a restaurant worth?",
    answer:
      "Most independent restaurants are worth 1.5x–4.0x their Seller's Discretionary Earnings (SDE), depending on concept type, location, and transferability. A restaurant with $200K SDE at a 3.1x multiple would be valued around $620,000. Always use a range — not a single number — when negotiating.",
  },
  {
    question: "What multiple do restaurants sell for?",
    answer:
      "SDE multiples vary by concept: food trucks 1.5x–2.5x, coffee shops and bakeries 2.0x–3.0x, casual and fast casual 2.0x–3.5x, fine dining 2.0x–4.0x. The industry median for independent restaurants is approximately 2.5x SDE. Revenue multiples of 0.3x–0.6x are sometimes used for high-volume concepts.",
  },
  {
    question: "How is restaurant valuation calculated?",
    answer:
      "The standard method for restaurants under $5M revenue is SDE × industry multiple. SDE equals net profit plus owner salary, benefits, and discretionary expenses a new owner wouldn't incur. The multiple adjusts for concept type, number of locations, owner dependency, operating history, and profitability.",
  },
  {
    question: "What increases restaurant value?",
    answer:
      "Factors that increase valuation multiples include: manager-operated (not owner-dependent) operations, multiple locations, 8+ years of operating history, consistent profitability above 8% net margin, clean financial records, and transferable lease terms. Strong brand recognition in the local market also helps.",
  },
  {
    question: "What decreases restaurant value?",
    answer:
      "Valuation discounts apply for: heavy owner dependency, single-location risk, margins below 5%, declining revenue trends, short operating history, deferred maintenance, unfavorable lease terms, and customer concentration. Restaurants requiring full-time owner presence typically sell at lower multiples.",
  },
] as const;

export { formatCurrency } from "@/lib/numbers";

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`;
}

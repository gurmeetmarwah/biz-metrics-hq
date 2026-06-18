import {
  foodTruckDataLinks,
  foodTruckIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Food Truck Profit Margin Calculator",
  subtitle:
    "Calculate your food truck's profit margin and compare it against industry benchmarks for mobile food operators.",
  description:
    "Free food truck profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your food, labor, fuel, and commissary costs stack up against 320+ food trucks.",
};

export const introContent = {
  lead: "Food truck profit margin depends on route consistency, event mix, and lean overhead — yet many operators track daily sales without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against mobile food businesses.",
  bullets: [
    "Net margin = (Revenue − Food − Labor − Commissary − Fuel − Marketing − Other) ÷ Revenue",
    "Industry median is 14%; healthy trucks fall between 12–18%",
    "Food and labor together should stay under 55% of revenue",
  ],
  audience:
    "Built for food truck owners, aspiring operators, and buyers evaluating mobile food profitability.",
};

export const defaultInputs = {
  revenue: 280000,
  foodCosts: 84000,
  laborCosts: 67200,
  commissaryCosts: 5600,
  fuelCosts: 14000,
  marketing: 8400,
  otherExpenses: 61600,
};

export const marginTiers = [
  { id: "weak", label: "Bottom Quartile", range: "4–8%", min: 0, max: 8, description: "Thin margins — review food cost, route volume, and labor scheduling." },
  { id: "average", label: "Average", range: "10–14%", min: 10, max: 14, description: "Typical range for independent street and event trucks." },
  { id: "strong", label: "Top Quartile", range: "15–18%", min: 15, max: 18, description: "Strong operators with catering and festival revenue." },
  { id: "elite", label: "Elite", range: "18%+", min: 18, max: 100, description: "Best-in-class trucks with premium tickets and lean ops." },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 10) return "Below Average";
  if (marginPct <= 14) return "Average";
  if (marginPct < 16) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, foodCosts, laborCosts, commissaryCosts, fuelCosts, marketing, otherExpenses } = inputs;
  const totalCosts = foodCosts + laborCosts + commissaryCosts + fuelCosts + marketing + otherExpenses;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const breakdown = [
    { label: "Food Cost", amount: foodCosts, pct: revenue > 0 ? (foodCosts / revenue) * 100 : 0, color: "var(--metric-salary)" },
    { label: "Labor", amount: laborCosts, pct: revenue > 0 ? (laborCosts / revenue) * 100 : 0, color: "var(--metric-margin)" },
    { label: "Commissary", amount: commissaryCosts, pct: revenue > 0 ? (commissaryCosts / revenue) * 100 : 0, color: "var(--metric-revenue)" },
    { label: "Fuel", amount: fuelCosts, pct: revenue > 0 ? (fuelCosts / revenue) * 100 : 0, color: "var(--metric-valuation)" },
    { label: "Marketing", amount: marketing, pct: revenue > 0 ? (marketing / revenue) * 100 : 0, color: "var(--accent)" },
    { label: "Other", amount: otherExpenses, pct: revenue > 0 ? (otherExpenses / revenue) * 100 : 0, color: "var(--ink-faint)" },
  ];

  return { netProfit, marginPct, status: getMarginStatus(marginPct), totalCosts, breakdown };
}

export const faqs = [
  {
    question: "What is a good food truck profit margin?",
    answer:
      "A good net profit margin for a food truck is 12–15%. Top-quartile operators with strong event and catering revenue hit 16–18%. Below 8% signals food cost drift, weak routes, or underpriced catering contracts.",
  },
  {
    question: "What is the average food truck margin?",
    answer:
      "The median net profit margin for U.S. food trucks is approximately 14%, based on our sample of 320+ operators. Event-focused trucks average 15–20%; street-only routes 10–14%.",
  },
  {
    question: "How can food trucks improve profitability?",
    answer:
      "The highest-impact levers are securing recurring corporate catering, optimizing festival bookings, controlling food cost (target 28–32%), scheduling labor to peak hours, and raising average ticket through combos and upsells.",
  },
  {
    question: "Why do food trucks have higher margins than restaurants?",
    answer:
      "Food trucks avoid rent (the largest fixed cost for restaurants) and run leaner teams. However, lower revenue bases and weather or permit risk mean absolute profit dollars are often smaller than brick-and-mortar.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-profit-margin/");
export { foodTruckIndustryAverages, foodTruckDataLinks, formatCurrency, formatPercent };

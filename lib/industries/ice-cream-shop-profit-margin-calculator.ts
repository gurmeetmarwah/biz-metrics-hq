import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Ice Cream Shop Profit Margin Calculator",
  subtitle:
    "Calculate your ice cream shop's profit margin and compare it against industry benchmarks.",
  description:
    "Free ice cream shop profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison.",
};

export const introContent = {
  lead: "Ice cream shop profit margin depends on ticket size, seasonality, and labor scheduling — yet many owners track summer sales without knowing true annual net margin. This calculator benchmarks your costs against independent shops.",
  bullets: [
    "Net margin = (Revenue − Food − Labor − Rent − Marketing − Other) ÷ Revenue",
    "Industry median is 17%; healthy shops fall between 14–20%",
    "Food and labor together should stay under 58% of revenue",
  ],
  audience:
    "Built for ice cream shop owners, aspiring operators, and buyers evaluating shop profitability.",
};

export const defaultInputs = {
  revenue: 720000,
  foodCosts: 201600,
  laborCosts: 187200,
  rent: 72000,
  marketing: 21600,
  otherExpenses: 57600,
};

export const marginTiers = [
  { id: "weak", label: "Bottom Quartile", range: "6–10%", min: 0, max: 10, description: "Thin margins — review seasonality and labor scheduling." },
  { id: "average", label: "Average", range: "11–16%", min: 11, max: 16, description: "Typical range for independent ice cream shops." },
  { id: "strong", label: "Top Quartile", range: "17–21%", min: 17, max: 21, description: "Strong upselling and efficient peak-season labor." },
  { id: "elite", label: "Elite", range: "22%+", min: 22, max: 100, description: "Premium locations with catering and retail pints." },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 11) return "Below Average";
  if (marginPct <= 16) return "Average";
  if (marginPct < 20) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, foodCosts, laborCosts, rent, marketing, otherExpenses } = inputs;
  const totalCosts = foodCosts + laborCosts + rent + marketing + otherExpenses;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const breakdown = [
    { label: "Food Cost", amount: foodCosts, pct: revenue > 0 ? (foodCosts / revenue) * 100 : 0, color: "var(--metric-salary)" },
    { label: "Labor", amount: laborCosts, pct: revenue > 0 ? (laborCosts / revenue) * 100 : 0, color: "var(--metric-margin)" },
    { label: "Rent", amount: rent, pct: revenue > 0 ? (rent / revenue) * 100 : 0, color: "var(--metric-revenue)" },
    { label: "Marketing", amount: marketing, pct: revenue > 0 ? (marketing / revenue) * 100 : 0, color: "var(--metric-valuation)" },
    { label: "Other", amount: otherExpenses, pct: revenue > 0 ? (otherExpenses / revenue) * 100 : 0, color: "var(--ink-faint)" },
  ];

  return { netProfit, marginPct, status: getMarginStatus(marginPct), totalCosts, breakdown };
}

export const faqs = [
  {
    question: "What is a good ice cream shop profit margin?",
    answer:
      "A good net profit margin for an independent ice cream shop is 14–20%, with a median around 17%. Top performers with strong upselling and catering reach 20–24%. Highly seasonal or high-rent locations may fall below 12%.",
  },
  {
    question: "What is the average ice cream shop margin?",
    answer:
      "The median net profit margin for U.S. ice cream shops is approximately 17%. Gross margins run 55–68%; operating margins 14–22%. Food cost (24–32%) and labor (22–30%) are the primary levers.",
  },
  {
    question: "How can ice cream shops improve profitability?",
    answer:
      "Highest-impact levers: milkshake and sundae upsells, ice cream cakes for events, retail pints, off-season catering, and right-sizing labor for peak vs off-peak months.",
  },
  {
    question: "Why do ice cream shop margins vary so much?",
    answer:
      "Seasonality, location type (tourist vs residential), and franchise fees drive margin spread. A shop that earns 40% of revenue in summer must manage winter cash flow and fixed costs carefully.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-profit-margin/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency, formatPercent };

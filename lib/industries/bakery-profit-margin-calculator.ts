import {
  bakeryDataLinks,
  bakeryIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Bakery Profit Margin Calculator",
  subtitle:
    "Calculate your bakery's profit margin and compare it against industry benchmarks for independent bakeries.",
  description:
    "Free bakery profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your ingredient, labor, and rent costs stack up against 210+ bakeries.",
};

export const introContent = {
  lead: "Bakery profit margin depends on product mix, wholesale volume, and production efficiency — yet many owners track sales without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against independent bakeries.",
  bullets: [
    "Net margin = (Revenue − Ingredients − Labor − Rent − Marketing − Other) ÷ Revenue",
    "Industry median is 12%; healthy bakeries fall between 10–14%",
    "Ingredients and labor together should stay under 62% of revenue",
  ],
  audience:
    "Built for bakery owners, aspiring bakers, and buyers evaluating bakery profitability.",
};

export const defaultInputs = {
  revenue: 450000,
  ingredientCosts: 126000,
  laborCosts: 144000,
  rent: 40500,
  marketing: 13500,
  otherExpenses: 45000,
};

export const marginTiers = [
  { id: "weak", label: "Bottom Quartile", range: "3–8%", min: 0, max: 8, description: "Thin margins — review product mix and labor scheduling." },
  { id: "average", label: "Average", range: "10–14%", min: 10, max: 14, description: "Typical range for independent retail bakeries." },
  { id: "strong", label: "Top Quartile", range: "15–18%", min: 15, max: 18, description: "Strong custom cake and wholesale programs." },
  { id: "elite", label: "Elite", range: "18%+", min: 18, max: 100, description: "Best-in-class bakeries with premium products." },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 10) return "Below Average";
  if (marginPct <= 14) return "Average";
  if (marginPct < 16) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, ingredientCosts, laborCosts, rent, marketing, otherExpenses } = inputs;
  const totalCosts = ingredientCosts + laborCosts + rent + marketing + otherExpenses;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const breakdown = [
    { label: "Ingredients", amount: ingredientCosts, pct: revenue > 0 ? (ingredientCosts / revenue) * 100 : 0, color: "var(--metric-salary)" },
    { label: "Labor", amount: laborCosts, pct: revenue > 0 ? (laborCosts / revenue) * 100 : 0, color: "var(--metric-margin)" },
    { label: "Rent", amount: rent, pct: revenue > 0 ? (rent / revenue) * 100 : 0, color: "var(--metric-revenue)" },
    { label: "Marketing", amount: marketing, pct: revenue > 0 ? (marketing / revenue) * 100 : 0, color: "var(--metric-valuation)" },
    { label: "Other", amount: otherExpenses, pct: revenue > 0 ? (otherExpenses / revenue) * 100 : 0, color: "var(--ink-faint)" },
  ];

  return { netProfit, marginPct, status: getMarginStatus(marginPct), totalCosts, breakdown };
}

export const faqs = [
  {
    question: "What is a good bakery profit margin?",
    answer:
      "A good net profit margin for an independent bakery is 10–14%. Top-quartile bakeries with strong custom cake and wholesale programs hit 15–18%. Below 8% signals ingredient cost drift or overstaffing.",
  },
  {
    question: "What is the average bakery margin?",
    answer:
      "The median net profit margin for independent U.S. bakeries is approximately 12%, based on our sample of 210+ bakeries. Cake-focused shops average 12–16%; wholesale-heavy bakeries 8–14%.",
  },
  {
    question: "How can bakeries improve profitability?",
    answer:
      "The highest-impact levers are custom cake revenue (60–75% gross margins), wholesale accounts, reducing ingredient waste, optimizing production schedules, and increasing average order value through bundling.",
  },
  {
    question: "Why do bakery margins vary so much?",
    answer:
      "Product mix drives margin spread — wedding cakes and custom orders carry premium margins while daily bread runs thinner. Wholesale adds volume but compresses per-unit margin. Labor for early-morning production is another major variable.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-profit-margin/");
export { bakeryIndustryAverages, bakeryDataLinks, formatCurrency, formatPercent };

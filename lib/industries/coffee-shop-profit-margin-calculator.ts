import {
  coffeeShopIndustryAverages,
  coffeeShopDataLinks,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Coffee Shop Profit Margin Calculator",
  subtitle:
    "Calculate your coffee shop's profit margin and compare it against industry benchmarks for independent cafes.",
  description:
    "Free coffee shop profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your ingredient, labor, and rent costs stack up against 290+ coffee shops.",
};

export const introContent = {
  lead: "Coffee shop profit margin is the key metric for evaluating cafe sustainability — yet most owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against independent coffee shops.",
  bullets: [
    "Net margin = (Revenue − Ingredients − Labor − Rent − Marketing − Other) ÷ Revenue",
    "Industry median is 13%; healthy cafes fall between 10–18%",
    "Ingredients and labor together should stay under 55% of revenue",
  ],
  audience:
    "Built for cafe owners, aspiring operators, and buyers evaluating coffee shop profitability.",
};

export const defaultInputs = {
  revenue: 550000,
  ingredientCosts: 121000,
  laborCosts: 176000,
  rent: 55000,
  marketing: 16500,
  otherExpenses: 88000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "4–8%",
    min: 0,
    max: 8,
    description: "Thin margins — review labor scheduling and ingredient costs.",
  },
  {
    id: "average",
    label: "Average",
    range: "10–14%",
    min: 10,
    max: 14,
    description: "Typical range for independent neighborhood cafes.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "15–18%",
    min: 15,
    max: 18,
    description: "Strong operators with drive-thru, food attach, or retail sales.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "18%+",
    min: 18,
    max: 100,
    description: "Best-in-class concepts with high ticket and lean labor.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 10) return "Below Average";
  if (marginPct <= 14) return "Average";
  if (marginPct < 16) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, ingredientCosts, laborCosts, rent, marketing, otherExpenses } =
    inputs;
  const totalCosts =
    ingredientCosts + laborCosts + rent + marketing + otherExpenses;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Ingredients",
      amount: ingredientCosts,
      pct: revenue > 0 ? (ingredientCosts / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Labor",
      amount: laborCosts,
      pct: revenue > 0 ? (laborCosts / revenue) * 100 : 0,
      color: "var(--metric-margin)",
    },
    {
      label: "Rent",
      amount: rent,
      pct: revenue > 0 ? (rent / revenue) * 100 : 0,
      color: "var(--metric-revenue)",
    },
    {
      label: "Marketing",
      amount: marketing,
      pct: revenue > 0 ? (marketing / revenue) * 100 : 0,
      color: "var(--metric-valuation)",
    },
    {
      label: "Other",
      amount: otherExpenses,
      pct: revenue > 0 ? (otherExpenses / revenue) * 100 : 0,
      color: "var(--ink-faint)",
    },
  ];

  return {
    netProfit,
    marginPct,
    status: getMarginStatus(marginPct),
    totalCosts,
    breakdown,
  };
}

export const faqs = [
  {
    question: "What is a good coffee shop profit margin?",
    answer:
      "A good net profit margin for an independent coffee shop is 12–15%. Top-quartile operators achieve 16–18% through drive-thru volume, $9+ average tickets, and retail bean sales. Below 8% signals labor or rent burden.",
  },
  {
    question: "What is the average coffee shop margin?",
    answer:
      "The median net profit margin for independent U.S. coffee shops is approximately 13%, based on our sample of 290+ cafes. Drive-thru locations average 14–20%; neighborhood cafes 10–14%.",
  },
  {
    question: "How can coffee shops improve profitability?",
    answer:
      "The highest-impact levers are labor scheduling (target 28–32%), ingredient cost control (target 18–25%), increasing average ticket through food attach and upsells, and adding retail bean sales at 50–65% margins.",
  },
  {
    question: "Why are coffee shop margins higher than restaurants?",
    answer:
      "Coffee shops benefit from high-margin beverage sales (70%+ gross on drinks), simpler operations, and lower average labor per transaction — especially with drive-thru. However, lower average tickets require higher daily volume.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/coffee-shop-profit-margin/"
);
export { coffeeShopIndustryAverages, coffeeShopDataLinks, formatCurrency, formatPercent };

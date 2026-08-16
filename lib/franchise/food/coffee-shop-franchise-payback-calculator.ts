import { formatCurrency, formatPercent } from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Franchise Payback Period Calculator",
  shortTitle: "Coffee Shop Payback Calculator",
  subtitle:
    "Estimate how many years it takes to recover coffee franchise investment from annual free cash flow.",
  description:
    "Free coffee shop franchise payback calculator. Model CapEx recovery using investment, cash flow, and optional debt service assumptions.",
};

export const introContent = {
  lead: "Payback period is one of the clearest diligence metrics for coffee franchise buyers. This calculator estimates simple years to recover invested capital from free cash flow.",
  bullets: [
    "Payback Years = Total Investment ÷ Annual Free Cash Flow",
    "Typical coffee franchise payback: 3.5–5.5 years when mature",
    "Debt service slows payback — model loan payments separately",
  ],
  audience: "Built for coffee franchise investors comparing CapEx recovery across drive-thru and café formats.",
};

export type CoffeeShopPaybackInputs = {
  totalInvestment: number;
  annualCashFlow: number;
  annualDebtService: number;
};

export const defaultInputs: CoffeeShopPaybackInputs = {
  totalInvestment: 550000,
  annualCashFlow: 120000,
  annualDebtService: 35000,
};

export function calculateCoffeeShopPayback(inputs: CoffeeShopPaybackInputs) {
  const investment = Math.max(0, inputs.totalInvestment);
  const operatingCashFlow = Math.max(0, inputs.annualCashFlow);
  const debtService = Math.max(0, inputs.annualDebtService);
  const freeCashFlow = operatingCashFlow - debtService;
  const paybackYears = freeCashFlow > 0 ? investment / freeCashFlow : null;
  const paybackMonths = paybackYears != null ? paybackYears * 12 : null;
  const fiveYearCumulative = freeCashFlow * 5;
  const fiveYearSurplus = fiveYearCumulative - investment;

  let rating: "Fast" | "Typical" | "Slow" | "N/A" = "N/A";
  if (paybackYears != null) {
    if (paybackYears < 3.5) rating = "Fast";
    else if (paybackYears <= 5.5) rating = "Typical";
    else rating = "Slow";
  }

  return {
    freeCashFlow,
    paybackYears,
    paybackMonths,
    fiveYearCumulative,
    fiveYearSurplus,
    rating,
  };
}

export const faqs = [
  {
    question: "What is a good payback period for a coffee franchise?",
    answer:
      "Many coffee franchises target roughly 3.5–5.5 years of cumulative free cash flow to recover total investment. Faster payback usually requires strong AUV, controlled CapEx, and disciplined labor. Soft territories or heavy financing can push payback beyond six years.",
  },
  {
    question: "Is payback the same as break-even?",
    answer:
      "No. Monthly operating break-even is when revenue covers operating costs. Payback is when cumulative free cash flow recovers the full initial investment. Break-even can arrive in 12–24 months while full CapEx payback still takes several years.",
  },
  {
    question: "Should I include debt service in payback?",
    answer:
      "Yes for cash-on-cash diligence. Free cash flow after debt service is what actually returns your equity. Also review unlevered payback (before debt) when comparing brands with different financing structures.",
  },
  {
    question: "How do drive-thru formats affect payback?",
    answer:
      "Drive-thru coffee franchises often have higher CapEx but also higher AUV upside. Payback can be faster than cafés when throughput is strong — or slower if site costs inflate Item 7 without matching sales.",
  },
] as const;

export const relatedTools = [
  {
    label: "Coffee Shop Franchise ROI Calculator",
    href: "/calculators/coffee-shop-franchise-roi/",
    description: "Full ROI, cash-on-cash, and break-even outputs.",
  },
  {
    label: "Franchise Royalty Calculator",
    href: "/calculators/coffee-shop-franchise-royalty/",
    description: "Quantify royalty and marketing fee drag.",
  },
  {
    label: "Coffee Shop Break-even Calculator",
    href: "/calculators/coffee-shop-break-even/",
    description: "Daily customers and revenue needed to break even.",
  },
  {
    label: "Coffee Shop Franchise Guide",
    href: "/franchise/food/coffee-shop-franchise/",
    description: "Costs, rankings, and brand comparison tables.",
  },
] as const;

export const franchiseDataLinks = [
  {
    label: "Coffee Franchise ROI Section",
    href: "/franchise/food/coffee-shop-franchise/#roi",
    description: "Interactive ROI model on the franchise guide.",
  },
  {
    label: "Startup Cost Breakdown",
    href: "/franchise/food/coffee-shop-franchise/#costs",
    description: "CapEx stack from franchise fee to working capital.",
  },
  {
    label: "Best Coffee Franchise Rankings",
    href: "/franchise/food/coffee-shop-franchise/#rankings",
    description: "Weighted shortlists including ROI and payback factors.",
  },
  {
    label: "Coffee Shop Startup Cost Calculator",
    href: "/calculators/coffee-shop-startup-cost/",
    description: "Independent cafe CapEx model for comparison.",
  },
] as const;

export { formatCurrency, formatPercent };

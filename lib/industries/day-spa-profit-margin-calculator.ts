import {
  formatCurrency,
  formatPercent,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Profit Margin Calculator & Net Profit Tool",
  shortTitle: "Day Spa Profit Margin Calculator",
  subtitle: "Model net profit and margin from service revenue, therapist payroll, supplies, and overhead.",
  description:
    "Free day spa profit margin calculator. Estimate net profit and margin from revenue, therapist payroll, product COGS, rent, marketing, and overhead.",
};

export const introContent = {
  lead: "Day spa profitability hinges on payroll discipline, product COGS, and room utilization. This calculator models your P&L from revenue through net profit.",
  bullets: [
    "Net Margin = (Revenue − Payroll − Product COGS − Rent − Marketing − Overhead) ÷ Revenue",
    "Payroll typically runs 42–50% of revenue",
    "Healthy day spas achieve 10–18% net margin",
  ],
  audience: "Built for day spa owners benchmarking profitability and cost structure.",
};

export type ProfitInputs = {
  revenue: number;
  payrollPct: number;
  productCogsPct: number;
  rentPct: number;
  marketingPct: number;
  overheadPct: number;
};

export const defaultInputs: ProfitInputs = {
  revenue: 750000,
  payrollPct: 46,
  productCogsPct: 10,
  rentPct: 12,
  marketingPct: 8,
  overheadPct: 12,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "10 – 18%" },
  { metric: "Payroll %", range: "42 – 50%" },
  { metric: "Product COGS %", range: "8 – 14%" },
  { metric: "Marketing %", range: "6 – 12%" },
] as const;

export function calculateProfit(inputs: ProfitInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const productCogs = inputs.revenue * (inputs.productCogsPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const marketing = inputs.revenue * (inputs.marketingPct / 100);
  const overhead = inputs.revenue * (inputs.overheadPct / 100);
  const totalCosts = payroll + productCogs + rent + marketing + overhead;
  const netProfit = inputs.revenue - totalCosts;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;
  const grossMargin =
    inputs.revenue > 0 ? ((inputs.revenue - productCogs) / inputs.revenue) * 100 : 0;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netMargin < 10) status = "below";
  else if (netMargin >= 18) status = "strong";

  return { payroll, productCogs, rent, marketing, overhead, totalCosts, netProfit, netMargin, grossMargin, status };
}

export const faqs = [
  {
    question: "What is the average profit margin for a day spa?",
    answer:
      "The average day spa profit margin runs 10–18% net, with a median around 14%. Spas that keep payroll near 42–50% of revenue and drive membership volume can push net margins toward the top of the range.",
  },
  {
    question: "What are the biggest costs for a day spa?",
    answer:
      "Therapist payroll (42–50%), product and consumables (8–14%), marketing (6–12%), rent (10–16%), and retail inventory are the largest day spa expenses. Controlling payroll and maximizing room utilization are the highest-impact margin levers.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-profit-margin/");
export { daySpaDataLinks, formatCurrency, formatPercent };

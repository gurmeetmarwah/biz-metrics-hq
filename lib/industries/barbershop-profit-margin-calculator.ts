import {
  formatCurrency,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Profit Margin Calculator & Net Profit Tool",
  shortTitle: "Barbershop Profit Margin Calculator",
  subtitle: "Model net profit and margin from service revenue, barber payroll, supplies, and overhead.",
  description:
    "Free barbershop profit margin calculator. Estimate net profit and margin from revenue, barber payroll, product COGS, rent, marketing, and overhead.",
};

export const introContent = {
  lead: "Barbershop profitability hinges on payroll discipline, product COGS, and chair utilization. This calculator models your P&L from revenue through net profit.",
  bullets: [
    "Net Margin = (Revenue − Payroll − Product COGS − Rent − Marketing − Overhead) ÷ Revenue",
    "Payroll typically runs 40–48% of revenue",
    "Healthy barbershops achieve 12–20% net margin",
  ],
  audience: "Built for barbershop owners benchmarking profitability and cost structure.",
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
  revenue: 280000,
  payrollPct: 44,
  productCogsPct: 6,
  rentPct: 13,
  marketingPct: 5,
  overheadPct: 16,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "12 – 20%" },
  { metric: "Payroll %", range: "40 – 48%" },
  { metric: "Product COGS %", range: "4 – 7%" },
  { metric: "Marketing %", range: "4 – 6%" },
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
  if (netMargin < 12) status = "below";
  else if (netMargin >= 20) status = "strong";

  return { payroll, productCogs, rent, marketing, overhead, totalCosts, netProfit, netMargin, grossMargin, status };
}

export const faqs = [
  {
    question: "What is the average profit margin for a barbershop?",
    answer:
      "The average barbershop profit margin runs 12–20% net, with a median around 16%. Shops that keep payroll near 40–48% of revenue and drive high chair utilization can push net margins toward the top of the range.",
  },
  {
    question: "What are the biggest costs for a barbershop?",
    answer:
      "Barber payroll (40–48%), product and consumables (4–7%), marketing (4–6%), rent (10–15%), and retail inventory are the largest barbershop expenses. Controlling payroll and maximizing chair utilization are the highest-impact margin levers.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-profit-margin/");
export { barbershopDataLinks, formatCurrency, formatPercent };

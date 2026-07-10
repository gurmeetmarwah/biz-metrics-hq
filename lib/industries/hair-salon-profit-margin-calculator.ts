import {
  formatCurrency,
  formatPercent,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Profit Margin Calculator & Net Profit Tool",
  shortTitle: "Hair Salon Profit Margin Calculator",
  subtitle: "Model net profit and margin from service revenue, payroll, product COGS, and overhead.",
  description:
    "Free hair salon profit margin calculator. Estimate net profit and margin from revenue, payroll, rent, product cost, and overhead for your salon.",
};

export const introContent = {
  lead: "Hair salon profitability hinges on payroll discipline and retail margin. This calculator models your P&L from revenue through net profit and the average hair salon profit margin.",
  bullets: [
    "Net Margin = (Revenue − Payroll − Rent − Product COGS − Overhead) ÷ Revenue",
    "Payroll and commissions typically run 45–50% of revenue",
    "Healthy hair salons achieve 8–15% net margin (top operators 16–22%)",
  ],
  audience: "Built for salon owners benchmarking the average hair salon profit margin and cost structure.",
};

export type ProfitInputs = {
  revenue: number;
  payrollPct: number;
  rentPct: number;
  productCogsPct: number;
  overheadPct: number;
};

export const defaultInputs: ProfitInputs = {
  revenue: 320000,
  payrollPct: 47,
  rentPct: 14,
  productCogsPct: 12,
  overheadPct: 16,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "8 – 15%" },
  { metric: "Payroll %", range: "45 – 50%" },
  { metric: "Rent %", range: "10 – 16%" },
  { metric: "Product COGS %", range: "10 – 14%" },
] as const;

export function calculateProfit(inputs: ProfitInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const productCogs = inputs.revenue * (inputs.productCogsPct / 100);
  const overhead = inputs.revenue * (inputs.overheadPct / 100);
  const totalCosts = payroll + rent + productCogs + overhead;
  const netProfit = inputs.revenue - totalCosts;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;
  const grossMargin =
    inputs.revenue > 0 ? ((inputs.revenue - productCogs) / inputs.revenue) * 100 : 0;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netMargin < 8) status = "below";
  else if (netMargin >= 16) status = "strong";

  return { payroll, rent, productCogs, overhead, totalCosts, netProfit, netMargin, grossMargin, status };
}

export const faqs = [
  {
    question: "What is the average profit margin for a hair salon?",
    answer:
      "The average hair salon profit margin runs 8–15% net, with a median around 11%. Salons that keep payroll near 45–50% of revenue and add strong retail attachment can push net margins to 16–22%.",
  },
  {
    question: "Why is payroll so important to hair salon profitability?",
    answer:
      "Payroll and commissions are the largest cost in a hair salon, typically 45–50% of revenue. Even a few points of payroll drift can erase net margin, so controlling labor cost is the biggest lever on hair salon profitability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-profit-margin/");
export { hairSalonDataLinks, formatCurrency, formatPercent };

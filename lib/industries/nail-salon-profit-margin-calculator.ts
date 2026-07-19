import {
  formatCurrency,
  formatPercent,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Profit Margin Calculator & Net Profit Tool",
  shortTitle: "Nail Salon Profit Margin Calculator",
  subtitle: "Model net profit and margin from service revenue, payroll, supplies, and overhead.",
  description:
    "Free nail salon profit margin calculator. Estimate net profit and margin from revenue, payroll, rent, supply cost, and overhead for your salon.",
};

export const introContent = {
  lead: "Nail salon profitability hinges on payroll discipline and service mix. This calculator models your P&L from revenue through net profit and the average nail salon profit margin.",
  bullets: [
    "Net Margin = (Revenue − Payroll − Rent − Supplies COGS − Overhead) ÷ Revenue",
    "Payroll and commissions typically run 42–50% of revenue",
    "Healthy nail salons achieve 10–17% net margin",
  ],
  audience: "Built for nail salon owners benchmarking the average nail salon profit margin and cost structure.",
};

export type ProfitInputs = {
  revenue: number;
  payrollPct: number;
  rentPct: number;
  suppliesCogsPct: number;
  overheadPct: number;
};

export const defaultInputs: ProfitInputs = {
  revenue: 300000,
  payrollPct: 46,
  rentPct: 12,
  suppliesCogsPct: 8,
  overheadPct: 18,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "10 – 17%" },
  { metric: "Payroll %", range: "42 – 50%" },
  { metric: "Rent %", range: "10 – 14%" },
  { metric: "Supplies COGS %", range: "6 – 10%" },
] as const;

export function calculateProfit(inputs: ProfitInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const suppliesCogs = inputs.revenue * (inputs.suppliesCogsPct / 100);
  const overhead = inputs.revenue * (inputs.overheadPct / 100);
  const totalCosts = payroll + rent + suppliesCogs + overhead;
  const netProfit = inputs.revenue - totalCosts;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;
  const grossMargin =
    inputs.revenue > 0 ? ((inputs.revenue - suppliesCogs) / inputs.revenue) * 100 : 0;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netMargin < 10) status = "below";
  else if (netMargin >= 17) status = "strong";

  return { payroll, rent, suppliesCogs, overhead, totalCosts, netProfit, netMargin, grossMargin, status };
}

export const faqs = [
  {
    question: "What is the average profit margin for a nail salon?",
    answer:
      "The average nail salon profit margin runs 10–17% net, with a median around 13%. Salons that keep payroll near 42–50% of revenue and drive gel and nail art upsells can push net margins toward the top of the range.",
  },
  {
    question: "Why is payroll so important to nail salon profitability?",
    answer:
      "Payroll and commissions are the largest cost in a nail salon, typically 42–50% of revenue. Even a few points of payroll drift can erase net margin, so controlling labor cost is the biggest lever on nail salon profitability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-profit-margin/");
export { nailSalonDataLinks, formatCurrency, formatPercent };

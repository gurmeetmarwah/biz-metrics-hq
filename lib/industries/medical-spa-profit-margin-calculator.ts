import {
  formatCurrency,
  formatPercent,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Profit Margin Calculator & Net Profit Tool",
  shortTitle: "Medical Spa Profit Margin Calculator",
  subtitle: "Model net profit and margin from treatment revenue, payroll, supplies, and overhead.",
  description:
    "Free medical spa profit margin calculator. Estimate net profit and margin from revenue, payroll, injectable COGS, rent, marketing, and overhead.",
};

export const introContent = {
  lead: "Medical spa profitability hinges on payroll discipline, injectable COGS, and room utilization. This calculator models your P&L from revenue through net profit.",
  bullets: [
    "Net Margin = (Revenue − Payroll − Supplies COGS − Rent − Marketing − Overhead) ÷ Revenue",
    "Payroll typically runs 30–40% of revenue",
    "Healthy medical spas achieve 15–30% net margin",
  ],
  audience: "Built for medical spa owners benchmarking profitability and cost structure.",
};

export type ProfitInputs = {
  revenue: number;
  payrollPct: number;
  suppliesCogsPct: number;
  rentPct: number;
  marketingPct: number;
  overheadPct: number;
};

export const defaultInputs: ProfitInputs = {
  revenue: 1200000,
  payrollPct: 35,
  suppliesCogsPct: 20,
  rentPct: 11,
  marketingPct: 10,
  overheadPct: 12,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "15 – 30%" },
  { metric: "Payroll %", range: "30 – 40%" },
  { metric: "Injectable COGS %", range: "12 – 18%" },
  { metric: "Marketing %", range: "8 – 15%" },
] as const;

export function calculateProfit(inputs: ProfitInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const suppliesCogs = inputs.revenue * (inputs.suppliesCogsPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const marketing = inputs.revenue * (inputs.marketingPct / 100);
  const overhead = inputs.revenue * (inputs.overheadPct / 100);
  const totalCosts = payroll + suppliesCogs + rent + marketing + overhead;
  const netProfit = inputs.revenue - totalCosts;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;
  const grossMargin =
    inputs.revenue > 0 ? ((inputs.revenue - suppliesCogs) / inputs.revenue) * 100 : 0;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netMargin < 15) status = "below";
  else if (netMargin >= 28) status = "strong";

  return { payroll, suppliesCogs, rent, marketing, overhead, totalCosts, netProfit, netMargin, grossMargin, status };
}

export const faqs = [
  {
    question: "What is the average profit margin for a medical spa?",
    answer:
      "The average medical spa profit margin runs 15–30% net, with a median around 22%. Practices that keep payroll near 30–40% of revenue and drive injectable volume can push net margins toward the top of the range.",
  },
  {
    question: "What are the biggest costs for a medical spa?",
    answer:
      "Provider payroll (30–40%), injectable and supply COGS (12–20%), marketing (8–15%), rent (8–14%), and device financing are the largest medical spa expenses. Controlling payroll and maximizing room utilization are the highest-impact margin levers.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-profit-margin/");
export { medicalSpaDataLinks, formatCurrency, formatPercent };

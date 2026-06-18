import {
  formatCurrency,
  formatPercent,
  pestControlDataLinks,
  pestControlIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pest-control-calculators-shared";

export const meta = {
  title: "Pest Control Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Pest Control Profit Margin Calculator",
  subtitle:
    "Calculate your pest control company's profit margin and compare it against industry benchmarks.",
  description:
    "Free pest control profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your payroll, chemicals, and fleet costs stack up against 220+ pest control businesses.",
};

export const introContent = {
  lead: "Pest control profit margin is among the highest in home services — yet many owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against pest control companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Chemicals − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 18%; healthy pest control companies fall between 15–25%",
    "Technician payroll and chemicals together should stay under 45% of revenue",
  ],
  audience:
    "Built for pest control owners, aspiring operators, and buyers evaluating pest control company profitability.",
};

export const defaultInputs = {
  revenue: 900000,
  technicianPayroll: 270000,
  chemicals: 99000,
  fleet: 72000,
  marketing: 99000,
  overhead: 198000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "10–14%",
    min: 0,
    max: 14,
    description: "Thin margins — review route density and chemical costs.",
  },
  {
    id: "average",
    label: "Average",
    range: "15–18%",
    min: 15,
    max: 18,
    description: "Typical range for owner-operated pest control companies.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "19–22%",
    min: 19,
    max: 22,
    description: "Strong operators with high recurring revenue and route density.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "23%+",
    min: 23,
    max: 100,
    description: "Best-in-class companies with subscription-heavy models and lean overhead.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 15) return "Below Average";
  if (marginPct <= 18) return "Average";
  if (marginPct < 22) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, technicianPayroll, chemicals, fleet, marketing, overhead } = inputs;
  const totalCosts = technicianPayroll + chemicals + fleet + marketing + overhead;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const grossProfit = revenue - chemicals;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Technician Payroll",
      amount: technicianPayroll,
      pct: revenue > 0 ? (technicianPayroll / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Chemicals & Supplies",
      amount: chemicals,
      pct: revenue > 0 ? (chemicals / revenue) * 100 : 0,
      color: "var(--metric-margin)",
    },
    {
      label: "Fleet",
      amount: fleet,
      pct: revenue > 0 ? (fleet / revenue) * 100 : 0,
      color: "var(--metric-revenue)",
    },
    {
      label: "Marketing",
      amount: marketing,
      pct: revenue > 0 ? (marketing / revenue) * 100 : 0,
      color: "var(--metric-valuation)",
    },
    {
      label: "Overhead",
      amount: overhead,
      pct: revenue > 0 ? (overhead / revenue) * 100 : 0,
      color: "var(--ink-faint)",
    },
  ];

  return {
    netProfit,
    marginPct,
    grossMarginPct,
    status: getMarginStatus(marginPct),
    totalCosts,
    breakdown,
  };
}

export const faqs = [
  {
    question: "What is a good profit margin for a pest control business?",
    answer:
      "A good net profit margin for an owner-operated pest control company is 18–22%. Top-quartile operators with strong subscription revenue and route density achieve 23–28%. Below 15% signals payroll burden or weak pricing.",
  },
  {
    question: "What is the average pest control profit margin?",
    answer:
      "The median net profit margin for U.S. pest control companies is approximately 18%, based on our sample of 220+ businesses. Subscription-heavy operators average 20–25%; one-time treatment businesses run lower.",
  },
  {
    question: "How can pest control companies improve profitability?",
    answer:
      "The highest-impact levers are route density (target $160K+ revenue per technician), recurring contract penetration, reducing churn, termite and mosquito upsells, and commercial account development.",
  },
  {
    question: "What is a healthy gross margin for pest control?",
    answer:
      "Healthy pest control gross margins (revenue minus direct chemicals and supplies) typically run 55–68%. Low material costs and high route density drive pest control's structural margin advantage over other home services.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pest-control-profit-margin/");
export { pestControlIndustryAverages, pestControlDataLinks, formatCurrency, formatPercent };

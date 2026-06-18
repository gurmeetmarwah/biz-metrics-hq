import {
  formatCurrency,
  formatPercent,
  cleaningBusinessDataLinks,
  cleaningBusinessIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/cleaning-business-calculators-shared";

export const meta = {
  title: "Cleaning Business Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Cleaning Business Profit Margin Calculator",
  subtitle:
    "Calculate your cleaning company's profit margin and compare it against industry benchmarks.",
  description:
    "Free cleaning business profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your payroll, supplies, and fleet costs stack up against 190+ cleaning businesses.",
};

export const introContent = {
  lead: "Cleaning business profit margin depends heavily on labor efficiency and contract retention. This calculator computes margin from real cost inputs and benchmarks you against cleaning companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Supplies − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 15%; healthy cleaning companies fall between 10–20%",
    "Cleaner payroll should stay under 55% of revenue for healthy margins",
  ],
  audience:
    "Built for cleaning business owners, aspiring operators, and buyers evaluating cleaning company profitability.",
};

export const defaultInputs = {
  revenue: 500000,
  cleanerPayroll: 260000,
  supplies: 35000,
  fleet: 25000,
  marketing: 40000,
  overhead: 65000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "6–9%",
    min: 0,
    max: 9,
    description: "Thin margins — review labor utilization and pricing.",
  },
  {
    id: "average",
    label: "Average",
    range: "10–14%",
    min: 10,
    max: 14,
    description: "Typical range for owner-operated cleaning companies.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "15–18%",
    min: 15,
    max: 18,
    description: "Strong operators with high recurring revenue and route density.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "19%+",
    min: 19,
    max: 100,
    description: "Best-in-class companies with contract-heavy models and lean overhead.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 10) return "Below Average";
  if (marginPct <= 15) return "Average";
  if (marginPct < 19) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, cleanerPayroll, supplies, fleet, marketing, overhead } = inputs;
  const totalCosts = cleanerPayroll + supplies + fleet + marketing + overhead;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const grossProfit = revenue - supplies;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Cleaner Payroll",
      amount: cleanerPayroll,
      pct: revenue > 0 ? (cleanerPayroll / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Supplies & Chemicals",
      amount: supplies,
      pct: revenue > 0 ? (supplies / revenue) * 100 : 0,
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
    question: "What is a good profit margin for a cleaning business?",
    answer:
      "A good net profit margin for an owner-operated cleaning company is 15–18%. Top-quartile operators with strong recurring contracts and route density achieve 19–24%. Below 10% signals payroll burden or weak pricing.",
  },
  {
    question: "What is the average cleaning business profit margin?",
    answer:
      "The median net profit margin for U.S. cleaning businesses is approximately 15%, based on our sample of 190+ companies. Residential-focused operators average 12–22%; commercial-heavy businesses run lower at 8–14%.",
  },
  {
    question: "How can cleaning businesses improve profitability?",
    answer:
      "The highest-impact levers are route density (target $115K+ revenue per cleaner), recurring contract penetration, reducing employee turnover, upselling specialty services, and commercial account development.",
  },
  {
    question: "What is a healthy gross margin for cleaning?",
    answer:
      "Healthy cleaning gross margins (revenue minus direct supplies) typically run 40–55%. Labor efficiency and contract retention drive the gap between gross and net margin in this labor-intensive industry.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/cleaning-business-profit-margin/");
export { cleaningBusinessIndustryAverages, cleaningBusinessDataLinks, formatCurrency, formatPercent };

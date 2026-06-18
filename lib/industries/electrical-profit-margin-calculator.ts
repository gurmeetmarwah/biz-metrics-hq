import {
  formatCurrency,
  formatPercent,
  electricalDataLinks,
  electricalIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/electrical-calculators-shared";

export const meta = {
  title: "Electrical Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Electrical Profit Margin Calculator",
  subtitle:
    "Calculate your electrical company's profit margin and compare it against industry benchmarks.",
  description:
    "Free electrical profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your payroll, materials, and fleet costs stack up against 340+ electrical businesses.",
};

export const introContent = {
  lead: "Electrical profit margin is the key metric for evaluating contractor sustainability — yet many owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against electrical contractors nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 10%; healthy electrical companies fall between 7–13%",
    "Electrician payroll and materials together should stay under 62% of revenue",
  ],
  audience:
    "Built for electrical owners, aspiring contractors, and buyers evaluating electrical company profitability.",
};

export const defaultInputs = {
  revenue: 2000000,
  technicianPayroll: 720000,
  materials: 480000,
  fleet: 140000,
  marketing: 120000,
  overhead: 340000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "4–6%",
    min: 0,
    max: 6,
    description: "Thin margins — review labor efficiency and project estimating.",
  },
  {
    id: "average",
    label: "Average",
    range: "7–10%",
    min: 7,
    max: 10,
    description: "Typical range for owner-operated electrical contractors.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "11–13%",
    min: 11,
    max: 13,
    description: "Strong operators with commercial mix and disciplined labor management.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "14%+",
    min: 14,
    max: 100,
    description: "Best-in-class companies with high-value installs and lean overhead.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 7) return "Below Average";
  if (marginPct <= 10) return "Average";
  if (marginPct < 13) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, technicianPayroll, materials, fleet, marketing, overhead } = inputs;
  const totalCosts = technicianPayroll + materials + fleet + marketing + overhead;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const grossProfit = revenue - materials;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Electrician Payroll",
      amount: technicianPayroll,
      pct: revenue > 0 ? (technicianPayroll / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Materials & Parts",
      amount: materials,
      pct: revenue > 0 ? (materials / revenue) * 100 : 0,
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
    question: "What is a good profit margin for an electrical business?",
    answer:
      "A good net profit margin for an owner-operated electrical company is 10–13%. Top-quartile operators with strong commercial mix and maintenance contracts achieve 14–17%. Below 7% signals payroll burden, estimating issues, or weak pricing.",
  },
  {
    question: "What is the average electrical profit margin?",
    answer:
      "The median net profit margin for U.S. electrical contractors is approximately 10%, based on our sample of 340+ businesses. Residential service-heavy companies average 8–12%; commercial-focused firms can reach 11–15%.",
  },
  {
    question: "How can electrical companies improve profitability?",
    answer:
      "The highest-impact levers are commercial project mix, labor utilization (target 65%+ billable hours), material cost control, maintenance contract penetration, and accurate job estimating on bid work.",
  },
  {
    question: "What is a healthy gross margin for electrical contracting?",
    answer:
      "Healthy electrical gross margins (revenue minus direct materials and job costs) typically run 40–50%. Service work tends toward the higher end; new construction rough-in runs lower but at higher volume.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/electrical-profit-margin/");
export { electricalIndustryAverages, electricalDataLinks, formatCurrency, formatPercent };

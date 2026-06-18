import {
  formatCurrency,
  formatPercent,
  plumbingDataLinks,
  plumbingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/plumbing-calculators-shared";

export const meta = {
  title: "Plumbing Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Plumbing Profit Margin Calculator",
  subtitle:
    "Calculate your plumbing company's profit margin and compare it against industry benchmarks.",
  description:
    "Free plumbing profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your payroll, materials, and fleet costs stack up against 380+ plumbing businesses.",
};

export const introContent = {
  lead: "Plumbing profit margin is the key metric for evaluating contractor sustainability — yet many owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against plumbing companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 11%; healthy plumbing companies fall between 8–14%",
    "Plumber payroll and materials together should stay under 58% of revenue",
  ],
  audience:
    "Built for plumbing owners, aspiring contractors, and buyers evaluating plumbing company profitability.",
};

export const defaultInputs = {
  revenue: 1600000,
  technicianPayroll: 544000,
  materials: 320000,
  fleet: 112000,
  marketing: 128000,
  overhead: 320000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "4–7%",
    min: 0,
    max: 7,
    description: "Thin margins — review labor efficiency and material costs.",
  },
  {
    id: "average",
    label: "Average",
    range: "8–11%",
    min: 8,
    max: 11,
    description: "Typical range for owner-operated plumbing contractors.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "12–14%",
    min: 12,
    max: 14,
    description: "Strong operators with maintenance contracts and disciplined dispatch.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "15%+",
    min: 15,
    max: 100,
    description: "Best-in-class companies with high emergency mix and lean overhead.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 8) return "Below Average";
  if (marginPct <= 11) return "Average";
  if (marginPct < 14) return "Above Average";
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
      label: "Plumber Payroll",
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
    question: "What is a good profit margin for a plumbing business?",
    answer:
      "A good net profit margin for an owner-operated plumbing company is 11–14%. Top-quartile operators with strong emergency dispatch and maintenance contracts achieve 15–18%. Below 8% signals payroll burden or weak pricing.",
  },
  {
    question: "What is the average plumbing profit margin?",
    answer:
      "The median net profit margin for U.S. plumbing contractors is approximately 11%, based on our sample of 380+ businesses. Residential-heavy companies average 9–13%; commercial-focused firms can reach 12–15% with contract work.",
  },
  {
    question: "How can plumbing companies improve profitability?",
    answer:
      "The highest-impact levers are maintenance contract penetration, emergency call premium pricing, plumber productivity (target $215K+ revenue per plumber), material cost control, and route density to reduce non-billable drive time.",
  },
  {
    question: "What is a healthy gross margin for plumbing?",
    answer:
      "Healthy plumbing gross margins (revenue minus direct materials and job costs) typically run 42–52%. Emergency service work tends toward the higher end; new construction plumbing runs lower but at higher volume.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/plumbing-profit-margin/");
export { plumbingIndustryAverages, plumbingDataLinks, formatCurrency, formatPercent };

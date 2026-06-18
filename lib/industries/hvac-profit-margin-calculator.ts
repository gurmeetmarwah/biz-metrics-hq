import {
  formatCurrency,
  formatPercent,
  hvacIndustryAverages,
  hvacDataLinks,
  relatedCalculators,
} from "@/lib/industries/hvac-calculators-shared";

export const meta = {
  title: "HVAC Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "HVAC Profit Margin Calculator",
  subtitle:
    "Calculate your HVAC company's profit margin and compare it against industry benchmarks.",
  description:
    "Free HVAC profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how your payroll, materials, and fleet costs stack up against 420+ HVAC businesses.",
};

export const introContent = {
  lead: "HVAC profit margin is the key metric for evaluating contractor sustainability — yet many owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against HVAC companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 12%; healthy HVAC companies fall between 8–16%",
    "Technician payroll and materials together should stay under 60% of revenue",
  ],
  audience:
    "Built for HVAC owners, aspiring contractors, and buyers evaluating HVAC company profitability.",
};

export const defaultInputs = {
  revenue: 2400000,
  technicianPayroll: 768000,
  materials: 528000,
  fleet: 192000,
  marketing: 168000,
  overhead: 456000,
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
    range: "8–12%",
    min: 8,
    max: 12,
    description: "Typical range for owner-operated HVAC contractors.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "13–16%",
    min: 13,
    max: 16,
    description: "Strong operators with maintenance contracts and disciplined dispatch.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "17%+",
    min: 17,
    max: 100,
    description: "Best-in-class companies with high recurring revenue and lean overhead.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 8) return "Below Average";
  if (marginPct <= 12) return "Average";
  if (marginPct < 16) return "Above Average";
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
      label: "Technician Payroll",
      amount: technicianPayroll,
      pct: revenue > 0 ? (technicianPayroll / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Materials & Equipment",
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
    question: "What is a good profit margin for an HVAC business?",
    answer:
      "A good net profit margin for an owner-operated HVAC company is 12–15%. Top-quartile operators with 35%+ maintenance revenue and disciplined labor management achieve 16–22%. Below 8% signals payroll burden or weak pricing.",
  },
  {
    question: "What is the average HVAC profit margin?",
    answer:
      "The median net profit margin for U.S. HVAC contractors is approximately 12%, based on our sample of 420+ businesses. Residential-heavy companies average 10–14%; commercial-focused firms can reach 14–18% with contract work.",
  },
  {
    question: "How can HVAC companies improve profitability?",
    answer:
      "The highest-impact levers are maintenance contract penetration (target 35%+), technician productivity (target $240K+ revenue per tech), material cost control, and route density to reduce non-billable drive time.",
  },
  {
    question: "What is a healthy gross margin for HVAC?",
    answer:
      "Healthy HVAC gross margins (revenue minus direct materials and job costs) typically run 45–55%. Service and maintenance work tends toward the higher end; new construction install work runs lower but at higher volume.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hvac-profit-margin/");
export { hvacIndustryAverages, hvacDataLinks, formatCurrency, formatPercent };

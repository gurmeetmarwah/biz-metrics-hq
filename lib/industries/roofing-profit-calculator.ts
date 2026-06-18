import {
  formatCurrency,
  formatPercent,
  roofingDataLinks,
  roofingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/roofing-calculators-shared";

export const meta = {
  title: "Roofing Profit Calculator & Industry Benchmark Tool",
  shortTitle: "Roofing Profit Calculator",
  subtitle:
    "Calculate your roofing company's profit margin and compare it against industry benchmarks.",
  description:
    "Free roofing profit calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how labor, materials, and marketing costs stack up against 310+ roofing businesses.",
};

export const introContent = {
  lead: "Roofing profit margin depends heavily on material costs, marketing spend, and sales efficiency. This calculator computes net margin from real cost inputs and benchmarks you against roofing companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Labor − Materials − Marketing − Fleet − Overhead) ÷ Revenue",
    "Industry median is 9%; healthy roofing companies fall between 6–13%",
    "Materials and labor together often exceed 60% of revenue",
  ],
  audience:
    "Built for roofing owners, aspiring contractors, and buyers evaluating roofing company profitability.",
};

export const defaultInputs = {
  revenue: 2000000,
  crewLabor: 600000,
  materials: 720000,
  marketing: 220000,
  fleet: 120000,
  overhead: 280000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "3–6%",
    min: 0,
    max: 6,
    description: "Thin margins — review material costs and lead acquisition spend.",
  },
  {
    id: "average",
    label: "Average",
    range: "7–9%",
    min: 7,
    max: 9,
    description: "Typical range for owner-operated roofing contractors.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "10–13%",
    min: 10,
    max: 13,
    description: "Strong operators with efficient sales and crew management.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "14%+",
    min: 14,
    max: 100,
    description: "Best-in-class storm-market and commercial operators.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 7) return "Below Average";
  if (marginPct <= 9) return "Average";
  if (marginPct < 13) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, crewLabor, materials, marketing, fleet, overhead } = inputs;
  const totalCosts = crewLabor + materials + marketing + fleet + overhead;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const grossProfit = revenue - materials;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Crew Labor",
      amount: crewLabor,
      pct: revenue > 0 ? (crewLabor / revenue) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Materials",
      amount: materials,
      pct: revenue > 0 ? (materials / revenue) * 100 : 0,
      color: "var(--metric-margin)",
    },
    {
      label: "Marketing & Lead Gen",
      amount: marketing,
      pct: revenue > 0 ? (marketing / revenue) * 100 : 0,
      color: "var(--accent)",
    },
    {
      label: "Fleet",
      amount: fleet,
      pct: revenue > 0 ? (fleet / revenue) * 100 : 0,
      color: "var(--metric-revenue)",
    },
    {
      label: "Overhead",
      amount: overhead,
      pct: revenue > 0 ? (overhead / revenue) * 100 : 0,
      color: "var(--metric-valuation)",
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
    question: "What is a good profit margin for a roofing business?",
    answer:
      "A good net profit margin for an owner-operated roofing company is 9–13%. Top-quartile operators with strong sales processes and insurance restoration capabilities achieve 14–18%. Below 7% signals high marketing spend or material cost issues.",
  },
  {
    question: "What is the average roofing profit margin?",
    answer:
      "The median net profit margin for U.S. roofing contractors is approximately 9%, based on our sample of 310+ businesses. Gross margins run 28–38% due to high material costs as a percentage of revenue.",
  },
  {
    question: "Why are roofing gross margins lower than HVAC or plumbing?",
    answer:
      "Materials represent 30–42% of roofing revenue — shingles, underlayment, and flashing consume a larger share than service trades. Net margins are comparable when sales efficiency and crew productivity are strong.",
  },
  {
    question: "How can roofing companies improve profitability?",
    answer:
      "The highest-impact levers are lead cost control (target marketing under 12% of revenue), accurate estimating, insurance supplement capture, crew scheduling efficiency, and diversifying between repair and replacement work.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/roofing-profit/");
export { roofingIndustryAverages, roofingDataLinks, formatCurrency, formatPercent };

import {
  formatCurrency,
  formatPercent,
  landscapingDataLinks,
  landscapingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/landscaping-calculators-shared";

export const meta = {
  title: "Landscaping Profit Calculator & Industry Benchmark Tool",
  shortTitle: "Landscaping Profit Calculator",
  subtitle:
    "Calculate your landscaping company's profit margin and compare it against industry benchmarks.",
  description:
    "Free landscaping profit calculator with industry benchmarks, cost diagnostics, and quartile comparison. See how labor, materials, and fleet costs stack up against 280+ landscaping businesses.",
};

export const introContent = {
  lead: "Landscaping profit margin depends heavily on crew labor efficiency and route density. This calculator computes net margin from real cost inputs and benchmarks you against landscaping companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Labor − Materials − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 8%; healthy landscaping companies fall between 5–12%",
    "Crew labor often represents 40–55% of revenue",
  ],
  audience:
    "Built for landscaping owners, aspiring contractors, and buyers evaluating landscaping company profitability.",
};

export const defaultInputs = {
  revenue: 1100000,
  crewLabor: 517000,
  materials: 176000,
  fleet: 132000,
  marketing: 55000,
  overhead: 132000,
};

export const marginTiers = [
  {
    id: "weak",
    label: "Bottom Quartile",
    range: "3–5%",
    min: 0,
    max: 5,
    description: "Thin margins — review crew efficiency and pricing on maintenance routes.",
  },
  {
    id: "average",
    label: "Average",
    range: "6–8%",
    min: 6,
    max: 8,
    description: "Typical range for owner-operated landscaping contractors.",
  },
  {
    id: "strong",
    label: "Top Quartile",
    range: "9–11%",
    min: 9,
    max: 11,
    description: "Strong operators with efficient routing and commercial contracts.",
  },
  {
    id: "elite",
    label: "Elite",
    range: "12%+",
    min: 12,
    max: 100,
    description: "Best-in-class design-build and commercial maintenance operators.",
  },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 6) return "Below Average";
  if (marginPct <= 8) return "Average";
  if (marginPct < 12) return "Above Average";
  return "Top Quartile";
}

export function calculateProfitMargin(inputs: typeof defaultInputs) {
  const { revenue, crewLabor, materials, fleet, marketing, overhead } = inputs;
  const totalCosts = crewLabor + materials + fleet + marketing + overhead;
  const netProfit = revenue - totalCosts;
  const marginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const grossProfit = revenue - materials;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const breakdown = [
    {
      label: "Crew Labor",
      amount: crewLabor,
      pct: revenue > 0 ? (crewLabor / revenue) * 100 : 0,
    },
    {
      label: "Materials & Plants",
      amount: materials,
      pct: revenue > 0 ? (materials / revenue) * 100 : 0,
    },
    {
      label: "Fleet & Equipment",
      amount: fleet,
      pct: revenue > 0 ? (fleet / revenue) * 100 : 0,
    },
    {
      label: "Marketing",
      amount: marketing,
      pct: revenue > 0 ? (marketing / revenue) * 100 : 0,
    },
    {
      label: "Overhead",
      amount: overhead,
      pct: revenue > 0 ? (overhead / revenue) * 100 : 0,
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
    question: "What is a good profit margin for a landscaping business?",
    answer:
      "A good net profit margin for an owner-operated landscaping company is 8–12%. Top-quartile operators with strong commercial contracts and route density achieve 12–15%. Below 6% signals labor cost or pricing issues on maintenance routes.",
  },
  {
    question: "What is the average landscaping profit margin?",
    answer:
      "The median net profit margin for U.S. landscaping contractors is approximately 8%, based on our sample of 280+ businesses. Gross margins run 35–45% before labor and overhead.",
  },
  {
    question: "Why is landscaping labor such a large expense?",
    answer:
      "Crew labor represents 40–55% of landscaping revenue — the highest labor share among home services trades. Weekly maintenance routes are labor-intensive, and crew scheduling efficiency directly drives profitability.",
  },
  {
    question: "How can landscaping companies improve profitability?",
    answer:
      "The highest-impact levers are route density, commercial contract pricing, upselling enhancements and irrigation, reducing drive time between properties, and balancing high-margin project work with recurring maintenance.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/landscaping-profit/");
export { landscapingIndustryAverages, landscapingDataLinks, formatCurrency, formatPercent };

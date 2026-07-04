import {
  formatCurrency,
  formatPercent,
  poolServiceDataLinks,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Pool Service Profit Calculator",
  subtitle:
    "Calculate your pool service company's profit margin and compare it against industry benchmarks.",
  description:
    "Free pool service profit margin calculator with industry benchmarks, cost diagnostics, and quartile comparison for route-based pool operators.",
};

export const introContent = {
  lead: "Pool service profit margin benefits from recurring contracts and route density — yet many owners track revenue without knowing their true net margin. This calculator computes margin from real cost inputs and benchmarks you against pool service companies nationwide.",
  bullets: [
    "Net margin = (Revenue − Payroll − Chemicals − Fleet − Marketing − Overhead) ÷ Revenue",
    "Industry median is 22%; healthy pool service companies fall between 18–26%",
    "Technician payroll and chemicals together should stay under 45% of revenue",
  ],
  audience:
    "Built for pool service owners, aspiring operators, and buyers evaluating pool company profitability.",
};

export const defaultInputs = {
  revenue: 950000,
  technicianPayroll: 304000,
  chemicals: 95000,
  fleet: 76000,
  marketing: 76000,
  overhead: 190000,
};

export const marginTiers = [
  { id: "weak", label: "Bottom Quartile", range: "12–16%", min: 0, max: 16, description: "Thin margins — review route density and pricing." },
  { id: "average", label: "Average", range: "17–21%", min: 17, max: 21, description: "Typical range for owner-operated pool service companies." },
  { id: "strong", label: "Top Quartile", range: "22–26%", min: 22, max: 26, description: "Strong operators with dense routes and repair upsells." },
  { id: "elite", label: "Elite", range: "27%+", min: 27, max: 100, description: "Best-in-class companies with high MRR and commercial accounts." },
] as const;

export type MarginStatus = "Below Average" | "Average" | "Above Average" | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 17) return "Below Average";
  if (marginPct <= 21) return "Average";
  if (marginPct < 26) return "Above Average";
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
    { label: "Technician Payroll", amount: technicianPayroll, pct: revenue > 0 ? (technicianPayroll / revenue) * 100 : 0 },
    { label: "Chemicals & Supplies", amount: chemicals, pct: revenue > 0 ? (chemicals / revenue) * 100 : 0 },
    { label: "Fleet", amount: fleet, pct: revenue > 0 ? (fleet / revenue) * 100 : 0 },
    { label: "Marketing", amount: marketing, pct: revenue > 0 ? (marketing / revenue) * 100 : 0 },
    { label: "Overhead", amount: overhead, pct: revenue > 0 ? (overhead / revenue) * 100 : 0 },
  ];

  return { netProfit, marginPct, grossMarginPct, status: getMarginStatus(marginPct), totalCosts, breakdown };
}

export const faqs = [
  {
    question: "What is a good profit margin for a pool service business?",
    answer:
      "A good net profit margin for an owner-operated pool service company is 22–26%. Top-quartile operators with dense routes and repair upsells achieve 27–32%. Below 17% signals payroll burden or weak route density.",
  },
  {
    question: "What is the average pool service profit margin?",
    answer:
      "The median net profit margin for U.S. pool service companies is approximately 22%, based on our sample of 190+ businesses. Operators with 80%+ recurring revenue average 24–28%.",
  },
  {
    question: "How can pool service companies improve profitability?",
    answer:
      "The highest-impact levers are route density (target $160K+ revenue per technician), recurring contract penetration, repair upsells, commercial account development, and minimizing drive time between stops.",
  },
  {
    question: "What is a healthy gross margin for pool service?",
    answer:
      "Healthy pool service gross margins (revenue minus direct chemicals and supplies) typically run 58–72%. Low material costs and high route density drive structural margin advantage.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-profit/");
export { poolServiceIndustryAverages, poolServiceDataLinks, formatCurrency, formatPercent };

export const profitCalculatorMeta = {
  title: "Restaurant Profit Margin Calculator & Industry Benchmark Tool",
  shortTitle: "Restaurant Profit Margin Calculator",
  subtitle:
    "Calculate your restaurant's profit margin and compare it against industry benchmarks for independent U.S. restaurants.",
  description:
    "Free restaurant profit margin calculator with industry benchmarks, cost diagnostics, scenario modeling, and quartile comparison. See how your food, labor, and rent costs stack up against 680+ independent restaurants.",
};

export const industryAverages = {
  foodCostPct: 28,
  laborCostPct: 30,
  rentPct: 8,
  marketingPct: 4,
  otherPct: 22,
  marginPct: 8,
  marginRange: "6–10%",
};

export const defaultInputs = {
  revenue: 1200000,
  foodCosts: 300000,
  laborCosts: 456000,
  rent: 96000,
  marketing: 48000,
  otherExpenses: 204000,
};

export const marginTiers = [
  {
    id: "bottom",
    label: "Bottom Quartile",
    range: "0–3%",
    description: "Thin margins — vulnerable to cost shocks and seasonal dips.",
    min: 0,
    max: 3,
  },
  {
    id: "average",
    label: "Average",
    range: "4–10%",
    description: "Typical range for independent full-service and fast-casual restaurants.",
    min: 4,
    max: 10,
  },
  {
    id: "top",
    label: "Top Quartile",
    range: "11–20%",
    description: "Strong operators with disciplined cost control and pricing power.",
    min: 11,
    max: 20,
  },
  {
    id: "elite",
    label: "Elite Operators",
    range: "20%+",
    description: "Best-in-class concepts, often with multiple units or premium positioning.",
    min: 20,
    max: 100,
  },
] as const;

export const benchmarkBands = [
  { label: "Poor", range: "0–3%", min: 0, max: 3 },
  { label: "Average", range: "4–10%", min: 4, max: 10 },
  { label: "Strong", range: "11%+", min: 11, max: 100 },
] as const;

export type MarginStatus =
  | "Below Average"
  | "Average"
  | "Above Average"
  | "Top Quartile";

export function getMarginStatus(marginPct: number): MarginStatus {
  if (marginPct < 6) return "Below Average";
  if (marginPct <= 10) return "Average";
  if (marginPct < 11) return "Above Average";
  return "Top Quartile";
}

export const statusStyles: Record<
  MarginStatus,
  { bg: string; text: string; border: string; icon: string }
> = {
  "Below Average": {
    bg: "bg-metric-salary/10",
    text: "text-metric-salary",
    border: "border-metric-salary/25",
    icon: "⚠",
  },
  Average: {
    bg: "bg-accent-soft",
    text: "text-accent",
    border: "border-accent/25",
    icon: "✓",
  },
  "Above Average": {
    bg: "bg-metric-revenue/10",
    text: "text-metric-revenue",
    border: "border-metric-revenue/25",
    icon: "✓",
  },
  "Top Quartile": {
    bg: "bg-metric-valuation/10",
    text: "text-metric-valuation",
    border: "border-metric-valuation/25",
    icon: "✓",
  },
};

export const relatedDataLinks = [
  {
    label: "Restaurant Revenue Benchmarks",
    href: "/industries/restaurant/#revenue",
    description: "Median $850K — see revenue by concept type.",
  },
  {
    label: "Restaurant Owner Salary",
    href: "/industries/restaurant/#owner-salary",
    description: "What owner-operators take home by restaurant size.",
  },
  {
    label: "Restaurant Valuation Multiples",
    href: "/industries/restaurant/#valuation",
    description: "SDE and revenue multiples for restaurant sales.",
  },
  {
    label: "Restaurant Startup Costs",
    href: "/industries/restaurant/#revenue",
    description: "Typical opening costs range $275K–$750K.",
  },
] as const;

export const profitCalculatorFaqs = [
  {
    question: "What is a good restaurant profit margin?",
    answer:
      "A good net profit margin for an independent restaurant is 6–10%. Top-quartile operators achieve 11–20% through tight food and labor control, strong average tickets, and efficient rent as a share of revenue. Below 4% is considered thin and leaves little buffer for unexpected costs.",
  },
  {
    question: "What is the average restaurant margin?",
    answer:
      "The median net profit margin for independent U.S. restaurants is approximately 8%, based on our sample of 680+ businesses. Fast food averages 6–10%, casual dining 5–9%, and fine dining 8–14%. Margins vary significantly by location, concept, and owner involvement.",
  },
  {
    question: "How can restaurants improve profitability?",
    answer:
      "The highest-impact levers are labor scheduling (target 28–32% of revenue), food cost control through portioning and vendor negotiation (target 28–32%), and increasing average ticket size without adding proportional costs. Reducing waste, optimizing menu mix toward high-margin items, and renegotiating rent at lease renewal also move the needle.",
  },
  {
    question: "Why are restaurant margins low?",
    answer:
      "Restaurants face structurally high variable costs: food and labor alone consume 58–65% of revenue for most concepts. Rent, insurance, and marketing add another 12–15%. Unlike software or service businesses, restaurants cannot scale revenue without proportional increases in COGS and staffing — which caps margins for most operators.",
  },
] as const;

export const introContent = {
  lead: "Restaurant profit margin is the single most important number for evaluating whether your concept is sustainable — yet most owners only track revenue. This calculator computes your net margin from real cost inputs, then benchmarks you against 680+ independent restaurants.",
  bullets: [
    "Net margin = (Revenue − Food − Labor − Rent − Marketing − Other) ÷ Revenue",
    "Industry median is 8%; average independent restaurants fall between 6–10%",
    "Food and labor together should stay under 62% of revenue for healthy margins",
  ],
};

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function parseInput(value: string): number {
  const n = parseFloat(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

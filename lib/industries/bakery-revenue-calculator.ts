import {
  bakeryDataLinks,
  bakeryIndustryAverages,
  formatCurrency,
  formatNumber,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Bakery Revenue Calculator",
  subtitle:
    "Estimate annual revenue from daily order volume, average order size, and operating days.",
  description:
    "Free bakery revenue calculator. Project annual sales from orders per day, average order, and days open — with industry benchmark comparison.",
};

export const introContent = {
  lead: "Bakery revenue follows a simple formula: orders × average order × days open. This calculator projects annual revenue and compares your projections against industry benchmarks.",
  bullets: [
    "Annual Revenue = Orders/Day × Average Order × Days Open/Year",
    "Median independent bakery: ~$450K (60 orders × $25 × 300 days)",
    "Cake shops and wholesale operations push toward $600K–$900K",
  ],
  audience:
    "Built for business plan writers, aspiring bakery owners, and operators evaluating growth scenarios.",
};

export type RevenueInputs = {
  ordersPerDay: number;
  averageOrder: number;
  daysOpenPerYear: number;
  customOrderPct: number;
};

export const defaultInputs: RevenueInputs = {
  ordersPerDay: 60,
  averageOrder: 25,
  daysOpenPerYear: 300,
  customOrderPct: 25,
};

export const scenarios = [
  { label: "Slow Day", ordersPerDay: 40, averageOrder: 18 },
  { label: "Average Day", ordersPerDay: 60, averageOrder: 25 },
  { label: "Peak Day", ordersPerDay: 95, averageOrder: 32 },
] as const;

export function calculateRevenue(inputs: RevenueInputs) {
  const dailyRevenue = inputs.ordersPerDay * inputs.averageOrder;
  const annualRevenue = dailyRevenue * inputs.daysOpenPerYear;
  const monthlyRevenue = annualRevenue / 12;
  const customRevenue = annualRevenue * (inputs.customOrderPct / 100);
  const retailRevenue = annualRevenue * (1 - inputs.customOrderPct / 100);

  let tier: "Bottom Quartile" | "Average" | "Top Quartile" = "Average";
  if (annualRevenue < 280000) tier = "Bottom Quartile";
  else if (annualRevenue >= 600000) tier = "Top Quartile";

  return {
    dailyRevenue,
    annualRevenue,
    monthlyRevenue,
    customRevenue,
    retailRevenue,
    tier,
    ordersPerYear: inputs.ordersPerDay * inputs.daysOpenPerYear,
  };
}

export const faqs = [
  {
    question: "How much revenue does a bakery make?",
    answer:
      "Independent bakeries typically generate $280K–$750K annually, with a median around $450K. At 60 orders/day, $25 average order, and 300 operating days, annual revenue is approximately $450K.",
  },
  {
    question: "How many orders does a bakery need?",
    answer:
      "Most retail bakeries target 40–100 orders per day depending on concept. Neighborhood bakeries average 50–70; cake shops with custom orders hit 40–60 at higher tickets. Below 40 orders/day makes profitability difficult at typical margins.",
  },
  {
    question: "What is a good average order for a bakery?",
    answer:
      "Standard retail bakeries average $12–$25 per transaction. Cake shops with custom orders reach $25–$35+. Increasing average order from $20 to $28 adds $144K annual revenue at 60 orders/day without adding volume.",
  },
  {
    question: "How do I increase bakery revenue?",
    answer:
      "Four levers: increase daily order count (location, marketing, loyalty), raise average order (custom cakes, catering), extend wholesale accounts, and capture seasonal peaks (holidays, weddings).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-revenue/");
export { bakeryIndustryAverages, bakeryDataLinks, formatCurrency, formatNumber };

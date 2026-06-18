import {
  coffeeShopDataLinks,
  coffeeShopIndustryAverages,
  formatCurrency,
  formatNumber,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Coffee Shop Revenue Calculator",
  subtitle:
    "Estimate annual revenue from daily customer volume, average ticket size, and operating days.",
  description:
    "Free coffee shop revenue calculator. Project annual sales from customers per day, average ticket, and days open — with industry benchmark comparison.",
};

export const introContent = {
  lead: "Coffee shop revenue follows a simple formula: customers × average ticket × days open. This calculator projects annual revenue and compares your projections against industry benchmarks.",
  bullets: [
    "Annual Revenue = Customers/Day × Average Ticket × Days Open/Year",
    "Median independent cafe: ~$550K (280 customers × $6.50 × 300 days)",
    "Drive-thru and transit locations push toward $700K–$950K",
  ],
  audience:
    "Built for business plan writers, aspiring cafe owners, and operators evaluating growth scenarios.",
};

export type RevenueInputs = {
  customersPerDay: number;
  averageTicket: number;
  daysOpenPerYear: number;
  foodAttachPct: number;
};

export const defaultInputs: RevenueInputs = {
  customersPerDay: 280,
  averageTicket: 6.5,
  daysOpenPerYear: 300,
  foodAttachPct: 33,
};

export const scenarios = [
  { label: "Slow Day", customersPerDay: 180, averageTicket: 6.0 },
  { label: "Average Day", customersPerDay: 280, averageTicket: 6.5 },
  { label: "Peak Day", customersPerDay: 420, averageTicket: 7.5 },
] as const;

export function calculateRevenue(inputs: RevenueInputs) {
  const dailyRevenue = inputs.customersPerDay * inputs.averageTicket;
  const annualRevenue = dailyRevenue * inputs.daysOpenPerYear;
  const monthlyRevenue = annualRevenue / 12;
  const beverageRevenue = annualRevenue * (1 - inputs.foodAttachPct / 100);
  const foodRevenue = annualRevenue * (inputs.foodAttachPct / 100);

  let tier: "Bottom Quartile" | "Average" | "Top Quartile" = "Average";
  if (annualRevenue < 350000) tier = "Bottom Quartile";
  else if (annualRevenue >= 700000) tier = "Top Quartile";

  return {
    dailyRevenue,
    annualRevenue,
    monthlyRevenue,
    beverageRevenue,
    foodRevenue,
    tier,
    transactionsPerYear: inputs.customersPerDay * inputs.daysOpenPerYear,
  };
}

export const faqs = [
  {
    question: "How much revenue does a coffee shop make?",
    answer:
      "Independent coffee shops typically generate $350K–$850K annually, with a median around $550K. At 280 customers/day, $6.50 average ticket, and 300 operating days, annual revenue is approximately $546K.",
  },
  {
    question: "How many customers does a coffee shop need?",
    answer:
      "Most cafes target 200–500 customers per day depending on concept. Neighborhood cafes average 200–350; drive-thru and transit locations hit 350–500+. Below 180 customers/day makes profitability difficult at typical ticket sizes.",
  },
  {
    question: "What is a good average ticket for a coffee shop?",
    answer:
      "Standard cafes average $6–$9 per transaction. Premium specialty shops reach $9–$14 with food programs. Increasing average ticket from $6.50 to $8.50 adds $168K annual revenue at 280 customers/day without adding traffic.",
  },
  {
    question: "How do I increase coffee shop revenue?",
    answer:
      "Four levers: increase daily customer count (location, marketing, loyalty), raise average ticket (food attach, upsells), extend hours (afternoon daypart), and add revenue streams (retail beans, catering, mobile cart).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-revenue/");
export {
  coffeeShopIndustryAverages,
  coffeeShopDataLinks,
  formatCurrency,
  formatNumber,
};

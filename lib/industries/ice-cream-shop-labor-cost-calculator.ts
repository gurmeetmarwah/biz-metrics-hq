import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Labor Cost Calculator & Seasonal Staffing Tool",
  shortTitle: "Ice Cream Shop Labor Cost Calculator",
  subtitle:
    "Calculate staffing costs as a share of revenue for peak and off-season ice cream shop operations.",
  description:
    "Free ice cream shop labor cost calculator. Model peak vs off-season staffing, labor percentage, and cost per customer.",
};

export const introContent = {
  lead: "Labor is a major controllable cost for ice cream shops — typically 22–30% of revenue, with peak-season overtime and off-season right-sizing challenges. This calculator models your staffing costs against industry norms.",
  bullets: [
    "Labor Cost % = Total Labor Expense ÷ Revenue × 100",
    "Target range: 22–28% for well-managed shops",
    "Peak season may require 30–40% more labor hours than off-season",
  ],
  audience:
    "Built for shop owners optimizing seasonal schedules and planning staffing models.",
};

export type LaborInputs = {
  revenue: number;
  peakSeasonRevenuePct: number;
  fullTimeScoopers: number;
  partTimeScoopers: number;
  managerSalary: number;
  ftHourlyWage: number;
  ptHourlyWage: number;
  ftHoursPerWeek: number;
  ptHoursPerWeek: number;
  payrollTaxPct: number;
  benefitsPct: number;
};

export const defaultInputs: LaborInputs = {
  revenue: 720000,
  peakSeasonRevenuePct: 42,
  fullTimeScoopers: 2,
  partTimeScoopers: 6,
  managerSalary: 42000,
  ftHourlyWage: 15,
  ptHourlyWage: 13,
  ftHoursPerWeek: 35,
  ptHoursPerWeek: 18,
  payrollTaxPct: 8,
  benefitsPct: 2,
};

export function calculateLabor(inputs: LaborInputs) {
  const weeksPerYear = 52;
  const ftAnnual = inputs.fullTimeScoopers * inputs.ftHourlyWage * inputs.ftHoursPerWeek * weeksPerYear;
  const ptAnnual = inputs.partTimeScoopers * inputs.ptHourlyWage * inputs.ptHoursPerWeek * weeksPerYear;
  const baseLabor = ftAnnual + ptAnnual + inputs.managerSalary;
  const payrollTax = baseLabor * (inputs.payrollTaxPct / 100);
  const benefits = baseLabor * (inputs.benefitsPct / 100);
  const totalLabor = baseLabor + payrollTax + benefits;
  const laborPct = inputs.revenue > 0 ? (totalLabor / inputs.revenue) * 100 : 0;
  const customersPerYear = 280 * 305;
  const laborPerCustomer = customersPerYear > 0 ? totalLabor / customersPerYear : 0;
  const peakLaborEstimate = totalLabor * (0.85 + inputs.peakSeasonRevenuePct / 200);
  const offSeasonLaborEstimate = totalLabor * (1.15 - inputs.peakSeasonRevenuePct / 200);

  let status: "above" | "within" | "below" = "within";
  if (laborPct > 30) status = "above";
  else if (laborPct < 22) status = "below";

  return {
    ftAnnual,
    ptAnnual,
    baseLabor,
    payrollTax,
    benefits,
    totalLabor,
    laborPct,
    laborPerCustomer,
    peakLaborEstimate,
    offSeasonLaborEstimate,
    status,
    totalStaff: inputs.fullTimeScoopers + inputs.partTimeScoopers + 1,
  };
}

export const faqs = [
  {
    question: "What should labor cost be for an ice cream shop?",
    answer:
      "Target 22–28% of annual revenue for well-managed independent shops. Peak summer months run higher absolute labor; off-season right-sizing is critical. Above 30% signals overstaffing or under-revenue.",
  },
  {
    question: "How does seasonality affect ice cream shop labor?",
    answer:
      "Summer often represents 38–45% of annual revenue but may require 50%+ of annual labor hours due to longer hours and higher traffic. Plan off-season schedules 30–40% leaner than peak.",
  },
  {
    question: "How many employees does an ice cream shop need?",
    answer:
      "Typical independent shops run 2 FT + 4–8 PT scoopers plus a manager or owner-operator. Peak season may add 2–4 PT staff; off-season can reduce to a skeleton crew.",
  },
  {
    question: "What is labor cost per customer?",
    answer:
      "At $187K annual labor and 85,400 customers/year (280/day × 305 days), labor runs about $2.19 per customer — a useful metric for evaluating staffing efficiency.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-labor-cost/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency, formatPercent };

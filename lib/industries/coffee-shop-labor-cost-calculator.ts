import {
  coffeeShopDataLinks,
  coffeeShopIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Labor Cost Calculator & Staffing Benchmark Tool",
  shortTitle: "Coffee Shop Labor Cost Calculator",
  subtitle:
    "Calculate staffing costs as a share of revenue and compare against coffee shop labor benchmarks.",
  description:
    "Free coffee shop labor cost calculator. Estimate total labor expense, labor cost percentage, and cost per customer based on your staffing model and revenue.",
};

export const introContent = {
  lead: "Labor is the largest controllable cost for most coffee shops — typically 28–35% of revenue. This calculator models your staffing costs and benchmarks them against independent cafe norms.",
  bullets: [
    "Labor Cost % = Total Labor Expense ÷ Revenue × 100",
    "Target range: 28–32% for manager-operated cafes",
    "Drive-thru locations often achieve 22–28% due to throughput",
  ],
  audience:
    "Built for cafe owners optimizing schedules, evaluating staffing models, and planning new locations.",
};

export type LaborInputs = {
  revenue: number;
  fullTimeBaristas: number;
  partTimeBaristas: number;
  managerSalary: number;
  ftHourlyWage: number;
  ptHourlyWage: number;
  ftHoursPerWeek: number;
  ptHoursPerWeek: number;
  payrollTaxPct: number;
  benefitsPct: number;
};

export const defaultInputs: LaborInputs = {
  revenue: 550000,
  fullTimeBaristas: 3,
  partTimeBaristas: 4,
  managerSalary: 45000,
  ftHourlyWage: 16,
  ptHourlyWage: 14,
  ftHoursPerWeek: 35,
  ptHoursPerWeek: 20,
  payrollTaxPct: 8,
  benefitsPct: 3,
};

export function calculateLabor(inputs: LaborInputs) {
  const weeksPerYear = 52;
  const ftAnnual =
    inputs.fullTimeBaristas *
    inputs.ftHourlyWage *
    inputs.ftHoursPerWeek *
    weeksPerYear;
  const ptAnnual =
    inputs.partTimeBaristas *
    inputs.ptHourlyWage *
    inputs.ptHoursPerWeek *
    weeksPerYear;
  const baseLabor = ftAnnual + ptAnnual + inputs.managerSalary;
  const payrollTax = baseLabor * (inputs.payrollTaxPct / 100);
  const benefits = baseLabor * (inputs.benefitsPct / 100);
  const totalLabor = baseLabor + payrollTax + benefits;
  const laborPct = inputs.revenue > 0 ? (totalLabor / inputs.revenue) * 100 : 0;
  const customersPerYear = 280 * 300;
  const laborPerCustomer =
    customersPerYear > 0 ? totalLabor / customersPerYear : 0;

  let status: "above" | "within" | "below" = "within";
  if (laborPct > 35) status = "above";
  else if (laborPct < 28) status = "below";

  return {
    ftAnnual,
    ptAnnual,
    baseLabor,
    payrollTax,
    benefits,
    totalLabor,
    laborPct,
    laborPerCustomer,
    status,
    totalStaff: inputs.fullTimeBaristas + inputs.partTimeBaristas + 1,
  };
}

export const faqs = [
  {
    question: "What should labor cost be for a coffee shop?",
    answer:
      "Target 28–32% of revenue for manager-operated cafes. Owner-operators who work bar shifts can run 30–35% including owner draw. Drive-thru locations with high throughput often achieve 22–28%. Above 35% signals overstaffing or under-revenue.",
  },
  {
    question: "How many employees does a coffee shop need?",
    answer:
      "Most independent cafes operate with 4–12 employees: 2–4 baristas per shift, a manager, and part-time coverage for peak hours. A single-location cafe with 280 customers/day typically needs 3 FT + 3–4 PT baristas plus a manager.",
  },
  {
    question: "How do I reduce coffee shop labor costs?",
    answer:
      "Use scheduling software aligned to hourly sales patterns, cross-train staff for multiple roles, optimize opening/closing shifts, and push mobile ordering to reduce counter time. Drive-thru lanes improve labor efficiency per transaction.",
  },
  {
    question: "What is labor cost per customer?",
    answer:
      "At $176K annual labor and 84,000 customers/year (280/day × 300 days), labor cost is ~$2.10 per customer. Target under $2.00 for healthy margins at a $6.50 average ticket.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-labor-cost/");
export { coffeeShopIndustryAverages, coffeeShopDataLinks, formatCurrency, formatPercent };

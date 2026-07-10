import {
  formatCurrency,
  formatPercent,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Payroll Percentage Calculator — Labor Cost Ratio",
  shortTitle: "Hair Salon Payroll Percentage Calculator",
  subtitle: "Track payroll, commissions, taxes, and benefits as a percentage of salon revenue.",
  description:
    "Free hair salon payroll percentage calculator. Track fully loaded labor cost as a percentage of revenue against the 45–50% benchmark.",
};

export const introContent = {
  lead: "Payroll is the largest cost in a hair salon. This calculator finds your fully loaded labor cost as a percentage of revenue — the single biggest lever on margin.",
  bullets: [
    "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    "Healthy hair salon payroll runs 45–50% of revenue",
    "Add payroll taxes and benefits for the fully loaded labor cost",
  ],
  audience: "Built for salon owners controlling labor cost and commission structures.",
};

export type PayrollInputs = {
  annualRevenue: number;
  stylistPayroll: number;
  frontDeskPayroll: number;
  payrollTaxBenefitPct: number;
};

export const defaultInputs: PayrollInputs = {
  annualRevenue: 320000,
  stylistPayroll: 118000,
  frontDeskPayroll: 24000,
  payrollTaxBenefitPct: 12,
};

export const industryBenchmarks = [
  { metric: "Payroll % (fully loaded)", range: "45 – 50%" },
  { metric: "Stylist Commission", range: "40 – 55% of service" },
  { metric: "Payroll Taxes & Benefits", range: "10 – 15%" },
  { metric: "Front-desk / Support", range: "6 – 10% of revenue" },
] as const;

export function calculatePayroll(inputs: PayrollInputs) {
  const basePayroll = inputs.stylistPayroll + inputs.frontDeskPayroll;
  const loadedPayroll = basePayroll * (1 + inputs.payrollTaxBenefitPct / 100);
  const basePayrollPct = inputs.annualRevenue > 0 ? (basePayroll / inputs.annualRevenue) * 100 : 0;
  const loadedPayrollPct =
    inputs.annualRevenue > 0 ? (loadedPayroll / inputs.annualRevenue) * 100 : 0;

  let status: "lean" | "healthy" | "high" = "healthy";
  if (loadedPayrollPct < 45) status = "lean";
  else if (loadedPayrollPct > 50) status = "high";

  return { basePayroll, loadedPayroll, basePayrollPct, loadedPayrollPct, status };
}

export const faqs = [
  {
    question: "What percentage of revenue should a hair salon spend on payroll?",
    answer:
      "A healthy hair salon spends 45–50% of revenue on fully loaded payroll (wages, commissions, taxes, and benefits). Above 50% usually compresses net margin; below 45% may mean understaffing or below-market pay.",
  },
  {
    question: "Does payroll percentage include commissions and payroll taxes?",
    answer:
      "Yes. A complete hair salon payroll percentage includes stylist commissions or wages, front-desk and support pay, plus payroll taxes and benefits (typically another 10–15%). That fully loaded figure is what you benchmark against 45–50%.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-payroll-percentage/");
export { hairSalonDataLinks, formatCurrency, formatPercent };

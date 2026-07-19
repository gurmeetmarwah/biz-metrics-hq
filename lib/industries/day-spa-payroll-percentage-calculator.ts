import {
  formatCurrency,
  formatPercent,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Payroll Percentage Calculator — Labor Cost Ratio",
  shortTitle: "Day Spa Payroll Percentage Calculator",
  subtitle: "Track therapist payroll, commissions, taxes, and benefits as a percentage of spa revenue.",
  description:
    "Free day spa payroll percentage calculator. Track fully loaded labor cost as a percentage of revenue against the 42–50% benchmark.",
};

export const introContent = {
  lead: "Payroll is the largest cost in a day spa. This calculator finds your fully loaded labor cost as a percentage of revenue — the single biggest lever on margin.",
  bullets: [
    "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    "Healthy day spa payroll runs 42–50% of revenue",
    "Add payroll taxes and benefits for the fully loaded labor cost",
  ],
  audience: "Built for day spa owners controlling labor cost and commission structures.",
};

export type PayrollInputs = {
  annualRevenue: number;
  therapistPayroll: number;
  frontDeskPayroll: number;
  payrollTaxBenefitPct: number;
};

export const defaultInputs: PayrollInputs = {
  annualRevenue: 750000,
  therapistPayroll: 310000,
  frontDeskPayroll: 25000,
  payrollTaxBenefitPct: 12,
};

export const industryBenchmarks = [
  { metric: "Payroll % (fully loaded)", range: "42 – 50%" },
  { metric: "Therapist Commission", range: "40 – 55% of service" },
  { metric: "Payroll Taxes & Benefits", range: "10 – 15%" },
  { metric: "Front-desk / Support", range: "4 – 7% of revenue" },
] as const;

export function calculatePayroll(inputs: PayrollInputs) {
  const basePayroll = inputs.therapistPayroll + inputs.frontDeskPayroll;
  const loadedPayroll = basePayroll * (1 + inputs.payrollTaxBenefitPct / 100);
  const basePayrollPct = inputs.annualRevenue > 0 ? (basePayroll / inputs.annualRevenue) * 100 : 0;
  const loadedPayrollPct =
    inputs.annualRevenue > 0 ? (loadedPayroll / inputs.annualRevenue) * 100 : 0;

  let status: "lean" | "healthy" | "high" = "healthy";
  if (loadedPayrollPct < 42) status = "lean";
  else if (loadedPayrollPct > 50) status = "high";

  return { basePayroll, loadedPayroll, basePayrollPct, loadedPayrollPct, status };
}

export const faqs = [
  {
    question: "What percentage of revenue should a day spa spend on payroll?",
    answer:
      "A healthy day spa spends 42–50% of revenue on fully loaded payroll (wages, commissions, taxes, and benefits). Above 50% usually compresses net margin; below 42% may mean understaffing or below-market pay.",
  },
  {
    question: "Does payroll percentage include commissions and payroll taxes?",
    answer:
      "Yes. A complete day spa payroll percentage includes therapist commissions or wages, front-desk and support pay, plus payroll taxes and benefits (typically another 10–15%). That fully loaded figure is what you benchmark against 42–50%.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-payroll-percentage/");
export { daySpaDataLinks, formatCurrency, formatPercent };

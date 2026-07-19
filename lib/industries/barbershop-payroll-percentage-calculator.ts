import {
  formatCurrency,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Payroll Percentage Calculator — Labor Cost Ratio",
  shortTitle: "Barbershop Payroll Percentage Calculator",
  subtitle: "Track barber payroll, commissions, taxes, and benefits as a percentage of shop revenue.",
  description:
    "Free barbershop payroll percentage calculator. Track fully loaded labor cost as a percentage of revenue against the 40–48% benchmark.",
};

export const introContent = {
  lead: "Payroll is the largest cost in a barbershop. This calculator finds your fully loaded labor cost as a percentage of revenue — the single biggest lever on margin.",
  bullets: [
    "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    "Healthy barbershop payroll runs 40–48% of revenue",
    "Add payroll taxes and benefits for the fully loaded labor cost",
  ],
  audience: "Built for barbershop owners controlling labor cost and commission structures.",
};

export type PayrollInputs = {
  annualRevenue: number;
  barberPayroll: number;
  frontDeskPayroll: number;
  payrollTaxBenefitPct: number;
};

export const defaultInputs: PayrollInputs = {
  annualRevenue: 280000,
  barberPayroll: 105000,
  frontDeskPayroll: 10000,
  payrollTaxBenefitPct: 12,
};

export const industryBenchmarks = [
  { metric: "Payroll % (fully loaded)", range: "40 – 48%" },
  { metric: "Barber Commission", range: "40 – 55% of service" },
  { metric: "Payroll Taxes & Benefits", range: "10 – 15%" },
  { metric: "Front-desk / Support", range: "3 – 6% of revenue" },
] as const;

export function calculatePayroll(inputs: PayrollInputs) {
  const basePayroll = inputs.barberPayroll + inputs.frontDeskPayroll;
  const loadedPayroll = basePayroll * (1 + inputs.payrollTaxBenefitPct / 100);
  const basePayrollPct = inputs.annualRevenue > 0 ? (basePayroll / inputs.annualRevenue) * 100 : 0;
  const loadedPayrollPct =
    inputs.annualRevenue > 0 ? (loadedPayroll / inputs.annualRevenue) * 100 : 0;

  let status: "lean" | "healthy" | "high" = "healthy";
  if (loadedPayrollPct < 40) status = "lean";
  else if (loadedPayrollPct > 48) status = "high";

  return { basePayroll, loadedPayroll, basePayrollPct, loadedPayrollPct, status };
}

export const faqs = [
  {
    question: "What percentage of revenue should a barbershop spend on payroll?",
    answer:
      "A healthy barbershop spends 40–48% of revenue on fully loaded payroll (wages, commissions, taxes, and benefits). Above 48% usually compresses net margin; below 40% may mean understaffing or below-market pay.",
  },
  {
    question: "Does payroll percentage include commissions and payroll taxes?",
    answer:
      "Yes. A complete barbershop payroll percentage includes barber commissions or wages, front-desk and support pay, plus payroll taxes and benefits (typically another 10–15%). That fully loaded figure is what you benchmark against 40–48%.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-payroll-percentage/");
export { barbershopDataLinks, formatCurrency, formatPercent };

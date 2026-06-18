import {
  formatCurrency,
  formatPercent,
  relatedCalculators,
  veterinaryIndustryAverages,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Clinic EBITDA Calculator & Margin Benchmark Tool",
  shortTitle: "Veterinary Clinic EBITDA Calculator",
  subtitle: "Calculate EBITDA margin for your veterinary clinic and compare against industry benchmarks.",
  description:
    "Free veterinary clinic EBITDA calculator. Enter revenue and expense categories to compute EBITDA margin and compare to the 15–22% healthy range.",
};

export const introContent = {
  lead: "EBITDA margin is the primary profitability metric buyers and lenders use to evaluate veterinary clinics. This calculator breaks down your expense structure and compares your margin to industry medians.",
  bullets: [
    "EBITDA = Revenue − Vet Payroll − Support Staff − Supplies − Facility − Other",
    "Healthy general veterinary EBITDA: 17–21%",
    "Median clinic EBITDA margin: ~19%",
  ],
  audience:
    "Built for clinic owners benchmarking profitability, buyers in due diligence, and operators evaluating overhead reduction.",
};

export type EbitdaInputs = {
  revenue: number;
  vetPayroll: number;
  supportStaff: number;
  medicalSupplies: number;
  facilityRent: number;
  otherOverhead: number;
};

export const defaultInputs: EbitdaInputs = {
  revenue: 1200000,
  vetPayroll: 300000,
  supportStaff: 264000,
  medicalSupplies: 168000,
  facilityRent: 96000,
  otherOverhead: 132000,
};

export const expenseBenchmarks = [
  { category: "Veterinarian Payroll", range: "22–28%" },
  { category: "Support Staff", range: "18–24%" },
  { category: "Medical Supplies", range: "12–16%" },
  { category: "Facility & Overhead", range: "14–20%" },
] as const;

export function calculateEbitda(inputs: EbitdaInputs) {
  const totalExpenses =
    inputs.vetPayroll +
    inputs.supportStaff +
    inputs.medicalSupplies +
    inputs.facilityRent +
    inputs.otherOverhead;
  const ebitda = inputs.revenue - totalExpenses;
  const ebitdaMarginPct = inputs.revenue > 0 ? (ebitda / inputs.revenue) * 100 : 0;

  const expenseBreakdown = [
    { label: "Veterinarian Payroll", amount: inputs.vetPayroll },
    { label: "Support Staff", amount: inputs.supportStaff },
    { label: "Medical Supplies", amount: inputs.medicalSupplies },
    { label: "Facility & Rent", amount: inputs.facilityRent },
    { label: "Other Overhead", amount: inputs.otherOverhead },
  ].map((item) => ({
    ...item,
    pct: inputs.revenue > 0 ? (item.amount / inputs.revenue) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (ebitdaMarginPct < 15) status = "below";
  else if (ebitdaMarginPct >= 21) status = "strong";

  const vsMedian = ebitdaMarginPct - veterinaryIndustryAverages.ebitdaMarginPct;

  return { ebitda, ebitdaMarginPct, totalExpenses, expenseBreakdown, status, vsMedian };
}

export const faqs = [
  {
    question: "What is a good EBITDA margin for a veterinary clinic?",
    answer:
      "Healthy general veterinary clinics operate at 17–21% EBITDA margin. The industry median is ~19%. Clinics below 15% typically have overhead issues; above 22% may indicate underinvestment in staff or equipment.",
  },
  {
    question: "How do you calculate EBITDA for a veterinary clinic?",
    answer:
      "EBITDA = Revenue minus operating expenses (veterinarian payroll, support staff, medical supplies, facility, marketing, and other overhead) before interest, taxes, depreciation, and amortization.",
  },
  {
    question: "What expenses are included in veterinary clinic EBITDA?",
    answer:
      "Veterinarian and technician payroll, medical supplies, pharmacy COGS, facility rent, insurance, marketing, lab fees, and general overhead. Excluded: owner compensation above market rate, debt service, depreciation, and one-time capital expenditures.",
  },
  {
    question: "Why do buyers focus on EBITDA for veterinary clinics?",
    answer:
      "EBITDA normalizes profitability across different capital structures and tax strategies. Buyers apply EBITDA multiples (3.5×–5.5×) or convert to SDE for smaller owner-operator clinics. Higher EBITDA margin directly increases clinic value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-ebitda/");
export { veterinaryIndustryAverages, formatCurrency, formatPercent };

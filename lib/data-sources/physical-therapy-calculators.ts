import type { CalculationEntry } from "@/lib/data-sources/types";

export type PhysicalTherapyCalculatorId =
  | "valuation"
  | "revenue-per-patient"
  | "ebitda"
  | "break-even"
  | "revenue-per-therapist"
  | "startup-cost";

const calculatorFormulas: Record<PhysicalTherapyCalculatorId, CalculationEntry> = {
  valuation: {
    label: "SDE valuation",
    formula: "Clinic Value = SDE × Industry Multiple",
    note: "SDE = Net Profit + Owner PT Compensation + add-backs. Median 3.2× SDE for outpatient PT clinics.",
  },
  "revenue-per-patient": {
    label: "Patient lifetime value",
    formula: "LTV = Revenue Per Episode × Average Episodes × Retention Years",
    note: "Median active patient generates $900–$2,400 over 3–5 years.",
  },
  ebitda: {
    label: "EBITDA margin",
    formula: "EBITDA Margin = (Revenue − Operating Expenses) ÷ Revenue × 100",
    note: "Healthy outpatient PT EBITDA: 20–26%; range 18–28%.",
  },
  "break-even": {
    label: "Break-even visits",
    formula: "Break-Even Visits = Break-Even Revenue ÷ Revenue Per Visit",
    note: "Variable costs typically 55–65% of revenue for PT clinics.",
  },
  "revenue-per-therapist": {
    label: "Revenue per therapist",
    formula: "Revenue Per PT = Annual Revenue ÷ Number of Full-Time Therapists",
    note: "Median ~$420K per PT for general outpatient practices.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula: "Total Startup = Leasehold + Equipment + Software + Working Capital",
    note: "De novo outpatient PT clinic typically $215K–$505K all-in.",
  },
};

export function getPhysicalTherapyCalculatorCalculations(
  id: PhysicalTherapyCalculatorId,
): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

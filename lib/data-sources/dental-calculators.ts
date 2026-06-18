import type { CalculationEntry } from "@/lib/data-sources/types";

export type DentalCalculatorId =
  | "valuation"
  | "ebitda"
  | "revenue-per-patient"
  | "break-even"
  | "associate-compensation"
  | "startup-cost";

const calculatorFormulas: Record<DentalCalculatorId, CalculationEntry> = {
  valuation: {
    label: "SDE valuation",
    formula: "Practice Value = SDE × Industry Multiple",
    note: "SDE = Net Profit + Owner Doctor Compensation + add-backs. Median 3.8× SDE for general practices.",
  },
  ebitda: {
    label: "EBITDA margin",
    formula: "EBITDA Margin = (Collections − Operating Expenses) ÷ Collections × 100",
    note: "Healthy general dentistry EBITDA: 22–26%; range 18–30%.",
  },
  "revenue-per-patient": {
    label: "Patient lifetime value",
    formula: "LTV = Annual Revenue Per Patient × Retention Years",
    note: "Median active patient generates $900–$1,100/year over 5–8 years.",
  },
  "break-even": {
    label: "Break-even production",
    formula: "Break-Even Collections = Fixed Costs ÷ (1 − Variable Cost %)",
    note: "Variable costs typically 55–65% of collections for dental practices.",
  },
  "associate-compensation": {
    label: "Associate compensation",
    formula: "Total Comp = Base Salary + (Production × Compensation %)",
    note: "Typical associate models pay 25–32% of collected production.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula: "Total Startup = Equipment + Buildout + Technology + Working Capital",
    note: "De novo general practice typically $515K–$1.0M all-in.",
  },
};

export function getDentalCalculatorCalculations(id: DentalCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

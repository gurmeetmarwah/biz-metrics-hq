import type { CalculationEntry } from "@/lib/data-sources/types";

export type ChiropracticCalculatorId =
  | "valuation"
  | "revenue-per-patient"
  | "profit-margin"
  | "break-even"
  | "revenue"
  | "startup-cost";

const calculatorFormulas: Record<ChiropracticCalculatorId, CalculationEntry> = {
  valuation: {
    label: "SDE valuation",
    formula: "Clinic Value = SDE × Industry Multiple",
    note: "SDE = Net Profit + Owner Chiropractor Compensation + add-backs. Median 2.8× SDE for independent clinics.",
  },
  "revenue-per-patient": {
    label: "Patient lifetime value",
    formula: "LTV = Annual Revenue Per Patient × Retention Years",
    note: "Typical active patient generates $1,000–$2,800 over 3–6 years.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula: "Net Profit Margin = (Revenue − Operating Expenses) ÷ Revenue × 100",
    note: "Healthy chiropractic net margin is 25–35%; median approximately 30%.",
  },
  "break-even": {
    label: "Break-even visits",
    formula: "Break-Even Visits = Break-Even Revenue ÷ Revenue Per Visit",
    note: "Variable costs commonly run 50–65% of revenue in chiropractic clinics.",
  },
  revenue: {
    label: "Annual clinic revenue",
    formula: "Annual Revenue = Chiropractors × Visits/Day × Working Days × Revenue/Visit",
    note: "Typical revenue per chiropractor falls around $250K–$400K annually.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula: "Total Startup = Buildout + Equipment + Technology + Working Capital",
    note: "De novo chiropractic startup typically ranges from $140K–$330K all-in.",
  },
};

export function getChiropracticCalculatorCalculations(
  id: ChiropracticCalculatorId,
): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

import type { CalculationEntry } from "@/lib/data-sources/types";

export type VeterinaryCalculatorId =
  | "valuation"
  | "revenue-per-client"
  | "ebitda"
  | "break-even"
  | "revenue-per-veterinarian"
  | "startup-cost";

const calculatorFormulas: Record<VeterinaryCalculatorId, CalculationEntry> = {
  valuation: {
    label: "SDE valuation",
    formula: "Clinic Value = SDE × Industry Multiple",
    note: "SDE = Net Profit + Owner Veterinarian Compensation + add-backs. Median 3.4× SDE for general clinics.",
  },
  "revenue-per-client": {
    label: "Client lifetime value",
    formula: "LTV = Annual Revenue Per Client × Retention Years",
    note: "Median active client generates $350–$900/year over 4–7 years.",
  },
  ebitda: {
    label: "EBITDA margin",
    formula: "EBITDA Margin = (Revenue − Operating Expenses) ÷ Revenue × 100",
    note: "Healthy general veterinary EBITDA: 17–21%; range 15–22%.",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ (1 − Variable Cost %)",
    note: "Variable costs typically 58–68% of revenue for veterinary clinics.",
  },
  "revenue-per-veterinarian": {
    label: "Revenue per veterinarian",
    formula: "Revenue Per Vet = Annual Revenue ÷ Number of Full-Time Veterinarians",
    note: "Median ~$550K per DVM for general practices.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula: "Total Startup = Buildout + Equipment + Technology + Working Capital",
    note: "De novo general veterinary clinic typically $350K–$900K all-in.",
  },
};

export function getVeterinaryCalculatorCalculations(id: VeterinaryCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

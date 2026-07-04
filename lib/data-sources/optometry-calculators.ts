import type { CalculationEntry } from "@/lib/data-sources/types";

export type OptometryCalculatorId =
  | "startup-cost"
  | "profit"
  | "valuation"
  | "revenue-per-patient"
  | "insurance-mix"
  | "optical-capture-rate"
  | "break-even"
  | "staffing-cost";

const calculatorFormulas: Record<OptometryCalculatorId, CalculationEntry> = {
  "startup-cost": {
    label: "Startup investment",
    formula: "Total Startup = Buildout + Equipment + Optical Inventory + Working Capital",
    note: "De novo optometry practice typically $350K–$750K all-in.",
  },
  profit: {
    label: "Net profit margin",
    formula: "Net Margin = (Revenue − COGS − Payroll − Overhead) ÷ Revenue × 100",
    note: "Healthy optometry net margin: 20–28%; optical capture drives profitability.",
  },
  valuation: {
    label: "EBITDA valuation",
    formula: "Practice Value = EBITDA × Industry Multiple",
    note: "Median 5.2× EBITDA for independent optometry practices.",
  },
  "revenue-per-patient": {
    label: "Revenue per patient",
    formula: "Annual Revenue Per Patient = Total Revenue ÷ Active Patients",
    note: "Median ~$420/patient including exams, eyewear, and contact lenses.",
  },
  "insurance-mix": {
    label: "Blended margin",
    formula: "Blended Margin = Σ(Payer Mix % × Payer Margin %)",
    note: "Vision plan exams thin margins; retail and medical billing offset.",
  },
  "optical-capture-rate": {
    label: "Optical capture rate",
    formula: "Capture Rate = Patients Purchasing Eyewear ÷ Total Exam Patients × 100",
    note: "Target 55–72% for above-median profitability.",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Variable costs typically 42–55% of revenue for optometry practices.",
  },
  "staffing-cost": {
    label: "Staffing burden",
    formula: "Staffing % = Total Payroll ÷ Revenue × 100",
    note: "Typical optometry staffing 28–38% of revenue including opticians.",
  },
};

export function getOptometryCalculatorCalculations(id: OptometryCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

import type { CalculationEntry } from "@/lib/data-sources/types";

export type HairSalonCalculatorId =
  | "revenue"
  | "profit-margin"
  | "startup-cost"
  | "break-even"
  | "chair-utilization"
  | "revenue-per-stylist"
  | "payroll-percentage"
  | "valuation";

const calculatorFormulas: Record<HairSalonCalculatorId, CalculationEntry> = {
  revenue: {
    label: "Annual salon revenue",
    formula:
      "Revenue = Stylists × Appointments/Day × Days/Week × 50 Weeks × Average Ticket × (1 + Retail %)",
    note: "Median independent hair salon revenue ~$320K; range $250K–$500K.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula: "Net Margin = (Revenue − Payroll − Rent − Product COGS − Overhead) ÷ Revenue × 100",
    note: "Healthy hair salon net margin: 8–15%; payroll typically 45–50% of revenue.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula:
      "Total Startup = Buildout + Stations & Equipment + Furniture + Inventory + Licensing + Marketing + Working Capital",
    note: "New hair salon typically $80K–$250K all-in (median ~$120K).",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Contribution margin = 1 − variable cost %; salons commonly break even in 12–24 months.",
  },
  "chair-utilization": {
    label: "Chair utilization",
    formula: "Utilization = Booked Chair Hours ÷ Available Chair Hours × 100",
    note: "Target 65–80% utilization on optimized schedules.",
  },
  "revenue-per-stylist": {
    label: "Revenue per stylist",
    formula: "Revenue per Stylist = Annual Service Revenue ÷ Number of Stylists",
    note: "Established stylists produce $60K–$120K in annual service revenue.",
  },
  "payroll-percentage": {
    label: "Payroll percentage",
    formula: "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    note: "Healthy hair salon payroll runs 45–50% of revenue.",
  },
  valuation: {
    label: "SDE valuation",
    formula: "Salon Value = SDE × Industry Multiple (1.8×–3.0×)",
    note: "Median ~2.3× SDE, or roughly 0.4×–0.7× annual revenue.",
  },
};

export function getHairSalonCalculatorCalculations(id: HairSalonCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

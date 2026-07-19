import type { CalculationEntry } from "@/lib/data-sources/types";

export type NailSalonCalculatorId =
  | "revenue"
  | "profit-margin"
  | "startup-cost"
  | "break-even"
  | "valuation"
  | "revenue-per-technician"
  | "payroll-percentage"
  | "client-lifetime-value"
  | "average-ticket"
  | "station-utilization";

const calculatorFormulas: Record<NailSalonCalculatorId, CalculationEntry> = {
  revenue: {
    label: "Annual nail salon revenue",
    formula:
      "Revenue = Technicians × Appointments/Day × Days/Week × 50 Weeks × Average Ticket × (1 + Retail %)",
    note: "Median independent nail salon revenue ~$300K; range $200K–$450K.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula: "Net Margin = (Revenue − Payroll − Rent − Supplies COGS − Overhead) ÷ Revenue × 100",
    note: "Healthy nail salon net margin: 10–17%; payroll typically 42–50% of revenue.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula:
      "Total Startup = Buildout & Ventilation + Stations + Furniture + Inventory + Licensing + Marketing + Working Capital",
    note: "New nail salon typically $70K–$180K all-in (median ~$110K).",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Nail salons commonly break even in 10–20 months with 2–4 week rebooking.",
  },
  "revenue-per-technician": {
    label: "Revenue per technician",
    formula: "Revenue per Technician = Annual Service Revenue ÷ Number of Technicians",
    note: "Established technicians produce $50K–$90K in annual service revenue.",
  },
  "payroll-percentage": {
    label: "Payroll percentage",
    formula: "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    note: "Healthy nail salon payroll runs 42–50% of revenue.",
  },
  valuation: {
    label: "SDE valuation",
    formula: "Salon Value = SDE × Industry Multiple (1.6×–2.6×)",
    note: "Median ~2.1× SDE, or roughly 0.35×–0.6× annual revenue.",
  },
  "client-lifetime-value": {
    label: "Client lifetime value",
    formula: "CLV = Average Ticket × Visits per Year × Client Lifespan (Years)",
    note: "Nail salon clients visit every 2–4 weeks; typical CLV $1,600–$4,200.",
  },
  "average-ticket": {
    label: "Weighted average ticket",
    formula: "Avg Ticket = Σ (Service Price × Share of Appointments)",
    note: "Gel, dip, and nail art upsells lift tickets above basic manicure price.",
  },
  "station-utilization": {
    label: "Station utilization",
    formula: "Utilization = Booked Station Hours ÷ Available Station Hours × 100",
    note: "Target 65–82% utilization on optimized schedules.",
  },
};

export function getNailSalonCalculatorCalculations(id: NailSalonCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

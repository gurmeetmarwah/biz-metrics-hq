import type { CalculationEntry } from "@/lib/data-sources/types";

export type DaySpaCalculatorId =
  | "revenue"
  | "profit-margin"
  | "ebitda"
  | "startup-cost"
  | "break-even"
  | "valuation"
  | "revenue-per-therapist"
  | "revenue-per-treatment-room"
  | "client-lifetime-value"
  | "treatment-room-utilization"
  | "membership-revenue"
  | "payroll-percentage";

const calculatorFormulas: Record<DaySpaCalculatorId, CalculationEntry> = {
  revenue: {
    label: "Annual day spa revenue",
    formula:
      "Revenue = Therapists × Appointments/Day × Days/Week × 50 Weeks × Avg Treatment × (1 + Membership %)",
    note: "Median independent day spa revenue ~$750K; range $400K–$1.2M.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula:
      "Net Margin = (Revenue − Payroll − Product COGS − Rent − Marketing − Overhead) ÷ Revenue × 100",
    note: "Healthy day spa net margin: 10–18%; payroll typically 42–50% of revenue.",
  },
  ebitda: {
    label: "EBITDA margin",
    formula:
      "EBITDA Margin = (Revenue − Payroll − Product COGS − Rent − Marketing − Operating Overhead) ÷ Revenue × 100",
    note: "Excludes depreciation and amortization. Median day spa EBITDA margin ~16%.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula:
      "Total Startup = Buildout + Massage Tables + Furniture + Skincare Inventory + Licensing + Marketing + Working Capital",
    note: "New day spa typically $150K–$500K all-in (median ~$300K).",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Day spas commonly break even in 18–30 months with 60%+ room utilization.",
  },
  "revenue-per-therapist": {
    label: "Revenue per therapist",
    formula: "Revenue per Therapist = Annual Service Revenue ÷ Number of Therapists",
    note: "Established massage therapists and estheticians produce $110K–$200K in annual revenue.",
  },
  "revenue-per-treatment-room": {
    label: "Revenue per treatment room",
    formula: "Revenue per Room = Annual Service Revenue ÷ Number of Treatment Rooms",
    note: "Treatment rooms typically produce $90K–$180K in annual revenue.",
  },
  valuation: {
    label: "SDE valuation",
    formula: "Spa Value = SDE × Industry Multiple (2.0×–3.5×)",
    note: "Median ~2.8× SDE, or roughly 0.4×–0.8× annual revenue.",
  },
  "client-lifetime-value": {
    label: "Client lifetime value",
    formula: "LTV = Average Treatment × Visits per Year × Client Lifespan (Years)",
    note: "Membership clients with monthly visit cadence drive the highest LTV ($2.5K–$7.5K).",
  },
  "treatment-room-utilization": {
    label: "Treatment room utilization",
    formula: "Utilization = Booked Room Hours ÷ Available Room Hours × 100",
    note: "Target 60–78% utilization on optimized schedules.",
  },
  "membership-revenue": {
    label: "Membership revenue",
    formula: "Annual Membership Revenue = Active Members × Monthly Fee × 12",
    note: "Membership MRR smooths cash flow and locks in recurring visit cadence.",
  },
  "payroll-percentage": {
    label: "Payroll percentage",
    formula: "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    note: "Healthy day spa payroll runs 42–50% of revenue.",
  },
};

export function getDaySpaCalculatorCalculations(id: DaySpaCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

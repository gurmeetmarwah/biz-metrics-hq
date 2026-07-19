import type { CalculationEntry } from "@/lib/data-sources/types";

export type MedicalSpaCalculatorId =
  | "revenue"
  | "profit-margin"
  | "ebitda"
  | "startup-cost"
  | "break-even"
  | "valuation"
  | "revenue-per-provider"
  | "revenue-per-treatment-room"
  | "patient-lifetime-value"
  | "treatment-room-utilization"
  | "marketing-roi"
  | "membership-revenue";

const calculatorFormulas: Record<MedicalSpaCalculatorId, CalculationEntry> = {
  revenue: {
    label: "Annual medical spa revenue",
    formula:
      "Revenue = Providers × Treatments/Day × Days/Week × 50 Weeks × Avg Treatment × (1 + Membership %)",
    note: "Median independent medical spa revenue ~$1.2M; range $600K–$2.5M.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula:
      "Net Margin = (Revenue − Payroll − Supplies COGS − Rent − Marketing − Overhead) ÷ Revenue × 100",
    note: "Healthy medical spa net margin: 15–30%; payroll typically 30–40% of revenue.",
  },
  ebitda: {
    label: "EBITDA margin",
    formula:
      "EBITDA Margin = (Revenue − Payroll − Supplies COGS − Rent − Marketing − Operating Overhead) ÷ Revenue × 100",
    note: "Excludes depreciation and amortization. Median medical spa EBITDA margin ~24%.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula:
      "Total Startup = Buildout + Devices + Furniture + Inventory + Licensing + Marketing + Working Capital",
    note: "New medical spa typically $300K–$800K all-in (median ~$500K).",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Medical spas commonly break even in 18–36 months with 55%+ room utilization.",
  },
  "revenue-per-provider": {
    label: "Revenue per provider",
    formula: "Revenue per Provider = Annual Treatment Revenue ÷ Number of Providers",
    note: "Established injectors and laser providers produce $300K–$700K in annual revenue.",
  },
  "revenue-per-treatment-room": {
    label: "Revenue per treatment room",
    formula: "Revenue per Room = Annual Treatment Revenue ÷ Number of Treatment Rooms",
    note: "Treatment rooms typically produce $200K–$500K in annual revenue.",
  },
  valuation: {
    label: "SDE valuation",
    formula: "Practice Value = SDE × Industry Multiple (3.0×–5.5×)",
    note: "Median ~4.0× SDE, or roughly 0.8×–1.5× annual revenue.",
  },
  "patient-lifetime-value": {
    label: "Patient lifetime value",
    formula: "LTV = Average Treatment × Visits per Year × Patient Lifespan (Years)",
    note: "Injectable patients with membership plans drive the highest LTV ($4K–$15K).",
  },
  "treatment-room-utilization": {
    label: "Treatment room utilization",
    formula: "Utilization = Booked Room Hours ÷ Available Room Hours × 100",
    note: "Target 55–75% utilization on optimized schedules.",
  },
  "marketing-roi": {
    label: "Marketing ROI",
    formula: "ROI = (New Patients × Avg Revenue per Patient) ÷ Marketing Spend",
    note: "Healthy medical spa marketing ROI runs 3×–6× on digital and referral campaigns.",
  },
  "membership-revenue": {
    label: "Membership revenue",
    formula: "Annual Membership Revenue = Active Members × Monthly Fee × 12",
    note: "Membership MRR smooths cash flow and locks in injectable maintenance cadence.",
  },
};

export function getMedicalSpaCalculatorCalculations(id: MedicalSpaCalculatorId): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

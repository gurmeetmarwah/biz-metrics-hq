import type { CalculationEntry } from "@/lib/data-sources/types";

export type BarbershopCalculatorId =
  | "revenue"
  | "profit-margin"
  | "startup-cost"
  | "break-even"
  | "valuation"
  | "revenue-per-barber"
  | "revenue-per-chair"
  | "chair-utilization"
  | "payroll-percentage"
  | "average-ticket"
  | "client-lifetime-value"
  | "membership-revenue";

const calculatorFormulas: Record<BarbershopCalculatorId, CalculationEntry> = {
  revenue: {
    label: "Annual barbershop revenue",
    formula:
      "Revenue = Barbers × Clients/Day × Days/Week × 50 Weeks × Avg Ticket × (1 + Membership %)",
    note: "Median independent barbershop revenue ~$280K; range $180K–$400K.",
  },
  "profit-margin": {
    label: "Net profit margin",
    formula:
      "Net Margin = (Revenue − Payroll − Product COGS − Rent − Marketing − Overhead) ÷ Revenue × 100",
    note: "Healthy barbershop net margin: 12–20%; payroll typically 40–48% of revenue.",
  },
  "startup-cost": {
    label: "Startup investment",
    formula:
      "Total Startup = Buildout + Barber Chairs + Equipment + Inventory + Licensing + Marketing + Working Capital",
    note: "New barbershop typically $60K–$180K all-in (median ~$110K).",
  },
  "break-even": {
    label: "Break-even revenue",
    formula: "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    note: "Barbershops commonly break even in 12–24 months with 70%+ chair utilization.",
  },
  "revenue-per-barber": {
    label: "Revenue per barber",
    formula: "Revenue per Barber = Annual Service Revenue ÷ Number of Barbers",
    note: "Established barbers commonly produce $55K–$95K in annual revenue.",
  },
  "revenue-per-chair": {
    label: "Revenue per chair",
    formula: "Revenue per Chair = Annual Service Revenue ÷ Number of Chairs",
    note: "Barber chairs typically produce $40K–$80K in annual revenue.",
  },
  valuation: {
    label: "SDE valuation",
    formula: "Shop Value = SDE × Industry Multiple (1.5×–2.5×)",
    note: "Median ~2.0× SDE, or roughly 0.3×–0.6× annual revenue.",
  },
  "client-lifetime-value": {
    label: "Client lifetime value",
    formula: "LTV = Average Ticket × Visits per Year × Client Lifespan (Years)",
    note: "Regular clients on a 2–4 week grooming cadence drive the highest LTV ($1.5K–$4K).",
  },
  "chair-utilization": {
    label: "Chair utilization",
    formula: "Utilization = Booked Chair Hours ÷ Available Chair Hours × 100",
    note: "Target 70–85% utilization on optimized schedules.",
  },
  "membership-revenue": {
    label: "Membership revenue",
    formula: "Annual Membership Revenue = Active Members × Monthly Fee × 12",
    note: "Membership MRR smooths cash flow and locks in recurring visit cadence.",
  },
  "payroll-percentage": {
    label: "Payroll percentage",
    formula: "Payroll % = Total Payroll (incl. taxes & benefits) ÷ Revenue × 100",
    note: "Healthy barbershop payroll runs 40–48% of revenue.",
  },
  "average-ticket": {
    label: "Average ticket",
    formula: "Avg Ticket = Σ (Service Price × Share of Appointments)",
    note: "Cuts, fades, beard trims, and shaves blend to a healthy $25–$45 average ticket.",
  },
};

export function getBarbershopCalculatorCalculations(
  id: BarbershopCalculatorId,
): CalculationEntry[] {
  return [calculatorFormulas[id]];
}

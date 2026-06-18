export const dentalPracticeMeta = {
  slug: "dental-practice",
  name: "Dental Practice",
  title: "Dental Practice Economics & Benchmarks",
  subtitle:
    "Revenue, EBITDA margins, owner compensation, startup costs, patient economics, and valuation benchmarks for dental practices.",
  dataVintage: "2025–2026",
  sampleSize: "310+ dental practices",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$1.2M – $2.6M" },
  { metric: "EBITDA Margin", value: "18 – 30%" },
  { metric: "Owner Compensation", value: "$220K – $360K" },
  { metric: "New Patients / Month", value: "25 – 45" },
  { metric: "Hygienists", value: "2 – 4" },
  { metric: "Practice Value", value: "3.2x – 4.5x SDE" },
] as const;

export const revenueDistribution = {
  bottom25: "$1.2M",
  median: "$1.8M",
  top25: "$2.6M",
};

export const benchmarkThresholds = {
  revenue: { low: 1200000, median: 1800000, high: 2600000 },
  ebitdaMargin: { low: 18, median: 24, high: 30 },
  patientCount: { low: 1200, median: 1800, high: 2500 },
  operatories: { low: 3, median: 5, high: 8 },
};

export const patientEconomicsMetrics = [
  { metric: "Patient Lifetime Value", value: "$3,500 – $8,500" },
  { metric: "Revenue Per Visit", value: "$180 – $320" },
  { metric: "Annual Visits", value: "1.8 – 2.4" },
  { metric: "Retention Rate", value: "72 – 85%" },
] as const;

export const expenseBreakdown = [
  { expense: "Clinical Payroll", percent: "28 – 35%" },
  { expense: "Supplies", percent: "6 – 10%" },
  { expense: "Rent", percent: "5 – 8%" },
  { expense: "Admin Staff", percent: "8 – 12%" },
  { expense: "Marketing", percent: "3 – 6%" },
] as const;

export const valuationMultiples = [
  { metric: "Revenue Multiple", range: "0.6x – 1.0x" },
  { metric: "EBITDA Multiple", range: "4.0x – 6.5x" },
  { metric: "SDE Multiple", range: "3.2x – 4.5x" },
] as const;

export const operatoryEconomicsFlow = [
  { label: "Operatory", value: "5 chairs avg" },
  { label: "Patients", value: "12 – 18/day/chair" },
  { label: "Production", value: "$1,200 – $1,800/day/chair" },
  { label: "Revenue", value: "$350K – $550K/chair/yr" },
] as const;

export const patientEconomicsFlow = [
  { label: "New Patient", percent: 100, color: "var(--metric-revenue)" },
  { label: "Treatment Plan", percent: 85, color: "var(--metric-margin)" },
  { label: "Production", percent: 72, color: "var(--metric-salary)" },
  { label: "Collections", percent: 95, color: "var(--accent)" },
  { label: "Profit", percent: 24, color: "var(--metric-valuation)" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Clinical Labor", percent: 32, href: "#cost-structure", color: "var(--metric-salary)" },
  { label: "Supplies", percent: 8, href: "#cost-structure", color: "var(--metric-margin)" },
  { label: "Facility Costs", percent: 7, href: "#cost-structure", color: "var(--metric-valuation)" },
  { label: "Admin Costs", percent: 10, href: "#cost-structure", color: "var(--accent)" },
  { label: "Profit", percent: 24, href: "#cost-structure", color: "var(--metric-revenue)" },
] as const;

export const startupCosts = [
  { expense: "Equipment", range: "$250K – $450K" },
  { expense: "Buildout", range: "$150K – $350K" },
  { expense: "Technology", range: "$40K – $80K" },
  { expense: "Working Capital", range: "$75K – $150K" },
] as const;

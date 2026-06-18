export const veterinaryClinicMeta = {
  slug: "veterinary-clinic",
  name: "Veterinary Clinic",
  title: "Veterinary Clinic Economics & Benchmarks",
  subtitle:
    "Revenue, EBITDA margins, owner compensation, client economics, startup costs, and valuation benchmarks for veterinary clinics.",
  dataVintage: "2025–2026",
  sampleSize: "240+ veterinary clinics",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$600K – $1.8M" },
  { metric: "EBITDA Margin", value: "15 – 22%" },
  { metric: "Owner Compensation", value: "$120K – $250K" },
  { metric: "Revenue Per Veterinarian", value: "$450K – $750K" },
  { metric: "Active Clients", value: "2,000 – 4,500" },
  { metric: "Practice Value", value: "2.8× – 4.0× SDE" },
] as const;

export const revenueDistribution = {
  bottom25: "$850K",
  median: "$1.2M",
  top25: "$1.6M",
};

export const benchmarkThresholds = {
  revenue: { low: 600000, median: 1200000, high: 1800000 },
  ebitdaMargin: { low: 15, median: 19, high: 22 },
  clientCount: { low: 2000, median: 3200, high: 4500 },
  veterinarians: { low: 1, median: 2, high: 4 },
};

export const clientEconomicsMetrics = [
  { metric: "Revenue Per Client", value: "$350 – $900/yr" },
  { metric: "Visits Per Year", value: "2.1 – 3.4" },
  { metric: "Retention Rate", value: "68 – 82%" },
  { metric: "Lifetime Value", value: "$1,500 – $4,200" },
] as const;

export const clientEconomicsFlow = [
  { label: "New Client", percent: 100, color: "var(--metric-revenue)" },
  { label: "First Visit", percent: 88, color: "var(--metric-margin)" },
  { label: "Treatment", percent: 74, color: "var(--metric-salary)" },
  { label: "Repeat Visits", percent: 65, color: "var(--accent)" },
  { label: "Lifetime Value", percent: 42, color: "var(--metric-valuation)" },
] as const;

export const vetProductivityMetrics = [
  { metric: "Revenue Per Vet", value: "$450K – $750K/yr" },
  { metric: "Appointments Per Day", value: "16 – 24" },
  { metric: "Revenue Per Appointment", value: "$95 – $165" },
  { metric: "Production Per Vet", value: "$1,800 – $3,200/day" },
] as const;

export const expenseBreakdown = [
  { expense: "Veterinarian Payroll", percent: "22 – 28%" },
  { expense: "Support Staff", percent: "18 – 24%" },
  { expense: "Medical Supplies", percent: "12 – 16%" },
  { expense: "Rent", percent: "6 – 9%" },
  { expense: "Marketing", percent: "3 – 5%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Clinical Payroll", percent: 25, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Support Staff", percent: 21, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Medical Supplies", percent: 14, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Facility Costs", percent: 8, href: "#profitability", color: "var(--accent)" },
  { label: "Profit", percent: 19, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const serviceMixSources = [
  "Exams",
  "Vaccinations",
  "Diagnostics",
  "Surgery",
  "Pharmacy",
  "Preventive Care",
] as const;

export const serviceMixFlow = [
  { label: "Revenue", percent: 100, color: "var(--metric-revenue)" },
  { label: "Services", percent: 72, color: "var(--metric-margin)" },
  { label: "Products", percent: 28, color: "var(--metric-salary)" },
  { label: "Profit", percent: 19, color: "var(--metric-valuation)" },
] as const;

export const staffingRoles = [
  { role: "Veterinarian", compensation: "$90K – $140K", revenueSupported: "$450K – $750K" },
  { role: "Veterinary Technician", compensation: "$32K – $48K", revenueSupported: "$180K – $280K" },
  { role: "Receptionist", compensation: "$28K – $38K", revenueSupported: "Front desk / scheduling" },
  { role: "Practice Manager", compensation: "$45K – $70K", revenueSupported: "Operations oversight" },
] as const;

export const valuationMultiples = [
  { metric: "Revenue Multiple", range: "0.7× – 1.1×" },
  { metric: "EBITDA Multiple", range: "3.5× – 5.5×" },
  { metric: "Clinic Value (SDE)", range: "2.8× – 4.0× SDE" },
] as const;

export const growthMetrics = [
  { metric: "New Clients Per Month", value: "35 – 75" },
  { metric: "Retention Rate", value: "68 – 82%" },
  { metric: "Average Invoice", value: "$145 – $285" },
  { metric: "Revenue Growth", value: "6 – 12%/yr" },
] as const;

export const startupCosts = [
  { expense: "Buildout", range: "$120K – $280K" },
  { expense: "Medical Equipment", range: "$150K – $350K" },
  { expense: "Technology", range: "$35K – $75K" },
  { expense: "Working Capital", range: "$60K – $120K" },
] as const;

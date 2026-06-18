export const physicalTherapyClinicMeta = {
  slug: "physical-therapy-clinic",
  name: "Physical Therapy Clinic",
  title: "Physical Therapy Clinic Economics & Benchmarks",
  subtitle:
    "Revenue, EBITDA margins, owner compensation, patient economics, therapist productivity, and valuation benchmarks for PT clinics.",
  dataVintage: "2025–2026",
  sampleSize: "180+ physical therapy clinics",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$500K – $1.5M" },
  { metric: "EBITDA Margin", value: "18 – 28%" },
  { metric: "Owner Compensation", value: "$100K – $220K" },
  { metric: "Revenue Per Therapist", value: "$350K – $550K" },
  { metric: "Revenue Per Visit", value: "$90 – $140" },
  { metric: "Practice Value", value: "2.5× – 4.0× SDE" },
] as const;

export const revenueDistribution = {
  bottom25: "$620K",
  median: "$850K",
  top25: "$1.2M",
};

export const benchmarkThresholds = {
  revenue: { low: 500000, median: 850000, high: 1500000 },
  ebitdaMargin: { low: 18, median: 23, high: 28 },
  patientCount: { low: 800, median: 1400, high: 2000 },
  therapists: { low: 1, median: 3, high: 6 },
};

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", value: "$900 – $2,400" },
  { metric: "Visits Per Patient", value: "8 – 14 per episode" },
  { metric: "Revenue Per Visit", value: "$90 – $140" },
  { metric: "Patient Lifetime Value", value: "$1,200 – $3,500" },
] as const;

export const patientEconomicsFlow = [
  { label: "Referral", percent: 100, color: "var(--metric-revenue)" },
  { label: "Evaluation", percent: 85, color: "var(--metric-margin)" },
  { label: "Treatment Plan", percent: 78, color: "var(--metric-salary)" },
  { label: "Visits", percent: 68, color: "var(--accent)" },
  { label: "Collections", percent: 62, color: "var(--metric-valuation)" },
] as const;

export const referralEconomicsMetrics = [
  { source: "Physician Referral", revenuePotential: "$1,100 – $1,800/patient" },
  { source: "Self Referral", revenuePotential: "$800 – $1,400/patient" },
  { source: "Sports Teams", revenuePotential: "$1,400 – $2,600/patient" },
  { source: "Employer Programs", revenuePotential: "$1,200 – $2,200/patient" },
] as const;

export const therapistProductivityMetrics = [
  { metric: "Revenue Per Therapist", value: "$350K – $550K/yr" },
  { metric: "Visits Per Day", value: "12 – 18" },
  { metric: "Revenue Per Visit", value: "$90 – $140" },
  { metric: "Utilization Rate", value: "72 – 88%" },
] as const;

export const visitEconomicsMetrics = [
  { metric: "Average Visits Per Patient", value: "8 – 14" },
  { metric: "Revenue Per Case", value: "$900 – $1,800" },
  { metric: "Completion Rate", value: "68 – 82%" },
  { metric: "Re-Referral Rate", value: "22 – 38%" },
] as const;

export const expenseBreakdown = [
  { expense: "Therapist Payroll", percent: "28 – 36%" },
  { expense: "Front Desk", percent: "8 – 12%" },
  { expense: "Rent", percent: "7 – 11%" },
  { expense: "Marketing", percent: "3 – 6%" },
  { expense: "Software", percent: "2 – 4%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Clinical Payroll", percent: 32, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Admin Payroll", percent: 10, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Rent", percent: 9, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 5, href: "#profitability", color: "var(--accent)" },
  { label: "Profit", percent: 23, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const staffingRoles = [
  { role: "Physical Therapist", compensation: "$75K – $110K", revenueSupported: "$350K – $550K" },
  { role: "PT Assistant", compensation: "$38K – $55K", revenueSupported: "$120K – $200K" },
  { role: "Front Desk", compensation: "$30K – $42K", revenueSupported: "Scheduling / intake" },
  { role: "Clinic Director", compensation: "$55K – $85K", revenueSupported: "Operations oversight" },
] as const;

export const valuationMultiples = [
  { metric: "Revenue Multiple", range: "0.6× – 1.0×" },
  { metric: "EBITDA Multiple", range: "3.0× – 5.0×" },
  { metric: "Practice Value (SDE)", range: "2.5× – 4.0× SDE" },
] as const;

export const growthMetrics = [
  { metric: "New Patients", value: "25 – 55/month" },
  { metric: "Visits Per Patient", value: "8 – 14" },
  { metric: "Referral Growth", value: "5 – 12%/yr" },
  { metric: "Revenue Growth", value: "6 – 14%/yr" },
] as const;

export const startupCosts = [
  { expense: "Leasehold Improvements", range: "$80K – $200K" },
  { expense: "Equipment", range: "$60K – $150K" },
  { expense: "Software", range: "$25K – $55K" },
  { expense: "Working Capital", range: "$50K – $100K" },
] as const;

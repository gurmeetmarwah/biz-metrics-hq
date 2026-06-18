export const chiropracticClinicMeta = {
  slug: "chiropractic-clinic",
  name: "Chiropractic Clinic",
  title: "Chiropractic Clinic Economics & Benchmarks",
  subtitle:
    "Revenue, profit margins, owner compensation, patient economics, recurring care models, and valuation benchmarks for chiropractic clinics.",
  dataVintage: "2025–2026",
  sampleSize: "160+ chiropractic clinics",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$300K – $800K" },
  { metric: "Net Profit Margin", value: "25 – 35%" },
  { metric: "Owner Compensation", value: "$80K – $200K" },
  { metric: "Revenue Per Patient", value: "$600 – $1,800/yr" },
  { metric: "Active Patients", value: "600 – 1,500" },
  { metric: "Practice Value", value: "2.0× – 3.5× SDE" },
] as const;

export const revenueDistribution = {
  bottom25: "$380K",
  median: "$500K",
  top25: "$680K",
};

export const benchmarkThresholds = {
  revenue: { low: 300000, median: 500000, high: 800000 },
  profitMargin: { low: 25, median: 30, high: 35 },
  patientCount: { low: 600, median: 950, high: 1500 },
  chiropractors: { low: 1, median: 2, high: 4 },
};

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", value: "$600 – $1,800/yr" },
  { metric: "Visits Per Patient", value: "12 – 24+ per year" },
  { metric: "Patient Retention", value: "55 – 75%" },
  { metric: "Lifetime Value", value: "$1,000 – $2,800" },
] as const;

export const patientEconomicsFlow = [
  { label: "New Patient", percent: 100, color: "var(--metric-revenue)" },
  { label: "Consultation", percent: 88, color: "var(--metric-margin)" },
  { label: "Treatment Plan", percent: 80, color: "var(--metric-salary)" },
  { label: "Recurring Visits", percent: 68, color: "var(--accent)" },
  { label: "Lifetime Value", percent: 58, color: "var(--metric-valuation)" },
] as const;

export const recurringRevenueMetrics = [
  { metric: "Monthly Visit Frequency", value: "2 – 4 visits/mo" },
  { metric: "Membership Revenue", value: "$99 – $249/mo" },
  { metric: "Recurring Revenue %", value: "45 – 70%" },
  { metric: "Retention Rate", value: "55 – 75%" },
] as const;

export const recurringRevenueFlow = [
  { label: "Patient", percent: 100, color: "var(--metric-revenue)" },
  { label: "Adjustment Plan", percent: 85, color: "var(--metric-margin)" },
  { label: "Monthly Visits", percent: 72, color: "var(--metric-salary)" },
  { label: "Recurring Revenue", percent: 65, color: "var(--metric-valuation)" },
] as const;

export const wellnessPlanFlow = [
  { label: "Member", percent: 100, color: "var(--metric-revenue)" },
  { label: "Monthly Subscription", percent: 90, color: "var(--metric-margin)" },
  { label: "Visits", percent: 78, color: "var(--metric-salary)" },
  { label: "Revenue", percent: 70, color: "var(--metric-valuation)" },
] as const;

export const wellnessPlanTopics = [
  "Membership Pricing",
  "Retention Rates",
  "Revenue Predictability",
  "Lifetime Value",
] as const;

export const chiropractorProductivityMetrics = [
  { metric: "Revenue Per Chiropractor", value: "$250K – $400K/yr" },
  { metric: "Visits Per Day", value: "20 – 35" },
  { metric: "Revenue Per Visit", value: "$45 – $85" },
  { metric: "Revenue Per Hour", value: "$180 – $320" },
] as const;

export const expenseBreakdown = [
  { expense: "Payroll", percent: "22 – 30%" },
  { expense: "Rent", percent: "5 – 9%" },
  { expense: "Marketing", percent: "5 – 10%" },
  { expense: "Technology", percent: "2 – 4%" },
  { expense: "Insurance", percent: "3 – 6%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Clinical Payroll", percent: 26, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Rent", percent: 7, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Marketing", percent: 8, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Admin Staff", percent: 9, href: "#profitability", color: "var(--accent)" },
  { label: "Profit", percent: 30, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const staffingRoles = [
  { role: "Chiropractor", compensation: "$70K – $120K", revenueSupported: "$250K – $400K" },
  { role: "Associate Chiropractor", compensation: "$55K – $85K", revenueSupported: "$180K – $280K" },
  { role: "Front Desk", compensation: "$28K – $38K", revenueSupported: "Scheduling / intake" },
  { role: "Clinic Manager", compensation: "$45K – $70K", revenueSupported: "Operations oversight" },
] as const;

export const valuationMultiples = [
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
  { metric: "Profit Multiple", range: "2.5× – 4.5×" },
  { metric: "Practice Value (SDE)", range: "2.0× – 3.5× SDE" },
] as const;

export const growthMetrics = [
  { metric: "New Patients", value: "30 – 70/month" },
  { metric: "Conversion Rate", value: "55 – 75%" },
  { metric: "Retention Rate", value: "55 – 75%" },
  { metric: "Revenue Growth", value: "5 – 12%/yr" },
] as const;

export const startupCosts = [
  { expense: "Buildout", range: "$50K – $120K" },
  { expense: "Equipment", range: "$35K – $90K" },
  { expense: "Technology", range: "$15K – $40K" },
  { expense: "Working Capital", range: "$40K – $80K" },
] as const;

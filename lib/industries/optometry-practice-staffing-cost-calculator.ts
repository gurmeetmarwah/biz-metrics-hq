import {
  formatCurrency,
  formatPercent,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Staffing Cost Calculator & Payroll Benchmark Tool",
  shortTitle: "Optometry Staffing Cost Calculator",
  subtitle: "Model staff payroll as a percentage of revenue and per-OD burden.",
  description:
    "Free optometry staffing cost calculator. Estimate total payroll burden, revenue per employee, and staffing efficiency benchmarks.",
};

export const introContent = {
  lead: "Staffing is the largest controllable expense for most optometry practices. This calculator models payroll burden across ODs, opticians, and admin staff.",
  bullets: [
    "Staffing % = Total Payroll ÷ Revenue × 100",
    "Typical range: 28–38% of revenue",
    "Revenue per employee benchmark: $120K–$180K",
  ],
  audience: "Built for practice owners optimizing staffing models and associate OD productivity.",
};

export type StaffingInputs = {
  revenue: number;
  ownerOdPay: number;
  associateOdPay: number;
  opticianPay: number;
  adminPay: number;
  otherStaffPay: number;
  odCount: number;
};

export const defaultInputs: StaffingInputs = {
  revenue: 1350000,
  ownerOdPay: 235000,
  associateOdPay: 180000,
  opticianPay: 95000,
  adminPay: 72000,
  otherStaffPay: 28000,
  odCount: 2,
};

export const industryBenchmarks = [
  { metric: "Staffing % of Revenue", range: "28 – 38%" },
  { metric: "Revenue Per Employee", range: "$120K – $180K" },
  { metric: "Revenue Per OD", range: "$550K – $750K" },
  { metric: "Optician Payroll", range: "6 – 10%" },
] as const;

export function calculateStaffing(inputs: StaffingInputs) {
  const totalPayroll =
    inputs.ownerOdPay +
    inputs.associateOdPay +
    inputs.opticianPay +
    inputs.adminPay +
    inputs.otherStaffPay;
  const staffingPct = inputs.revenue > 0 ? (totalPayroll / inputs.revenue) * 100 : 0;
  const employeeCount =
    inputs.odCount + (inputs.opticianPay > 0 ? 2 : 0) + (inputs.adminPay > 0 ? 2 : 0);
  const revenuePerEmployee = employeeCount > 0 ? inputs.revenue / employeeCount : 0;
  const revenuePerOd = inputs.odCount > 0 ? inputs.revenue / inputs.odCount : 0;
  const nonOdPayroll = totalPayroll - inputs.ownerOdPay - inputs.associateOdPay;
  const nonOdPct = inputs.revenue > 0 ? (nonOdPayroll / inputs.revenue) * 100 : 0;

  let status: "high" | "healthy" | "lean" = "healthy";
  if (staffingPct > 38) status = "high";
  else if (staffingPct < 28) status = "lean";

  return {
    totalPayroll,
    staffingPct,
    revenuePerEmployee,
    revenuePerOd,
    nonOdPayroll,
    nonOdPct,
    employeeCount,
    status,
  };
}

export const faqs = [
  {
    question: "What percentage of revenue should optometry staffing be?",
    answer:
      "Total staffing typically runs 28–38% of revenue including owner OD compensation, associate ODs, opticians, and admin. Practices above 38% often have low optical capture or overstaffed front desk.",
  },
  {
    question: "What is revenue per OD for optometry?",
    answer:
      "Revenue per OD ranges $550K–$750K for well-run practices. Solo owners at $1.35M with one OD generate $1.35M per OD; two-OD practices target $650K+ per doctor with strong optical productivity.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-staffing-cost/");
export { optometryDataLinks, formatCurrency, formatPercent };

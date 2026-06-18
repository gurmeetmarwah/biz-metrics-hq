export const physicalTherapyHubHref = "/industries/healthcare/physical-therapy-clinic/";

export const physicalTherapyIndustryAverages = {
  revenue: 850000,
  revenueRange: "$500K – $1.5M",
  ebitdaMarginPct: 23,
  ebitdaMarginRange: "18 – 28%",
  ownerComp: 165000,
  ownerCompRange: "$100K – $220K",
  sdeMultiple: 3.2,
  sdeMultipleRange: "2.5× – 4.0×",
  activePatients: 1400,
  revenuePerPatient: 607,
  revenuePerTherapist: 420000,
  revenuePerVisit: 115,
  startupCostRange: "$215K – $505K",
};

export const allPhysicalTherapyCalculators = [
  {
    label: "PT Clinic Valuation Calculator",
    href: "/calculators/physical-therapy-clinic-valuation/",
    description: "Estimate clinic value using SDE multiples.",
  },
  {
    label: "Revenue Per Patient Calculator",
    href: "/calculators/physical-therapy-clinic-revenue-per-patient/",
    description: "Calculate patient lifetime value and episode revenue.",
  },
  {
    label: "EBITDA Calculator",
    href: "/calculators/physical-therapy-clinic-ebitda/",
    description: "Calculate EBITDA margin and compare to benchmarks.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/physical-therapy-clinic-break-even/",
    description: "Estimate required visits and monthly revenue to break even.",
  },
  {
    label: "Revenue Per Therapist Calculator",
    href: "/calculators/physical-therapy-clinic-revenue-per-therapist/",
    description: "Measure therapist productivity and revenue per PT.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/physical-therapy-clinic-startup-cost/",
    description: "Estimate total investment to open or acquire a clinic.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allPhysicalTherapyCalculators.filter((c) => c.href !== excludeHref);
}

export const physicalTherapyDataLinks = [
  {
    label: "PT Revenue Benchmarks",
    href: "/industries/healthcare/physical-therapy-clinic/#revenue-benchmark",
    description: "Median $850K revenue — by type, therapist count, and location.",
  },
  {
    label: "PT EBITDA Margins",
    href: "/industries/healthcare/physical-therapy-clinic/#profitability",
    description: "Healthy range 20–26% EBITDA for outpatient PT clinics.",
  },
  {
    label: "PT Owner Compensation",
    href: "/industries/healthcare/physical-therapy-clinic/#owner-economics",
    description: "Solo owner median $165K total compensation.",
  },
  {
    label: "PT Practice Valuation",
    href: "/industries/healthcare/physical-therapy-clinic/#valuation",
    description: "SDE multiples 2.5×–4.0× at transaction.",
  },
] as const;

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export { formatCurrency } from "@/lib/numbers";

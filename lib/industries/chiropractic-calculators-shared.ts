export const chiropracticHubHref = "/industries/healthcare/chiropractic-clinic/";

export const chiropracticIndustryAverages = {
  revenue: 500000,
  revenueRange: "$300K – $800K",
  profitMargin: 30,
  profitMarginRange: "25 – 35%",
  ownerComp: 140000,
  ownerCompRange: "$80K – $200K",
  sdeMultiple: 2.8,
  sdeMultipleRange: "2.0× – 3.5×",
  activePatients: 950,
  revenuePerPatient: 1100,
  revenuePerChiropractor: 320000,
  revenuePerVisit: 65,
  startupCostRange: "$140K – $330K",
};

export const allChiropracticCalculators = [
  {
    label: "Chiropractic Clinic Valuation Calculator",
    href: "/calculators/chiropractic-clinic-valuation/",
    description: "Estimate clinic value using SDE multiples.",
  },
  {
    label: "Revenue Per Patient Calculator",
    href: "/calculators/chiropractic-clinic-revenue-per-patient/",
    description: "Calculate patient lifetime value and annual revenue per patient.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/chiropractic-clinic-profit-margin/",
    description: "Calculate net profit margin and compare to benchmarks.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/chiropractic-clinic-break-even/",
    description: "Estimate required visits and monthly revenue to break even.",
  },
  {
    label: "Revenue Calculator",
    href: "/calculators/chiropractic-clinic-revenue/",
    description: "Project annual revenue from chiropractor productivity.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/chiropractic-clinic-startup-cost/",
    description: "Estimate total investment to open or acquire a clinic.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allChiropracticCalculators.filter((c) => c.href !== excludeHref);
}

export const chiropracticDataLinks = [
  {
    label: "Chiropractic Revenue Benchmarks",
    href: "/industries/healthcare/chiropractic-clinic/#revenue-benchmark",
    description: "Median $500K revenue by practice type, location, and provider count.",
  },
  {
    label: "Chiropractic Profit Margins",
    href: "/industries/healthcare/chiropractic-clinic/#profitability",
    description: "Healthy net margin range 25–35% with median around 30%.",
  },
  {
    label: "Chiropractic Owner Compensation",
    href: "/industries/healthcare/chiropractic-clinic/#owner-economics",
    description: "Solo owner median compensation near $140K annually.",
  },
  {
    label: "Chiropractic Practice Valuation",
    href: "/industries/healthcare/chiropractic-clinic/#valuation",
    description: "Typical transaction multiples range 2.0×–3.5× SDE.",
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

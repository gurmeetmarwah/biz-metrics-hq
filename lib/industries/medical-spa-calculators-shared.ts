export const medicalSpaHubHref = "/industries/beauty/medical-spa/";

export const medicalSpaIndustryAverages = {
  revenue: 1200000,
  revenueRange: "$600K – $2.5M",
  netMarginPct: 22,
  netMarginRange: "15 – 30%",
  ebitdaMarginPct: 24,
  ebitdaMarginRange: "18 – 28%",
  ownerComp: 180000,
  ownerCompRange: "$120K – $280K",
  sdeMultiple: 4.0,
  sdeMultipleRange: "3.0× – 5.5×",
  revenuePerProvider: 450000,
  revenuePerProviderRange: "$300K – $700K",
  revenuePerTreatmentRoom: 350000,
  revenuePerTreatmentRoomRange: "$200K – $500K",
  averageTreatment: 400,
  averageTreatmentRange: "$250 – $600",
  roomUtilizationPct: 65,
  roomUtilizationRange: "55 – 75%",
  payrollPct: 35,
  payrollRange: "30 – 40%",
  patientLtv: 8000,
  patientLtvRange: "$4K – $15K",
  marketingRoi: 4.5,
  marketingRoiRange: "3× – 6×",
  startupCostRange: "$300K – $800K",
  membershipMrr: 40000,
};

export const allMedicalSpaCalculators = [
  {
    label: "Spa Revenue Calculator (Medical Spa)",
    href: "/calculators/medical-spa-revenue/",
    description: "Free spa revenue calculator for medical spas — project annual sales.",
  },
  {
    label: "Medical Spa Profit Margin Calculator",
    href: "/calculators/medical-spa-profit-margin/",
    description: "Model net margin from treatment revenue, payroll, supplies, and overhead.",
  },
  {
    label: "Medical Spa EBITDA Calculator",
    href: "/calculators/medical-spa-ebitda/",
    description: "Calculate EBITDA margin from revenue and operating expense structure.",
  },
  {
    label: "Medical Spa Startup Cost Calculator",
    href: "/calculators/medical-spa-startup-cost/",
    description: "Estimate total launch investment — buildout, devices, inventory, and working capital.",
  },
  {
    label: "Medical Spa Break-even Calculator",
    href: "/calculators/medical-spa-break-even/",
    description: "Find the monthly revenue and treatments needed to cover fixed costs.",
  },
  {
    label: "Medical Spa Valuation Calculator",
    href: "/calculators/medical-spa-valuation/",
    description: "Estimate practice value using SDE and medical spa industry multiples.",
  },
  {
    label: "Revenue per Provider Calculator",
    href: "/calculators/medical-spa-revenue-per-provider/",
    description: "Benchmark each provider's annual treatment revenue against industry ranges.",
  },
  {
    label: "Revenue per Treatment Room Calculator",
    href: "/calculators/medical-spa-revenue-per-treatment-room/",
    description: "Measure revenue productivity per treatment room annually.",
  },
  {
    label: "Patient Lifetime Value Calculator",
    href: "/calculators/medical-spa-patient-lifetime-value/",
    description: "Estimate total revenue per patient over their relationship with your med spa.",
  },
  {
    label: "Treatment Room Utilization Calculator",
    href: "/calculators/medical-spa-treatment-room-utilization/",
    description: "Measure booked vs available room hours to spot idle capacity.",
  },
  {
    label: "Marketing ROI Calculator",
    href: "/calculators/medical-spa-marketing-roi/",
    description: "Track marketing spend against new patient acquisition and revenue generated.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/medical-spa-membership-revenue/",
    description: "Model recurring revenue from membership plans and package enrollments.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allMedicalSpaCalculators.filter((c) => c.href !== excludeHref);
}

export const medicalSpaDataLinks = [
  {
    label: "Medical Spa Benchmarks",
    href: "/industries/beauty/medical-spa/#benchmarks",
    description: "Median $1.2M revenue — treatment value, revenue per provider, and utilization ranges.",
  },
  {
    label: "Medical Spa Profit Margins",
    href: "/industries/beauty/medical-spa/#profitability",
    description: "Healthy range 15–30% net margin with strong injectable volume.",
  },
  {
    label: "Medical Spa Owner Income",
    href: "/industries/beauty/medical-spa/#owner-salary",
    description: "Owner-operator median $180K; established med spas $250K–$400K.",
  },
  {
    label: "Medical Spa Valuation",
    href: "/industries/beauty/medical-spa/#valuation",
    description: "SDE multiples 3.0×–5.5× at transaction.",
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

export function formatMultiple(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}×`;
}

export { formatCurrency } from "@/lib/numbers";

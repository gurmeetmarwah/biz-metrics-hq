import {
  formatCurrency,
  physicalTherapyDataLinks,
  relatedCalculators,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Clinic Startup Cost Calculator & Investment Estimator",
  shortTitle: "PT Startup Cost Calculator",
  subtitle:
    "Estimate total capital needed to launch a de novo PT clinic or acquire an existing practice.",
  description:
    "Free physical therapy clinic startup cost calculator. Estimate leasehold improvements, therapy equipment, software, permits, launch marketing, and working capital requirements.",
};

export const introContent = {
  lead: "Launching a PT clinic requires coordinated investment across buildout, treatment equipment, technology, and cash reserves. This calculator totals your expected investment and compares it to common PT startup ranges.",
  bullets: [
    "Lean PT startup benchmark: $215K all-in",
    "Typical PT startup benchmark: $360K all-in",
    "Premium PT startup benchmark: $505K+ all-in",
  ],
  audience:
    "Built for physical therapists, operators, and lenders planning new clinic launches, expansions, or acquisitions.",
};

export type StartupCostInputs = {
  leaseholdImprovements: number;
  equipment: number;
  software: number;
  permitsLicenses: number;
  marketingLaunch: number;
  workingCapital: number;
  acquisitionPrice: number;
};

export const defaultInputs: StartupCostInputs = {
  leaseholdImprovements: 110000,
  equipment: 130000,
  software: 30000,
  permitsLicenses: 12000,
  marketingLaunch: 18000,
  workingCapital: 60000,
  acquisitionPrice: 0,
};

export const presets = [
  { label: "Lean", total: 215000, note: "Smaller footprint, essential equipment, conservative launch budget" },
  { label: "Typical", total: 360000, note: "Standard outpatient buildout with balanced equipment and reserves" },
  { label: "Premium", total: 505000, note: "Larger clinic, premium finishes, expanded equipment and staffing runway" },
] as const;

export function calculateStartupCost(inputs: StartupCostInputs) {
  const deNovoItems = [
    { label: "Leasehold Improvements", amount: inputs.leaseholdImprovements },
    { label: "Equipment", amount: inputs.equipment },
    { label: "Software", amount: inputs.software },
    { label: "Permits & Licenses", amount: inputs.permitsLicenses },
    { label: "Marketing Launch", amount: inputs.marketingLaunch },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const deNovoTotal = deNovoItems.reduce((sum, item) => sum + item.amount, 0);
  const isAcquisition = inputs.acquisitionPrice > 0;

  const lineItems = isAcquisition
    ? [
        { label: "Acquisition Price", amount: inputs.acquisitionPrice, pct: 0 },
        ...deNovoItems
          .filter((item) => item.label === "Working Capital" || item.label === "Software")
          .map((item) => ({ ...item, pct: 0 })),
      ]
    : deNovoItems.map((item) => ({ ...item, pct: 0 }));

  const total = isAcquisition ? inputs.acquisitionPrice + deNovoTotal * 0.25 : deNovoTotal;
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Lean" | "Typical" | "Premium" = "Typical";
  const compareTotal = isAcquisition ? inputs.acquisitionPrice : deNovoTotal;
  if (compareTotal < 275000) tier = "Lean";
  else if (compareTotal > 450000) tier = "Premium";

  return {
    total,
    deNovoTotal,
    lineItems: withPct,
    tier,
    isAcquisition,
  };
}

export const faqs = [
  {
    question: "How much does it cost to open a physical therapy clinic?",
    answer:
      "Many de novo outpatient PT clinics launch between $215K and $505K all-in, with a typical setup around $360K. Final cost depends on square footage, local buildout costs, equipment mix, and opening payroll runway.",
  },
  {
    question: "What are the biggest startup cost categories for PT clinics?",
    answer:
      "Leasehold improvements and equipment are typically the largest categories, followed by working capital. Most operators also budget for software, licensing, and launch marketing so the clinic can ramp referrals quickly.",
  },
  {
    question: "How much working capital should a new PT clinic hold?",
    answer:
      "Many owners target 3–6 months of core operating expenses in working capital. This buffer helps cover payroll and occupancy while patient volume and collections ramp in the first months after opening.",
  },
  {
    question: "How should acquisition costs be modeled versus de novo startup?",
    answer:
      "For acquisitions, purchase price is the primary capital component, with extra budget for technology upgrades, transition expenses, and working capital. De novo models instead emphasize buildout, equipment, and launch costs.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/physical-therapy-clinic-startup-cost/"
);
export { physicalTherapyDataLinks, formatCurrency };

import {
  formatCurrency,
  relatedCalculators,
  chiropracticDataLinks,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Clinic Startup Cost Calculator & Investment Estimator",
  shortTitle: "Chiro Startup Cost Calculator",
  subtitle:
    "Estimate total capital needed to launch a de novo chiropractic clinic or acquire an existing practice.",
  description:
    "Free chiropractic clinic startup cost calculator. Estimate buildout, equipment, technology, permits, launch marketing, working capital, and acquisition investment.",
};

export const introContent = {
  lead: "Launching a chiropractic clinic requires coordinated investment across facility buildout, treatment equipment, operating technology, and cash reserves. This calculator totals your expected investment and compares it to common startup tiers.",
  bullets: [
    "Lean chiropractic startup benchmark: $140K all-in",
    "Typical chiropractic startup benchmark: $220K all-in",
    "Premium chiropractic startup benchmark: $330K all-in",
  ],
  audience:
    "Built for chiropractors, operators, and lenders planning new clinic launches, expansions, or acquisitions.",
};

export type StartupCostInputs = {
  buildout: number;
  equipment: number;
  technology: number;
  permits: number;
  marketing: number;
  workingCapital: number;
  acquisitionPrice: number;
};

export const defaultInputs: StartupCostInputs = {
  buildout: 70000,
  equipment: 60000,
  technology: 20000,
  permits: 8000,
  marketing: 12000,
  workingCapital: 50000,
  acquisitionPrice: 0,
};

export const presets = [
  { label: "Lean", total: 140000, note: "Smaller footprint, essential equipment, conservative launch budget" },
  { label: "Typical", total: 220000, note: "Standard clinic buildout with balanced equipment and reserves" },
  { label: "Premium", total: 330000, note: "Larger clinic, premium finishes, expanded equipment and runway" },
] as const;

export function calculateStartupCost(inputs: StartupCostInputs) {
  const deNovoItems = [
    { label: "Buildout", amount: inputs.buildout },
    { label: "Equipment", amount: inputs.equipment },
    { label: "Technology", amount: inputs.technology },
    { label: "Permits", amount: inputs.permits },
    { label: "Marketing", amount: inputs.marketing },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const deNovoTotal = deNovoItems.reduce((sum, item) => sum + item.amount, 0);
  const isAcquisition = inputs.acquisitionPrice > 0;

  const lineItems = isAcquisition
    ? [
        { label: "Acquisition Price", amount: inputs.acquisitionPrice, pct: 0 },
        ...deNovoItems
          .filter((item) => item.label === "Working Capital" || item.label === "Technology")
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
  if (compareTotal < 180000) tier = "Lean";
  else if (compareTotal > 280000) tier = "Premium";

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
    question: "How much does it cost to open a chiropractic clinic?",
    answer:
      "Many de novo chiropractic clinics launch between $140K and $330K all-in, with a typical setup around $220K. Final cost depends on leasehold scope, local contractor pricing, equipment mix, and payroll runway.",
  },
  {
    question: "What are the largest startup cost categories for chiropractic clinics?",
    answer:
      "Buildout and equipment are usually the largest categories, followed by working capital. Most operators also budget for technology, permits, and launch marketing so the clinic can ramp patient flow quickly.",
  },
  {
    question: "How much working capital should a new chiropractic clinic keep?",
    answer:
      "Many owners target 3-6 months of core operating expenses in working capital. This buffer helps cover payroll and occupancy while new patient volume and collections ramp in early months.",
  },
  {
    question: "How should acquisition costs be modeled versus de novo startup?",
    answer:
      "For acquisitions, purchase price is usually the primary capital component, with added budget for technology upgrades, transition costs, and working capital. De novo models emphasize buildout, equipment, and launch expenses.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/chiropractic-clinic-startup-cost/");
export { chiropracticDataLinks, formatCurrency };

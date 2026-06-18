import {
  dentalDataLinks,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Practice Startup Cost Calculator & Investment Estimator",
  shortTitle: "Dental Practice Startup Cost Calculator",
  subtitle:
    "Estimate total investment to open a de novo dental practice or acquire an existing practice.",
  description:
    "Free dental practice startup cost calculator. Estimate equipment, buildout, technology, working capital, and acquisition costs for opening or buying a dental practice.",
};

export const introContent = {
  lead: "Opening or acquiring a dental practice requires capital across equipment, buildout, technology, and operating reserves. This calculator totals your investment and compares it against typical dental practice opening ranges.",
  bullets: [
    "De novo startup: $515K – $1.0M all-in",
    "Acquisition: $1.5M – $2.5M for median general practice",
    "Working capital: 3–6 months overhead reserve recommended",
  ],
  audience:
    "Built for dentists planning a startup, investors evaluating acquisitions, and lenders structuring SBA 7(a) loans.",
};

export type StartupInputs = {
  dentalEquipment: number;
  buildoutLeasehold: number;
  technologySoftware: number;
  permitsLicenses: number;
  marketingLaunch: number;
  workingCapital: number;
  acquisitionPrice: number;
};

export const defaultInputs: StartupInputs = {
  dentalEquipment: 350000,
  buildoutLeasehold: 250000,
  technologySoftware: 75000,
  permitsLicenses: 25000,
  marketingLaunch: 40000,
  workingCapital: 150000,
  acquisitionPrice: 0,
};

export const presets = [
  { label: "Lean De Novo", total: 515000, note: "4 ops, used equipment, modest buildout" },
  { label: "Typical Startup", total: 750000, note: "5–6 ops, new equipment, standard buildout" },
  { label: "Premium Build", total: 1000000, note: "6+ ops, digital workflow, premium finishes" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const deNovoItems = [
    { label: "Dental Equipment", amount: inputs.dentalEquipment },
    { label: "Buildout & Leasehold", amount: inputs.buildoutLeasehold },
    { label: "Technology & Software", amount: inputs.technologySoftware },
    { label: "Permits & Licenses", amount: inputs.permitsLicenses },
    { label: "Marketing & Launch", amount: inputs.marketingLaunch },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const deNovoTotal = deNovoItems.reduce((s, i) => s + i.amount, 0);
  const totalWithAcquisition = deNovoTotal + inputs.acquisitionPrice;
  const isAcquisition = inputs.acquisitionPrice > 0;

  const lineItems = isAcquisition
    ? [
        { label: "Acquisition Price", amount: inputs.acquisitionPrice, pct: 0 },
        ...deNovoItems.filter((i) => i.label === "Working Capital" || i.label === "Technology & Software").map((i) => ({ ...i, pct: 0 })),
      ]
    : deNovoItems.map((i) => ({ ...i, pct: 0 }));

  const total = isAcquisition ? totalWithAcquisition : deNovoTotal;
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Lean" | "Typical" | "Premium" = "Typical";
  const compareTotal = isAcquisition ? inputs.acquisitionPrice : deNovoTotal;
  if (compareTotal < 600000) tier = "Lean";
  else if (compareTotal > 900000) tier = "Premium";

  return { total, deNovoTotal, lineItems: withPct, tier, isAcquisition };
}

export const faqs = [
  {
    question: "How much does it cost to start a dental practice?",
    answer:
      "De novo general practice startup costs range $515K–$1.0M including equipment ($300K–$450K), buildout ($200K–$350K), technology ($50K–$100K), and 3–6 months working capital ($100K–$200K). Premium builds with 6+ operatories can exceed $1.2M.",
  },
  {
    question: "How much does it cost to buy a dental practice?",
    answer:
      "Acquiring an existing general practice typically costs $1.5M–$2.5M at 3.2×–4.5× SDE. A practice with $565K SDE at 3.8× sells for ~$2.1M. Buyers should also budget $50K–$150K for transition costs and working capital.",
  },
  {
    question: "What equipment does a new dental practice need?",
    answer:
      "Core equipment includes operatories ($40K–$60K each), sterilization, digital X-ray/CBCT, chairs, compressors, and vacuum systems. A 5-operatory practice typically budgets $300K–$450K for equipment depending on new vs refurbished.",
  },
  {
    question: "How much working capital does a dental practice need?",
    answer:
      "Plan 3–6 months of operating expenses ($100K–$200K) for a new practice ramp-up period. Collections lag production by 30–60 days with insurance, so working capital covers payroll and overhead during the first 6–12 months.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-startup-cost/");
export { dentalDataLinks, formatCurrency };

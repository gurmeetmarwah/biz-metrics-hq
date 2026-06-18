import {
  formatCurrency,
  relatedCalculators,
  veterinaryDataLinks,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Clinic Startup Cost Calculator & Investment Estimator",
  shortTitle: "Veterinary Clinic Startup Cost Calculator",
  subtitle: "Estimate total investment to open a de novo veterinary clinic or acquire an existing practice.",
  description:
    "Free veterinary clinic startup cost calculator. Estimate buildout, medical equipment, technology, working capital, and acquisition costs.",
};

export const introContent = {
  lead: "Opening or acquiring a veterinary clinic requires capital across buildout, equipment, technology, and operating reserves. This calculator totals your investment and compares it against typical clinic opening ranges.",
  bullets: [
    "De novo startup: $350K – $900K all-in",
    "Acquisition: $800K – $1.5M for median general clinic",
    "Working capital: 3–6 months overhead reserve recommended",
  ],
  audience:
    "Built for veterinarians planning a startup, investors evaluating acquisitions, and lenders structuring SBA 7(a) loans.",
};

export type StartupInputs = {
  buildoutLeasehold: number;
  medicalEquipment: number;
  technologySoftware: number;
  permitsLicenses: number;
  marketingLaunch: number;
  workingCapital: number;
  acquisitionPrice: number;
};

export const defaultInputs: StartupInputs = {
  buildoutLeasehold: 200000,
  medicalEquipment: 250000,
  technologySoftware: 55000,
  permitsLicenses: 15000,
  marketingLaunch: 30000,
  workingCapital: 90000,
  acquisitionPrice: 0,
};

export const presets = [
  { label: "Lean De Novo", total: 350000, note: "2 exam rooms, used equipment, modest buildout" },
  { label: "Typical Startup", total: 620000, note: "3–4 exam rooms, new equipment, standard buildout" },
  { label: "Premium Build", total: 900000, note: "5+ exam rooms, digital workflow, premium finishes" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const deNovoItems = [
    { label: "Buildout & Leasehold", amount: inputs.buildoutLeasehold },
    { label: "Medical Equipment", amount: inputs.medicalEquipment },
    { label: "Technology & Software", amount: inputs.technologySoftware },
    { label: "Permits & Licenses", amount: inputs.permitsLicenses },
    { label: "Marketing & Launch", amount: inputs.marketingLaunch },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const deNovoTotal = deNovoItems.reduce((s, i) => s + i.amount, 0);
  const isAcquisition = inputs.acquisitionPrice > 0;

  const lineItems = isAcquisition
    ? [
        { label: "Acquisition Price", amount: inputs.acquisitionPrice, pct: 0 },
        ...deNovoItems
          .filter((i) => i.label === "Working Capital" || i.label === "Technology & Software")
          .map((i) => ({ ...i, pct: 0 })),
      ]
    : deNovoItems.map((i) => ({ ...i, pct: 0 }));

  const total = isAcquisition ? inputs.acquisitionPrice + deNovoTotal * 0.25 : deNovoTotal;
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Lean" | "Typical" | "Premium" = "Typical";
  const compareTotal = isAcquisition ? inputs.acquisitionPrice : deNovoTotal;
  if (compareTotal < 450000) tier = "Lean";
  else if (compareTotal > 750000) tier = "Premium";

  return { total, deNovoTotal, lineItems: withPct, tier, isAcquisition };
}

export const faqs = [
  {
    question: "How much does it cost to start a veterinary clinic?",
    answer:
      "De novo general clinic startup costs range $350K–$900K including buildout ($120K–$280K), equipment ($150K–$350K), technology ($35K–$75K), and 3–6 months working capital ($60K–$120K). Premium builds with 5+ exam rooms can exceed $1M.",
  },
  {
    question: "How much does it cost to buy a veterinary clinic?",
    answer:
      "Acquiring an existing general clinic typically costs $800K–$1.5M at 2.8×–4.0× SDE. A clinic with $365K SDE at 3.4× sells for ~$1.2M. Buyers should also budget $50K–$100K for transition costs and working capital.",
  },
  {
    question: "What equipment does a new veterinary clinic need?",
    answer:
      "Core equipment includes exam room setups, surgical suite, anesthesia, digital X-ray, lab equipment, and pharmacy inventory. A 3–4 exam room clinic typically budgets $200K–$350K for equipment depending on new vs refurbished.",
  },
  {
    question: "How much working capital does a veterinary clinic need?",
    answer:
      "Plan 3–6 months of operating expenses ($60K–$120K) for a new clinic ramp-up period. Inventory and payroll run ahead of client payments, so working capital covers overhead during the first 6–12 months.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-startup-cost/");
export { veterinaryDataLinks, formatCurrency };

import {
  formatCurrency,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Practice Startup Cost Calculator & Investment Estimator",
  shortTitle: "Optometry Startup Cost Calculator",
  subtitle: "Estimate total investment to open a de novo optometry practice or acquire an existing clinic.",
  description:
    "Free optometry practice startup cost calculator. Estimate buildout, diagnostic equipment, optical inventory, and working capital for opening an optometry clinic.",
};

export const introContent = {
  lead: "Opening an optometry practice requires capital across office buildout, diagnostic equipment, optical inventory, and operating reserves. This calculator totals your investment against typical opening ranges.",
  bullets: [
    "De novo startup: $350K – $750K all-in",
    "Optical inventory and buildout are the largest line items",
    "Working capital: 4–6 months overhead reserve recommended",
  ],
  audience: "Built for optometrists planning a startup, investors evaluating acquisitions, and lenders structuring SBA loans.",
};

export type StartupInputs = {
  officeBuildout: number;
  diagnosticEquipment: number;
  opticalInventory: number;
  examChairs: number;
  octEquipment: number;
  computersEmr: number;
  licensing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  officeBuildout: 140000,
  diagnosticEquipment: 80000,
  opticalInventory: 100000,
  examChairs: 28000,
  octEquipment: 55000,
  computersEmr: 35000,
  licensing: 18000,
  workingCapital: 70000,
};

export const presets = [
  { label: "Lean Startup", total: 350000, note: "Single OD, modest buildout, used equipment" },
  { label: "Typical Startup", total: 525000, note: "2 exam rooms, standard optical dispensary" },
  { label: "Premium Build", total: 750000, note: "Multi-room, OCT, premium optical showroom" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const items = [
    { label: "Office Buildout", amount: inputs.officeBuildout },
    { label: "Diagnostic Equipment", amount: inputs.diagnosticEquipment },
    { label: "Optical Inventory", amount: inputs.opticalInventory },
    { label: "Exam Chairs", amount: inputs.examChairs },
    { label: "OCT Equipment", amount: inputs.octEquipment },
    { label: "Computers & EMR", amount: inputs.computersEmr },
    { label: "Licensing", amount: inputs.licensing },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const total = items.reduce((s, i) => s + i.amount, 0);
  const withPct = items.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Lean" | "Typical" | "Premium" = "Typical";
  if (total < 425000) tier = "Lean";
  else if (total > 625000) tier = "Premium";

  return { items: withPct, total, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open an optometry practice?",
    answer:
      "Most optometry practices launch between $350K and $750K, with a median near $525K. Office buildout, diagnostic equipment, optical inventory, and working capital are the largest line items.",
  },
  {
    question: "What is the biggest startup cost for an optometry clinic?",
    answer:
      "Office buildout ($80K–$200K) and optical inventory ($50K–$150K) typically represent 35–50% of total startup investment. Diagnostic equipment and OCT add another 18–28%.",
  },
  {
    question: "How much working capital does a new optometry practice need?",
    answer:
      "Plan for $40K–$100K in working capital to cover payroll, rent, and inventory replenishment during the 12–18 month ramp to profitability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-startup-cost/");
export { optometryDataLinks, formatCurrency };

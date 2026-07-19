import {
  formatCurrency,
  formatPercent,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Startup Cost Calculator — Cost to Open a Med Spa",
  shortTitle: "Medical Spa Startup Cost Calculator",
  subtitle: "Estimate the total cost to open a medical spa — buildout, devices, inventory, licensing, and working capital.",
  description:
    "Free medical spa startup cost calculator. Add up buildout, laser devices, furniture, injectable inventory, licensing, marketing, and working capital.",
};

export const introContent = {
  lead: "Opening a medical spa typically costs $300K–$800K. This calculator adds up every launch line item so you can budget the total investment.",
  bullets: [
    "Total Startup = Buildout + Devices + Furniture + Inventory + Licensing + Marketing + Working Capital",
    "Laser and medical devices are usually the largest capital expense",
    "Median medical spa startup cost is ~$500K",
  ],
  audience: "Built for first-time medical spa owners and buyers budgeting a new practice launch.",
};

export type StartupInputs = {
  buildout: number;
  devices: number;
  furnitureFixtures: number;
  initialInventory: number;
  licensingPermits: number;
  brandingMarketing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  buildout: 150000,
  devices: 180000,
  furnitureFixtures: 35000,
  initialInventory: 30000,
  licensingPermits: 25000,
  brandingMarketing: 20000,
  workingCapital: 60000,
};

export const industryBenchmarks = [
  { metric: "Total Startup Cost", range: "$300K – $800K" },
  { metric: "Buildout & Treatment Rooms", range: "$120K – $250K" },
  { metric: "Laser & Medical Devices", range: "$150K – $350K" },
  { metric: "Working Capital", range: "$50K – $100K" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Buildout & Treatment Rooms", value: inputs.buildout },
    { label: "Laser & Medical Devices", value: inputs.devices },
    { label: "Furniture & Fixtures", value: inputs.furnitureFixtures },
    { label: "Initial Inventory (Injectables)", value: inputs.initialInventory },
    { label: "Medical Director & Licensing", value: inputs.licensingPermits },
    { label: "Branding & Marketing", value: inputs.brandingMarketing },
    { label: "Working Capital", value: inputs.workingCapital },
  ];
  const total = lineItems.reduce((sum, item) => sum + item.value, 0);
  const breakdown = lineItems.map((item) => ({
    ...item,
    percent: total > 0 ? (item.value / total) * 100 : 0,
  }));

  let tier: "lean" | "typical" | "premium" = "typical";
  if (total < 300000) tier = "lean";
  else if (total > 650000) tier = "premium";

  return { total, breakdown, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a medical spa?",
    answer:
      "Opening a medical spa typically costs $300K–$800K, with a median near $500K. Buildout, laser devices, injectable inventory, medical director fees, branding, and working capital are the biggest components.",
  },
  {
    question: "What is the biggest startup cost for a medical spa?",
    answer:
      "Laser and medical devices are usually the largest medical spa startup cost, often 35–40% of the budget, followed by buildout for HIPAA-compliant treatment rooms. Leasing an existing medical suite can significantly reduce buildout cost.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-startup-cost/");
export { medicalSpaDataLinks, formatCurrency, formatPercent };

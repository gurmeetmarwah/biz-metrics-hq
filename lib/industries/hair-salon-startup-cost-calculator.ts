import {
  formatCurrency,
  formatPercent,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Startup Cost Calculator — Cost to Open a Salon",
  shortTitle: "Hair Salon Startup Cost Calculator",
  subtitle: "Estimate the total cost to open a hair salon — buildout, stations, equipment, inventory, and working capital.",
  description:
    "Free hair salon startup cost calculator. Add up buildout, stations, equipment, furniture, inventory, licensing, marketing, and working capital to see the total cost to open a salon.",
};

export const introContent = {
  lead: "Opening a hair salon typically costs $80K–$250K. This calculator adds up every launch line item so you can budget the total cost to open a salon.",
  bullets: [
    "Total Startup = Buildout + Stations + Equipment + Inventory + Licensing + Marketing + Working Capital",
    "Buildout and stations are usually the largest line items",
    "Median hair salon startup cost is ~$120K",
  ],
  audience: "Built for first-time salon owners and buyers budgeting a new hair salon launch.",
};

export type StartupInputs = {
  buildout: number;
  stationsEquipment: number;
  furnitureFixtures: number;
  initialInventory: number;
  licensingPermits: number;
  brandingMarketing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  buildout: 55000,
  stationsEquipment: 32000,
  furnitureFixtures: 14000,
  initialInventory: 10000,
  licensingPermits: 4000,
  brandingMarketing: 6000,
  workingCapital: 18000,
};

export const industryBenchmarks = [
  { metric: "Total Startup Cost", range: "$80K – $250K" },
  { metric: "Buildout & Renovation", range: "$30K – $80K" },
  { metric: "Stations & Equipment", range: "$20K – $45K" },
  { metric: "Working Capital", range: "$10K – $25K" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Buildout & Renovation", value: inputs.buildout },
    { label: "Stations & Equipment", value: inputs.stationsEquipment },
    { label: "Furniture & Fixtures", value: inputs.furnitureFixtures },
    { label: "Initial Inventory", value: inputs.initialInventory },
    { label: "Licensing & Permits", value: inputs.licensingPermits },
    { label: "Branding & Marketing", value: inputs.brandingMarketing },
    { label: "Working Capital", value: inputs.workingCapital },
  ];
  const total = lineItems.reduce((sum, item) => sum + item.value, 0);
  const breakdown = lineItems.map((item) => ({
    ...item,
    percent: total > 0 ? (item.value / total) * 100 : 0,
  }));

  let tier: "lean" | "typical" | "premium" = "typical";
  if (total < 80000) tier = "lean";
  else if (total > 180000) tier = "premium";

  return { total, breakdown, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a hair salon?",
    answer:
      "Opening a hair salon typically costs $80K–$250K, with a median near $120K. Buildout, stations and equipment, furniture, initial inventory, licensing, branding, and working capital are the biggest components of hair salon startup cost.",
  },
  {
    question: "What is the biggest startup cost for a salon?",
    answer:
      "Buildout and renovation is usually the largest hair salon startup cost, often 30–40% of the budget, followed by styling stations and equipment. Leasing a former salon space can significantly reduce buildout cost.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-startup-cost/");
export { hairSalonDataLinks, formatCurrency, formatPercent };

import {
  formatCurrency,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Startup Cost Calculator — Cost to Open a Barbershop",
  shortTitle: "Barbershop Startup Cost Calculator",
  subtitle: "Estimate the total cost to open a barbershop — buildout, chairs, equipment, licensing, and working capital.",
  description:
    "Free barbershop startup cost calculator. Add up buildout, barber chairs, equipment, inventory, licensing, marketing, and working capital.",
};

export const introContent = {
  lead: "Opening a barbershop typically costs $60K–$180K. This calculator adds up every launch line item so you can budget the total investment.",
  bullets: [
    "Total Startup = Buildout + Barber Chairs + Equipment + Inventory + Licensing + Marketing + Working Capital",
    "Buildout and chairs are usually the largest capital expense",
    "Median barbershop startup cost is ~$110K",
  ],
  audience: "Built for first-time barbershop owners and buyers budgeting a new shop launch.",
};

export type StartupInputs = {
  buildout: number;
  barberChairs: number;
  equipmentTools: number;
  furnitureFixtures: number;
  initialInventory: number;
  licensingPermits: number;
  brandingMarketing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  buildout: 35000,
  barberChairs: 25000,
  equipmentTools: 12000,
  furnitureFixtures: 8000,
  initialInventory: 5000,
  licensingPermits: 4000,
  brandingMarketing: 6000,
  workingCapital: 15000,
};

export const industryBenchmarks = [
  { metric: "Total Startup Cost", range: "$60K – $180K" },
  { metric: "Buildout & Plumbing", range: "$25K – $60K" },
  { metric: "Barber Chairs & Stations", range: "$15K – $35K" },
  { metric: "Working Capital", range: "$10K – $25K" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Buildout & Plumbing", value: inputs.buildout },
    { label: "Barber Chairs & Stations", value: inputs.barberChairs },
    { label: "Equipment & Tools", value: inputs.equipmentTools },
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
  if (total < 60000) tier = "lean";
  else if (total > 150000) tier = "premium";

  return { total, breakdown, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a barbershop?",
    answer:
      "Opening a barbershop typically costs $60K–$180K, with a median near $110K. Buildout, barber chairs, equipment, licensing, branding, and working capital are the biggest components.",
  },
  {
    question: "What is the biggest startup cost for a barbershop?",
    answer:
      "Buildout and barber chairs are usually the largest barbershop startup costs, often 50–55% of the budget combined. Leasing an existing salon or shop space can significantly reduce buildout cost.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-startup-cost/");
export { barbershopDataLinks, formatCurrency, formatPercent };

import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Average Ticket Calculator & Upsell Revenue Tool",
  shortTitle: "Ice Cream Shop Average Ticket Calculator",
  subtitle:
    "Project annual revenue from daily customers, base ticket, and upsell mix.",
  description:
    "Free ice cream shop average ticket calculator. Model revenue impact from milkshakes, sundaes, cakes, and premium upsells.",
};

export const introContent = {
  lead: "Average ticket is the fastest lever for ice cream shop revenue — upselling milkshakes, sundaes, and premium toppings lifts tickets from $6–7 base scoops to $8–12+ without proportional labor increases.",
  bullets: [
    "Blended Ticket = Base Scoop % × Base Price + Upsell % × Upsell Price",
    "Annual Revenue = Daily Customers × Blended Ticket × Days Open",
    "Median blended ticket is $8.40; premium shops reach $9–$14",
  ],
  audience:
    "Built for shop owners optimizing menu mix, pricing, and upsell training.",
};

export type TicketInputs = {
  dailyCustomers: number;
  daysOpen: number;
  baseScoopPct: number;
  baseScoopPrice: number;
  milkshakePct: number;
  milkshakePrice: number;
  sundaePct: number;
  sundaePrice: number;
  cakePct: number;
  cakePrice: number;
};

export const defaultInputs: TicketInputs = {
  dailyCustomers: 280,
  daysOpen: 305,
  baseScoopPct: 55,
  baseScoopPrice: 6.5,
  milkshakePct: 18,
  milkshakePrice: 9.5,
  sundaePct: 15,
  sundaePrice: 10.5,
  cakePct: 12,
  cakePrice: 28,
};

export function calculateAverageTicket(inputs: TicketInputs) {
  const mixTotal = inputs.baseScoopPct + inputs.milkshakePct + inputs.sundaePct + inputs.cakePct;
  const norm = mixTotal > 0 ? 100 / mixTotal : 1;
  const basePct = inputs.baseScoopPct * norm;
  const shakePct = inputs.milkshakePct * norm;
  const sundaePct = inputs.sundaePct * norm;
  const cakePct = inputs.cakePct * norm;

  const blendedTicket =
    (basePct / 100) * inputs.baseScoopPrice +
    (shakePct / 100) * inputs.milkshakePrice +
    (sundaePct / 100) * inputs.sundaePrice +
    (cakePct / 100) * inputs.cakePrice;

  const dailyRevenue = inputs.dailyCustomers * blendedTicket;
  const annualRevenue = dailyRevenue * inputs.daysOpen;
  const baseOnlyTicket = inputs.baseScoopPrice;
  const baseOnlyRevenue = inputs.dailyCustomers * baseOnlyTicket * inputs.daysOpen;
  const upsellLift = annualRevenue - baseOnlyRevenue;
  const ticketLiftPct = baseOnlyTicket > 0 ? ((blendedTicket - baseOnlyTicket) / baseOnlyTicket) * 100 : 0;

  return {
    blendedTicket,
    dailyRevenue,
    annualRevenue,
    baseOnlyRevenue,
    upsellLift,
    ticketLiftPct,
    mix: [
      { label: "Base Scoops", pct: basePct, price: inputs.baseScoopPrice },
      { label: "Milkshakes", pct: shakePct, price: inputs.milkshakePrice },
      { label: "Sundaes", pct: sundaePct, price: inputs.sundaePrice },
      { label: "Cakes", pct: cakePct, price: inputs.cakePrice },
    ],
  };
}

export const faqs = [
  {
    question: "What is the average ticket at an ice cream shop?",
    answer:
      "Median average ticket is about $8.40, with a typical range of $6.50–$11.50. Premium artisan shops average $9–$14; volume soft-serve locations may average $5–$8.",
  },
  {
    question: "How do upsells affect ice cream shop revenue?",
    answer:
      "Shifting 10% of transactions from $6.50 scoops to $10.50 sundaes adds roughly $40K+ annually at 280 customers/day. Milkshakes and cakes are the highest-impact upsell categories.",
  },
  {
    question: "What menu mix drives the highest tickets?",
    answer:
      "Ice cream cakes ($25–$45) and premium sundaes ($9–$14) lift blended tickets fastest. Even a 12% cake mix meaningfully improves annual revenue vs scoop-only menus.",
  },
  {
    question: "How many customers does a $720K shop serve?",
    answer:
      "At $8.40 average ticket and 305 days open, a $720K shop serves roughly 280 customers per day. Ticket improvements compound directly into revenue without adding foot traffic.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-average-ticket/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency, formatPercent, formatNumber };

import type { Metadata } from "next";
import type { ProfitabilitySeoContent } from "@/lib/industries/profitability-seo";

export type IndustryPageMetaInput = {
  /** Short label used in keywords, e.g. "Plumbing", "Dental Practice" */
  industryLabel: string;
  profitabilitySeo: ProfitabilitySeoContent;
  keywords: readonly string[];
  /** Optional metric list for the title suffix */
  titleMetrics?: string;
};

/**
 * Shared SERP metadata for industry hubs — long-tail profitability titles,
 * answer-led descriptions, and keyword arrays (franchise-guide pattern).
 */
export function buildIndustryPageMetadata({
  industryLabel,
  profitabilitySeo,
  keywords,
  titleMetrics = "Profit Margin, Owner Salary, Revenue & Valuation",
}: IndustryPageMetaInput): Metadata {
  const howTitle = profitabilitySeo.sectionTitle.replace(/\?$/, "");
  return {
    title: `${howTitle}? ${titleMetrics} | BizMetricsHQ`,
    description: `${profitabilitySeo.lead} Compare ${industryLabel.toLowerCase()} revenue, owner salary, startup costs, and valuation multiples.`,
    keywords: [...keywords],
  };
}

/** Long-tail keyword packs for industry hub pages and site search enrichment. */
export const industryPageKeywords = {
  hub: [
    "industry profit margins",
    "small business owner salary by industry",
    "highest margin small businesses",
    "industry revenue benchmarks",
    "business valuation by industry",
    "startup cost by industry",
    "key financial performance indicators",
    "small business profitability metrics",
  ],
  hvac: [
    "hvac profit margin",
    "how profitable is an hvac business",
    "hvac company owner salary",
    "hvac business valuation",
    "hvac revenue per technician",
    "average hvac company profit",
  ],
  plumbing: [
    "plumbing profit margin",
    "how profitable is a plumbing business",
    "plumbing company owner salary",
    "plumbing business valuation",
    "average plumbing company revenue",
  ],
  electrical: [
    "electrical contractor profit margin",
    "how profitable is an electrical business",
    "electrician business owner salary",
    "electrical company valuation",
  ],
  roofing: [
    "roofing company profit margin",
    "how profitable is a roofing business",
    "roofing contractor owner salary",
    "roofing business valuation",
  ],
  landscaping: [
    "landscaping profit margin",
    "how profitable is a landscaping business",
    "landscaping company owner salary",
    "lawn care business valuation",
  ],
  pestControl: [
    "pest control profit margin",
    "how profitable is a pest control business",
    "pest control owner salary",
    "pest control business valuation",
  ],
  cleaning: [
    "cleaning business profit margin",
    "how profitable is a cleaning business",
    "cleaning company owner salary",
    "janitorial business valuation",
  ],
  poolService: [
    "pool service profit margin",
    "pool cleaning business owner salary",
    "pool route business valuation",
    "how profitable is a pool service",
  ],
  treeService: [
    "tree service profit margin",
    "tree removal business owner salary",
    "arborist business valuation",
    "how profitable is a tree service",
  ],
  restaurant: [
    "restaurant profit margin",
    "restaurant owner salary",
    "how much does a restaurant make",
    "restaurant valuation multiple",
    "food cost percentage",
    "how profitable is a restaurant",
  ],
  coffeeShop: [
    "coffee shop profit margin",
    "coffee shop owner salary",
    "how much does a coffee shop make",
    "coffee shop startup cost",
    "cafe profit margin",
  ],
  bakery: [
    "bakery profit margin",
    "bakery owner salary",
    "bakery startup cost",
    "how profitable is a bakery",
  ],
  foodTruck: [
    "food truck profit margin",
    "food truck owner salary",
    "food truck startup cost",
    "how much does a food truck make",
  ],
  iceCream: [
    "ice cream shop profit margin",
    "ice cream shop owner salary",
    "ice cream shop startup cost",
    "how profitable is an ice cream shop",
  ],
  dental: [
    "dental practice profit margin",
    "dental practice owner salary",
    "dental practice ebitda",
    "dental practice valuation",
    "how profitable is a dental practice",
  ],
  veterinary: [
    "veterinary clinic profit margin",
    "vet clinic owner salary",
    "veterinary practice valuation",
    "how profitable is a vet clinic",
  ],
  physicalTherapy: [
    "physical therapy clinic profit margin",
    "pt clinic owner salary",
    "physical therapy practice valuation",
  ],
  chiropractic: [
    "chiropractic clinic profit margin",
    "chiropractor owner salary",
    "chiropractic practice valuation",
  ],
  optometry: [
    "optometry practice profit margin",
    "optometrist owner salary",
    "optical practice valuation",
  ],
  hairSalon: [
    "hair salon profit margin",
    "hair salon owner salary",
    "hair salon startup cost",
    "revenue per stylist",
    "salon valuation",
  ],
  nailSalon: [
    "nail salon profit margin",
    "nail salon owner salary",
    "nail salon startup cost",
    "nail salon valuation",
  ],
  medicalSpa: [
    "medical spa profit margin",
    "med spa revenue",
    "medical spa owner salary",
    "med spa valuation",
  ],
  daySpa: [
    "day spa profit margin",
    "day spa owner salary",
    "spa business valuation",
  ],
  barbershop: [
    "barbershop profit margin",
    "barbershop owner salary",
    "barbershop startup cost",
    "revenue per barber",
  ],
  gym: [
    "gym profit margin",
    "gym owner salary",
    "gym membership revenue",
    "how profitable is a gym",
    "gym business valuation",
  ],
  yoga: [
    "yoga studio profit margin",
    "yoga studio owner salary",
    "yoga studio revenue",
  ],
  pilates: [
    "pilates studio profit margin",
    "pilates studio owner salary",
    "reformer studio revenue",
  ],
  crossfit: [
    "crossfit gym profit margin",
    "crossfit affiliate profit",
    "crossfit gym owner salary",
  ],
  martialArts: [
    "martial arts school profit margin",
    "martial arts school owner salary",
    "dojo tuition revenue",
  ],
  fineDining: [
    "fine dining profit margin",
    "fine dining restaurant owner salary",
    "fine dining valuation",
  ],
  fastCasual: [
    "fast casual profit margin",
    "fast casual restaurant owner salary",
    "fast casual unit economics",
  ],
} as const;

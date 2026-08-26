import type { Metadata } from "next";
import type { ProfitabilitySeoContent } from "@/lib/industries/profitability-seo";

export type IndustryPageMetaInput = {
  /** Short label used in keywords, e.g. "Plumbing", "Dental Practice" */
  industryLabel: string;
  profitabilitySeo: ProfitabilitySeoContent;
  keywords: readonly string[];
  /** Optional metric list for the title suffix */
  titleMetrics?: string;
  /** Full SERP title override (curiosity / exact-match CTR). Include brand if desired. */
  title?: string;
  /** Meta description override — answer teaser + curiosity hook */
  description?: string;
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
  title,
  description,
}: IndustryPageMetaInput): Metadata {
  const howTitle = profitabilitySeo.sectionTitle.replace(/\?$/, "");
  return {
    title: title ?? `${howTitle}? ${titleMetrics} | BizMetricsHQ`,
    description:
      description ??
      `${profitabilitySeo.lead} Compare ${industryLabel.toLowerCase()} revenue, owner salary, startup costs, and valuation multiples.`,
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
    "average hvac profit margin",
    "hvac profit margin",
    "hvac business owner salary",
    "hvac owner salary",
    "how much do hvac owners make",
    "are hvac businesses profitable",
    "is an hvac business profitable",
    "how profitable is an hvac business",
    "average hvac company profit",
    "hvac business valuation",
    "hvac revenue per technician",
  ],
  plumbing: [
    "plumbers net worth",
    "plumber net worth",
    "plumbing company owner salary",
    "how much do plumbing owners make",
    "plumbing business worth",
    "plumbing profit margin",
    "how profitable is a plumbing business",
    "plumbing business valuation",
    "average plumbing company revenue",
  ],
  electrical: [
    "how profitable is electrical business",
    "how profitable is an electrical business",
    "electrician profit margin",
    "electrical contractor profit margin",
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
    "landscaping business valuation",
    "landscaping company valuation",
    "landscaping profit margin",
    "how profitable is a landscaping business",
    "landscaping company owner salary",
    "lawn care business valuation",
  ],
  pestControl: [
    "average pest control business profit margin",
    "increase pest control revenue",
    "how to increase pest control revenue",
    "pest control profit margin",
    "how profitable is a pest control business",
    "pest control owner salary",
    "pest control business valuation",
  ],
  cleaning: [
    "cleaning business profit margins",
    "cleaning business profit margin",
    "is a cleaning business profitable",
    "how profitable is a cleaning business",
    "facilities management company valuation",
    "cleaning company owner salary",
    "average cleaning business profit",
    "are cleaning companies profitable",
    "janitorial business valuation",
    "cleaning business revenue",
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
    "ice cream business valuation multiples",
    "ice cream shop valuation",
    "ice cream shop profit margin",
    "ice cream shop owner salary",
    "ice cream shop startup cost",
    "how profitable is an ice cream shop",
  ],
  dental: [
    "dental practice revenue",
    "dental practice valuation calculator",
    "business metrics for dentists",
    "dental practice metrics",
    "dental practice valuation",
    "dental practice profit margin",
    "dental practice owner salary",
    "dental practice ebitda",
    "how profitable is a dental practice",
    "how much revenue does a dental practice generate",
  ],
  veterinary: [
    "how much profit does a vet clinic make",
    "how much profit does a veterinary clinic make",
    "vet clinic profit",
    "veterinary clinic profit margin",
    "how profitable is a vet clinic",
    "vet clinic owner salary",
    "average vet clinic profit",
    "veterinary practice valuation",
    "vet clinic ebitda margin",
  ],
  physicalTherapy: [
    "physical therapy clinic profit margin",
    "pt clinic owner salary",
    "physical therapy practice valuation",
  ],
  chiropractic: [
    "chiropractic clinic valuation",
    "chiropractic practice valuation",
    "chiropractic clinic valuation calculator",
    "chiropractic clinic profit margin",
    "chiropractor owner salary",
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
    "spa revenue calculator",
    "medical spa revenue calculator",
    "med spa revenue",
    "medical spa profit margin",
    "medical spa owner salary",
    "med spa valuation",
  ],
  daySpa: [
    "spa revenue calculator",
    "day spa revenue calculator",
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

import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { hairSalonMarketAnchors, hairSalonReportSources } from "./shared-hair-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "fastest-growing-beauty-businesses-2026",
  title: "Fastest Growing Beauty Businesses 2026",
  subtitle:
    "Where beauty and personal-care demand is expanding fastest in 2026 — med spas, scalp-wellness services, lash and brow studios, and premium salon add-ons — plus what it means for hair salons.",
  description:
    "Fastest growing beauty businesses in 2026: med spas and scalp-wellness services lead demand growth, followed by lash/brow studios and premium salon treatments. Growth rankings and salon opportunity analysis.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/hair-salon/reports/fastest-growing-beauty-businesses-2026/",
  sources: hairSalonReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Sector Growth (2026–2034)", value: hairSalonMarketAnchors.projectedCagr },
          { label: "Fastest-Growing Salon Line", value: "Treatments & scalp care" },
          { label: "U.S. Market Size", value: hairSalonMarketAnchors.industryMarketSize },
          { label: "Extensions/Treatments Share", value: hairSalonMarketAnchors.extensionsTreatmentsShare },
        ],
      },
      {
        type: "paragraph",
        text: "Beauty demand growth in 2026 is concentrated in **high-ticket, wellness-oriented, and recurring-visit formats**. **Medical spas** lead the sector on growth, followed by **scalp-wellness and treatment services**, **lash and brow studios**, and **premium salon add-ons**. Within traditional hair salons, the fastest-growing revenue is **not the base haircut** — it is **specialized color, extensions, bond treatments, and scalp therapies**, where consumer search interest is rising sharply.",
      },
      {
        type: "bullets",
        items: [
          "**Growth thesis:** Consumers are trading up to **premium, wellness, and recurring** services faster than to basic grooming.",
          "**Salon opportunity:** The **treatments/scalp-care** line is the fastest-growing part of the salon menu — high margin, low product cost.",
          "**Structural tailwinds:** Male grooming expansion and an aging demographic (anti-aging hair care) support durable multi-year growth.",
        ],
      },
    ],
  },
  {
    id: "growth-rankings",
    title: "2. Beauty Format Growth Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Beauty Format", "Relative Growth", "Key Growth Driver"],
        rows: [
          ["Medical Spa", "Very High", "Injectables, devices, memberships"],
          ["Scalp-Wellness / Treatment Services", "High", "Wellness crossover; rising search demand"],
          ["Lash & Brow Studios", "High", "Recurring fills; low-cost entry"],
          ["Premium Salon Add-ons", "High", "Premiumization of color & bond treatments"],
          ["Men's Grooming / Barbershop", "Moderate–High", "Expanding male grooming routines"],
          ["Nail Salon", "Moderate", "Frequency-driven, stable demand"],
          ["Traditional Haircut", "Low–Stable", "Mature core service"],
        ],
      },
      {
        type: "paragraph",
        text: "**Hair salon takeaway:** The salons growing fastest in 2026 are **repositioning around premium and wellness services** rather than competing on base haircut price. Adding a **scalp-spa or bond-treatment program** captures the fastest-growing demand while lifting average ticket and margin.",
      },
    ],
  },
  {
    id: "demand-signals",
    title: "3. What's Driving the Growth",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Premiumization:** Rising demand for clinically proven treatments, custom color, and wellness-focused services like **scalp spa therapy** — searches up significantly year over year.",
          "**Eco-conscious spending:** Clean, sustainable, and organic product lines are pulling in and retaining higher-value clients.",
          "**Digital discovery:** Social media and online booking lower acquisition cost and accelerate ramp for new services.",
          "**Male grooming:** A broadening men's segment is expanding both barbershop and salon demand.",
          "**Aging demographic:** Growing appetite for anti-aging hair care, color maintenance, and hair-health treatments.",
        ],
      },
      {
        type: "paragraph",
        text: "These signals reward operators who **launch and market premium add-ons early**. A treatment or scalp-therapy menu is one of the few salon moves that simultaneously rides a growth trend, lifts ticket, and carries high margin.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "To capture the fastest-growing demand, salons should **layer premium and recurring services onto a stable haircut base** and market them through digital channels. Growth without margin discipline is a trap — pair new services with pricing and pre-booking systems.",
      },
      {
        type: "bullets",
        items: [
          "**Add a growth line:** Launch a **scalp-wellness or bond-treatment** menu; these ride the fastest-growing demand at high margin.",
          "**Model the upside:** Use the [hair salon revenue calculator](/calculators/hair-salon-revenue/) and [revenue-per-stylist calculator](/calculators/hair-salon-revenue-per-stylist/) to size the opportunity.",
          "**Read next:** [Salon Pricing Trends 2026](/industries/beauty/hair-salon/reports/salon-pricing-trends-2026/) — how to price premium services without losing clients.",
        ],
      },
    ],
  },
];

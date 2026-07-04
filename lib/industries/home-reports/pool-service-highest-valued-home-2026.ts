import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { homeServicesMarketAnchors, homeServicesReportSources } from "./shared-home-services-market-data";

export const reportMeta: ReportMeta = {
  slug: "pool-service-highest-valued-home-2026",
  title: "Highest Valued Home Services — Pool Service Industry Report",
  subtitle:
    "2026 U.S. home services valuation analysis with a pool service deep-dive: SDE multiples, M&A comps, route transferability, recurring revenue quality, and what drives premium exit prices for pool operators.",
  description:
    "Highest valued home services in 2026: pool service and pest control lead SDE multiples at 3.0×–4.5×; $950K median revenue context, route comps, MRR quality, and valuation drivers for pool service operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/pool-service/reports/pool-service-highest-valued-home-2026/",
  sources: homeServicesReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Median Pool Service SDE Multiple", value: homeServicesMarketAnchors.medianSdeMultiple },
          { label: "SDE Multiple Range", value: homeServicesMarketAnchors.sdeMultipleRange },
          { label: "Example: $950K Rev · $209K SDE", value: "~$752K value" },
          { label: "Recurring Revenue Premium Trigger", value: ">80% recurring + <12% churn" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest valued home services** in 2026 are not always the largest — they are the most **transferable**, **recurring**, and **defensible**. Within the **$657 billion** home services market, **pool service** and **pest control** increasingly command **solid SDE multiples (3.0×–4.5×)** when they demonstrate low churn, documented autopay MRR, route density, and **75–85% recurring revenue**. Buyers treat established pool routes as **subscription + contract assets** — a valuation profile where **retention quality and technician productivity** matter as much as fleet and equipment.",
      },
      {
        type: "bullets",
        items: [
          "**Valuation leaders:** Multi-crew pool companies with **250+ accounts**, **<12% annual churn**, documented route maps, and **3+ year commercial contracts**.",
          "**Valuation discounts:** Owner-dependent routes, key-customer concentration, spread-out territories with high drive time, and heavy reliance on one-time repair revenue.",
          "**Market backdrop:** Private equity roll-ups in home services favor **recurring route businesses** with documented MRR over transactional dispatch models.",
        ],
      },
    ],
  },
  {
    id: "valuation-context",
    title: "2. Home Services Valuation Context & Comps",
    blocks: [
      {
        type: "paragraph",
        text: "Pool service transactions in 2023–2026 cluster around **SDE-based pricing** for owner-operated and multi-crew companies. Revenue multiples (**0.9×–1.6×**) serve as cross-checks but rarely drive deals — buyers prioritize **SDE quality**, **MRR stability**, and **route transferability**. Median revenue of **" + homeServicesMarketAnchors.medianAnnualRevenue + "** with **" + homeServicesMarketAnchors.medianMrr + "** MRR supports **$627K–$940K** value ranges at typical multiples.",
      },
      {
        type: "table",
        headers: ["Trade", "Typical SDE Multiple", "Primary Value Driver", "Buyer Profile"],
        rows: [
          ["Pool Service (quality)", "3.5× – 4.5× SDE", "MRR + route density", "PE roll-up / regional operator"],
          ["Pool Service (average)", "3.0× – 3.8× SDE", "Cash flow + routes", "Owner-operator"],
          ["Pest Control", "3.5× – 5.0× SDE", "Contracts + density", "PE roll-up"],
          ["HVAC (service)", "2.5× – 4.0× SDE", "Install backlog + maintenance", "Regional operator"],
          ["Lawn Care", "2.5× – 3.5× SDE", "Route book", "Local operator"],
        ],
      },
      {
        type: "paragraph",
        text: "**Premium multiple triggers:** Recurring revenue **>85%**, annual churn **<10%**, commercial accounts **>15%** of revenue, and route density supporting **65+ pools per technician**. Each factor can add **0.3–0.5×** to base SDE multiple in competitive sale processes.",
      },
    ],
  },
  {
    id: "route-economics",
    title: "3. Route Economics & Transferability",
    blocks: [
      {
        type: "paragraph",
        text: "Valuation is ultimately a bet on **customer LTV and route transferability**. Pool service customers with **$95–$165/mo** contracts and **3–5 year average tenure** generate **$2,800–$6,500 LTV** — supporting higher multiples than trades with lower ticket or higher churn. " + homeServicesMarketAnchors.routeDensityBenchmark + ".",
      },
      {
        type: "bullets",
        items: [
          "**Route maps:** Documented stop sequences, drive times, and technician assignments increase buyer confidence and reduce transition risk.",
          "**Autopay documentation:** Clean MRR records with **88%+ autopay** support premium pricing vs. cash/check-heavy books.",
          "**Commercial contracts:** Multi-year HOA and apartment agreements add **valuation stability** — buyers pay for contracted revenue, not just residential routes.",
          "**Owner dependency:** Companies where the owner services **>30% of routes** face **0.5–1.0× multiple discounts** until technician bench is built.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Sellers & Buyers",
    blocks: [
      {
        type: "paragraph",
        text: "Pool service operators preparing for exit should **document MRR monthly**, **reduce owner route dependency**, and **consolidate geographic density** 12–24 months before sale. Buyers should diligence **churn by cohort**, **repair revenue mix**, and **route map accuracy** — not just trailing SDE.",
      },
      {
        type: "bullets",
        items: [
          "**Target multiple:** **3.2×–3.8× SDE** for median operators; **4.0×–4.5×** for acquisition-ready companies with documented MRR.",
          "**Model valuation:** Use the [pool service valuation calculator](/calculators/pool-service-valuation/) with your SDE and recurring revenue assumptions.",
          "**Read next:** [Fastest Growing Home Services](/industries/pool-service/reports/pool-service-fastest-growing-home-2026/) — growth and consolidation trends affect buyer demand.",
        ],
      },
    ],
  },
];

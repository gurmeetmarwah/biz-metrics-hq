import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { homeServicesMarketAnchors, homeServicesReportSources } from "./shared-home-services-market-data";

export const reportMeta: ReportMeta = {
  slug: "pool-service-fastest-growing-home-2026",
  title: "Fastest Growing Home Services — Pool Service Industry Report",
  subtitle:
    "2026 U.S. home services growth analysis with a pool service deep-dive: installed pool base expansion, PE consolidation velocity, route acquisition trends, and where pool service ranks in home services growth.",
  description:
    "Fastest growing home services in 2026: pool service, pest control, and HVAC maintenance lead growth; installed pool CAGR, route roll-up velocity, commercial contract expansion, and growth levers for pool operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/pool-service/reports/pool-service-fastest-growing-home-2026/",
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
          { label: "U.S. Home Services Market", value: homeServicesMarketAnchors.usHomeServicesMarketSize },
          { label: "Pool Service Market CAGR (est.)", value: "4.5 – 6.2%" },
          { label: "Installed U.S. Pool Base", value: "10.7M+ residential pools" },
          { label: "Fastest-Growth Revenue Line", value: "Commercial contracts + repair upsells" },
        ],
      },
      {
        type: "paragraph",
        text: "**Fastest growing home services** in 2026 are not defined by raw company count alone — they are defined by **route acquisition velocity**, **PE consolidation**, and **installed base tailwinds**. Pool service benefits from a **growing installed pool base** (10.7M+ residential pools), **Sun Belt migration**, and **private equity roll-up activity** in recurring route businesses. The growth story for pool service in 2026 is **same-route revenue growth**, **commercial contract expansion**, and **strategic acquisitions** — not just organic residential account adds.",
      },
      {
        type: "bullets",
        items: [
          "**Growth thesis:** Pool service grows through **route density optimization**, **repair upsells**, and **commercial account wins** — plus M&A consolidation in fragmented markets.",
          "**Industry context:** Home services PE investment favors **recurring route models** with documented MRR — pool service ranks alongside pest control as a consolidation target.",
          "**Strategic implication:** Operators should prioritize **same-route ARPU growth** and **acquisition readiness** before geographic sprawl.",
        ],
      },
    ],
  },
  {
    id: "growth-rankings",
    title: "2. Home Services Growth Rankings",
    blocks: [
      {
        type: "paragraph",
        text: "Growth velocity varies by segment: **new construction-linked trades** (HVAC install) cycle with housing; **installed-base maintenance trades** (pool, pest) grow with housing stock and population migration. Pool service sits in the **installed-base category** — steady organic demand plus consolidation upside.",
      },
      {
        type: "table",
        headers: ["Trade", "Growth Vector (2026)", "Expansion Velocity", "Growth Quality"],
        rows: [
          ["Pool Service", "Route M&A + commercial", "High (fragmented market)", "High recurring growth"],
          ["Pest Control", "PE roll-up + organic", "Very high", "High recurring growth"],
          ["HVAC (maintenance)", "Service plan conversion", "Moderate", "Steady MRR growth"],
          ["Lawn Care", "Route acquisition", "Moderate", "Seasonal variability"],
          ["Plumbing", "Emergency + maintenance", "Low–moderate", "Transactional mix"],
          ["Cleaning", "Franchise + solo", "Moderate", "Labor-constrained"],
        ],
      },
      {
        type: "paragraph",
        text: "**Pool service growth ranking:** **Top-tier in PE acquisition velocity** and **installed-base tailwinds** — not #1 in raw new business formation, but **top-quartile in revenue growth per acquired route** when operators execute density and upsell strategies.",
      },
    ],
  },
  {
    id: "growth-drivers",
    title: "3. Pool Service Growth Drivers in 2026",
    blocks: [
      {
        type: "paragraph",
        text: "Four tailwinds define pool service growth potential in 2026 — each addressable without entering new geographic markets.",
      },
      {
        type: "bullets",
        items: [
          "**Installed base expansion:** Sun Belt states add **80K–120K new in-ground pools annually** — each requiring ongoing maintenance service.",
          "**Commercial contracts:** HOA, apartment, and hospitality pools offer **higher ticket values** and **multi-year terms** — fastest same-company revenue growth lever.",
          "**Repair & upgrade upsells:** Saltwater conversions, automation, and equipment upgrades add **$800–$2,500 LTV** per customer beyond cleaning revenue.",
          "**Route consolidation:** Fragmented markets support **buy-and-build strategies** — PE-backed platforms acquiring **$500K–$2M revenue** operators at **3.5×–4.5× SDE**.",
          "**Franchise expansion:** Pool Scouts, ASP, and regional concepts add units in underserved suburban markets.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Growth-Minded Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Pool service operators pursuing growth should **build acquisition-ready operations** — documented routes, clean MRR, low churn — even if exit is not imminent. PE buyers and regional acquirers pay premiums for **transferable route books** with **commercial mix** and **repair revenue diversification**.",
      },
      {
        type: "bullets",
        items: [
          "**Growth target:** **15–25% annual revenue growth** via route density + commercial wins is achievable without new markets.",
          "**Benchmark yourself:** Review [operating metrics](/industries/pool-service/#operating-metrics) and model route economics with the [route profitability calculator](/calculators/pool-service-route-profitability/).",
          "**Read next:** [Highest Margin Home Services](/industries/pool-service/reports/pool-service-highest-margin-home-2026/) — growth without margin discipline destroys value.",
        ],
      },
    ],
  },
];

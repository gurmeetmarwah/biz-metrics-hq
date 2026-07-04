import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { homeServicesMarketAnchors, homeServicesReportSources } from "./shared-home-services-market-data";

export const reportMeta: ReportMeta = {
  slug: "pool-service-highest-margin-home-2026",
  title: "Highest Margin Home Services — Pool Service Industry Report",
  subtitle:
    "2026 U.S. home services profitability analysis with a pool service deep-dive: route density economics, recurring contract margins, repair upsells, and why pool operators lead route-based home service margins.",
  description:
    "Highest margin home services in 2026: pool service, pest control, and specialty trades lead net margins; pool service median 22% net; rankings across lawn care, HVAC, plumbing, and pest control economics.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/pool-service/reports/pool-service-highest-margin-home-2026/",
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
          { label: "Pool Service Median Net Margin", value: homeServicesMarketAnchors.medianNetMargin },
          { label: "Top Home Service Net Margin Range", value: "22 – 30%" },
          { label: "Pool Service Median Revenue", value: homeServicesMarketAnchors.medianAnnualRevenue },
          { label: "Recurring Revenue % (median)", value: homeServicesMarketAnchors.medianRecurringRevenuePct },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest margin home services** in 2026 are not the largest trades — they are **recurring route and contract models** with high technician productivity and low customer acquisition costs. Within the **$657 billion** U.S. home services market, **pool service**, **pest control**, and **specialty maintenance operators** consistently rank among the **highest-margin route-based models** — often achieving **22–30% net margins** at maturity. A median pool service company generating **$950K** annually typically operates with **4–8 technicians** on dense suburban routes — achieving strong gross profit per stop without the dispatch complexity of emergency-heavy trades.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Pool service monetizes **recurring maintenance contracts** — customers pay monthly for water quality and equipment care that DIY alternatives cannot match.",
          "**Industry context:** Median **22% net margin** with **58–72% gross margin**; top performers reach **26–32%** through route density, repair upsells, and commercial accounts.",
          "**Strategic implication:** Operators optimizing margin should prioritize **pools per technician**, **drive time reduction**, and **repair cross-sell** before adding territory.",
        ],
      },
    ],
  },
  {
    id: "margin-rankings",
    title: "2. Home Service Margin Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Trade", "Gross Margin", "Net Margin", "Primary Margin Driver"],
        rows: [
          ["Pest Control", "60 – 75%", "22 – 30%", "Recurring treatment contracts; route density"],
          ["Pool Service", "58 – 72%", "18 – 28%", "Weekly cleaning MRR; repair upsells"],
          ["Plumbing (service)", "55 – 68%", "16 – 24%", "Emergency premium; parts markup"],
          ["HVAC (service)", "52 – 65%", "14 – 22%", "Maintenance agreements; install margin"],
          ["Lawn Care", "50 – 65%", "14 – 22%", "Route density; seasonal labor leverage"],
          ["Cleaning (residential)", "48 – 60%", "12 – 20%", "Labor efficiency; recurring clients"],
        ],
      },
      {
        type: "paragraph",
        text: "**Pool service positioning:** Ranks **top-tier on net margin** among route-based home services. Operators that push **equipment repair (12% revenue share)** and **commercial contracts (10%)** add **3–5 margin points** without proportional fleet expansion. Route density is the primary margin risk — spread-out territories compress gross profit per technician.",
      },
    ],
  },
  {
    id: "margin-drivers",
    title: "3. What Compresses or Expands Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Labor:** Pool service labor runs **28–35%** of revenue — technician productivity (pools per week) is the primary lever. Pest control operates at similar ratios with higher recurring density.",
          "**Chemicals & supplies:** **8–12%** of revenue; bulk purchasing and route-optimized inventory reduce COGS.",
          "**Fleet costs:** Vehicles and fuel run **6–10%** — dense routes minimize drive time and fuel burn.",
          "**Repair upsell:** Cross-selling repairs on **30–40%** of routes can add **$800–$2,500 LTV** per customer and **2–4 pts net margin**.",
          "**Commercial mix:** HOA and apartment contracts offer **$300–$1,200+/mo** per account with lower churn than residential.",
          "**Seasonality tax:** Temperate markets see **15–25% revenue swings** — off-season cost discipline is critical for margin preservation.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Pool service operators chasing margin should **optimize route density** before adding technicians. Map drive time, consolidate stops, and benchmark gross profit per route against the **22% median net margin**. Compare your P&L against route-based peers, not emergency dispatch trades with different labor models.",
      },
      {
        type: "bullets",
        items: [
          "**Target net margin:** **20–24%** for median independents; **26–32%** for dense-route operators with strong repair revenue.",
          "**Benchmark yourself:** Compare against [pool service profit margin data](/industries/pool-service/#profitability) and run the [profit calculator](/calculators/pool-service-profit/).",
          "**Read next:** [Best Recurring Revenue Home Services](/industries/pool-service/reports/pool-service-best-recurring-revenue-home-2026/) — margin and MRR quality are closely linked.",
        ],
      },
    ],
  },
];

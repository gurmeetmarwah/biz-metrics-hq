import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { treeServiceMarketAnchors, treeServiceReportSources } from "./shared-tree-service-market-data";

export const reportMeta: ReportMeta = {
  slug: "tree-service-highest-margin-home-2026",
  title: "Highest Margin Home Services — Tree Service Industry Report",
  subtitle:
    "2026 U.S. outdoor and home services profitability analysis with a tree service deep-dive: removal economics, equipment utilization, emergency premiums, and why arborist operators rank among the highest-margin outdoor trades.",
  description:
    "Highest margin home services in 2026: tree service, pest control, and specialty outdoor trades lead net margins; tree service median 21% net; rankings across landscaping, lawn care, pool, HVAC, and excavation economics.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/tree-service/reports/tree-service-highest-margin-home-2026/",
  sources: treeServiceReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Tree Service Median Net Margin", value: treeServiceMarketAnchors.medianNetMargin },
          { label: "Top Outdoor Trade Net Margin Range", value: "20 – 30%" },
          { label: "Tree Service Median Revenue", value: treeServiceMarketAnchors.medianAnnualRevenue },
          { label: "Gross Margin on Removal Work", value: "45 – 62%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest margin home services** in 2026 are not always the largest trades — they are **specialty outdoor operators** with high average tickets, equipment barriers to entry, and emergency pricing power. Within the **$657 billion** U.S. home services market, **tree service**, **pest control**, and **pool service** consistently rank among the **highest-margin outdoor and route-based models** — often achieving **20–30% net margins** at maturity. A median tree service company generating **$1.25M** annually typically runs **3–5 field crews** with bucket trucks and chippers — achieving strong gross profit per job without the dispatch complexity of low-ticket lawn routes.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Tree service monetizes **high-ticket removals**, **emergency storm premiums**, and **specialized equipment** — customers pay for safety, insurance, and crane capability that DIY alternatives cannot match.",
          "**Industry context:** Median **21% net margin** with **45–62% gross margin** on removal work; top performers reach **25–30%** through equipment utilization, commercial contracts, and storm response readiness.",
          "**Strategic implication:** Operators optimizing margin should prioritize **equipment utilization above 75%**, **emergency response capability**, and **commercial pruning contracts** before adding territory.",
        ],
      },
    ],
  },
  {
    id: "margin-rankings",
    title: "2. Outdoor & Home Service Margin Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Trade", "Gross Margin", "Net Margin", "Primary Margin Driver"],
        rows: [
          ["Pest Control", "60 – 75%", "22 – 30%", "Recurring treatment contracts; route density"],
          ["Tree Service", "45 – 62%", "18 – 26%", "Removal premiums; emergency storm pricing"],
          ["Pool Service", "58 – 72%", "18 – 28%", "Weekly cleaning MRR; repair upsells"],
          ["Excavation", "50 – 65%", "16 – 24%", "Project pricing; equipment leverage"],
          ["HVAC (service)", "52 – 65%", "14 – 22%", "Maintenance agreements; install margin"],
          ["Landscaping", "45 – 58%", "14 – 22%", "Design-build projects; maintenance routes"],
          ["Lawn Care", "50 – 65%", "14 – 22%", "Route density; seasonal labor leverage"],
          ["Plumbing (service)", "55 – 68%", "16 – 24%", "Emergency premium; parts markup"],
        ],
      },
      {
        type: "paragraph",
        text: "**Tree service positioning:** Ranks **top-tier on net margin** among project-based outdoor trades. Operators that push **commercial maintenance (8% revenue share)** and **emergency storm response (15–35%)** add **3–5 margin points** without proportional crew expansion. Equipment utilization is the primary margin risk — underutilized bucket trucks and chippers compress gross profit per crew.",
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
          "**Labor:** Tree service labor runs **30–45%** of revenue — crew productivity (jobs per week) and job mix (removal vs trim) are the primary levers.",
          "**Equipment depreciation:** **8–14%** of revenue; bucket trucks, chippers, and stump grinders require **75%+ utilization** to justify capital investment.",
          "**Insurance:** **8–14%** of revenue — workers' comp and liability premiums are among the highest in home services; safety programs directly impact margin.",
          "**Emergency premium:** Storm and hazard removals command **20–40% pricing premiums** — pre-positioned crews and storm marketing lists capture margin spikes.",
          "**Commercial mix:** HOA, utility, and municipal pruning contracts offer **predictable revenue** with lower customer acquisition cost than residential one-offs.",
          "**Seasonality tax:** Northern markets see **20–40% revenue swings** — off-season cost discipline and commercial contract backfill are critical for margin preservation.",
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
        text: "Tree service operators chasing margin should **optimize equipment utilization** before adding crews. Benchmark gross profit per truck and crew against the **21% median net margin**. Compare your P&L against specialty outdoor peers, not low-ticket lawn care routes with different labor and equipment models.",
      },
      {
        type: "bullets",
        items: [
          "**Target net margin:** **18–24%** for median independents; **25–30%** for storm-market operators with strong commercial mix and equipment utilization.",
          "**Benchmark yourself:** Compare against [tree service profit margin data](/industries/tree-service/#profitability) and run the [profit margin calculator](/calculators/tree-service-profit-margin/).",
          "**Read next:** [Highest Ticket Home Services](/industries/tree-service/reports/tree-service-highest-ticket-home-2026/) — margin and ticket size are closely linked in tree service economics.",
        ],
      },
    ],
  },
];

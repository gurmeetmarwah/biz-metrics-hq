import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { treeServiceMarketAnchors, treeServiceReportSources } from "./shared-tree-service-market-data";

export const reportMeta: ReportMeta = {
  slug: "tree-service-recession-resistant-home-2026",
  title: "Most Recession-Resistant Home Services — Tree Service Industry Report",
  subtitle:
    "2026 U.S. home services resilience analysis with a tree service deep-dive: hazard removal demand, storm economics, essential-work characteristics, and why tree service ranks among the most recession-resistant outdoor trades.",
  description:
    "Most recession-resistant home services in 2026: tree service, pest control, and plumbing lead resilience; emergency and hazard-driven demand; rankings across landscaping, lawn care, pool, HVAC, and excavation downturn performance.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/tree-service/reports/tree-service-recession-resistant-home-2026/",
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
          { label: "Tree Service Emergency Revenue %", value: treeServiceMarketAnchors.emergencyRevenuePct },
          { label: "Hazard Removal Demand Driver", value: "Safety-critical — non-discretionary" },
          { label: "Tree Service Median Net Margin", value: treeServiceMarketAnchors.medianNetMargin },
          { label: "Revenue Stability Rating", value: "4 / 5 (BizMetricsHQ scorecard)" },
        ],
      },
      {
        type: "paragraph",
        text: "**Most recession-resistant home services** in 2026 share three traits: **non-discretionary demand**, **emergency pricing power**, and **insurance or liability drivers** that compel action regardless of economic cycle. **Tree service** ranks among the **most resilient outdoor trades** because fallen trees, hazard removals, and storm damage create **safety-critical work** that homeowners and municipalities cannot defer. With **15–35% of revenue** from emergency calls and **20–40% from commercial contracts**, tree service operators weather downturns better than discretionary trades like landscaping design or pool renovation.",
      },
      {
        type: "bullets",
        items: [
          "**Resilience thesis:** Hazard trees and storm damage are **liability risks** — property owners, HOAs, and utilities address them regardless of consumer confidence.",
          "**Industry context:** Tree service revenue dipped **8–15%** in past recessions vs **20–35%** for discretionary landscaping — emergency and utility work provided a floor.",
          "**Strategic implication:** Operators should build **storm response capability**, **utility line clearance relationships**, and **commercial contract backfill** before the next downturn.",
        ],
      },
    ],
  },
  {
    id: "resilience-rankings",
    title: "2. Recession Resistance Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Trade", "Resilience Score", "Primary Demand Driver", "Downturn Risk"],
        rows: [
          ["Pest Control", "Very High", "Health/safety; recurring contracts", "Low — subscription model"],
          ["Plumbing", "Very High", "Emergency leaks; code compliance", "Low — non-discretionary"],
          ["Tree Service", "High", "Hazard removal; storm damage", "Low–moderate — trim deferral"],
          ["HVAC (service)", "High", "Heating/cooling failure", "Moderate — install cyclicality"],
          ["Pool Service", "Moderate–High", "Recurring maintenance contracts", "Moderate — pool closure risk"],
          ["Excavation", "Moderate", "Construction-linked projects", "High — new build sensitivity"],
          ["Landscaping", "Moderate", "Maintenance + design-build", "Moderate–high — deferrable projects"],
          ["Lawn Care", "Moderate", "Recurring routes", "Moderate — DIY substitution"],
        ],
      },
      {
        type: "paragraph",
        text: "**Tree service resilience positioning:** Ranks **top-tier among outdoor trades** — above landscaping, lawn care, and excavation — because **hazard and emergency work is non-discretionary**. The primary recession risk is **deferral of discretionary trimming and aesthetic pruning**, which can compress revenue **10–20%** even when emergency demand holds steady.",
      },
    ],
  },
  {
    id: "resilience-drivers",
    title: "3. Tree Service Resilience Drivers",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Hazard removals:** Dead, diseased, or structurally compromised trees create **liability exposure** — insurance companies and municipalities often compel action.",
          "**Storm response:** Hurricanes, ice storms, and wind events generate **15–35% of annual revenue** in affected markets — demand spikes independent of economic cycle.",
          "**Utility line clearance:** Municipal and utility contracts provide **predictable revenue** with multi-year terms — insulating against residential slowdowns.",
          "**Commercial maintenance:** HOA and property management pruning contracts (**20–40% of revenue** for top operators) renew annually regardless of consumer spending.",
          "**Insurance claims:** Storm damage often flows through homeowners insurance — reducing direct out-of-pocket friction for customers.",
          "**Trim deferral risk:** Aesthetic pruning and non-urgent trimming can be deferred **1–2 seasons** — operators should maintain emergency and commercial mix to offset.",
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
        text: "Tree service operators building recession resilience should **diversify beyond residential trimming** into hazard assessment, utility contracts, and storm response marketing. Operators with **40%+ commercial and emergency revenue** historically maintained profitability through downturns while trim-only operators saw **15–25% revenue declines**.",
      },
      {
        type: "bullets",
        items: [
          "**Resilience target:** **30%+ emergency + commercial revenue**; **utility or municipal contract** for off-season backfill.",
          "**Benchmark yourself:** Review [industry outlook](/industries/tree-service/#opportunities-risks) and model break-even with the [break-even calculator](/calculators/tree-service-break-even/).",
          "**Read next:** [Best Commercial Service Businesses](/industries/tree-service/reports/tree-service-commercial-service-home-2026/) — commercial contracts are the primary recession hedge.",
        ],
      },
    ],
  },
];

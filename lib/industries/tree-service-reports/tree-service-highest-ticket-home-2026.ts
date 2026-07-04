import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { treeServiceMarketAnchors, treeServiceReportSources } from "./shared-tree-service-market-data";

export const reportMeta: ReportMeta = {
  slug: "tree-service-highest-ticket-home-2026",
  title: "Highest Ticket Home Services — Tree Service Industry Report",
  subtitle:
    "2026 U.S. outdoor and home services ticket analysis with a tree service deep-dive: removal pricing, land clearing economics, emergency premiums, and why tree service ranks among the highest average job values in home services.",
  description:
    "Highest ticket home services in 2026: tree service, excavation, and HVAC install lead average job values; tree service median $1,150 avg job; rankings across landscaping, lawn care, pool, pest control, and plumbing ticket economics.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/tree-service/reports/tree-service-highest-ticket-home-2026/",
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
          { label: "Tree Service Median Avg Job", value: treeServiceMarketAnchors.medianAvgJob },
          { label: "Full Removal Ticket Range", value: "$1,800 – $4,500+" },
          { label: "Tree Service Median Revenue", value: treeServiceMarketAnchors.medianAnnualRevenue },
          { label: "Land Clearing Ticket Range", value: "$2,500 – $8,000+" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest ticket home services** in 2026 are defined by **project scope**, **equipment requirements**, and **safety liability** — not visit frequency. **Tree service** consistently ranks among the **top three outdoor trades by average job value**, with a median **$1,150** per job and full removals commanding **$1,800–$4,500+**. A median tree service company completing **~1,085 jobs annually** at **$1,150** average generates approximately **$1.25M** in revenue — a fundamentally different economics model than high-volume, low-ticket lawn care routes.",
      },
      {
        type: "bullets",
        items: [
          "**Ticket thesis:** Tree service jobs are priced on **tree size, access difficulty, disposal requirements**, and **emergency urgency** — not hourly labor alone.",
          "**Industry context:** Removal work averages **$1,800–$4,500**; trimming runs **$450–$1,200**; land clearing exceeds **$2,500–$8,000+** per project.",
          "**Strategic implication:** Operators should optimize **job mix toward removals and land clearing** while maintaining trimming routes for crew utilization between large projects.",
        ],
      },
    ],
  },
  {
    id: "ticket-rankings",
    title: "2. Outdoor & Home Service Ticket Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Trade", "Median Avg Job", "High-Ticket Service", "Ticket Driver"],
        rows: [
          ["Excavation", "$2,800 – $6,500", "Site prep / grading", "Equipment hours; material volume"],
          ["Tree Service", "$800 – $4,500", "Full removal + stump grind", "Tree size; crane access; emergency"],
          ["HVAC (install)", "$4,500 – $12,000", "System replacement", "Equipment cost; labor hours"],
          ["Plumbing", "$350 – $2,500", "Repipe / water heater", "Emergency premium; parts"],
          ["Landscaping", "$400 – $3,500", "Design-build install", "Material markup; project scope"],
          ["Pool Service", "$85 – $350/visit", "Equipment repair", "Recurring route + repair upsell"],
          ["Pest Control", "$125 – $350", "Termite treatment", "Contract length; treatment type"],
          ["Lawn Care", "$45 – $120", "Full-service maintenance", "Property size; visit frequency"],
        ],
      },
      {
        type: "paragraph",
        text: "**Tree service ticket positioning:** Ranks **#1–2 among pure outdoor service trades** (excluding HVAC install and excavation) on median job value. The **wide ticket range** ($250 stump grind to $8,000+ land clearing) means job mix — not just market — determines company-level average ticket. Operators with crane capability and commercial land-clearing contracts push averages well above the **$1,150 median**.",
      },
    ],
  },
  {
    id: "ticket-drivers",
    title: "3. What Drives Tree Service Ticket Size",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Removal vs trim mix:** Full removals with stump grinding and hauling represent **38% of revenue** at **$1,800–$4,500+** per job — the primary ticket driver.",
          "**Emergency premium:** Storm damage and hazard trees command **20–40% pricing premiums** — often the highest-margin jobs in the portfolio.",
          "**Crane-assisted work:** Large or confined-access removals add **$500–$2,000+** to base pricing — differentiating from low-price competitors.",
          "**Land clearing:** Commercial and residential clearing projects run **$2,500–$8,000+** — fewer jobs but highest per-project revenue.",
          "**Arborist consulting:** ISA-certified assessments and preservation plans support **$350–$900** tickets with **very high margins**.",
          "**Bundling:** Stump grinding, debris hauling, and plant health care add-ons increase average ticket **15–25%** without proportional crew time.",
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
        text: "Tree service operators pursuing higher average tickets should **invest in crane capability**, **storm response marketing**, and **commercial land-clearing relationships** — then benchmark job mix monthly. A crew running mostly trimming at **$600** average cannot match the revenue per hour of a removal-focused crew at **$2,500+**.",
      },
      {
        type: "bullets",
        items: [
          "**Ticket target:** **$1,200–$1,800** company-wide average for removal-focused operators; **$800–$1,150** for balanced trim/removal mix.",
          "**Benchmark yourself:** Review [service metrics](/industries/tree-service/#service-metrics) and model job economics with the [average ticket calculator](/calculators/tree-service-average-ticket/).",
          "**Read next:** [Most Recession-Resistant Services](/industries/tree-service/reports/tree-service-recession-resistant-home-2026/) — high tickets and emergency demand reinforce resilience.",
        ],
      },
    ],
  },
];

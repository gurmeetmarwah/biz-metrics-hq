import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "highest-valued-fitness-businesses-2026",
  title: "Highest Valued Fitness Businesses",
  subtitle:
    "2026 valuation rankings for U.S. gym and fitness businesses — SDE multiples, recurring-revenue quality, M&A comps, and what buyers pay premiums for.",
  description:
    "Highest valued fitness businesses in 2026: SDE multiples 2.8×–4.2×, MRR-heavy clubs, low-churn membership models, Life Time and Equinox positioning, and valuation drivers for gym sellers.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "5 min",
  href: "/industries/gym/reports/highest-valued-fitness-businesses-2026/",
  sources: [
    "Health & Fitness Association (HFA) — retention & dues benchmarks",
    "BizBuySell / fitness business broker comps (2023–2026)",
    "BizMetricsHQ — gym valuation composite",
    "Life Time Group — public company disclosures",
  ],
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Median SDE Multiple (quality independents)", value: "3.5×" },
          { label: "SDE Multiple Range", value: "2.8× – 4.2×" },
          { label: "Premium Multiple Trigger (retention)", value: ">72% annual" },
          { label: "Example: $1.2M Rev · $280K SDE", value: "~$980K value" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest valued fitness businesses** command premium multiples not because of revenue size alone — but because of **recurring revenue quality**, **transferable systems**, and **low owner dependency**. BizMetricsHQ and business-for-sale comps show median **3.5× SDE** for U.S. gyms with documented books, with range **2.8×–4.2×** depending on retention, lease terms, and revenue concentration. A **$1.2M revenue gym** generating **$280K SDE** trades near **$980K** at median; top-quartile assets with **>72% annual retention** and **corporate contracts** can reach **4.0×+**.",
      },
      {
        type: "bullets",
        items: [
          "**Valuation leaders:** Multi-amenity lifestyle clubs, subscription-heavy boutiques with low churn, and HVLP franchises with proven unit economics.",
          "**Valuation discounts:** Owner-dependent sales, short lease remaining, equipment deferred maintenance, and **>40%** revenue from a single corporate contract.",
          "**Buyer profile:** Individual operators, regional roll-ups, and franchise systems seeking tuck-in acquisitions with existing member bases.",
        ],
      },
    ],
  },
  {
    id: "valuation-rankings",
    title: "2. Fitness Format Valuation Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Typical SDE Multiple", "Revenue Multiple", "Premium Driver"],
        rows: [
          ["Premium Lifestyle Club (Life Time profile)", "4.0× – 5.5× EBITDA", "1.0× – 1.5×", "Amenity diversification, affluent demo, brand"],
          ["Low-Churn Boutique (Pilates, yoga)", "3.5× – 4.5× SDE", "0.7× – 1.0×", "Community retention, predictable MRR"],
          ["HVLP Franchise (mature unit)", "3.0× – 4.0× SDE", "0.5× – 0.8×", "Franchise systems, volume, brand transfer"],
          ["CrossFit / Strength Affiliate", "2.8× – 3.8× SDE", "0.5× – 0.7×", "Community; variable by coach dependency"],
          ["General Independent (average retention)", "2.8× – 3.5× SDE", "0.4× – 0.7×", "Baseline market comps"],
          ["Distressed / Turnaround", "1.5× – 2.5× SDE", "0.2× – 0.4×", "Declining members, lease risk, capex backlog"],
        ],
      },
      {
        type: "paragraph",
        text: "**High-value operators** share traits buyers underwrite explicitly: **≥60% membership revenue**, **annual retention above HFA median (66.4%)**, **3+ years of stable SDE**, **automated billing**, and **management that survives owner transition**. Equinox and Life Time represent the **institutional end** of the spectrum — traded or valued on **EBITDA and revenue per member**, not small-business SDE math.",
      },
    ],
  },
  {
    id: "buyer-criteria",
    title: "3. What Buyers Pay For",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Recurring revenue %:** Clubs with **≥70%** subscription revenue trade **0.5–1.0× higher** on SDE than session-pack studios.",
          "**Member retention:** HFA **66.4%** annual retention is the U.S. benchmark; assets above **72%** receive premium offers.",
          "**Lease security:** **10+ years remaining** or favorable renewal options reduce discount rates in DCF models.",
          "**Diversified revenue:** PT, retail, and corporate channels reduce single-stream risk — buyers model **$43–$65/mo** revenue per member vs. dues alone.",
          "**Transferable brand:** Franchise affiliation or established local brand with **NPS >50** supports faster diligence.",
          "**Clean add-backs:** Documented SDE with normalized owner comp — buyers distrust aggressive add-back schedules.",
        ],
      },
      {
        type: "paragraph",
        text: "**EBITDA vs. SDE:** Larger transactions ($3M+ SDE) increasingly use **EBITDA multiples (4×–6×)** with professional management in place. Owner-operators selling sub-$500K SDE assets should expect **SDE-based pricing** from individual buyers and small regional groups.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Sellers & Buyers",
    blocks: [
      {
        type: "paragraph",
        text: "To maximize valuation before sale: **12–18 months** of documented retention improvement, **reduce owner hours** below 20/week, **capitalize deferred equipment**, and **diversify corporate contracts**. Buyers should stress-test **churn sensitivity** — a 5 pt retention drop can reduce value **15–20%** in a DCF.",
      },
      {
        type: "bullets",
        items: [
          "**Model your value:** Use the [gym valuation calculator](/calculators/gym-valuation/) with your SDE and multiple range.",
          "**Compare multiples:** See [gym valuation benchmarks](/industries/gym/#valuation) for SDE, EBITDA, and revenue ranges.",
          "**Read next:** [Best Recurring Revenue Fitness Businesses](/industries/gym/reports/best-recurring-revenue-fitness-businesses-2026/) — the primary driver of premium multiples.",
        ],
      },
    ],
  },
];

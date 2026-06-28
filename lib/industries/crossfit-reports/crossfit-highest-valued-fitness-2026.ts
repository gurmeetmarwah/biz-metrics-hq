import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { crossfitMarketAnchors, crossfitReportSources } from "./shared-crossfit-market-data";

export const reportMeta: ReportMeta = {
  slug: "crossfit-highest-valued-fitness-2026",
  title: "Highest Valued Fitness Businesses — CrossFit Industry Report",
  subtitle:
    "2026 U.S. fitness valuation analysis with a CrossFit affiliate deep-dive: SDE multiples, M&A comps, community retention value, coach systems, and what drives premium exit prices for boxes.",
  description:
    "Highest valued CrossFit fitness businesses in 2026: 2.8×–4.2× SDE multiples, $950K median revenue context, affiliate comps, MRR quality, and valuation drivers for box operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/crossfit-gym/reports/crossfit-highest-valued-fitness-2026/",
  sources: crossfitReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Median CrossFit Affiliate SDE Multiple", value: "3.7×" },
          { label: "SDE Multiple Range", value: "2.8× – 4.2×" },
          { label: "Example: $950K Rev · $200K SDE", value: "~$740K value" },
          { label: "Community Retention Premium Trigger", value: "<5% monthly churn" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest valued fitness businesses** in 2026 are not always the largest — they are the most **transferable**, **recurring**, and **defensible**. Within the **$4.8 billion** functional fitness market, **CrossFit affiliates** increasingly command **solid SDE multiples (2.8×–4.2×)** when they demonstrate low churn, documented autopay MRR, coach systems that survive owner transition, and **80%+ membership recurring revenue**. Buyers treat established boxes as **subscription + community assets** — a valuation profile where **retention quality and coach productivity** matter as much as equipment and lease terms.",
      },
      {
        type: "bullets",
        items: [
          "**Valuation leaders:** Single-location affiliates with **180+ active members**, **<4.5% monthly churn**, documented coach SOPs, and **3+ year lease remaining**.",
          "**Valuation discounts:** Owner-dependent coaching, key-person coach risk, over-reliance on founder-led classes, and membership concentration in promo offers.",
          "**Market backdrop:** Affiliate count growth has normalized; buyers favor **profitable survivors** with documented retention over unprofitable growth stories.",
        ],
      },
    ],
  },
  {
    id: "crossfit-market-size",
    title: "2. The U.S. CrossFit Market: Valuation Context & Comps",
    blocks: [
      {
        type: "paragraph",
        text: "CrossFit affiliate transactions in 2023–2026 cluster around **SDE-based pricing** for owner-operated boxes. Revenue multiples (**0.5×–1.0×**) serve as cross-checks but rarely drive deals — buyers prioritize **SDE quality**, **MRR stability**, and **community transferability**. Median affiliate revenue of **" + crossfitMarketAnchors.medianAnnualRevenue + "** with **" + crossfitMarketAnchors.medianMrr + "** MRR supports **$560K–$840K** value ranges at typical multiples.",
      },
      {
        type: "table",
        headers: ["Format", "Typical SDE Multiple", "Primary Value Driver", "Buyer Profile"],
        rows: [
          ["CrossFit Affiliate (quality)", "3.2× – 4.2× SDE", "MRR + community + coaches", "Operator / PE roll-up"],
          ["CrossFit Affiliate (average)", "2.8× – 3.5× SDE", "Cash flow + lease", "Owner-operator"],
          ["General Gym", "2.5× – 3.8× SDE", "Volume + equipment", "Regional operator"],
          ["Personal Training Studio", "2.0× – 3.2× SDE", "Client book transfer", "Trainer / buyer"],
        ],
      },
      {
        type: "paragraph",
        text: "**Premium multiple triggers:** Autopay membership **>90%**, monthly churn **<4%**, nutrition/PT revenue **>20%**, and coach bench depth (**3+ revenue-producing coaches** beyond owner). Each factor can add **0.3–0.6×** to base SDE multiple in competitive sale processes.",
      },
    ],
  },
  {
    id: "member-economics",
    title: "3. Member Economics & Retention Value",
    blocks: [
      {
        type: "paragraph",
        text: "Valuation is ultimately a bet on **member LTV**. CrossFit affiliates with **$210/mo blended ARPU** and **18–28 month average tenure** generate **$3,400–$5,800 LTV** — supporting higher multiples than formats with lower ARPU or shorter lifespans. " + crossfitMarketAnchors.communityRetentionFocus + ".",
      },
      {
        type: "bullets",
        items: [
          "**Referral quality:** **25–40% of new members** from referrals signal community health — a due-diligence positive for buyers.",
          "**Churn sensitivity:** A box moving from **5.5% to 3.5% monthly churn** can increase SDE **$25K–$45K** annually through retention alone.",
          "**Coach continuity:** Documented programming, onboarding SOPs, and coach development plans reduce **key-person discount** at sale.",
          "**Ancillary stickiness:** Nutrition and foundations program enrollment correlates with **2–4 month longer tenure** — direct LTV uplift.",
        ],
      },
    ],
  },
  {
    id: "valuation-drivers",
    title: "4. What Drives CrossFit Affiliate Valuation",
    blocks: [
      {
        type: "paragraph",
        text: "Buyers evaluate CrossFit affiliates on a **quality scorecard** beyond trailing SDE. The highest-valued listings document **MRR trends**, **class utilization**, **coach productivity per head**, and **member engagement metrics** — not just P&L snapshots.",
      },
      {
        type: "table",
        headers: ["Factor", "Premium Impact", "Discount Impact"],
        rows: [
          ["Autopay MRR >90%", "+0.3 – 0.5× SDE", "Manual billing / high failed payments"],
          ["Monthly churn <4%", "+0.2 – 0.4× SDE", "Churn >6% or declining members"],
          ["Coach systems documented", "+0.2 – 0.3× SDE", "Owner teaches >50% of classes"],
          ["Lease term 3+ years", "Neutral to +0.2×", "<18 months remaining"],
          ["Affiliate fee / brand compliance", "Neutral", "Compliance issues / pending fees"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**EBITDA multiples:** **3.6×–5.6×** used for multi-box operators with centralized management.",
          "**Revenue multiples:** **0.5×–1.0×** — useful when SDE is depressed by owner salary above market.",
        ],
      },
    ],
  },
  {
    id: "business-models",
    title: "5. Exit Profiles by Operator Type",
    blocks: [
      {
        type: "paragraph",
        text: "Different CrossFit operator profiles command different valuation outcomes. **Owner-coach affiliates** often sell at lower multiples due to transition risk. **Systematized multi-coach boxes** with **$950K+ revenue** and **$200K SDE** represent the **highest-valued single-location profile** in functional fitness.",
      },
      {
        type: "table",
        headers: ["Operator Profile", "Typical Multiple", "Est. Value Range ($200K SDE)", "Exit Readiness"],
        rows: [
          ["Owner-Coach (high dependence)", "2.8× – 3.2×", "$560K – $640K", "Needs 12–18 mo transition"],
          ["Systematized Single Box", "3.5× – 4.0×", "$700K – $800K", "Ready with coach bench"],
          ["Multi-Affiliate Operator", "3.8× – 4.2×", "Per-unit + portfolio premium", "PE / strategic interest"],
          ["Declining Membership Box", "2.0× – 2.8×", "$400K – $560K", "Turnaround pricing"],
        ],
      },
    ],
  },
  {
    id: "challenges-opportunities",
    title: "6. Challenges & Opportunities",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Challenge — Owner dependence:** Buyers discount boxes where the founder is the primary revenue-producing coach.",
          "**Challenge — Lease risk:** Short remaining lease terms or unfavorable renewal clauses compress multiples **0.3–0.5×**.",
          "**Opportunity — Pre-sale optimization:** 12-month focus on churn reduction and coach documentation can add **$100K–$200K** to sale price.",
          "**Opportunity — Strategic buyers:** Regional fitness operators and PE roll-ups pay premiums for **documented MRR** and **multi-location potential**.",
          "**Opportunity — Community as asset:** Tribal culture is difficult to replicate — the primary intangible buyers pay for in CrossFit transactions.",
        ],
      },
      {
        type: "paragraph",
        text: "For sellers and buyers, CrossFit affiliate valuation in 2026 rewards **recurring revenue quality**, **community retention**, and **coach systems** — the same factors that drive day-to-day profitability.",
      },
    ],
  },
];

import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { martialArtsMarketAnchors, martialArtsReportSources } from "./shared-martial-arts-market-data";

export const reportMeta: ReportMeta = {
  slug: "martial-arts-highest-valued-fitness-2026",
  title: "Highest Valued Fitness Businesses — Martial Arts Industry Report",
  subtitle:
    "2026 U.S. fitness valuation analysis with a martial arts deep-dive: SDE multiples, M&A comps, tuition MRR quality, family retention value, and what drives premium exit prices for martial arts schools.",
  description:
    "Highest valued martial arts fitness businesses in 2026: 2.6×–4.2× SDE multiples, $19.2B market context, kids program premium, tuition MRR comps, and valuation drivers for school operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/martial-arts-school/reports/martial-arts-highest-valued-fitness-2026/",
  sources: martialArtsReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Median Martial Arts School SDE Multiple", value: "3.9×" },
          { label: "SDE Multiple Range", value: "2.6× – 4.2×" },
          { label: "Example: $780K Rev · $187K SDE", value: "~$729K value" },
          { label: "Family Retention Premium Trigger", value: ">80% annual renewal" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest valued fitness businesses** in 2026 are not always the largest — they are the most **transferable**, **recurring**, and **defensible**. Within the **$19.2 billion** U.S. wellness and youth activity market, **martial arts schools with strong kids pipelines** increasingly command **solid SDE multiples (2.6×–4.2×)** when they demonstrate **3.8% or lower monthly churn**, documented tuition MRR, and instructor systems that survive owner transition. Buyers treat established schools as **subscription + progression assets** — a valuation profile where **family retention quality** matters as much as facility collateral.",
      },
      {
        type: "bullets",
        items: [
          "**Valuation leaders:** Single-location schools with **180+ active students**, **<4% monthly churn**, **55%+ kids revenue**, and **transferable curriculum systems**.",
          "**Valuation discounts:** Owner-dependent culture, head instructor key-person risk, over-reliance on founder-led classes, and weak belt progression documentation.",
          "**Market backdrop:** School counts stable; buyers favor **profitable survivors** with documented family retention over growth stories without systems.",
        ],
      },
    ],
  },
  {
    id: "market-size-share",
    title: "2. Market Size & Share — Martial Arts & Youth Activity",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** wellness market masks a critical split: **transactional drop-in formats** skew lower multiples, while **tuition-forward martial arts schools** skew premium. Family investment — belt ceremonies, parent communication, sibling plans — correlates with valuation: schools with **74–86% family retention** command higher multiples than adult-heavy gyms with comparable revenue.",
      },
      {
        type: "table",
        headers: ["Format", "Typical SDE Multiple", "Primary Value Driver", "Buyer Profile"],
        rows: [
          ["Kids-Focused Martial Arts School", "3.4× – 4.2×", "Tuition MRR + retention", "Strategic acquirers, PE roll-ups"],
          ["Adult-Heavy BJJ / MMA", "2.6× – 3.4×", "Private lesson revenue", "Owner-operators, competitors"],
          ["Franchise Martial Arts", "3.0× – 3.8×", "Brand + playbook transfer", "Multi-unit operators"],
          ["General Gym (comparison)", "2.0× – 3.0×", "Equipment + lease", "Fitness consolidators"],
        ],
      },
      {
        type: "paragraph",
        text: "**Valuation stability:** While location growth has plateaued, **SDE per school is rising** as operators migrate toward **autopay tuition**, **documented belt progression**, and **instructor career paths** that reduce key-person risk at sale.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Valuation quality depends on **who** enrolls and **how long families stay**. **Parents aged 28–48** drive enrollment for **55–75% of school revenue** — demographics with autopay on file, multi-year horizons, and **values-based spending** that renews through belt milestones. This cohort treats martial arts as **child development infrastructure**: canceling feels like disrupting a progression path, not skipping a gym visit.",
      },
      {
        type: "bullets",
        items: [
          "**LTV linkage:** " + martialArtsMarketAnchors.familyRetentionFocus + " — buyers model **$3,800–$6,200** student LTV at sale.",
          "**Referral economics:** **32%** of new students from family referrals reduce CAC and support premium multiples.",
          "**Churn sensitivity:** Schools above **5% monthly churn** see **0.3–0.6× SDE multiple compression** in broker comps.",
          "**Belt testing engagement:** Families attending promotion ceremonies show **15–22% lower churn** — a valuation signal buyers audit.",
        ],
      },
    ],
  },
  {
    id: "trends-program-models",
    title: "4. Key Trends & Program Models",
    blocks: [
      {
        type: "paragraph",
        text: "**Systems-driven schools** command premium valuations. Buyers evaluate **curriculum documentation**, **instructor training pipelines**, **belt testing SOPs**, and **parent communication cadence** — not just revenue. Schools investing in **leadership programs** create instructor bench depth that reduces transition risk.",
      },
      {
        type: "bullets",
        items: [
          "**M&A trend:** Regional consolidators acquiring **2–5 location portfolios** of kids-focused schools with shared back-office.",
          "**Documentation premium:** Schools with **CRM-tracked progression**, **autopay adoption >85%**, and **quarterly belt calendars** sell faster.",
          "**Franchise vs. independent:** Franchises trade at **predictable but capped** multiples; strong independents with unique culture can exceed franchise comps.",
          "**Discipline mix:** Karate and taekwondo schools with established kids pipelines trade higher than single-discipline adult gyms.",
        ],
      },
    ],
  },
  {
    id: "business-models",
    title: "5. Business Models & Monetization",
    blocks: [
      {
        type: "paragraph",
        text: "**Highest-valued operators** demonstrate **recurring revenue quality**: tuition MRR at **$58K+/mo** for median-scale schools, **belt testing** at **8–12%** of revenue, and **camps** providing seasonal cash without eroding margin. Buyers discount schools where >30% of revenue is non-recurring event income without retention linkage.",
      },
      {
        type: "table",
        headers: ["Revenue Stream", "Valuation Weight", "Transferability", "Notes"],
        rows: [
          ["Monthly Tuition (MRR)", "Highest", "High", "Autopay density is primary asset"],
          ["Belt Testing Fees", "Moderate–High", "High", "Tied to progression system"],
          ["Summer Camps", "Moderate", "Moderate", "Seasonal; needs curriculum"],
          ["Private Lessons", "Moderate", "Low–Moderate", "Key-person dependent"],
          ["Merchandise / Uniforms", "Low–Moderate", "High", "Margin booster, not core value"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Tuition MRR rule:** Schools with **>85% autopay** and **documented $50K+ MRR** achieve fastest closings.",
          "**SDE adjustment:** Add-backs for owner salary above market rate; deduct below-market instructor pay that won't survive transition.",
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
          "**Challenge — Key-person risk:** Founder-led instruction depresses multiples; leadership programs and documented curriculum mitigate.",
          "**Challenge — Lease transferability:** Short remaining lease terms or personal guarantees compress buyer pool.",
          "**Opportunity — Kids pipeline premium:** Schools with **55%+ kids revenue** and **<4% churn** consistently trade above **3.5× SDE**.",
          "**Opportunity — Multi-school roll-up:** Acquirers pay **portfolio premiums** for 3+ locations with shared systems.",
          "**Opportunity — Belt testing systems:** Documented promotion calendars signal **predictable ancillary revenue** — a buyer diligence positive.",
        ],
      },
      {
        type: "paragraph",
        text: "For exit-focused operators, martial arts schools offer **subscription-like cash flows with youth activity defensibility** — provided tuition MRR is documented, family retention is audited, and instructor systems transfer without the founder.",
      },
    ],
  }
];

import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { yogaMarketAnchors, yogaReportSources } from "./shared-yoga-market-data";

export const reportMeta: ReportMeta = {
  slug: "yoga-highest-valued-fitness-2026",
  title: "Highest Valued Fitness Businesses — Yoga Industry Report",
  subtitle:
    "2026 U.S. fitness valuation analysis with a yoga deep-dive: SDE multiples, M&A comps, community-driven retention value, and what drives premium exit prices for boutique studios.",
  description:
    "Highest valued yoga fitness businesses in 2026: 2.2×–3.5× SDE multiples, $19.2B market context, boutique studio comps, MRR quality, and valuation drivers for yoga operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/yoga-studio/reports/yoga-highest-valued-fitness-2026/",
  sources: yogaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Median Yoga Studio SDE Multiple", value: "3.2×" },
          { label: "SDE Multiple Range", value: "2.2× – 3.5×" },
          { label: "Example: $620K Rev · $118K SDE", value: "~$378K value" },
          { label: "Community Retention Premium Trigger", value: ">80% annual retention" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest valued fitness businesses** in 2026 are not always the largest — they are the most **transferable**, **recurring**, and **defensible**. Within the **$19.2 billion** U.S. Pilates and yoga studio market, **community-driven yoga studios** increasingly command **solid SDE multiples (2.2×–3.5×)** when they demonstrate low churn, documented autopay MRR, and instructor systems that survive owner transition. Buyers treat established yoga studios as **subscription + community assets** — a valuation profile where **retention quality** matters as much as equipment collateral.",
      },
      {
        type: "bullets",
        items: [
          "**Valuation leaders:** Single-location yoga studios with **120+ active members**, **<4.5% monthly churn**, **strong community NPS**, and **3+ year lease remaining**.",
          "**Valuation discounts:** Owner-dependent culture, instructor key-person risk, over-reliance on founder-led classes, and membership concentration in intro-offer promos.",
          "**Market backdrop:** Studio counts stable; revenue trends stabilizing — buyers favor **profitable survivors** with documented retention over growth stories.",
        ],
      },
    ],
  },
  {
    id: "yoga-wellness-market-size",
    title: "2. The U.S. Yoga & Wellness Boom: Market Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "Valuation multiples do not exist in a vacuum — they reflect **market depth** and **strategic buyer interest**. The **$19.2 billion** Pilates/yoga studio TAM provides a large acquirer funnel: franchise systems, regional roll-ups, wellness consolidators, and individual operators seeking **tuck-in acquisitions**. Yoga's **low capex profile** means buyers focus on **member lists, brand equity, and retention systems** rather than equipment book value.",
      },
      {
        type: "table",
        headers: ["Valuation Tier", "Typical SDE Multiple", "Revenue Profile", "Buyer Type"],
        rows: [
          ["Premium", "3.2× – 3.5×", "$600K–$900K · <4% churn · strong community", "Franchise / strategic roll-up"],
          ["Market", "2.8× – 3.2×", "$400K–$650K · documented books", "Individual operator"],
          ["Discount", "2.2× – 2.8×", "<$400K or owner-dependent", "Asset sale / turnaround"],
          ["Distressed", "<2.2×", "Declining membership", "Lease assumption + member list"],
        ],
      },
      {
        type: "paragraph",
        text: "**Share dynamics:** Established yoga studios represent a significant share of **boutique fitness M&A volume** in 2024–2026 broker data. Discount donation-based or class-pack-heavy studios trade at **0.4–0.8× lower multiples** due to weaker recurring revenue and higher churn.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Buyer diligence starts with **member quality and community depth**. **Adults aged 25–55 represent 62.3% of the market** — a demographic with higher **payment reliability**, longer tenure, and willingness to purchase workshop upsells. Valuation models assume **16–22 month average client lifespan** at premium studios vs. **10–14 months** at discount drop-in concepts.",
      },
      {
        type: "bullets",
        items: [
          "**Retention = value:** Studios with **75%+ annual retention** receive **0.2–0.4× multiple premium** in broker comps — community culture is a transferable asset.",
          "**Behavioral signal:** Clients attending **3+ classes/week** correlate with **half the churn** of once-weekly attendees.",
          "**Pricing context:** Average **$25** class prices industry-wide mask boutique premiums of **$22–$38** effective per spot — higher ARPU supports higher absolute SDE and thus higher transaction values.",
          "**Fill rate linkage:** **65% average occupancy** is the industry mean; studios consistently above **72%** demonstrate pricing power acquirers reward.",
        ],
      },
    ],
  },
  {
    id: "trends-equipment",
    title: "4. Key Trends & Equipment",
    blocks: [
      {
        type: "paragraph",
        text: "Yoga studios carry **minimal depreciating equipment** compared to reformer Pilates — valuation diligence focuses on **lease terms, brand assets, CRM data, and instructor bench depth**. Hot yoga studios require **HVAC assessment**; buyers discount studios with **deferred climate-system maintenance** requiring **$20K+** immediate capex.",
      },
      {
        type: "bullets",
        items: [
          "**Due diligence item:** Lease assignment rights, prop inventory condition, and hot-room HVAC age affect buyer risk perception.",
          "**AI / tech stack:** CRM with churn prediction, automated billing recovery, and community engagement tools increase **transferable value** — buyers pay for systems, not spreadsheets.",
          "**Hybrid content:** Recorded class libraries add **perceived IP** and support retention narratives when tied to measurable churn improvement.",
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
        text: "**Valuation-maximizing monetization** prioritizes **autopay membership MRR (80%+ of revenue)** over class-pack transactions. Franchised yoga studios trade on **proven unit economics**; independents trade on **absolute SDE** and **local community dominance**. Workshop and teacher-training revenue improves SDE absolutes — a **$118K SDE studio at 3.2×** clears **$378K** vs. **$260K at 2.2×**.",
      },
      {
        type: "table",
        headers: ["Revenue Line", "Valuation Impact", "Buyer Preference"],
        rows: [
          ["Autopay Unlimited Memberships", "Highest — core MRR", "Required majority"],
          ["Workshops / Retreats", "High — margin + community proof", "Positive premium"],
          ["Class Packs (non-recurring)", "Neutral — volatile", "Discount if >30% of revenue"],
          ["Teacher Training", "Moderate — lumpy", "Acceptable if recurring cohorts"],
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
          "**Challenge — Key-person instructor risk:** Beloved teacher departure can trigger **8–18% revenue decline** — buyers haircut multiples **0.3–0.5×** without bench depth.",
          "**Challenge — Lease term:** <3 years remaining compresses multiples; landlords control renewal leverage.",
          "**Opportunity — Roll-up arbitrage:** Regional buyers assembling **3–5 studios** pay **premium for #2–#4** tuck-ins with clean books and documented retention.",
          "**Opportunity — Community story:** Documenting **82% membership-weighted revenue** and **80%+ annual retention** can push a **2.8× to 3.5×** exit on the same SDE.",
          "**Opportunity — Low capex transfer:** Minimal equipment replacement at sale reduces buyer capex risk vs. reformer studios.",
        ],
      },
      {
        type: "paragraph",
        text: "Sellers preparing for exit should run the [Yoga Studio Valuation Calculator](/calculators/yoga-valuation/) and benchmark against [studio valuation multiples](/industries/yoga-studio/#valuation) **18–24 months before listing**.",
      },
    ],
  }
];

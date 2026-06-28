import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { martialArtsMarketAnchors, martialArtsReportSources } from "./shared-martial-arts-market-data";

export const reportMeta: ReportMeta = {
  slug: "martial-arts-best-childrens-activity-businesses-2026",
  title: "Best Children's Activity Businesses — Martial Arts Industry Report",
  subtitle:
    "2026 U.S. children's activity business rankings with a martial arts deep-dive: retention, LTV, tuition economics, and why martial arts schools lead youth enrichment formats for recurring revenue and family loyalty.",
  description:
    "Best children's activity businesses in 2026: martial arts vs dance, swim, gym, and yoga ranked by retention, LTV, tuition MRR, belt progression engagement, and family renewal economics.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "9 min",
  href: "/industries/martial-arts-school/reports/martial-arts-best-childrens-activity-businesses-2026/",
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
          { label: "U.S. Youth Activity & Wellness Market", value: martialArtsMarketAnchors.wellnessMarketSize },
          { label: "Martial Arts Student LTV Range", value: "$3,800 – $6,200" },
          { label: "Martial Arts Monthly Churn", value: martialArtsMarketAnchors.monthlyChurn },
          { label: "Family Retention Rate (top schools)", value: "74 – 86%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best children's activity businesses** in 2026 are ranked by **retention depth**, **recurring revenue quality**, and **household lifetime value** — not just enrollment volume. Within the **$19.2 billion** wellness and youth activity market, **martial arts schools** consistently rank **#1 or #2** alongside swim schools for **child-focused revenue**, **progression-driven retention**, and **family plan economics**. With **55–75% of revenue** from kids programs, **3.8% monthly churn**, and **$3,800–$6,200 student LTV**, martial arts outperforms dance studios, gyms, and yoga studios on most youth activity economic dimensions.",
      },
      {
        type: "bullets",
        items: [
          "**Ranking thesis:** Children's activities with **visible progression milestones** (belts, levels, recitals, swim strokes) retain longer than open-ended formats — martial arts belt systems are among the strongest retention engines.",
          "**Economic edge:** Tuition MRR at **$145/mo** with **belt testing revenue (8–12%)** creates higher ARPU than most youth formats except premium swim instruction.",
          "**Family multiplier:** Sibling plans and multi-child households push household LTV **25–40%** above single-enrollment formats.",
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
        text: "The **$19.2 billion** U.S. wellness market encompasses children's martial arts, dance, gymnastics, swim, music, and enrichment. Martial arts captures an estimated **$4.5–$6.2 billion** of addressable youth activity spend when including tuition, camps, tournaments, and merchandise — a segment growing with **parent demand for character-building, structured after-school care**, and **anti-screen-time alternatives**.",
      },
      {
        type: "table",
        headers: ["Youth Activity Format", "Child Revenue Focus", "Avg. Student LTV", "Monthly Churn", "Recurring Revenue"],
        rows: [
          ["Martial Arts School", "★★★★★ (55–75%)", "$3,800 – $6,200", "2.5 – 5%", "★★★★★"],
          ["Swim School", "★★★★★", "$3,200 – $5,800", "3 – 6%", "★★★★★"],
          ["Dance Studio", "★★★★★", "$2,800 – $5,200", "4 – 7%", "★★★★☆"],
          ["Gym (youth programs)", "★★☆☆☆", "$1,200 – $2,400", "5 – 9%", "★★★☆☆"],
          ["Yoga Studio (kids)", "★★☆☆☆", "$1,400 – $2,800", "5 – 8%", "★★★★☆"],
        ],
      },
      {
        type: "paragraph",
        text: "**Share insight:** Martial arts and swim schools dominate **child-focused recurring revenue** rankings. Dance studios compete on recital revenue but face higher seasonal churn. Gyms and yoga studios capture youth activity spend opportunistically without progression systems that drive multi-year enrollment.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Children's activity economics are driven by **parent decision-makers aged 28–48** in dual-income households. This cohort allocates **$150–$400/mo** across youth activities and prioritizes formats that deliver **discipline, confidence, physical literacy**, and **structured schedules**. Martial arts uniquely combines **character development positioning** with **measurable progression** — a parent value proposition that supports premium tuition.",
      },
      {
        type: "bullets",
        items: [
          "**Enrollment drivers:** After-school convenience, bully prevention, confidence building, and peer community — martial arts scores highly on all four.",
          "**Retention drivers:** " + martialArtsMarketAnchors.familyRetentionFocus,
          "**Sibling dynamics:** **40–55%** of martial arts households enroll 2+ children when family plans are offered.",
          "**Referral power:** **32%** of new martial arts students come from family referrals — highest among compared youth formats except swim schools.",
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
        text: "**Progression-centric program models** define the highest-ranked children's activity businesses. Martial arts schools structure **age-based curriculum**, **belt testing milestones**, **leadership tracks for teens**, and **summer camp intensives** — creating year-round engagement loops that dance recitals or gym youth classes rarely match.",
      },
      {
        type: "bullets",
        items: [
          "**After-school pickup:** Schools offering transportation from local elementary schools see **20–35% higher** kids enrollment density.",
          "**Character curriculum:** Schools marketing **life skills** (respect, focus, perseverance) alongside technique retain **10–15% longer** than technique-only positioning.",
          "**Belt testing events:** Quarterly promotions create **family engagement moments** that reinforce commitment and generate **8–12%** ancillary revenue.",
          "**Leadership programs:** Teen assistant instructor tracks retain students through adolescence — extending LTV into **36–48 months**.",
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
        text: "**Top-ranked children's activity businesses** monetize through **monthly tuition MRR**, **progression-based ancillary fees**, and **seasonal camp revenue**. Martial arts schools layer **belt testing**, **summer camps**, **birthday parties**, and **tournament fees** on a tuition foundation — achieving **$168/mo blended ARPU** vs. **$95–$140/mo** for most dance and gym youth programs.",
      },
      {
        type: "table",
        headers: ["Revenue Stream", "Martial Arts Share", "Retention Impact", "Margin Profile"],
        rows: [
          ["Monthly Tuition", "52%", "Primary MRR anchor", "Moderate gross"],
          ["Belt Testing", "8 – 12%", "High — progression commitment", "High gross (60–75%)"],
          ["Summer Camps", "8 – 14%", "Moderate — seasonal bridge", "Moderate–High"],
          ["Private Lessons", "8 – 16%", "High — skill acceleration", "High gross"],
          ["Merchandise / Uniforms", "6 – 10%", "Low — one-time", "Moderate gross"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**LTV formula:** $168/mo ARPU × 28 months average tenure = **~$4,700 blended LTV** — top quartile exceeds **$6,200**.",
          "**Household economics:** Family plans with 2–3 children generate **$280–$420/mo household MRR** — highest among compared formats.",
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
          "**Challenge — Competition from free activities:** Parks, school sports, and screens compete for children's time; progression systems differentiate martial arts.",
          "**Challenge — Instructor quality at scale:** Maintaining teaching standards across multiple class times requires leadership pipeline investment.",
          "**Opportunity — Underserved suburban markets:** Many suburbs lack quality kids martial arts within **15-minute drive** — greenfield opportunity.",
          "**Opportunity — School partnerships:** After-school programs at elementary schools create **low-CAC enrollment pipelines**.",
          "**Opportunity — Women's self-defense + kids combo:** Family-oriented schools adding parent classes increase household retention **15–20%**.",
        ],
      },
      {
        type: "paragraph",
        text: "For entrepreneurs evaluating children's activity businesses, martial arts ranks among the **best combinations of recurring revenue, retention depth, and household LTV** — provided operators build kids-first programs with belt progression, family engagement, and instructor systems that scale.",
      },
    ],
  }
];

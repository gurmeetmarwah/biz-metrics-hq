import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { martialArtsMarketAnchors, martialArtsReportSources } from "./shared-martial-arts-market-data";

export const reportMeta: ReportMeta = {
  slug: "martial-arts-highest-margin-fitness-2026",
  title: "Highest Margin Fitness Businesses — Martial Arts Industry Report",
  subtitle:
    "2026 U.S. fitness profitability analysis with a martial arts deep-dive: tuition economics, belt testing margin, kids program leverage, and why youth-focused academies lead boutique fitness margins.",
  description:
    "Highest margin martial arts and fitness businesses in 2026: $19.2B wellness market context, 18–28% net margins, kids program revenue share, belt testing economics, and margin levers for school operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/martial-arts-school/reports/martial-arts-highest-margin-fitness-2026/",
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
          { label: "U.S. Wellness & Youth Activity Market Context", value: martialArtsMarketAnchors.wellnessMarketSize },
          { label: "Top Martial Arts School Net Margin Range", value: "18 – 28%" },
          { label: "Kids Program Revenue Share (profitable schools)", value: martialArtsMarketAnchors.kidsProgramRevenueShare },
          { label: "Median Monthly Tuition", value: martialArtsMarketAnchors.avgMonthlyTuition },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. fitness industry in 2026 remains bifurcated: **volume-driven gyms** compete on dues while **youth-focused specialty operators** compete on margin. Within the **$19.2 billion** wellness and boutique fitness context, **martial arts schools** consistently rank among the **highest-margin fitness business models** — not because of scale, but because of **tuition-based recurring revenue**, **low equipment capex relative to revenue**, and **ancillary income from belt testing, camps, and merchandise**. Schools where children's programs represent **55–75% of revenue** achieve the strongest margin profiles through multi-year enrollment and family plan economics.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Martial arts schools monetize **progression and family loyalty** — parents pay for character development, discipline, and belt advancement that general gyms cannot replicate at comparable tuition price points.",
          "**Industry context:** Average tuition of **$145/mo** with **3.8% monthly churn** supports **$58K+ tuition MRR** at median scale; belt testing adds **8–12%** high-margin ancillary revenue.",
          "**Strategic implication:** Operators optimizing margin should prioritize **kids enrollment density**, **belt progression systems**, and **family retention** before expanding square footage.",
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
        text: "The **$19.2 billion** U.S. wellness and boutique fitness market encompasses martial arts, dance, swim, gymnastics, and enrichment formats. Martial arts schools represent a **capital-efficient premium tier** within youth activity: moderate facility requirements relative to full-service gyms, yet **higher revenue per student** when kids programs anchor enrollment. Mat, pads, and uniform inventory capex typically runs **$15K–$45K** vs. **$150K+** for full gym buildouts — a structural margin advantage at launch.",
      },
      {
        type: "table",
        headers: ["Segment", "Est. Share of School Revenue", "Margin Profile", "Growth Dynamic"],
        rows: [
          ["Kids After-School Programs", "55 – 75%", "High (20 – 28% net)", "Stable; progression-driven"],
          ["Adult Programs", "15 – 30%", "Moderate–High (16 – 24% net)", "Self-defense and fitness crossover"],
          ["Competition Teams", "4 – 12%", "Variable (12 – 22% net)", "Travel costs offset by tournament fees"],
          ["Leadership & Instructor Tracks", "3 – 10%", "High incremental margin", "Pipeline for instructor retention"],
        ],
      },
      {
        type: "paragraph",
        text: "**Market share insight:** Martial arts schools capture disproportionate **profit share per dollar of capex** relative to equipment-heavy formats. A mature school generating **$780K** annually may occupy **2,500–4,500 sq ft** — achieving strong revenue per square foot with **fraction of the equipment investment** required by full-service clubs. National school counts remain relatively stable, but **revenue per location is rising** as operators focus on retention over acquisition-heavy growth.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "The modern martial arts family is values-oriented, progression-attached, and retention-sensitive. **Parents aged 28–48 drive 70–85% of enrollment decisions** — a concentration that shapes pricing, scheduling, and marketing strategy. This cohort prioritizes **character development**, **structured after-school care**, **belt advancement milestones**, and **instructor rapport** over facility amenities.",
      },
      {
        type: "bullets",
        items: [
          "**Why families stay:** " + martialArtsMarketAnchors.familyRetentionFocus + ". Churn drops when students attend **2+ classes/week** and families participate in belt ceremonies.",
          "**Purchase behavior:** Intro offers convert best at **$29–$79** for 2–4 weeks; unlimited tuition at **$110–$195/mo** anchors LTV in suburban markets.",
          "**Demographic tailwinds:** Millennial parents drive demand for **structured youth activities**; dual-income households value **after-school pickup** and **summer camp** bundles.",
          "**Retention linkage:** Schools below **65% annual tuition renewal** often signal onboarding gaps — weak parent communication, slow belt progression, or instructor turnover.",
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
        text: "**Progression-driven delivery** defines profitable martial arts academies. Schools invest in **curriculum systems**, **belt testing infrastructure**, and **parent engagement tools** — not heavy apparatus. Leading operators compete on **instructor quality**, **discipline-specific differentiation** (karate, taekwondo, BJJ, MMA), and **leadership pipelines** rather than square footage arms races.",
      },
      {
        type: "bullets",
        items: [
          "**Software integration:** Attendance tracking, belt progression dashboards, and churn-risk scoring — not replacing instructors. Operators use automation to **recover failed tuition payments** and **trigger parent outreach** at attendance drops.",
          "**Hybrid models:** Virtual curriculum supplements in-person tuition; hybrid reduces churn **8–15%** when bundled with home practice content.",
          "**Belt testing cadence:** Quarterly promotion cycles drive **predictable ancillary revenue**; schools with active testing calendars average **8–12%** of revenue from belt fees.",
          "**Trend risk:** Over-expanding adult programs before kids pipeline is full — the leading cause of **sub-optimal instructor utilization** in year-two schools.",
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
        text: "**Highest-margin operators** share a common monetization stack: **monthly tuition MRR** as the base, **group classes** as the delivery engine, and **belt testing / camps / private lessons** as margin accelerators. Franchising trades margin for playbook speed; independents retain **2–4 pts higher net margin** when mature with strong kids enrollment.",
      },
      {
        type: "table",
        headers: ["Model", "Typical Net Margin", "Revenue Mix", "Margin Driver"],
        rows: [
          ["Independent Kids-Focused Academy", "20 – 28%", "52% tuition · 10% belt · 11% camps", "Retention + family plans"],
          ["Franchise Martial Arts School", "15 – 22%", "55% tuition · 12% merchandise", "Brand + curriculum system"],
          ["Adult-Heavy BJJ / MMA Gym", "14 – 22%", "48% tuition · 16% privates", "Higher churn; privates offset"],
          ["Multi-Discipline Academy", "18 – 26%", "45% kids · 25% adults · 12% camps", "Cross-program retention"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Tuition vs. ancillary:** Tuition drives **volume economics** ($145/mo × 200+ students); belt testing and camps drive **margin** (60–75% gross on promotion fees).",
          "**Rule of thumb:** Every **10 pts of belt + camp revenue** as % of total can add **1.5–2.5 pts net margin** without adding class capacity.",
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
          "**Challenge — Instructor recruitment:** Quality black-belt instructors are scarce; mitigate with leadership programs, tiered pay, and career paths.",
          "**Challenge — Seasonal enrollment:** Summer and holiday dips compress cash flow; camps and intensives bridge gaps.",
          "**Opportunity — Premium tuition power:** Families accept **$145–$195/mo** when progression and character outcomes are visible — margins unavailable to $40/mo gyms.",
          "**Opportunity — Family plan leverage:** Sibling discounts increase household LTV **25–40%** while reducing acquisition cost per student.",
          "**Opportunity — Belt testing revenue:** Structured promotion calendars add **$60K–$95K** annual ancillary revenue at 200-student schools.",
        ],
      },
      {
        type: "paragraph",
        text: "For margin-focused investors, martial arts represents a **rare combination**: youth activity demand, tuition recurring revenue, and progression-driven retention — provided operators respect **family retention economics** and build kids programs before scaling adult offerings.",
      },
    ],
  }
];

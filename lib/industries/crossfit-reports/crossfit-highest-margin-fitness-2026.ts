import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { crossfitMarketAnchors, crossfitReportSources } from "./shared-crossfit-market-data";

export const reportMeta: ReportMeta = {
  slug: "crossfit-highest-margin-fitness-2026",
  title: "Highest Margin Fitness Businesses — CrossFit Industry Report",
  subtitle:
    "2026 U.S. fitness profitability analysis with a CrossFit affiliate deep-dive: coach productivity economics, class utilization leverage, nutrition upsells, and why community-driven boxes lead coached-fitness margins.",
  description:
    "Highest margin CrossFit and fitness businesses in 2026: 15–25% net margins, $950K median affiliate revenue, coach utilization benchmarks, nutrition/PT upsells, and margin levers for box operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/crossfit-gym/reports/crossfit-highest-margin-fitness-2026/",
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
          { label: "U.S. Functional Fitness Market Context", value: crossfitMarketAnchors.functionalFitnessMarketSize },
          { label: "Top CrossFit Affiliate Net Margin Range", value: "15 – 25%" },
          { label: "Median Affiliate Annual Revenue", value: crossfitMarketAnchors.medianAnnualRevenue },
          { label: "Revenue Per Coach (well-utilized)", value: crossfitMarketAnchors.coachProductivityBenchmark },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. fitness industry in 2026 remains bifurcated: **volume-driven clubs** compete on member count while **coach-led affiliates** compete on margin per member. Within the **$4.8 billion** functional fitness and boutique coaching segment, **CrossFit affiliates** consistently rank among the **highest-margin coached fitness models** — not because of scale, but because of **premium membership pricing ($150–$250/mo)**, **high coach productivity**, and **ancillary revenue from nutrition coaching, personal training, and foundations programs**. A mature box generating **$950K** annually often operates with **120–380 engaged members** — achieving strong revenue per square foot without the staffing overhead of 24-hour access clubs.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** CrossFit boxes monetize **community and coaching quality** — members pay for accountability, programming variety, and tribal culture that $40/mo gyms cannot replicate.",
          "**Industry context:** Median **21% net margin** with **58–72% gross margin**; top performers reach **24–30%** through nutrition upsells and **85%+ peak-hour class utilization**.",
          "**Strategic implication:** Operators optimizing margin should prioritize **coach productivity**, **class fill rates**, and **member retention** before adding square footage or class slots.",
        ],
      },
    ],
  },
  {
    id: "crossfit-market-size",
    title: "2. The U.S. CrossFit & Functional Fitness Market: Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "The **$4.8 billion** functional fitness market encompasses CrossFit affiliates, HIIT studios, strength & conditioning gyms, and hybrid coaching formats. CrossFit-dominant boxes represent the **premium coached tier**: higher coach payroll as % of revenue, but **2–3× revenue per member** vs mass-market gyms. With **" + crossfitMarketAnchors.usAffiliateSegment + "**, the format has matured from hyper-growth to **profitability-focused operations** — weak affiliates exit while survivors consolidate local market share.",
      },
      {
        type: "table",
        headers: ["Segment", "Est. Net Margin", "Revenue Per Member", "Margin Driver"],
        rows: [
          ["CrossFit Affiliate (mature)", "18 – 25%", "$165 – $285/mo", "Coach productivity + retention"],
          ["General Gym (comparison)", "10 – 18%", "$38 – $69/mo", "Volume + ancillary"],
          ["Personal Training Studio", "18 – 28%", "$250 – $450/mo", "Session pricing; lower volume"],
          ["HIIT / Bootcamp Franchise", "14 – 22%", "$120 – $200/mo", "Class density; brand fees"],
        ],
      },
      {
        type: "paragraph",
        text: "**Margin share insight:** CrossFit affiliates capture disproportionate **profit per coaching hour** relative to open-access gyms. A box running **10 classes/day** at **$280–$420 revenue per class** generates **$840K–$1.5M** class-driven revenue annually — with margin leverage from fixed rent and scalable coach schedules.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Member Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "The modern CrossFit member is performance-oriented, community-attached, and retention-sensitive. **Adults aged 25–45 represent ~70% of membership** — a cohort with disposable income, routine schedules, and willingness to pay **$185+/mo** for coached group training. This demographic prioritizes **results**, **accountability**, and **social belonging** over equipment variety.",
      },
      {
        type: "bullets",
        items: [
          "**Why they stay:** " + crossfitMarketAnchors.communityRetentionFocus + ". Members attending **3+ classes/week** show materially lower churn.",
          "**Purchase behavior:** Foundations/on-ramp programs convert at **40–55%** to unlimited membership; nutrition challenges add **$75–$150/mo** incremental ARPU for engaged members.",
          "**Demographic tailwinds:** Corporate wellness stipends increasingly cover boutique coaching; functional fitness appeals to former athletes and busy professionals.",
          "**Utilization linkage:** Boxes below **65% average class occupancy** often signal coach quality, scheduling, or onboarding issues — not market saturation alone.",
        ],
      },
    ],
  },
  {
    id: "trends-coaching",
    title: "4. Key Trends & Coach Economics",
    blocks: [
      {
        type: "paragraph",
        text: "**Coach productivity** defines CrossFit margin economics. Unlike gyms where trainers are optional, CrossFit revenue flows through **coach-led classes**. Well-utilized coaches generate **$125K–$210K annual box revenue** through **14–22 classes/week** plus personal training. Operator margin improves when coach payroll stays **35–45% of revenue** while utilization exceeds **80%**.",
      },
      {
        type: "bullets",
        items: [
          "**Nutrition coaching:** Challenges and macro coaching represent **8–15% of revenue** at mature affiliates with **60%+ gross margin** on programming.",
          "**Kids & teen programs:** Expanding youth offerings adds revenue without proportional rent increases — **10–18% revenue share** at family-focused boxes.",
          "**Hybrid programming:** Online accessory programming reduces churn **8–15%** when bundled with membership, not sold standalone.",
          "**Margin risk:** Over-hiring coaches before class demand validation — the leading cause of **sub-15% net margin** in year-two affiliates.",
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
        text: "**Highest-margin CrossFit operators** share a monetization stack: **unlimited membership MRR** as the base, **coach-led WOD classes** as delivery, and **PT + nutrition + foundations** as margin accelerators. Single-location owner-operators retain **2–4 pts higher net margin** than absentee-owned boxes when coach culture is strong.",
      },
      {
        type: "table",
        headers: ["Model", "Typical Net Margin", "Revenue Mix", "Margin Driver"],
        rows: [
          ["Owner-Coach Affiliate", "18 – 24%", "62% membership · 18% PT", "Low overhead; high utilization"],
          ["Multi-Coach Box (150+ members)", "20 – 26%", "58% membership · 14% PT · 10% nutrition", "Coach systems + retention"],
          ["Multi-Affiliate Operator", "16 – 22%", "Varies by market", "Centralized ops; brand leverage"],
          ["General Gym (comparison)", "10 – 18%", "70% dues · 15% PT", "Volume; lower ARPU"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Class vs. ancillary:** Group classes drive **volume economics**; nutrition and PT drive **margin** without adding class capacity.",
          "**Rule of thumb:** Every **5 pts of nutrition + PT revenue** as % of total can add **1–2 pts net margin** at mature scale.",
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
          "**Challenge — Coach recruitment:** Quality coaches are the product; turnover destroys retention and margin.",
          "**Challenge — Rent compression:** High-rent markets can push net margin below **14%** even with strong membership.",
          "**Opportunity — Class utilization leverage:** Moving occupancy from **72% to 85%** can add **$80K–$140K** annual revenue without new buildout.",
          "**Opportunity — Nutrition upsells:** Structured nutrition programs convert **15–25%** of members at premium pricing.",
          "**Opportunity — Community moat:** Tribal retention supports **3.5–5.5% monthly churn** vs **5–8%** at transactional gyms — direct margin impact via LTV.",
        ],
      },
      {
        type: "paragraph",
        text: "For margin-focused operators and buyers, CrossFit represents a **coached-fitness premium model**: recurring revenue, high ARPU, and community defensibility — provided affiliates respect **coach productivity economics** and resist scaling class capacity before demand proof.",
      },
    ],
  },
];

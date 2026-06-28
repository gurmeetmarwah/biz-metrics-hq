import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { crossfitMarketAnchors, crossfitReportSources } from "./shared-crossfit-market-data";

export const reportMeta: ReportMeta = {
  slug: "crossfit-best-recurring-revenue-fitness-2026",
  title: "Best Recurring Revenue Fitness Businesses — CrossFit Industry Report",
  subtitle:
    "2026 U.S. fitness recurring revenue analysis with a CrossFit deep-dive: membership MRR models, autopay economics, community retention, and why affiliates lead subscription coached fitness.",
  description:
    "Best recurring revenue CrossFit fitness businesses in 2026: 80–90% MRR, $72K median affiliate MRR, autopay models, churn reduction, and subscription economics for box operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/crossfit-gym/reports/crossfit-best-recurring-revenue-fitness-2026/",
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
          { label: "CrossFit Affiliate MRR Share", value: "80 – 90%" },
          { label: "Median Affiliate MRR (est.)", value: crossfitMarketAnchors.medianMrr },
          { label: "Target Monthly Churn", value: "3.5 – 5.5%" },
          { label: "Autopay Adoption (top boxes)", value: "90 – 95%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue fitness businesses** in 2026 are defined by **autopay membership density** and **community stickiness**, not contract length alone. Within the **$4.8 billion** functional fitness market, **CrossFit affiliates** rank among the **top tier of recurring revenue models** — often deriving **80–90% of revenue** from monthly unlimited memberships and autopay billing. This compares to **55–70%** at general gyms and **75–90%** at yoga studios. " + crossfitMarketAnchors.communityRetentionFocus + " — making CrossFit a natural subscription business with **premium ARPU ($150–$250/mo)**.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** CrossFit members pay for **ongoing coaching and community**, not facility access — natural subscription fit amplified by class accountability.",
          "**Benchmark:** Median **" + crossfitMarketAnchors.avgMonthlyDues + "** dues and **" + crossfitMarketAnchors.avgClassOccupancy + "** class occupancy; MRR health is measured by **autopay %**, **churn**, and **failed payment recovery**.",
          "**Investor view:** High-MRR affiliates with strong retention command **premium SDE multiples (3.5×–4.2×)** — recurring revenue plus community is the primary asset.",
        ],
      },
    ],
  },
  {
    id: "crossfit-market-size",
    title: "2. The U.S. CrossFit Market: Recurring Revenue Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The functional fitness market masks a critical split: **drop-in and class-pack models** skew transactional, while **membership-forward affiliates** skew recurring. CrossFit's on-ramp culture — foundations programs, intro classes, and coach onboarding — correlates with subscription models: members paying **$185+/mo** expect ongoing programming, not transactional gym access.",
      },
      {
        type: "table",
        headers: ["Format", "Recurring Revenue %", "Primary Billing Model", "Churn Profile"],
        rows: [
          ["CrossFit Affiliate (membership-forward)", "80 – 90%", "Autopay unlimited", "3.5 – 5.5% monthly"],
          ["Class Pack / Drop-In Box", "50 – 65%", "Prepaid bundles", "6 – 9% monthly"],
          ["General Gym (comparison)", "55 – 70%", "Month-to-month dues", "3 – 5% monthly"],
          ["Personal Training Studio", "55 – 75%", "Session packages", "5 – 10% monthly"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue stability:** While new affiliate openings have slowed, **MRR per box is rising** as operators migrate from promo-dependent acquisition toward **foundations-to-membership funnels** with **35–50% conversion** targets and **community onboarding** sequences.",
      },
    ],
  },
  {
    id: "member-demographics",
    title: "3. Member Demographics & Subscription Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue quality depends on **who** subscribes and **why** they stay. CrossFit's core demographic — **adults 25–45 with performance and wellness goals** — maintains credit cards on file and treats membership as **identity and routine**, not a discretionary gym pass. Canceling feels like leaving a tribe, not skipping a workout.",
      },
      {
        type: "bullets",
        items: [
          "**Autopay economics:** Boxes with **>92% autopay** recover **15–25% more** failed payments vs manual billing studios.",
          "**Attendance linkage:** Members attending **8–12 visits/month** renew at **2× the rate** of those below 4 visits — attendance tracking is an MRR leading indicator.",
          "**Foundations funnel:** On-ramp program graduates convert to membership at **40–55%** — the highest-quality MRR cohort.",
          "**Family plans:** Multi-member households increase MRR stickiness and reduce effective churn **20–30%**.",
        ],
      },
    ],
  },
  {
    id: "mrr-mechanics",
    title: "4. MRR Mechanics & Revenue Quality",
    blocks: [
      {
        type: "paragraph",
        text: "Not all MRR is equal. Buyers and operators distinguish **gross MRR** from **quality MRR** — autopay unlimited memberships with low churn vs. discounted promo memberships with high cancellation rates. Top CrossFit affiliates target **$72K+ monthly MRR** at **320 active members** with **<4.5% churn**.",
      },
      {
        type: "table",
        headers: ["MRR Metric", "Strong Box Benchmark", "At-Risk Signal"],
        rows: [
          ["Autopay %", "90 – 95%", "<80% manual billing"],
          ["Monthly churn", "3.5 – 4.5%", ">6% sustained"],
          ["Failed payment recovery", ">85% within 7 days", "<70% recovery"],
          ["Promo member %", "<15% of active base", ">30% on intro pricing"],
          ["Ancillary attach rate", "25 – 35% buy PT/nutrition", "<10% attach"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**MRR formula:** Active Members × Average Monthly Dues; median box: **320 × $185 ≈ $59K** membership MRR + **$13K** ancillary ≈ **$72K total MRR**.",
          "**Annualized view:** **$72K MRR × 12 = $864K** membership-weighted annual run rate before PT/nutrition seasonality.",
        ],
      },
    ],
  },
  {
    id: "business-models",
    title: "5. Subscription Models & Tier Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "**Highest recurring-revenue affiliates** optimize membership tier architecture: unlimited as the anchor, **3×/week and 2×/week** tiers for price-sensitive members, and **annual prepay** options for cash flow. Nutrition challenges and PT packages layer on without cannibalizing base MRR.",
      },
      {
        type: "table",
        headers: ["Tier", "Typical Price", "MRR Contribution", "Retention Profile"],
        rows: [
          ["Unlimited Membership", "$175 – $250/mo", "55 – 65% of MRR", "Highest LTV"],
          ["3×/Week Membership", "$140 – $185/mo", "20 – 28% of MRR", "Strong; attendance-linked"],
          ["Foundations → Unlimited", "$199 – $299 program", "Conversion pipeline", "Best 12-mo retention"],
          ["Annual Prepay", "10 – 15% discount", "Cash flow boost", "Lowest churn cohort"],
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
          "**Challenge — Economic sensitivity:** Discretionary fitness spend compresses in downturns; churn can spike **2–3 pts** without proactive retention.",
          "**Challenge — Promo dependency:** Groupon-style acquisition builds low-quality MRR with **8–12% monthly churn**.",
          "**Opportunity — Referral MRR:** **25–40% referral-sourced members** have **30–50% lower CAC** and higher tenure.",
          "**Opportunity — Failed payment recovery:** Automated dunning and coach outreach recover **$3K–$8K/mo** at median scale.",
          "**Opportunity — Nutrition subscription:** Monthly macro coaching adds **$75–$150/mo** recurring per enrolled member.",
        ],
      },
      {
        type: "paragraph",
        text: "CrossFit affiliates sit at the **intersection of premium pricing and subscription loyalty** — among the best recurring revenue profiles in boutique fitness when community retention and autopay discipline are maintained.",
      },
    ],
  },
];

import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { crossfitMarketAnchors, crossfitReportSources } from "./shared-crossfit-market-data";

export const reportMeta: ReportMeta = {
  slug: "crossfit-lowest-startup-cost-fitness-2026",
  title: "Lowest Startup Cost Fitness Businesses — CrossFit Industry Report",
  subtitle:
    "2026 U.S. fitness startup cost analysis with a CrossFit deep-dive: affiliate launch capex, equipment vs lease tradeoffs, capital efficiency at scale, and where CrossFit ranks among coached fitness formats.",
  description:
    "CrossFit affiliate startup costs in 2026: $100K–$350K launch range, equipment buildout benchmarks, capital efficiency vs gyms and reformer studios, and break-even member targets.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/crossfit-gym/reports/crossfit-lowest-startup-cost-fitness-2026/",
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
          { label: "CrossFit Affiliate Launch Range", value: "$100K – $350K" },
          { label: "Equipment & Rig Buildout", value: "$50K – $150K" },
          { label: "Full-Service Gym (comparison)", value: "$250K – $600K" },
          { label: "Break-Even Members (typical)", value: "80 – 120" },
        ],
      },
      {
        type: "paragraph",
        text: "**Lowest startup cost fitness businesses** in 2026 cluster in **boutique and studio formats** — but CrossFit occupies a **middle capital tier**, not the absolute lowest. Within the **$4.8 billion** functional fitness market, CrossFit affiliates launch at **$100K–$350K** — materially **less than full-service gyms ($250K–$600K)** yet **more than mat yoga ($50K–$150K)** or solo personal training ($40K–$120K). The CrossFit capital thesis is **efficiency at maturity**: **$950K median revenue** on **$150K–$250K typical launch** delivers **strong payback (3–5 years)** when coach productivity and retention targets are met.",
      },
      {
        type: "bullets",
        items: [
          "**Capital thesis:** CrossFit achieves **gym-competitive revenue at 40–60% of full-service gym capex** — with higher margin per member.",
          "**Industry context:** Break-even at **80–120 members** vs **350–500** for mid-tier gyms — faster path to cash-flow positive.",
          "**Honest ranking:** CrossFit is **not** the lowest startup cost format; it is among the **best capital-efficiency ratios** in coached fitness.",
        ],
      },
    ],
  },
  {
    id: "crossfit-market-size",
    title: "2. CrossFit Startup Costs vs. Fitness Formats",
    blocks: [
      {
        type: "paragraph",
        text: "Startup cost rankings must distinguish **absolute capex** from **revenue per dollar invested**. CrossFit ranks mid-pack on launch cost but **top-quartile on capital efficiency** — revenue generated per startup dollar within **24–36 months** of opening.",
      },
      {
        type: "table",
        headers: ["Format", "Typical Launch Cost", "Median Year-3 Revenue", "Capital Efficiency"],
        rows: [
          ["Solo Personal Training", "$40K – $120K", "$250K – $450K", "High (low capex)"],
          ["Yoga / Mat Studio", "$50K – $150K", "$400K – $650K", "Very high"],
          ["CrossFit Affiliate", "$100K – $350K", "$600K – $950K", "High"],
          ["Pilates Reformer Studio", "$80K – $250K", "$500K – $850K", "High"],
          ["Full-Service Gym", "$250K – $600K", "$800K – $1.5M", "Moderate"],
          ["Swim School", "$150K – $500K", "$600K – $950K", "Moderate"],
        ],
      },
      {
        type: "paragraph",
        text: "**CrossFit positioning:** Not the cheapest to open, but among the **fastest to meaningful revenue** when community and coach quality drive **140–200 member** milestones within **18–24 months**.",
      },
    ],
  },
  {
    id: "capex-breakdown",
    title: "3. CrossFit Affiliate Capex Breakdown",
    blocks: [
      {
        type: "paragraph",
        text: "Typical CrossFit affiliate launch allocates **35% to equipment/rig**, **25% to lease/buildout**, **20% to marketing**, and **20% to working capital**. Equipment-heavy buildouts (competition rigs, multiple platforms, extensive barbell inventory) push toward **$350K**; lean urban boxes with used equipment can open near **$100K–$150K**.",
      },
      {
        type: "table",
        headers: ["Category", "% of Launch Budget", "Typical Range", "Notes"],
        rows: [
          ["Equipment & Rig Buildout", "35%", "$50K – $150K", "Barbells, plates, rigs, rowers, bikes"],
          ["Lease & Buildout", "25%", "$30K – $90K", "Deposit, flooring, HVAC, bathrooms"],
          ["Marketing Launch", "20%", "$15K – $50K", "Founding member presale, intro offers"],
          ["Working Capital", "20%", "$20K – $60K", "3–6 months operating reserve"],
          ["Affiliate & Software Fees", "Included above", "$4K – $8K/yr", "Ongoing; not one-time capex"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Financing options:** Equipment leasing and SBA loans reduce upfront cash; **$30K–$50K** owner equity may suffice with financing.",
          "**Used equipment:** Secondary market barbells and rigs can cut equipment capex **30–40%** — common for first-time operators.",
          "**Over-build risk:** The #1 capital mistake is **oversized buildout before member proof** — start lean, expand equipment with revenue.",
        ],
      },
    ],
  },
  {
    id: "break-even-economics",
    title: "4. Break-Even & Payback Economics",
    blocks: [
      {
        type: "paragraph",
        text: "CrossFit affiliates typically break even between **80–120 active members** at **$185/mo average dues** plus ancillary revenue. At **$28K monthly fixed costs** and **~50% contribution margin**, break-even revenue is **~$56K/mo** — achievable at **100 members** with **$210/mo blended ARPU**.",
      },
      {
        type: "bullets",
        items: [
          "**Months to break-even:** **14–22 months** for well-executed launches; **24–36 months** in competitive or high-rent markets.",
          "**Payback period:** **3–5 years** on **$150K–$250K** invested capital at median profitability.",
          "**Comparison:** Full-service gyms often require **18–30 months** to break-even with **2–3× the startup capital**.",
          "**Presale strategy:** Founding member campaigns targeting **40–60 members pre-open** can accelerate break-even by **6–9 months**.",
        ],
      },
    ],
  },
  {
    id: "capital-efficiency",
    title: "5. Capital Efficiency Strategies",
    blocks: [
      {
        type: "paragraph",
        text: "Operators optimizing **startup cost vs. revenue** focus on **minimum viable box** — adequate equipment for **8–12 classes/day**, strong coach hire, and community programming before facility expansion. Revenue per dollar of capex exceeds **$4–$6×** by year three at successful affiliates.",
      },
      {
        type: "table",
        headers: ["Strategy", "Capex Savings", "Revenue Impact", "Risk"],
        rows: [
          ["Used equipment / phased buy", "30 – 40%", "Minimal if quality maintained", "Low"],
          ["Smaller footprint (2,500–4,000 sq ft)", "20 – 35%", "Caps class capacity", "Moderate"],
          ["Owner-coach model (year 1)", "15 – 25% payroll", "Limits scale speed", "Low short-term"],
          ["Presale founding members", "Reduces working capital need", "Accelerates MRR ramp", "Low"],
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
          "**Challenge — Equipment expectations:** Members expect quality rigs and barbells; cutting too deep on equipment hurts retention.",
          "**Challenge — Lease guarantees:** Personal lease guarantees on **$8K–$15K/mo rent** increase effective startup risk.",
          "**Opportunity — Lean launch:** **$100K–$150K** openings are viable in secondary markets with presale traction.",
          "**Opportunity — Revenue/capex ratio:** **$950K revenue on $200K launch** = **4.75× capital efficiency** — top-tier in fitness.",
          "**Opportunity — Second-location economics:** Proven box cash-flow funds location two with **reduced marketing capex**.",
        ],
      },
      {
        type: "paragraph",
        text: "CrossFit is not the **lowest-cost fitness business to start** — but it offers **best-in-class capital efficiency** among formats capable of **$750K–$1M+ revenue** at single-location scale.",
      },
    ],
  },
];

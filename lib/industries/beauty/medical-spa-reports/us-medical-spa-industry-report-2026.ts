import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { medicalSpaMarketAnchors, medicalSpaReportSources } from "./shared-medical-spa-market-data";

export const reportMeta: ReportMeta = {
  slug: "us-medical-spa-industry-report-2026",
  title: "U.S. Medical Spa Industry Report 2026",
  subtitle:
    "A comprehensive market analysis of the $18+ billion U.S. medical spa industry: market size and segmentation, consumer behavior, competitive landscape, operational challenges, and the 2026–2034 outlook.",
  description:
    "2026 U.S. medical spa industry report: $18B+ market size, injectable and laser segmentation, membership revenue trends, competitive landscape, profitability strategies, and 2026–2034 growth outlook.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "9 min",
  href: "/industries/beauty/medical-spa/reports/us-medical-spa-industry-report-2026/",
  sources: medicalSpaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Market Size", value: medicalSpaMarketAnchors.industryMarketSize },
          { label: "Median Practice Revenue", value: medicalSpaMarketAnchors.medianAnnualRevenue },
          { label: "Median Net Margin", value: medicalSpaMarketAnchors.medianNetMargin },
          { label: "Projected CAGR (2026–2034)", value: medicalSpaMarketAnchors.projectedCagr },
        ],
      },
      {
        type: "paragraph",
        text: "The **U.S. medical spa industry** is one of the fastest-growing segments in beauty and personal care — an **$18+ billion** market defined by high-ticket injectables, device-driven laser revenue, and cash-pay membership models. In 2026, growth is being driven by **Botox and filler adoption**, **laser hair removal and body contouring**, and **membership programs** that lock in recurring injectable cadence. Independents still dominate by count, but national aesthetic brands and franchise concepts are consolidating in select markets.",
      },
      {
        type: "paragraph",
        text: "Operators face a dual challenge: **capital intensity** (devices, buildout, medical director fees) and **clinical staffing** (RN, NP, PA injectors). The med spas winning in 2026 pair **membership revenue (25–45% of gross)** with **provider productivity** and **treatment room utilization above 55%**, pushing net margins into the **15–30%** healthy range and EBITDA toward **18–28%**.",
      },
      {
        type: "bullets",
        items: [
          "**Market thesis:** A high-growth, high-ticket category expanding at **8–12% annually** through 2034.",
          "**Revenue mix:** **40–55% injectables**, **20–30% laser**, with body contouring and medical-grade skincare the fastest-growing add-ons.",
          "**Profit lever:** Membership plans + injectable volume are the two highest-ROI moves for nearly every med spa.",
          "**Structural risk:** Medical director compliance and device financing, not demand, are the primary constraints on growth.",
        ],
      },
    ],
  },
  {
    id: "market-size-segmentation",
    title: "2. Market Size and Segmentation",
    blocks: [
      {
        type: "paragraph",
        text: "The industry spans **11,000+ medical spas** nationwide, the vast majority single-location practices. Median independent med spa revenue lands at **$600K–$2.5M**, with average treatment values near **$400** and net margins of **15–30%**. Revenue concentrates in injectables and laser, with body contouring and medical-grade facials carrying the highest growth rates.",
      },
      {
        type: "table",
        headers: ["Service Category", "Share of Revenue", "Trajectory", "Margin Profile"],
        rows: [
          ["Injectables (Botox, Fillers)", "40 – 55%", "Stable core", "High ticket, consumable COGS"],
          ["Laser & IPL", "20 – 30%", "Growing", "Device ROI, package revenue"],
          ["Body Contouring", "10 – 18%", "Fast growing", "Premium ticket, device-heavy"],
          ["Medical-Grade Facials", "8 – 12%", "Growing", "Entry point, upsell funnel"],
          ["Membership & Retail", "25 – 45% (target)", "Under-monetized", "Highest recurring margin"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Fragmentation:** No single company controls national share; the market is a long tail of independents and small regional groups.",
          "**Format spread:** Single-injector boutiques, multi-provider med spas, and med-spa-with-retail concepts operate on different capital and labor models.",
          "**Geographic spread:** Affluent suburban and urban markets command the highest tickets; secondary markets trade ticket for lower rent and competition.",
          "**Membership opportunity:** Most med spas under-monetize recurring membership revenue, leaving predictable cash flow on the table.",
        ],
      },
    ],
  },
  {
    id: "consumer-trends",
    title: "3. Consumer Behavior & Emerging Trends",
    blocks: [
      {
        type: "paragraph",
        text: "2026 consumers treat aesthetic treatments as **routine maintenance**, not occasional luxury. Three trends are reshaping demand: the **mainstreaming of injectables**, rising appetite for **combination treatment packages**, and elevated expectations for **clinical credibility and transparent pricing**.",
      },
      {
        type: "bullets",
        items: [
          "**Injectable normalization:** Botox and fillers are increasingly viewed as preventive maintenance, with clients starting in their late 20s and 30s.",
          "**Package & membership adoption:** Prepaid injectable memberships and laser series smooth cash flow and lock in **3–4 month** rebooking cadence.",
          "**Social proof:** Before/after content, influencer partnerships, and online reviews are primary discovery channels — digital marketing ROI matters enormously.",
          "**Male grooming:** Men's injectable and laser demand is growing faster than the overall market, expanding the addressable client base.",
          "**Combination treatments:** Clients expect bundled consults (e.g., Botox + filler + skincare) that raise ticket without adding acquisition cost.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical implication: med spas that **package injectables with laser and skincare** and **enroll clients in memberships at the first visit** are lifting average tickets and LTV faster than those competing on single-service price alone.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "4. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The competitive field splits into **independents** (the majority), **national aesthetic brands** with standardized protocols, and **dermatology/plastic surgery practices** adding med spa arms. Competition is intensifying as dermatologists, dentists, and wellness clinics enter the injectable space.",
      },
      {
        type: "table",
        headers: ["Segment", "Who Competes", "Basis of Competition"],
        rows: [
          ["Independent Med Spa", "Owner-operators, small groups", "Provider skill, membership, local brand"],
          ["National Aesthetic Brand", "Franchise and corporate chains", "Brand trust, marketing scale, protocols"],
          ["Derm / Plastic Surgery Add-on", "Specialist practices", "Clinical credibility, cross-referral"],
          ["Wellness Clinic Hybrid", "IV, chiropractic, med spa combos", "Bundled wellness, lower ticket entry"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Independent edge:** Pricing flexibility, provider relationships, and ability to specialize in high-margin injectable menus.",
          "**Brand edge:** National marketing, standardized training, and consumer trust accelerate new-location ramp.",
          "**Specialist edge:** Dermatology and plastic surgery practices cross-refer surgical and medical patients into aesthetic services.",
          "**Differentiation:** In a crowded market, membership programs, provider retention, and clinical outcomes matter more than raw scale.",
        ],
      },
    ],
  },
  {
    id: "operational-challenges",
    title: "5. Operational Challenges & Profitability Strategies",
    blocks: [
      {
        type: "paragraph",
        text: "Profitability pressure in 2026 is driven by **device financing**, **injectable COGS**, and **clinical staffing costs**. Payroll and clinical labor consume **30–40% of revenue**, while injectable product costs add another **12–18%**, so utilization and membership revenue are critical to margin.",
      },
      {
        type: "bullets",
        items: [
          "**Medical director compliance:** State regulations require a licensed medical director — a fixed cost and operational dependency.",
          "**Provider retention:** Hiring and retaining skilled injectors is the top challenge; competitive compensation and CE support improve retention.",
          "**Device ROI:** Laser and body-contouring devices require high utilization to justify lease payments — target **55–75%** room occupancy.",
          "**Membership enrollment:** Converting first-time clients to membership plans is the fastest path to recurring revenue and predictable cash flow.",
          "**Marketing discipline:** Track cost per lead and ROI — healthy med spas achieve **3×–6×** marketing return.",
        ],
      },
      {
        type: "table",
        headers: ["Lever", "2026 Benchmark / Target", "Profit Impact"],
        rows: [
          ["Membership revenue", "25 – 45% of gross", "Stabilizes cash flow"],
          ["Rebooking rate", "55 – 72%", "Drives injectable cadence"],
          ["Payroll % of revenue", "30 – 40%", "Largest cost lever"],
          ["Room utilization", "55 – 75%", "Direct driver of device ROI"],
          ["Average treatment", `~${medicalSpaMarketAnchors.averageTreatment}`, "Package mix lifts margin"],
        ],
      },
      {
        type: "paragraph",
        text: "Benchmark your own numbers with the [medical spa profit margin calculator](/calculators/medical-spa-profit-margin/) and the [treatment room utilization calculator](/calculators/medical-spa-treatment-room-utilization/).",
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook (2026–2034)",
    blocks: [
      {
        type: "paragraph",
        text: "The long-term outlook is **strong growth of 8–12% annually** through 2034, supported by aging demographics, injectable mainstreaming, and expanding male grooming demand. Medical spas are increasingly viewed as essential self-care, not discretionary luxury.",
      },
      {
        type: "bullets",
        items: [
          "**Injectable expansion:** Botox, filler, and biostimulator demand continues to grow across all adult demographics.",
          "**Device innovation:** New laser, RF, and body-contouring technologies expand treatable conditions and ticket ceilings.",
          "**Membership mainstreaming:** Recurring revenue models become table stakes, not a premium offering.",
          "**Consolidation:** Private equity and regional roll-ups accelerate as the market matures.",
          "**Regulatory evolution:** State medical board oversight will favor compliant operators with proper medical director structures.",
        ],
      },
      {
        type: "paragraph",
        text: "**Bottom line:** The winners over the next decade will be operators who build **membership revenue**, **retain top injectors**, and **maximize device utilization** while maintaining clinical compliance. Compare models with the [medical spa vs dermatology practice analysis](/comparisons/medical-spa-vs-dermatology-practice/) and explore benchmarks on the [medical spa hub](/industries/beauty/medical-spa/).",
      },
    ],
  },
];

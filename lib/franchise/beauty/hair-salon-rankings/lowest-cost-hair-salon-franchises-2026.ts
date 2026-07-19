import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  brandEconomics as b,
  franchiseAnchors,
  franchiseRankingSources,
  guideLinks,
} from "./shared-hair-salon-franchise-data";

export const reportMeta: ReportMeta = {
  slug: "lowest-cost-hair-salon-franchises-2026",
  title: "Lowest Cost Hair Salon Franchises 2026",
  subtitle:
    "Cheapest salon franchise opportunities ranked by total startup investment — franchise fee, buildout, equipment, and working capital.",
  description:
    "Lowest cost hair salon franchises in 2026: compare cheapest salon franchise startup costs, franchise fees under $50K, and total investment ranges. Find salon franchises under $200K–$300K.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/franchise/beauty/hair-salon/rankings/lowest-cost-hair-salon-franchises-2026/",
  sources: franchiseRankingSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary — Cheapest Hair Salon Franchises",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Lowest Typical Band", value: `${b.costCutters.investment}` },
          { label: "Franchise Fee Range", value: franchiseAnchors.franchiseFee },
          { label: "Median Salon Franchise Investment", value: franchiseAnchors.investmentMedian },
          { label: "Working Capital Cupboard", value: "$20K – $50K" },
        ],
      },
      {
        type: "paragraph",
        text: "Buyers searching for the **lowest cost hair salon franchise**, **cheapest salon franchise**, or a **hair salon franchise under $200K/$250K** should separate the **franchise fee** from **total investment**. The fee is often **$20K–$50K**, but leasehold improvements, salon build-out, and working capital drive most of the check. Value-cut concepts such as **Cost Cutters** and **Great Clips** usually post the most accessible **Item 7** bands; premium blow-dry bars (Drybar, Blo) sit meaningfully higher and are poor fits for capital-constrained first-time buyers.",
      },
      {
        type: "bullets",
        items: [
          "**Search intent covered:** *lowest cost hair salon franchises*, *cheapest salon franchise to open*, *salon franchise startup cost*.",
          "**Consultant warning:** Underwriting only the franchise fee is the #1 CapEx mistake — model **TI + equipment + 3–6 months working capital**.",
          "**Rule of thumb:** Preserve **liquidity buffer** above the FDD low estimate; landlord delays and slow ramps are normal.",
        ],
      },
    ],
  },
  {
    id: "ranking-table",
    title: "2. Lowest Cost Hair Salon Franchises Ranked by Investment",
    blocks: [
      {
        type: "table",
        headers: ["Rank", "Franchise", "Total Investment", "Franchise Fee", "Relative CapEx", "Capital Notes"],
        rows: [
          ["1", b.costCutters.name, b.costCutters.investment, b.costCutters.fee, "Lowest national band", "Often best entry for tight capital"],
          ["2", b.greatClips.name, b.greatClips.investment, b.greatClips.fee, "Low–mid", "Fee accessible; plaza TI still dominates"],
          ["3", b.fantasticSams.name, b.fantasticSams.investment, b.fantasticSams.fee, "Low–mid", "Full-service build can raise mid-point"],
          ["4", b.supercuts.name, b.supercuts.investment, b.supercuts.fee, "Mid", "Site class drives total more than fee"],
          ["5", b.regis.name, b.regis.investment, b.regis.fee, "Mid", "Mall formats can inflate CapEx"],
          ["6", b.sportClips.name, b.sportClips.investment, b.sportClips.fee, "Mid–high", "Sports-themed build costs more"],
          ["7", b.blo.name, b.blo.investment, b.blo.fee, "High", "Specialty finish & urban rents"],
          ["8", b.drybar.name, b.drybar.investment, b.drybar.fee, "Highest", "Premium concept CapEx"],
        ],
      },
      {
        type: "paragraph",
        text: "**Taking the “cheapest” brand is not always cheapest in your market.** A value-cut brand in a high-TI shopping center can exceed a mid-tier brand with generous landlord contribution. Always rebuild Item 7 with **local GC estimates**.",
      },
    ],
  },
  {
    id: "cost-breakdown",
    title: "3. What Drives Salon Franchise Startup Cost",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Franchise fee (≈10–15% of total):** Entrance ticket — rarely the bulk of cash needed.",
          "**Leasehold improvements / build-out (often 40%+):** Plumbing, electrical, finishes, and brand-required layouts.",
          "**Equipment & furniture:** Stations, chairs, dryers, reception — scale with chair count.",
          "**Working capital:** Cash to cover payroll and rent during the **12–24 month** ramp.",
          "**Opening marketing & tech:** Grand-opening spend, POS, and booking stack.",
          "**Soft costs:** Training travel, deposits, licenses, and professional fees.",
        ],
      },
      {
        type: "paragraph",
        text: `Review the full line-item view on the [startup cost breakdown](${guideLinks.startup}) and stress-test numbers in the [startup cost calculator](${guideLinks.startupCalc}).`,
      },
    ],
  },
  {
    id: "buyer-playbook",
    title: "4. How to Buy a Low-Cost Salon Franchise Without Getting Undercapitalized",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Target liquidity:** Keep reserves beyond the FDD low — many lenders want skin-in-the-game above the franchise fee alone.",
          "**Negotiate TI:** Landlord contribution is the highest-ROI “financing” you will find.",
          "**Prefer value-cut systems** if searching *salon franchise under 250k* with limited partners.",
          "**Run break-even early:** [Break-even calculator](/calculators/hair-salon-break-even/) including royalty load.",
          "**Related ranking:** [Best franchise for first-time owners](/franchise/beauty/hair-salon/rankings/best-franchise-for-first-time-owners-2026/) — low CapEx still needs training support.",
          "**Balanced shortlist:** [Best hair salon franchises 2026](/franchise/beauty/hair-salon/rankings/best-hair-salon-franchises-2026/).",
        ],
      },
    ],
  },
  {
    id: "faq",
    title: "5. FAQ — Lowest Cost Salon Franchises",
    blocks: [
      {
        type: "bullets",
        items: [
          "**What is the cheapest hair salon franchise?** Among major brands, **Cost Cutters** and entry-tier **Great Clips** builds often sit at the low end of national investment ranges.",
          "**Can I open a salon franchise for under $150K?** Possible at the FDD low in select markets, but many real projects land **$180K–$300K+** once TI and working capital are included.",
          "**Is a cheaper franchise more profitable?** Not necessarily — lower CapEx helps **ROI and payback**, but weak sites still underperform higher CapEx brands in strong locations.",
        ],
      },
    ],
  },
];

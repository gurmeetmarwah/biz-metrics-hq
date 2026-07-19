import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { nailSalonMarketAnchors, nailSalonReportSources } from "./shared-nail-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "us-nail-salon-industry-report-2026",
  title: "U.S. Nail Salon Industry Report 2026",
  subtitle:
    "A comprehensive market analysis of the $15+ billion U.S. nail salon industry: market size and segmentation, consumer behavior, competitive landscape, operational challenges, and the 2026–2034 outlook.",
  description:
    "2026 U.S. nail salon industry report: $15B+ market size, service segmentation (gel/dip growth, nail art upsells), hygiene and ventilation standards, competitive landscape, profitability strategies, and 2026–2034 growth outlook.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "9 min",
  href: "/industries/beauty/nail-salon/reports/us-nail-salon-industry-report-2026/",
  sources: nailSalonReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Market Size", value: nailSalonMarketAnchors.industryMarketSize },
          { label: "Median Salon Revenue", value: nailSalonMarketAnchors.medianAnnualRevenue },
          { label: "Median Net Margin", value: nailSalonMarketAnchors.medianNetMargin },
          { label: "Projected CAGR (2026–2034)", value: nailSalonMarketAnchors.projectedCagr },
        ],
      },
      {
        type: "paragraph",
        text: "The **U.S. nail salon industry** is a large, highly fragmented **$15+ billion** market built on high-frequency repeat visits and fast service turnover. In 2026, growth is being driven by **gel and dip powder adoption**, rising demand for **nail art and extensions**, and stricter **hygiene and ventilation standards** that are reshaping buildout requirements. Independents still dominate by establishment count, but retail-anchored chains and salon-suite formats are expanding access points for both owners and technicians.",
      },
      {
        type: "paragraph",
        text: "Operators face familiar beauty-industry pressures: **payroll** consumes **42–50% of revenue**, rent and supply costs are rising with inflation, and **licensed technician availability** remains the binding constraint on growth. The salons winning in 2026 pair **2–4 week rebooking systems** with **gel and art upsells** that lift average tickets toward the **$45** median and push net margins into the **10–17%** healthy range.",
      },
      {
        type: "bullets",
        items: [
          "**Market thesis:** A resilient, high-frequency category growing at a steady **3–5% annually** through 2034.",
          "**Revenue mix:** **55% manicure/pedicure**, **28% gel/dip**, with acrylic, extensions, and nail art the fastest-growing ticket drivers.",
          "**Profit lever:** Rebooking cadence + gel/art upsells are the two highest-ROI moves available to nearly every nail salon.",
          "**Structural risk:** Technician staffing and ventilation compliance, not demand, are the primary growth constraints.",
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
        text: "The industry spans **56,000+ nail salons** nationwide, the vast majority single-location small businesses. Median independent salon revenue lands at **$200K–$450K**, with average tickets near **$45** and net margins of **10–17%**. Revenue concentrates in core manicure and pedicure services, with gel, dip, and nail art carrying the highest growth rates and margin upside.",
      },
      {
        type: "table",
        headers: ["Service Category", "Share of Revenue", "Trajectory", "Margin Profile"],
        rows: [
          ["Manicure & Pedicure", "55%", "Stable core", "High volume, moderate ticket"],
          ["Gel & Dip Powder", "28%", "Fast growing", "Higher ticket, moderate supply cost"],
          ["Acrylic & Extensions", "12%", "Growing", "Premium ticket, specialist labor"],
          ["Nail Art & Add-ons", "5%", "Fastest growing", "Highest incremental margin"],
          ["Retail Products", "3 – 7% (target)", "Under-monetized", "Strong gross margin line"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Fragmentation:** No single company controls meaningful national share of full-service nail salons; the market is a long tail of independents and small groups.",
          "**Format spread:** Walk-in/quick-service, full-service neighborhood salons, and premium nail bars operate on different ticket and labor models.",
          "**Geographic spread:** Metro salons see higher walk-in volume but pay materially higher rent; suburban salons trade volume for lower overhead.",
          "**Add-on opportunity:** Most salons capture below-target retail attachment, leaving high-margin polish and care product revenue on the table.",
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
        text: "2026 consumers treat nail care as a **routine self-care habit**, not an occasional luxury. Three trends are reshaping demand: the shift from basic polish to **long-wear gel and dip**, rising appetite for **nail art and customization**, and elevated expectations for **cleanliness, ventilation, and single-use tools**.",
      },
      {
        type: "bullets",
        items: [
          "**Gel & dip adoption:** Consumers are trading up from basic manicures to **gel, dip powder, and builder gel** — lifting average tickets and visit value without adding chair time proportionally.",
          "**Nail art & personalization:** **Custom art, chrome, and 3D embellishments** are moving from niche to mainstream, especially among younger demographics and social-media-driven discovery.",
          "**Hygiene expectations:** Post-pandemic standards for **ventilation, sanitation, and visible cleanliness** are now baseline requirements, not differentiators.",
          "**Digital booking:** Online scheduling, waitlists, and automated rebooking reminders are standard expectations; salons without digital booking lose share to competitors.",
          "**Membership & packages:** Prepaid visit packages and loyalty programs smooth cash flow and lock in the **2–4 week** rebooking cadence.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical implication: salons that **train technicians on gel and art upsells** and **automate rebooking before the client leaves** are lifting average tickets and utilization faster than salons competing on basic manicure price alone.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "4. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The competitive field splits into **independents** (the majority by volume), **retail-anchored chains** that capture walk-in traffic, and **salon-suite operators** that host booth-rent technicians. No national brand dominates full-service nail care the way quick-cut franchises dominate hair — competition is intensely local.",
      },
      {
        type: "table",
        headers: ["Segment", "Who Competes", "Basis of Competition"],
        rows: [
          ["Neighborhood Independent", "Family-owned salons, small groups", "Price, relationships, walk-in convenience"],
          ["Retail-Anchored Chain", "Regal Nails, regional mall/plaza operators", "Foot traffic, convenience, brand trust"],
          ["Premium Nail Bar", "Boutique nail studios, urban concepts", "Experience, art, premium pricing"],
          ["Salon Suite / Booth-Rent", "Suite operators hosting independent techs", "Technician independence, low overhead"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Independent edge:** Full pricing freedom, local relationships, and ability to specialize in gel, art, or luxury services.",
          "**Chain edge:** Built-in foot traffic from retail anchors reduces marketing cost and accelerates ramp.",
          "**Rising model:** **Salon-suite / booth-rent** formats pull experienced technicians out of commission salons, intensifying talent competition.",
          "**Differentiation:** In a fragmented market, rebooking systems, art specialization, and hygiene reputation matter more than raw scale.",
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
        text: "Profitability pressure in 2026 is driven by **payroll cost**, **supply inflation**, and **technician turnover**. Payroll and commissions already consume **42–50% of revenue**, so small changes in wages, rent, or station utilization swing the bottom line materially.",
      },
      {
        type: "bullets",
        items: [
          "**Technician staffing:** Hiring and retaining licensed nail technicians is the top operational challenge; competitive commission splits and flexible schedules improve retention.",
          "**Ventilation compliance:** Proper ventilation for acrylic and gel services adds buildout cost but is increasingly required — a fixed cost that favors established operators.",
          "**Rebooking discipline:** Salons that rebook clients every **2–4 weeks** before they leave lift utilization toward the **65–82%** target and stabilize cash flow.",
          "**Gel & art upsells:** Moving clients from basic manicure to gel or nail art is the fastest path to higher average tickets without adding stations.",
          "**No-show management:** Deposit policies and waitlists protect booked station hours, the true unit of production.",
        ],
      },
      {
        type: "table",
        headers: ["Lever", "2026 Benchmark / Target", "Profit Impact"],
        rows: [
          ["Rebooking rate", "50 – 68%", "Stabilizes utilization & revenue"],
          ["Retail attachment", "3 – 7% of gross", "Adds highest-margin revenue"],
          ["Payroll % of revenue", "42 – 50%", "Largest single cost lever"],
          ["Station utilization", "65 – 82%", "Direct driver of net margin"],
          ["Average ticket", `~${nailSalonMarketAnchors.averageTicket}`, "Gel/art mix lifts margin"],
        ],
      },
      {
        type: "paragraph",
        text: "Benchmark your own numbers against these targets with the [nail salon profit margin calculator](/calculators/nail-salon-profit-margin/) and the [station utilization calculator](/calculators/nail-salon-station-utilization/).",
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook (2026–2034)",
    blocks: [
      {
        type: "paragraph",
        text: "The long-term outlook is **steady, positive growth of roughly 3–5% annually** through 2034, supported by the high-frequency nature of nail care and broad demographic participation. Nail services are increasingly viewed as routine maintenance rather than discretionary spending, underpinning category resilience.",
      },
      {
        type: "bullets",
        items: [
          "**Gel & dip expansion:** Long-wear services continue displacing basic polish, lifting industry average tickets.",
          "**Nail art mainstreaming:** Custom art and premium finishes expand the addressable ticket ceiling, especially in urban markets.",
          "**Multi-service growth:** Nail salons adding **waxing, lash, or brow** services grow ticket and utilization without proportional rent increases.",
          "**Tech leverage:** Automated rebooking, digital marketing, and POS analytics improve margins for early adopters.",
          "**Regulatory tightening:** Ventilation, sanitation, and licensing standards will favor compliant operators over time.",
        ],
      },
      {
        type: "paragraph",
        text: "**Bottom line:** The winners over the next decade will be operators who defend margin through **rebooking discipline, gel/art upsells, and utilization management** while leaning into **premium nail art** and **multi-service expansion**. Compare models with the [nail salon vs lash studio analysis](/comparisons/nail-salon-vs-lash-studio/) and explore benchmarks on the [nail salon hub](/industries/beauty/nail-salon/).",
      },
    ],
  },
];

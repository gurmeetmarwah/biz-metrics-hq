import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { hairSalonMarketAnchors, hairSalonReportSources } from "./shared-hair-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "us-hair-salon-industry-report-2026",
  title: "U.S. Hair Salon Industry Report 2026",
  subtitle:
    "A comprehensive market analysis of the $60+ billion U.S. hair salon industry: market size and segmentation, consumer behavior, competitive landscape, operational challenges, and the 2026–2034 outlook.",
  description:
    "2026 U.S. hair salon industry report: $60B+ market size, service segmentation (62% haircut/styling, 23% color), premiumization and eco-conscious trends, competitive landscape, profitability strategies, and 2026–2034 growth outlook.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "9 min",
  href: "/industries/beauty/hair-salon/reports/us-hair-salon-industry-report-2026/",
  sources: hairSalonReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Market Size", value: hairSalonMarketAnchors.industryMarketSize },
          { label: "Median Salon Revenue", value: hairSalonMarketAnchors.medianAnnualRevenue },
          { label: "Median Net Margin", value: hairSalonMarketAnchors.medianNetMargin },
          { label: "Projected CAGR (2026–2034)", value: hairSalonMarketAnchors.projectedCagr },
        ],
      },
      {
        type: "paragraph",
        text: "The **U.S. hair salon industry** is a mature but resilient **$60+ billion** market defined by extreme fragmentation, service-driven revenue, and steadily rising consumer spend on personal appearance. In 2026, growth is being reshaped by the **premiumization** of services, demand for **clean and sustainable products**, and rapid **digital integration** across booking, guest acquisition, and in-chair experience. Independents still dominate by establishment count, but national franchises continue to consolidate the value-cut and quick-service segment.",
      },
      {
        type: "paragraph",
        text: "Operators face a genuine profitability squeeze: **inflation** in rent and product costs, plus a persistent **licensed-cosmetologist shortage**, are compressing margins that already run a modest **8–15% net**. The salons winning in 2026 are those that pair **disciplined pricing** with **recurring pre-booking systems** and a healthy **retail-to-service ratio** (targeting 10–15% of gross revenue from product sales).",
      },
      {
        type: "bullets",
        items: [
          "**Market thesis:** A large, fragmented, recession-resistant category growing at a steady **3–5% annually** through 2034.",
          "**Revenue mix:** **62% haircut/styling**, **23% color**, with extensions, treatments, and scalp-wellness services the fastest-growing add-ons.",
          "**Profit lever:** Recurring pre-booking + retail attachment are the two highest-ROI moves available to nearly every salon.",
          "**Structural risk:** Staffing scarcity and inflation, not demand, are the binding constraints on growth.",
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
        text: "The industry spans **800,000+ salons and barbershops**, the vast majority of them single-location small businesses. Median independent salon revenue lands at **$250K–$500K**, with average tickets near **$65** and net margins of **8–15%**. Revenue concentrates in a handful of core services, with color and specialty treatments carrying the highest ticket value.",
      },
      {
        type: "table",
        headers: ["Service Category", "Share of Revenue", "Trajectory", "Margin Profile"],
        rows: [
          ["Haircut & Styling", "62%", "Stable core", "Fast turnover, moderate ticket"],
          ["Hair Coloring", "23%", "Growing", "High ticket, higher product cost"],
          ["Extensions & Add-ons", "8 – 10%", "Fastest growing", "Premium ticket, specialist labor"],
          ["Treatments & Scalp Care", "3 – 5%", "Fast growing (wellness)", "High margin, low product cost"],
          ["Retail Products", "10 – 15% (target)", "Under-monetized", "Highest gross margin line"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Fragmentation:** No single company controls meaningful national share of full-service salons; the market is a long tail of independents.",
          "**Format spread:** Value/quick-cut, mid-market full-service, and premium/luxury salons operate on very different ticket and labor models.",
          "**Geographic spread:** Metro salons command higher tickets but pay materially higher rent; suburban and small-market salons trade ticket for lower overhead.",
          "**Under-monetized retail:** Most salons capture well below the **10–15%** retail-to-service target, leaving high-margin revenue on the table.",
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
        text: "2026 consumers treat the salon as a **wellness and self-care destination**, not just a grooming stop. Three trends are reshaping demand: the **premiumization** of services, **eco-conscious** product expectations, and **digital-first** discovery and booking.",
      },
      {
        type: "bullets",
        items: [
          "**Premiumization:** Consumers are trading up to **clinically proven treatments**, **specialized/custom color**, and **scalp spa therapies** — searches for scalp and wellness services are up significantly year over year.",
          "**Eco-conscious demand:** Strong preference for **sustainable, clean, and organic** hair products; transparent sourcing is now a loyalty driver, not a niche.",
          "**Digital integration:** **AI-based scalp analysis**, **VR/AR try-ons**, and **online booking** are moving from novelty to expectation; social media is now the primary guest-acquisition channel.",
          "**Experience economy:** Ambiance, personalization, and membership perks increasingly influence salon choice as much as price.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical implication: salons that **package premium services** (e.g., color + bond treatment + scalp therapy) and **market them digitally** are lifting average tickets faster than salons competing on base haircut price. Clean-product lines double as a retail attachment engine and a brand-differentiation story.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "4. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The competitive field splits into **independents** (the majority by volume) and **franchise networks** that dominate the value and quick-service tiers. Franchise giants such as **Great Clips** and **Sport Clips** hold significant market share in the standardized-cut segment, competing on convenience, brand trust, and app-based booking rather than premium service.",
      },
      {
        type: "table",
        headers: ["Segment", "Who Competes", "Basis of Competition"],
        rows: [
          ["Value / Quick-Cut", "Great Clips, Sport Clips, regional chains", "Speed, price, brand, app booking"],
          ["Mid-Market Full-Service", "Independents, small local groups", "Stylist relationships, color, retail"],
          ["Premium / Luxury", "Boutique salons, salon-spas", "Experience, specialists, premium pricing"],
          ["Booth-Rent / Suite", "Salon suite operators (e.g., Sola-style)", "Stylist independence, low overhead"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Franchise edge:** National marketing, standardized operations, and app-driven traffic accelerate ramp — at the cost of **6–12% royalty/ad fees**.",
          "**Independent edge:** Full creative and pricing freedom, higher tickets, and stronger retail margins with no royalties.",
          "**Rising model:** **Salon-suite / booth-rent** formats are pulling experienced stylists out of commission salons, intensifying the talent competition.",
          "**Differentiation:** In a fragmented market, brand, specialization, and loyalty programs matter more than raw scale for most operators.",
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
        text: "Profitability pressure in 2026 is driven less by soft demand than by **cost inflation** and **labor scarcity**. Payroll and commissions already consume **45–50% of revenue**, so small changes in wages, rent, or utilization swing the bottom line materially.",
      },
      {
        type: "bullets",
        items: [
          "**Inflation impact:** Rising rent and supply-chain costs require **strategic, incremental price increases** — the alternative is silent margin erosion.",
          "**Staffing & retention:** Hiring licensed cosmetologists and retaining apprentices remains the top operational challenge; education pathways and revenue-share models improve retention.",
          "**Recurring pre-booking:** Salons that rebook clients before they leave the chair lift utilization toward the **65–80%** target and stabilize cash flow.",
          "**Retail-to-service ratio:** Pushing product sales to **10–15% of gross revenue** adds the highest-margin dollars in the P&L.",
          "**Utilization discipline:** Data-driven scheduling and no-show policies protect chair hours, the true unit of production.",
        ],
      },
      {
        type: "table",
        headers: ["Lever", "2026 Benchmark / Target", "Profit Impact"],
        rows: [
          ["Rebooking rate", "45 – 60%", "Stabilizes utilization & revenue"],
          ["Retail attachment", "10 – 15% of gross", "Adds highest-margin revenue"],
          ["Payroll % of revenue", "45 – 50%", "Largest single cost lever"],
          ["Chair utilization", "65 – 80%", "Direct driver of net margin"],
          ["Average ticket", `~${hairSalonMarketAnchors.averageTicket}`, "Premium mix lifts margin"],
        ],
      },
      {
        type: "paragraph",
        text: "Benchmark your own numbers against these targets with the [hair salon profit margin calculator](/calculators/hair-salon-profit-margin/) and the [chair utilization calculator](/calculators/hair-salon-chair-utilization/).",
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook (2026–2034)",
    blocks: [
      {
        type: "paragraph",
        text: "The long-term outlook is **steady, positive growth of roughly 3–5% annually** through 2034, supported by structural demographic and lifestyle tailwinds rather than cyclical spikes. The category's resilience — appearance spending holds up even in downturns — underpins a stable investment thesis.",
      },
      {
        type: "bullets",
        items: [
          "**Male grooming expansion:** The men's segment continues to grow as grooming routines broaden beyond the basic cut.",
          "**Aging demographic:** An aging population drives demand for **anti-aging and hair-health** treatments and color maintenance.",
          "**Lifestyle normalization:** Regular professional hair care is increasingly viewed as routine self-care across income tiers.",
          "**Wellness convergence:** Scalp health, treatments, and clean products blur the line between salon and wellness, expanding ticket potential.",
          "**Tech leverage:** AI scheduling, personalized retail recommendations, and digital marketing improve margins for early adopters.",
        ],
      },
      {
        type: "paragraph",
        text: "**Bottom line:** The winners over the next decade will be operators who defend margin through **pricing discipline, recurring pre-booking, and retail attachment** while leaning into **premium, wellness-oriented services** and **digital guest acquisition**. Compare models with the [hair salon vs franchise salon analysis](/comparisons/hair-salon-vs-franchise-salon/) and read the [Highest Margin Beauty Businesses 2026 report](/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/) next.",
      },
    ],
  },
];

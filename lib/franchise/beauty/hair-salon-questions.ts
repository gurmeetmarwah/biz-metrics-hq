export type FranchiseQuestion = {
  slug: string;
  question: string;
  answer: string;
  href: string;
  description: string;
  keywords: readonly string[];
};

const base = "/franchise/beauty/hair-salon/questions";

export const hairSalonFranchiseQuestions: readonly FranchiseQuestion[] = [
  {
    slug: "how-much-does-a-hair-salon-franchise-cost",
    question: "How much does a hair salon franchise cost?",
    description:
      "Hair salon franchise startup cost breakdown: franchise fee, total investment, buildout, and working capital for Great Clips, Sport Clips, and other salon franchises.",
    keywords: [
      "how much does a hair salon franchise cost",
      "salon franchise startup cost",
      "hair salon franchise investment",
    ],
    href: `${base}/how-much-does-a-hair-salon-franchise-cost/`,
    answer:
      "A hair salon franchise typically costs $150,000 to $400,000 in total investment, with a median near $225,000. That figure includes the franchise fee ($20,000–$50,000), leasehold improvements, salon build-out, equipment, furniture, opening inventory, technology, and working capital. Value-cut brands such as Cost Cutters or Great Clips often sit lower; Sport Clips and premium blow-dry concepts run higher. Always verify Item 7 in the current FDD and rebuild costs with local contractor and landlord TI estimates before you buy.",
  },
  {
    slug: "how-profitable-is-a-hair-salon-franchise",
    question: "How profitable is a hair salon franchise?",
    description:
      "Hair salon franchise profit margins, net income after royalties, and what makes a salon franchise profitable in 2026.",
    keywords: [
      "how profitable is a hair salon franchise",
      "salon franchise profit margin",
      "is a hair salon franchise profitable",
    ],
    href: `${base}/how-profitable-is-a-hair-salon-franchise/`,
    answer:
      "A well-run hair salon franchise is typically profitable at a 6–12% net margin after royalties and advertising fees, with EBITDA often in the 8–16% range. Mature units generating $300,000–$700,000 in revenue can produce solid owner cash flow when labor stays near 42–48% of sales and rent near 10–15%. Profitability hinges less on brand name alone and more on location quality, chair utilization, and payroll discipline. Top operators out-earn the median by controlling labor and ramping multi-unit density.",
  },
  {
    slug: "highest-roi",
    question: "Which hair salon franchise has the highest ROI?",
    description:
      "Which hair salon franchise has the highest ROI? Compare cash-on-cash return, payback, and best ROI salon franchise options.",
    keywords: [
      "highest ROI hair salon franchise",
      "best ROI salon franchise",
      "which salon franchise has the highest return",
    ],
    href: `${base}/highest-roi/`,
    answer:
      "The highest ROI hair salon franchise is usually a strong-site value-cut or men’s specialty unit—often Great Clips or Sport Clips—where brand traffic, controlled CapEx, and high utilization compress payback into roughly three to five years. ROI is driven by cash invested versus after-royalty cash flow, not by highest revenue alone. A lower-cost Cost Cutters build can post excellent cash-on-cash returns in the right plaza, while premium concepts may show weaker ROI if build-out and rent inflate the denominator. Underwrite each site’s P&L before choosing a brand.",
  },
  {
    slug: "owner-earnings",
    question: "How much do franchise owners make?",
    description:
      "How much do hair salon franchise owners make? Owner salary, draw, and multi-unit earnings for salon franchisees.",
    keywords: [
      "how much do salon franchise owners make",
      "hair salon franchise owner salary",
      "franchisee earnings salon",
    ],
    href: `${base}/owner-earnings/`,
    answer:
      "Hair salon franchise owners typically make $45,000 to $110,000 in total owner benefit on a mature single unit, combining salary, distributions, and add-backs depending on entity structure. Multi-unit franchisees with three or more locations often earn $150,000 to $350,000 as shared management and marketing leverage improve margins. First-year owner income is usually lower during the ramp. Earnings track utilization, labor percentage, and royalty load far more than brand marketing claims—so model owner pay after the 6–12% fee stack, not before.",
  },
  {
    slug: "royalty-fees",
    question: "What are franchise royalty fees?",
    description:
      "Hair salon franchise royalty fees explained: typical royalty percentage, ad fund, and how fees affect profit margin.",
    keywords: [
      "hair salon franchise royalty fees",
      "salon franchise royalty percentage",
      "what are salon franchise royalties",
    ],
    href: `${base}/royalty-fees/`,
    answer:
      "Hair salon franchise royalty fees usually run about 6% of gross revenue, plus a 2–5% national advertising or brand fund—about 6–12% combined. Royalties are ongoing fees paid to the franchisor for brand rights, systems, and support; the ad fund buys national and regional media. These fees are the main reason franchise net margins (roughly 6–12%) trail comparable independent salons (often 8–15%). When evaluating a salon franchise opportunity, model royalties as a fixed percentage of sales from day one so break-even and owner pay stay realistic.",
  },
  {
    slug: "working-capital",
    question: "How much working capital is required?",
    description:
      "How much working capital for a hair salon franchise? Opening cash, ramp reserves, and liquidity lenders expect.",
    keywords: [
      "hair salon franchise working capital",
      "how much working capital for salon franchise",
      "salon franchise cash reserves",
    ],
    href: `${base}/working-capital/`,
    answer:
      "Most hair salon franchises require $20,000 to $50,000 of working capital inside the total investment, with many lenders wanting additional liquid reserves beyond the franchise fee. Working capital covers payroll, rent, royalties, supplies, and marketing during the 12–24 month ramp before the unit stabilizes. Undercapitalization is a leading cause of franchise stress—even when build-out comes in on budget. Plan for slower-than-forecast bookings in months one through six and keep a cash cushion so you are not forced into expensive short-term borrowing.",
  },
  {
    slug: "payback-period",
    question: "How long is the payback period?",
    description:
      "Hair salon franchise payback period: how long to recoup investment, cash-on-cash timeline, and break-even ramp.",
    keywords: [
      "hair salon franchise payback period",
      "how long to recoup salon franchise investment",
      "salon franchise break even time",
    ],
    href: `${base}/payback-period/`,
    answer:
      "The typical hair salon franchise payback period is three to five years of cumulative free cash flow returning total invested capital, assuming a solid site and mature unit economics. Break-even on monthly operations often arrives earlier—commonly within 12–24 months—while full investment recovery takes longer after royalties, debt service, and owner draws. Faster payback usually pairs lower CapEx with high visit volume (value-cut brands in strong plazas). Slow ramps, heavy TI, or soft utilization can push payback past five years, so stress-test pessimistic cases before closing.",
  },
  {
    slug: "franchise-vs-independent",
    question: "Is a franchise better than opening an independent salon?",
    description:
      "Franchise vs independent hair salon: costs, royalties, margins, brand support, and which path fits your goals.",
    keywords: [
      "franchise vs independent hair salon",
      "is a salon franchise better than independent",
      "should I buy a hair salon franchise",
    ],
    href: "/comparisons/hair-salon-vs-franchise-salon/",
    answer:
      "A hair salon franchise is better when you want faster brand recognition, proven systems, and national marketing—and you accept 6–12% royalties plus less creative freedom. An independent salon usually costs less to open ($80,000–$250,000 vs. $150,000–$400,000 for many franchises) and can deliver higher net margins (about 8–15%) without fees. Choose franchise if ramp speed and playbooks matter more than margin purity; choose independent if you have local demand, operating skill, and want full pricing control. Compare both paths with your capital, experience, and exit plan.",
  },
  {
    slug: "multi-unit-ownership",
    question: "How many salons can one franchisee own?",
    description:
      "How many hair salon franchises can one owner operate? Multi-unit salon franchise ownership, territories, and scale.",
    keywords: [
      "how many salon franchises can I own",
      "multi-unit hair salon franchise",
      "own multiple salon franchises",
    ],
    href: `${base}/multi-unit-ownership/`,
    answer:
      "One franchisee can often own multiple hair salon franchises—commonly three to ten or more units—subject to brand territory rules, development agreements, and demonstrated operating performance. Major value-cut systems actively recruit multi-unit operators because standardized ops scale cleanly across plazas. Brands may require you to stabilize the first salon before awarding additional territories. Multi-unit ownership is where owner income frequently expands to $150,000–$350,000 through shared management, recruiting, and marketing. Ask each franchisor about area development rights and minimum opening schedules before you commit.",
  },
  {
    slug: "average-ebitda",
    question: "What is the average EBITDA?",
    description:
      "Average EBITDA for a hair salon franchise: typical EBITDA margin, cash flow, and how it differs from net profit.",
    keywords: [
      "average EBITDA hair salon franchise",
      "salon franchise EBITDA margin",
      "franchise salon cash flow EBITDA",
    ],
    href: `${base}/average-ebitda/`,
    answer:
      "Average EBITDA for a mature hair salon franchise typically falls around 8–16% of revenue, depending on rent, labor, and the royalty plus ad-fund stack. On a $450,000 revenue unit, that implies roughly $36,000 to $72,000 of EBITDA before debt service and discretionary owner add-backs. EBITDA is useful for valuation and lender underwriting because it normalizes interest, taxes, depreciation, and amortization. Franchise buyers should still convert EBITDA to true owner cash flow after royalties and required CapEx. Weak utilization or high rent can push EBITDA below the lower end of that band.",
  },
] as const;

export const hairSalonFranchiseQuestionSlugs = hairSalonFranchiseQuestions
  .filter((q) => q.href.startsWith(base))
  .map((q) => q.slug);

export const hairSalonFranchiseQuestionsBySlug: Record<string, FranchiseQuestion> =
  Object.fromEntries(
    hairSalonFranchiseQuestions
      .filter((q) => q.href.startsWith(base))
      .map((q) => [q.slug, q]),
  );

export const businessQuestionFaqs = hairSalonFranchiseQuestions.map((q) => ({
  question: q.question,
  answer: q.answer,
}));

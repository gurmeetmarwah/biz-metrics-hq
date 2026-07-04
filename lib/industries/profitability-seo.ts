export type ProfitabilitySeoInput = {
  /** e.g. "an HVAC business", "a dental practice" */
  businessPhrase: string;
  /** e.g. "HVAC companies", "dental practices" */
  companiesPhrase: string;
  /** e.g. "an HVAC company", "a dental practice" */
  profitEntityPhrase: string;
  /** e.g. "HVAC profit margin", "dental practice profit margin" */
  marginPhrase: string;
  marginRange: string;
  medianMargin: string;
  topMargin: string;
  grossMargin?: string;
  medianRevenue: string;
  profitRange: string;
  medianProfit: string;
  /** Short cost-control cue, e.g. "payroll and maintenance mix stay in range" */
  costDriver: string;
};

export type ProfitabilitySeoContent = {
  lead: string;
  sections: readonly { heading: string; answer: string }[];
  takeaways: readonly { label: string; value: string; note: string }[];
  faqs: readonly { question: string; answer: string }[];
  sectionTitle: string;
  sectionSubtitle: string;
  faqSectionTitle: string;
};

export function buildProfitabilitySeo(input: ProfitabilitySeoInput): ProfitabilitySeoContent {
  const howQ = `How profitable is ${input.businessPhrase}?`;
  const marginQ = `What is the average ${input.marginPhrase}?`;
  const areQ = `Are ${input.companiesPhrase} profitable?`;
  const profitQ = `How much profit does ${input.profitEntityPhrase} make?`;

  const gross = input.grossMargin ? ` Gross margin usually ${input.grossMargin}.` : "";

  const sections = [
    {
      heading: howQ,
      answer: `${howQ} Typically ${input.marginRange} net margin (median ~${input.medianMargin}). Top operators reach ${input.topMargin}.`,
    },
    {
      heading: marginQ,
      answer: `${marginQ} About ${input.medianMargin} net; healthy range ${input.marginRange}.${gross}`,
    },
    {
      heading: areQ,
      answer: `${areQ} Yes, when ${input.costDriver}. Below-range margins usually signal cost drift.`,
    },
    {
      heading: profitQ,
      answer: `${profitQ} About ${input.profitRange} a year at median ${input.medianRevenue} revenue (~${input.medianProfit} at ${input.medianMargin} net).`,
    },
  ] as const;

  const faqs = [
    {
      question: howQ,
      answer: `Typically ${input.marginRange} net margin (median ~${input.medianMargin}). Top operators reach ${input.topMargin}.`,
    },
    {
      question: marginQ,
      answer: `About ${input.medianMargin} net; healthy range ${input.marginRange}.${gross}`,
    },
    {
      question: areQ,
      answer: `Yes — when ${input.costDriver}. Thin margins usually signal cost drift.`,
    },
    {
      question: profitQ,
      answer: `About ${input.profitRange} a year at median ${input.medianRevenue} revenue (~${input.medianProfit} at ${input.medianMargin} net).`,
    },
  ] as const;

  return {
    lead: `${areQ} Yes — healthy operators keep ${input.marginRange} net profit, median ~${input.medianMargin}.`,
    sections,
    takeaways: [
      {
        label: `Average ${input.marginPhrase}`,
        value: `${input.marginRange} net`,
        note: `Median ~${input.medianMargin}`,
      },
      {
        label: "Typical annual profit",
        value: input.profitRange,
        note: `At ${input.medianRevenue} revenue`,
      },
      {
        label: "Top-quartile profitability",
        value: `${input.topMargin} net`,
        note: "Strong operators",
      },
    ],
    faqs,
    sectionTitle: howQ.replace(/\?$/, "").replace(/^./, (c) => c.toUpperCase()) + "?",
    sectionSubtitle: `${marginQ.replace(/\?$/, "")} — and ${profitQ.toLowerCase()}`,
    faqSectionTitle: `${input.companiesPhrase.charAt(0).toUpperCase()}${input.companiesPhrase.slice(1)} Profitability FAQs`,
  };
}

/** Merge profitability FAQs first; drop older FAQs with the same question. */
export function mergeProfitabilityFaqs<T extends { question: string; answer: string }>(
  profitabilityFaqs: readonly T[],
  existingFaqs: readonly T[],
): T[] {
  const questions = new Set(profitabilityFaqs.map((f) => f.question.toLowerCase()));
  return [
    ...profitabilityFaqs,
    ...existingFaqs.filter((f) => !questions.has(f.question.toLowerCase())),
  ];
}

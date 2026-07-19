export type FranchiseGuideKpi = {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  href: string;
  accent: string;
};

export type FranchiseGuideBrand = {
  label: string;
  slug: string;
  href: string;
  investment: string;
  franchiseFee: string;
  royalty: string;
  units: string;
  bestFor: string;
};

export type FranchiseGuideBestCard = {
  title: string;
  brand: string;
  detail: string;
};

export type FranchiseGuideBenchmarkRow = { metric: string; value: string };

export type FranchiseGuideStartupItem = { item: string; range: string; percent: string };

export type FranchiseGuideCalculator = {
  label: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export type FranchiseGuideLinkCard = {
  label: string;
  description?: string;
  href?: string;
  comingSoon?: boolean;
};

export type FranchiseGuideVsRow = {
  factor: string;
  franchise: string;
  independent: string;
};

export type FranchiseGuideFaq = { question: string; answer: string };

export type FranchiseGuideCta = { label: string; href: string; primary: boolean };

export type BeautyFranchiseGuideData = {
  meta: {
    slug: string;
    categoryLabel: string;
    shortName: string;
    title: string;
    subtitle: string;
    dataVintage: string;
    sampleSize: string;
    kpiDashboardTitle: string;
    kpiDashboardSubtitle: string;
    overviewTitle: string;
    overviewSubtitle: string;
    compareTitle: string;
    compareSubtitle: string;
    economicsSubtitle: string;
    economicsPanelSubtitle: string;
    startupSubtitle: string;
    startupPanelSubtitle: string;
    calculatorsSubtitle: string;
    rankingsSubtitle: string;
    prosConsTitle: string;
    prosConsSubtitle: string;
    shouldBuyHref?: string;
    shouldBuyBlurb: string;
    questionsSubtitle: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
  };
  heroCtas: readonly FranchiseGuideCta[];
  executiveKpis: readonly FranchiseGuideKpi[];
  sectionNav: readonly { id: string; label: string }[];
  whichIsBestCards: readonly FranchiseGuideBestCard[];
  franchiseBrands: readonly FranchiseGuideBrand[];
  economicsRows: readonly FranchiseGuideBenchmarkRow[];
  startupCostBreakdown: readonly FranchiseGuideStartupItem[];
  startupCostTotal: { low: string; median: string; high: string };
  franchiseCalculators: readonly FranchiseGuideCalculator[];
  franchiseRankings: readonly FranchiseGuideLinkCard[];
  franchiseVsIndependent: readonly FranchiseGuideVsRow[];
  businessQuestionFaqs: readonly FranchiseGuideFaq[];
  relatedFranchiseIndustries: readonly FranchiseGuideLinkCard[];
  franchiseFaqs: readonly FranchiseGuideFaq[];
};

export type BusinessScorecardRating = 1 | 2 | 3 | 4 | 5;

export type BusinessScorecardItem = {
  label: string;
  rating: BusinessScorecardRating;
  /** When true, filled stars reflect level of difficulty (more stars = harder). */
  higherIsWorse?: boolean;
};

export type BusinessScorecard = {
  industryName: string;
  items: readonly BusinessScorecardItem[];
};

export const STANDARD_SCORECARD_LABELS = [
  "Profitability",
  "Scalability",
  "Startup Difficulty",
  "Recurring Revenue",
  "Recession Resistance",
] as const;

import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as bestMeta,
  reportSections as bestSections,
} from "./best-hair-salon-franchises-2026";
import {
  reportMeta as lowestCostMeta,
  reportSections as lowestCostSections,
} from "./lowest-cost-hair-salon-franchises-2026";
import {
  reportMeta as highestRevenueMeta,
  reportSections as highestRevenueSections,
} from "./highest-revenue-hair-salon-franchises-2026";
import {
  reportMeta as fastestGrowingMeta,
  reportSections as fastestGrowingSections,
} from "./fastest-growing-hair-salon-franchises-2026";
import {
  reportMeta as firstTimeMeta,
  reportSections as firstTimeSections,
} from "./best-franchise-for-first-time-owners-2026";
import {
  reportMeta as mostProfitableMeta,
  reportSections as mostProfitableSections,
} from "./most-profitable-hair-salon-franchises-2026";

export type HairSalonFranchiseRanking = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const hairSalonFranchiseRankings: Record<string, HairSalonFranchiseRanking> = {
  [bestMeta.slug]: { meta: bestMeta, sections: bestSections },
  [lowestCostMeta.slug]: { meta: lowestCostMeta, sections: lowestCostSections },
  [highestRevenueMeta.slug]: { meta: highestRevenueMeta, sections: highestRevenueSections },
  [fastestGrowingMeta.slug]: { meta: fastestGrowingMeta, sections: fastestGrowingSections },
  [firstTimeMeta.slug]: { meta: firstTimeMeta, sections: firstTimeSections },
  [mostProfitableMeta.slug]: { meta: mostProfitableMeta, sections: mostProfitableSections },
};

export const hairSalonFranchiseRankingSlugs = Object.keys(hairSalonFranchiseRankings);

export const hairSalonFranchiseRankingCards = hairSalonFranchiseRankingSlugs.map((slug) => {
  const { meta } = hairSalonFranchiseRankings[slug];
  return {
    label: meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});

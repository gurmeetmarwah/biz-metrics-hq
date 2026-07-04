import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./ice-cream-highest-margin-food-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./ice-cream-lowest-startup-cost-food-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./ice-cream-highest-valued-food-2026";
import {
  reportMeta as seasonalMeta,
  reportSections as seasonalSections,
} from "./ice-cream-best-seasonal-food-2026";
import {
  reportMeta as franchiseMeta,
  reportSections as franchiseSections,
} from "./ice-cream-best-franchise-food-2026";

export type FoodReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const foodReports: Record<string, FoodReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [seasonalMeta.slug]: { meta: seasonalMeta, sections: seasonalSections },
  [franchiseMeta.slug]: { meta: franchiseMeta, sections: franchiseSections },
};

export const foodReportSlugs = Object.keys(foodReports);

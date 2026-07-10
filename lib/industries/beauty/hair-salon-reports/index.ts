import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as industryReportMeta,
  reportSections as industryReportSections,
} from "./us-hair-salon-industry-report-2026";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./highest-margin-beauty-businesses-2026";
import {
  reportMeta as growthMeta,
  reportSections as growthSections,
} from "./fastest-growing-beauty-businesses-2026";
import {
  reportMeta as pricingMeta,
  reportSections as pricingSections,
} from "./salon-pricing-trends-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./best-recurring-revenue-beauty-businesses-2026";

export type HairSalonReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const hairSalonReports: Record<string, HairSalonReport> = {
  [industryReportMeta.slug]: { meta: industryReportMeta, sections: industryReportSections },
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [growthMeta.slug]: { meta: growthMeta, sections: growthSections },
  [pricingMeta.slug]: { meta: pricingMeta, sections: pricingSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
};

export const hairSalonReportSlugs = Object.keys(hairSalonReports);

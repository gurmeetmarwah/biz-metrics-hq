import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./pool-service-highest-margin-home-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./pool-service-best-recurring-revenue-home-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./pool-service-lowest-startup-cost-home-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./pool-service-highest-valued-home-2026";
import {
  reportMeta as growthMeta,
  reportSections as growthSections,
} from "./pool-service-fastest-growing-home-2026";

export type HomeReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const homeReports: Record<string, HomeReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [growthMeta.slug]: { meta: growthMeta, sections: growthSections },
};

export const homeReportSlugs = Object.keys(homeReports);

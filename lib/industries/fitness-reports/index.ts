import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./highest-margin-fitness-businesses-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./highest-valued-fitness-businesses-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./best-recurring-revenue-fitness-businesses-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./lowest-startup-cost-fitness-businesses-2026";

export type FitnessReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const fitnessReports: Record<string, FitnessReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
};

export const fitnessReportSlugs = Object.keys(fitnessReports);

export const fitnessBenchmarkInsights = [
  {
    title: marginMeta.title,
    description: marginMeta.subtitle,
    href: marginMeta.href,
    badge: "Margin Rankings",
    readTime: marginMeta.readTime,
  },
  {
    title: valuedMeta.title,
    description: valuedMeta.subtitle,
    href: valuedMeta.href,
    badge: "Valuation Rankings",
    readTime: valuedMeta.readTime,
  },
  {
    title: recurringMeta.title,
    description: recurringMeta.subtitle,
    href: recurringMeta.href,
    badge: "Recurring Revenue",
    readTime: recurringMeta.readTime,
  },
  {
    title: startupMeta.title,
    description: startupMeta.subtitle,
    href: startupMeta.href,
    badge: "Startup Cost",
    readTime: startupMeta.readTime,
  },
] as const;

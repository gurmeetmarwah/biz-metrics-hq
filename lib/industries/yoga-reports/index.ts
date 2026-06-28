import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./yoga-highest-margin-fitness-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./yoga-highest-valued-fitness-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./yoga-best-recurring-revenue-fitness-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./yoga-lowest-startup-cost-fitness-2026";

export type YogaReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const yogaReports: Record<string, YogaReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
};

export const yogaReportSlugs = Object.keys(yogaReports);

export const yogaBenchmarkInsights = [
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

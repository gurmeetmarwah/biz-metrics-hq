import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./martial-arts-highest-margin-fitness-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./martial-arts-highest-valued-fitness-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./martial-arts-best-recurring-revenue-fitness-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./martial-arts-lowest-startup-cost-fitness-2026";
import {
  reportMeta as childrenMeta,
  reportSections as childrenSections,
} from "./martial-arts-best-childrens-activity-businesses-2026";

export type MartialArtsReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const martialArtsReports: Record<string, MartialArtsReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
  [childrenMeta.slug]: { meta: childrenMeta, sections: childrenSections },
};

export const martialArtsReportSlugs = Object.keys(martialArtsReports);

export const martialArtsBenchmarkInsights = [
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
  {
    title: childrenMeta.title,
    description: childrenMeta.subtitle,
    href: childrenMeta.href,
    badge: "Children's Activity",
    readTime: childrenMeta.readTime,
  },
] as const;

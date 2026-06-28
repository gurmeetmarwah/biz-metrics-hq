import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./crossfit-highest-margin-fitness-2026";
import {
  reportMeta as valuedMeta,
  reportSections as valuedSections,
} from "./crossfit-highest-valued-fitness-2026";
import {
  reportMeta as recurringMeta,
  reportSections as recurringSections,
} from "./crossfit-best-recurring-revenue-fitness-2026";
import {
  reportMeta as startupMeta,
  reportSections as startupSections,
} from "./crossfit-lowest-startup-cost-fitness-2026";
import {
  reportMeta as growthMeta,
  reportSections as growthSections,
} from "./crossfit-fastest-growing-fitness-2026";

export type CrossfitReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const crossfitReports: Record<string, CrossfitReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [valuedMeta.slug]: { meta: valuedMeta, sections: valuedSections },
  [recurringMeta.slug]: { meta: recurringMeta, sections: recurringSections },
  [startupMeta.slug]: { meta: startupMeta, sections: startupSections },
  [growthMeta.slug]: { meta: growthMeta, sections: growthSections },
};

export const crossfitReportSlugs = Object.keys(crossfitReports);

export const crossfitBenchmarkInsights = [
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
    title: growthMeta.title,
    description: growthMeta.subtitle,
    href: growthMeta.href,
    badge: "Growth Rankings",
    readTime: growthMeta.readTime,
  },
] as const;

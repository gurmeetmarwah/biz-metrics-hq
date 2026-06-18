import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as revenueMeta,
  reportSections as revenueSections,
} from "./revenue-report-2026";
import {
  reportMeta as ebitdaMeta,
  reportSections as ebitdaSections,
} from "./ebitda-margin-report-2026";
import {
  reportMeta as ownerMeta,
  reportSections as ownerSections,
} from "./owner-compensation-report-2026";
import {
  reportMeta as valuationMeta,
  reportSections as valuationSections,
} from "./valuation-report-2026";
import {
  reportMeta as patientMeta,
  reportSections as patientSections,
} from "./patient-economics-report-2026";

export type DentalReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const dentalReports: Record<string, DentalReport> = {
  [revenueMeta.slug]: { meta: revenueMeta, sections: revenueSections },
  [ebitdaMeta.slug]: { meta: ebitdaMeta, sections: ebitdaSections },
  [ownerMeta.slug]: { meta: ownerMeta, sections: ownerSections },
  [valuationMeta.slug]: { meta: valuationMeta, sections: valuationSections },
  [patientMeta.slug]: { meta: patientMeta, sections: patientSections },
};

export const dentalReportSlugs = Object.keys(dentalReports);

export const industryInsights = [
  {
    title: revenueMeta.title,
    href: `${revenueMeta.href}#executive-summary`,
    metric: "$1.8M median collections",
  },
  {
    title: ebitdaMeta.title,
    href: `${ebitdaMeta.href}#executive-summary`,
    metric: "18–30% EBITDA range",
  },
  {
    title: ownerMeta.title,
    href: `${ownerMeta.href}#executive-summary`,
    metric: "$285K median comp",
  },
  {
    title: valuationMeta.title,
    href: `${valuationMeta.href}#executive-summary`,
    metric: "3.8x SDE median",
  },
  {
    title: patientMeta.title,
    href: `${patientMeta.href}#executive-summary`,
    metric: "1,200–1,800 active patients",
  },
] as const;

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
  reportMeta as therapistProductivityMeta,
  reportSections as therapistProductivitySections,
} from "./therapist-productivity-report-2026";

export type PhysicalTherapyReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const physicalTherapyReports: Record<string, PhysicalTherapyReport> = {
  [revenueMeta.slug]: { meta: revenueMeta, sections: revenueSections },
  [ebitdaMeta.slug]: { meta: ebitdaMeta, sections: ebitdaSections },
  [ownerMeta.slug]: { meta: ownerMeta, sections: ownerSections },
  [valuationMeta.slug]: { meta: valuationMeta, sections: valuationSections },
  [therapistProductivityMeta.slug]: {
    meta: therapistProductivityMeta,
    sections: therapistProductivitySections,
  },
};

export const physicalTherapyReportSlugs = Object.keys(physicalTherapyReports);

export const industryInsights = [
  {
    title: revenueMeta.title,
    href: `${revenueMeta.href}#executive-summary`,
    metric: "Median $850K · range $500K–$1.5M",
  },
  {
    title: ebitdaMeta.title,
    href: `${ebitdaMeta.href}#executive-summary`,
    metric: "Healthy range 18–28% · median ~23%",
  },
  {
    title: ownerMeta.title,
    href: `${ownerMeta.href}#executive-summary`,
    metric: "Median $165K · range $100K–$220K",
  },
  {
    title: valuationMeta.title,
    href: `${valuationMeta.href}#executive-summary`,
    metric: "2.5×–4.0× SDE · median 3.2×",
  },
  {
    title: therapistProductivityMeta.title,
    href: `${therapistProductivityMeta.href}#executive-summary`,
    metric: "12–18 visits/day · 72–88% utilization",
  },
] as const;

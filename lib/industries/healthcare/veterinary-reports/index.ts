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
  reportMeta as clientEconomicsMeta,
  reportSections as clientEconomicsSections,
} from "./client-economics-report-2026";

export type VeterinaryReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const veterinaryReports: Record<string, VeterinaryReport> = {
  [revenueMeta.slug]: { meta: revenueMeta, sections: revenueSections },
  [ebitdaMeta.slug]: { meta: ebitdaMeta, sections: ebitdaSections },
  [ownerMeta.slug]: { meta: ownerMeta, sections: ownerSections },
  [valuationMeta.slug]: { meta: valuationMeta, sections: valuationSections },
  [clientEconomicsMeta.slug]: { meta: clientEconomicsMeta, sections: clientEconomicsSections },
};

export const veterinaryReportSlugs = Object.keys(veterinaryReports);

export const industryInsights = [
  {
    title: revenueMeta.title,
    href: `${revenueMeta.href}#executive-summary`,
    metric: "Median $1.2M · range $600K–$1.8M",
  },
  {
    title: ebitdaMeta.title,
    href: `${ebitdaMeta.href}#executive-summary`,
    metric: "Healthy range 15–22% · median ~19%",
  },
  {
    title: ownerMeta.title,
    href: `${ownerMeta.href}#executive-summary`,
    metric: "Median $185K · range $120K–$250K",
  },
  {
    title: valuationMeta.title,
    href: `${valuationMeta.href}#executive-summary`,
    metric: "2.8×–4.0× SDE · median 3.4×",
  },
  {
    title: clientEconomicsMeta.title,
    href: `${clientEconomicsMeta.href}#executive-summary`,
    metric: "2,000–4,500 active clients typical",
  },
] as const;

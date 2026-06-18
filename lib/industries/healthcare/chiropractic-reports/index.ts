import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as revenueMeta,
  reportSections as revenueSections,
} from "./revenue-report-2026";
import {
  reportMeta as profitMarginMeta,
  reportSections as profitMarginSections,
} from "./profit-margin-report-2026";
import {
  reportMeta as ownerMeta,
  reportSections as ownerSections,
} from "./owner-compensation-report-2026";
import {
  reportMeta as valuationMeta,
  reportSections as valuationSections,
} from "./valuation-report-2026";
import {
  reportMeta as patientEconomicsMeta,
  reportSections as patientEconomicsSections,
} from "./patient-economics-report-2026";

export type ChiropracticReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const chiropracticReports: Record<string, ChiropracticReport> = {
  [revenueMeta.slug]: { meta: revenueMeta, sections: revenueSections },
  [profitMarginMeta.slug]: { meta: profitMarginMeta, sections: profitMarginSections },
  [ownerMeta.slug]: { meta: ownerMeta, sections: ownerSections },
  [valuationMeta.slug]: { meta: valuationMeta, sections: valuationSections },
  [patientEconomicsMeta.slug]: { meta: patientEconomicsMeta, sections: patientEconomicsSections },
};

export const chiropracticReportSlugs = Object.keys(chiropracticReports);

export const industryInsights = [
  {
    title: revenueMeta.title,
    href: `${revenueMeta.href}#executive-summary`,
    metric: "Median $500K · range $300K–$800K",
  },
  {
    title: profitMarginMeta.title,
    href: `${profitMarginMeta.href}#executive-summary`,
    metric: "Healthy range 25–35% · median ~30%",
  },
  {
    title: ownerMeta.title,
    href: `${ownerMeta.href}#executive-summary`,
    metric: "Median $140K · range $80K–$200K",
  },
  {
    title: valuationMeta.title,
    href: `${valuationMeta.href}#executive-summary`,
    metric: "2.0×–3.5× SDE · median 2.8×",
  },
  {
    title: patientEconomicsMeta.title,
    href: `${patientEconomicsMeta.href}#executive-summary`,
    metric: "600–1,500 active patients typical",
  },
] as const;

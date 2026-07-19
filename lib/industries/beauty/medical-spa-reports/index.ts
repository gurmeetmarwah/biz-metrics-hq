import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as industryReportMeta,
  reportSections as industryReportSections,
} from "./us-medical-spa-industry-report-2026";
import {
  reportMeta as pricingMeta,
  reportSections as pricingSections,
} from "./medical-spa-pricing-report-2026";
import {
  reportMeta as kpiMeta,
  reportSections as kpiSections,
} from "./top-performing-medical-spa-kpis-2026";

export type MedicalSpaReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const medicalSpaReports: Record<string, MedicalSpaReport> = {
  [industryReportMeta.slug]: { meta: industryReportMeta, sections: industryReportSections },
  [pricingMeta.slug]: { meta: pricingMeta, sections: pricingSections },
  [kpiMeta.slug]: { meta: kpiMeta, sections: kpiSections },
};

export const medicalSpaReportSlugs = Object.keys(medicalSpaReports);

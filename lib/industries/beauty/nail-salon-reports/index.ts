import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as industryReportMeta,
  reportSections as industryReportSections,
} from "./us-nail-salon-industry-report-2026";

export type NailSalonReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const nailSalonReports: Record<string, NailSalonReport> = {
  [industryReportMeta.slug]: { meta: industryReportMeta, sections: industryReportSections },
};

export const nailSalonReportSlugs = Object.keys(nailSalonReports);

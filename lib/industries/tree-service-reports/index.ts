import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import {
  reportMeta as marginMeta,
  reportSections as marginSections,
} from "./tree-service-highest-margin-home-2026";
import {
  reportMeta as ticketMeta,
  reportSections as ticketSections,
} from "./tree-service-highest-ticket-home-2026";
import {
  reportMeta as recessionMeta,
  reportSections as recessionSections,
} from "./tree-service-recession-resistant-home-2026";
import {
  reportMeta as commercialMeta,
  reportSections as commercialSections,
} from "./tree-service-commercial-service-home-2026";
import {
  reportMeta as growthMeta,
  reportSections as growthSections,
} from "./tree-service-fastest-growing-outdoor-2026";

export type TreeServiceReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

export const treeServiceReports: Record<string, TreeServiceReport> = {
  [marginMeta.slug]: { meta: marginMeta, sections: marginSections },
  [ticketMeta.slug]: { meta: ticketMeta, sections: ticketSections },
  [recessionMeta.slug]: { meta: recessionMeta, sections: recessionSections },
  [commercialMeta.slug]: { meta: commercialMeta, sections: commercialSections },
  [growthMeta.slug]: { meta: growthMeta, sections: growthSections },
};

export const treeServiceReportSlugs = Object.keys(treeServiceReports);

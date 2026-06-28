import fs from "node:fs";
import path from "node:path";
import { chiropracticReportSlugs } from "@/lib/industries/healthcare/chiropractic-reports";
import { dentalReportSlugs } from "@/lib/industries/healthcare/dental-reports";
import { physicalTherapyReportSlugs } from "@/lib/industries/healthcare/physical-therapy-reports";
import { veterinaryReportSlugs } from "@/lib/industries/healthcare/veterinary-reports";

import { fitnessReportSlugs } from "@/lib/industries/fitness-reports";
import { pilatesReportSlugs } from "@/lib/industries/pilates-reports";
import { martialArtsReportSlugs } from "@/lib/industries/martial-arts-reports";
import { yogaReportSlugs } from "@/lib/industries/yoga-reports";
import { crossfitReportSlugs } from "@/lib/industries/crossfit-reports";

const APP_DIR = path.join(process.cwd(), "app");

/** Parent route segments (no leading slash) mapped to slug lists for [slug] pages. */
const DYNAMIC_SLUG_ROUTES: Record<string, readonly string[]> = {
  "industries/gym/reports": fitnessReportSlugs,
  "industries/pilates-studio/reports": pilatesReportSlugs,
  "industries/yoga-studio/reports": yogaReportSlugs,
  "industries/martial-arts-school/reports": martialArtsReportSlugs,
  "industries/crossfit-gym/reports": crossfitReportSlugs,
  "industries/healthcare/dental-practice/reports": dentalReportSlugs,
  "industries/healthcare/chiropractic-clinic/reports": chiropracticReportSlugs,
  "industries/healthcare/veterinary-clinic/reports": veterinaryReportSlugs,
  "industries/healthcare/physical-therapy-clinic/reports": physicalTherapyReportSlugs,
};

function collectPaths(dir: string, segments: string[]): string[] {
  const paths: string[] = [];
  const hasPage = fs.existsSync(path.join(dir, "page.tsx"));

  if (hasPage) {
    const last = segments.at(-1);
    if (last === "[slug]") {
      const parent = segments.slice(0, -1).join("/");
      const slugs = DYNAMIC_SLUG_ROUTES[parent];
      if (slugs) {
        for (const slug of slugs) {
          paths.push(`/${parent}/${slug}/`);
        }
      }
    } else {
      const route = segments.length === 0 ? "/" : `/${segments.join("/")}/`;
      paths.push(route);
    }
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_") || entry.name === "api") continue;
    paths.push(...collectPaths(path.join(dir, entry.name), [...segments, entry.name]));
  }

  return paths;
}

export function getAllSitemapPaths(): string[] {
  const paths = collectPaths(APP_DIR, []);
  return [...new Set(paths)].sort((a, b) => a.localeCompare(b));
}

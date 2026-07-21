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
import { foodReportSlugs } from "@/lib/industries/food-reports";
import { homeReportSlugs } from "@/lib/industries/home-reports";
import { treeServiceReportSlugs } from "@/lib/industries/tree-service-reports";
import { hairSalonReportSlugs } from "@/lib/industries/beauty/hair-salon-reports";
import { medicalSpaReportSlugs } from "@/lib/industries/beauty/medical-spa-reports";
import { nailSalonReportSlugs } from "@/lib/industries/beauty/nail-salon-reports";

import { brandSlugs as hairSalonFranchiseBrandSlugs } from "@/lib/franchise/beauty/hair-salon-franchise";
import { hairSalonFranchiseQuestionSlugs } from "@/lib/franchise/beauty/hair-salon-questions";
import { hairSalonFranchiseRankingSlugs } from "@/lib/franchise/beauty/hair-salon-rankings";
import { massageFranchiseBrandSlugs } from "@/lib/franchise/beauty/massage-franchise";
import { massageFranchiseRankingSlugs } from "@/lib/franchise/beauty/massage-rankings";
import { medicalSpaFranchiseBrandSlugs } from "@/lib/franchise/beauty/medical-spa-franchise";
import { medicalSpaFranchiseRankingSlugs } from "@/lib/franchise/beauty/medical-spa-rankings";
import { waxingFranchiseBrandSlugs } from "@/lib/franchise/beauty/waxing-franchise";
import { waxingFranchiseRankingSlugs } from "@/lib/franchise/beauty/waxing-rankings";

import { fitnessFranchiseCalculatorSlugs } from "@/lib/franchise/fitness/franchise-calculators";
import { crossfitFranchiseBrandSlugs } from "@/lib/franchise/fitness/crossfit-franchise";
import { crossfitFranchiseRankingSlugs } from "@/lib/franchise/fitness/crossfit-rankings";
import { gymFranchiseBrandSlugs } from "@/lib/franchise/fitness/gym-franchise";
import { gymFranchiseRankingSlugs } from "@/lib/franchise/fitness/gym-rankings";
import { pilatesFranchiseBrandSlugs } from "@/lib/franchise/fitness/pilates-franchise";
import { pilatesFranchiseRankingSlugs } from "@/lib/franchise/fitness/pilates-rankings";
import { swimSchoolFranchiseBrandSlugs } from "@/lib/franchise/fitness/swim-school-franchise";
import { swimSchoolFranchiseRankingSlugs } from "@/lib/franchise/fitness/swim-school-rankings";
import { yogaFranchiseBrandSlugs } from "@/lib/franchise/fitness/yoga-franchise";
import { yogaFranchiseRankingSlugs } from "@/lib/franchise/fitness/yoga-rankings";

import { cleaningFranchiseBrandSlugs } from "@/lib/franchise/home-services/cleaning-franchise";
import { cleaningFranchiseRankingSlugs } from "@/lib/franchise/home-services/cleaning-rankings";
import { hvacFranchiseBrandSlugs } from "@/lib/franchise/home-services/hvac-franchise";
import { hvacFranchiseRankingSlugs } from "@/lib/franchise/home-services/hvac-rankings";
import { pestControlFranchiseBrandSlugs } from "@/lib/franchise/home-services/pest-control-franchise";
import { pestControlFranchiseRankingSlugs } from "@/lib/franchise/home-services/pest-control-rankings";
import { plumbingFranchiseBrandSlugs } from "@/lib/franchise/home-services/plumbing-franchise";
import { plumbingFranchiseRankingSlugs } from "@/lib/franchise/home-services/plumbing-rankings";

const APP_DIR = path.join(process.cwd(), "app");

/** Short URL aliases — canonical routes live under /comparisons/. */
const EXCLUDED_ROUTE_SEGMENTS = new Set(["compare"]);

/** Parent route segments (no leading slash) mapped to slug lists for [slug] pages. */
const DYNAMIC_SLUG_ROUTES: Record<string, readonly string[]> = {
  "industries/gym/reports": fitnessReportSlugs,
  "industries/pilates-studio/reports": pilatesReportSlugs,
  "industries/yoga-studio/reports": yogaReportSlugs,
  "industries/martial-arts-school/reports": martialArtsReportSlugs,
  "industries/crossfit-gym/reports": crossfitReportSlugs,
  "industries/ice-cream-shop/reports": foodReportSlugs,
  "industries/pool-service/reports": homeReportSlugs,
  "industries/tree-service/reports": treeServiceReportSlugs,
  "industries/healthcare/dental-practice/reports": dentalReportSlugs,
  "industries/healthcare/chiropractic-clinic/reports": chiropracticReportSlugs,
  "industries/healthcare/veterinary-clinic/reports": veterinaryReportSlugs,
  "industries/healthcare/physical-therapy-clinic/reports": physicalTherapyReportSlugs,
  "industries/beauty/hair-salon/reports": hairSalonReportSlugs,
  "industries/beauty/medical-spa/reports": medicalSpaReportSlugs,
  "industries/beauty/nail-salon/reports": nailSalonReportSlugs,

  "franchise/beauty/hair-salon/brands": hairSalonFranchiseBrandSlugs,
  "franchise/beauty/hair-salon/rankings": hairSalonFranchiseRankingSlugs,
  "franchise/beauty/hair-salon/questions": hairSalonFranchiseQuestionSlugs,
  "franchise/beauty/massage/brands": massageFranchiseBrandSlugs,
  "franchise/beauty/massage/rankings": massageFranchiseRankingSlugs,
  "franchise/beauty/medical-spa/brands": medicalSpaFranchiseBrandSlugs,
  "franchise/beauty/medical-spa/rankings": medicalSpaFranchiseRankingSlugs,
  "franchise/beauty/waxing/brands": waxingFranchiseBrandSlugs,
  "franchise/beauty/waxing/rankings": waxingFranchiseRankingSlugs,

  "franchise/fitness/crossfit/brands": crossfitFranchiseBrandSlugs,
  "franchise/fitness/crossfit/rankings": crossfitFranchiseRankingSlugs,
  "franchise/fitness/crossfit/calculators": fitnessFranchiseCalculatorSlugs,
  "franchise/fitness/gym/brands": gymFranchiseBrandSlugs,
  "franchise/fitness/gym/rankings": gymFranchiseRankingSlugs,
  "franchise/fitness/gym/calculators": fitnessFranchiseCalculatorSlugs,
  "franchise/fitness/pilates/brands": pilatesFranchiseBrandSlugs,
  "franchise/fitness/pilates/rankings": pilatesFranchiseRankingSlugs,
  "franchise/fitness/pilates/calculators": fitnessFranchiseCalculatorSlugs,
  "franchise/fitness/swim-school/brands": swimSchoolFranchiseBrandSlugs,
  "franchise/fitness/swim-school/rankings": swimSchoolFranchiseRankingSlugs,
  "franchise/fitness/swim-school/calculators": fitnessFranchiseCalculatorSlugs,
  "franchise/fitness/yoga/brands": yogaFranchiseBrandSlugs,
  "franchise/fitness/yoga/rankings": yogaFranchiseRankingSlugs,
  "franchise/fitness/yoga/calculators": fitnessFranchiseCalculatorSlugs,

  "franchise/home-services/cleaning/brands": cleaningFranchiseBrandSlugs,
  "franchise/home-services/cleaning/rankings": cleaningFranchiseRankingSlugs,
  "franchise/home-services/hvac/brands": hvacFranchiseBrandSlugs,
  "franchise/home-services/hvac/rankings": hvacFranchiseRankingSlugs,
  "franchise/home-services/pest-control/brands": pestControlFranchiseBrandSlugs,
  "franchise/home-services/pest-control/rankings": pestControlFranchiseRankingSlugs,
  "franchise/home-services/plumbing/brands": plumbingFranchiseBrandSlugs,
  "franchise/home-services/plumbing/rankings": plumbingFranchiseRankingSlugs,
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
    if (EXCLUDED_ROUTE_SEGMENTS.has(entry.name)) continue;
    paths.push(...collectPaths(path.join(dir, entry.name), [...segments, entry.name]));
  }

  return paths;
}

export function getAllSitemapPaths(): string[] {
  const paths = collectPaths(APP_DIR, []);
  return [...new Set(paths)].sort((a, b) => a.localeCompare(b));
}

import type { BeautyDecisionConfig } from "./beauty-comparison-types";
import {
  decisionToolCopy as barbershopCopy,
  getRecommendation as getBarbershopRecommendation,
} from "./hair-salon-vs-barbershop";
import {
  decisionToolCopy as nailSalonCopy,
  getRecommendation as getNailSalonRecommendation,
} from "./hair-salon-vs-nail-salon";
import {
  decisionToolCopy as daySpaCopy,
  getRecommendation as getDaySpaRecommendation,
} from "./hair-salon-vs-day-spa";
import {
  decisionToolCopy as medicalSpaCopy,
  getRecommendation as getMedicalSpaRecommendation,
} from "./hair-salon-vs-medical-spa";
import {
  decisionToolCopy as franchiseSalonCopy,
  getRecommendation as getFranchiseSalonRecommendation,
} from "./hair-salon-vs-franchise-salon";
import {
  decisionToolCopy as mobileSalonCopy,
  getRecommendation as getMobileSalonRecommendation,
} from "./hair-salon-vs-mobile-salon";

const configs: Record<string, BeautyDecisionConfig> = {
  "hair-salon-vs-barbershop": {
    leftLabel: "Hair Salon",
    rightLabel: "Barbershop",
    leftCopy: barbershopCopy.left,
    rightCopy: barbershopCopy.right,
    getRecommendation: getBarbershopRecommendation,
  },
  "hair-salon-vs-nail-salon": {
    leftLabel: "Hair Salon",
    rightLabel: "Nail Salon",
    leftCopy: nailSalonCopy.left,
    rightCopy: nailSalonCopy.right,
    getRecommendation: getNailSalonRecommendation,
  },
  "hair-salon-vs-day-spa": {
    leftLabel: "Hair Salon",
    rightLabel: "Day Spa",
    leftCopy: daySpaCopy.left,
    rightCopy: daySpaCopy.right,
    getRecommendation: getDaySpaRecommendation,
  },
  "hair-salon-vs-medical-spa": {
    leftLabel: "Hair Salon",
    rightLabel: "Medical Spa",
    leftCopy: medicalSpaCopy.left,
    rightCopy: medicalSpaCopy.right,
    getRecommendation: getMedicalSpaRecommendation,
  },
  "hair-salon-vs-franchise-salon": {
    leftLabel: "Independent Hair Salon",
    rightLabel: "Franchise Salon",
    leftCopy: franchiseSalonCopy.left,
    rightCopy: franchiseSalonCopy.right,
    getRecommendation: getFranchiseSalonRecommendation,
  },
  "hair-salon-vs-mobile-salon": {
    leftLabel: "Hair Salon",
    rightLabel: "Mobile Salon",
    leftCopy: mobileSalonCopy.left,
    rightCopy: mobileSalonCopy.right,
    getRecommendation: getMobileSalonRecommendation,
  },
};

export function getBeautyDecisionConfig(slug: string): BeautyDecisionConfig {
  const config = configs[slug];
  if (!config) {
    throw new Error(`Unknown beauty comparison slug: ${slug}`);
  }
  return config;
}

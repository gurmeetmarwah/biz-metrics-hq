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
import {
  decisionToolCopy as nailBarbershopCopy,
  getRecommendation as getNailBarbershopRecommendation,
} from "./nail-salon-vs-barbershop";
import {
  decisionToolCopy as nailDaySpaCopy,
  getRecommendation as getNailDaySpaRecommendation,
} from "./nail-salon-vs-day-spa";
import {
  decisionToolCopy as nailHairSalonCopy,
  getRecommendation as getNailHairSalonRecommendation,
} from "./nail-salon-vs-hair-salon";
import {
  decisionToolCopy as nailLashStudioCopy,
  getRecommendation as getNailLashStudioRecommendation,
} from "./nail-salon-vs-lash-studio";
import {
  decisionToolCopy as nailMedicalSpaCopy,
  getRecommendation as getNailMedicalSpaRecommendation,
} from "./nail-salon-vs-medical-spa";
import {
  decisionToolCopy as nailWaxingSalonCopy,
  getRecommendation as getNailWaxingSalonRecommendation,
} from "./nail-salon-vs-waxing-salon";
import {
  decisionToolCopy as medSpaDaySpaCopy,
  getRecommendation as getMedSpaDaySpaRecommendation,
} from "./medical-spa-vs-day-spa";
import {
  decisionToolCopy as medSpaDentalCopy,
  getRecommendation as getMedSpaDentalRecommendation,
} from "./medical-spa-vs-dental-practice";
import {
  decisionToolCopy as medSpaDermCopy,
  getRecommendation as getMedSpaDermRecommendation,
} from "./medical-spa-vs-dermatology-practice";
import {
  decisionToolCopy as medSpaHairSalonCopy,
  getRecommendation as getMedSpaHairSalonRecommendation,
} from "./medical-spa-vs-hair-salon";
import {
  decisionToolCopy as medSpaPlasticCopy,
  getRecommendation as getMedSpaPlasticRecommendation,
} from "./medical-spa-vs-plastic-surgery-clinic";
import {
  decisionToolCopy as medSpaWellnessCopy,
  getRecommendation as getMedSpaWellnessRecommendation,
} from "./medical-spa-vs-wellness-clinic";
import {
  decisionToolCopy as daySpaMassageCopy,
  getRecommendation as getDaySpaMassageRecommendation,
} from "./day-spa-vs-massage-spa";
import {
  decisionToolCopy as daySpaWellnessCopy,
  getRecommendation as getDaySpaWellnessRecommendation,
} from "./day-spa-vs-wellness-clinic";
import {
  decisionToolCopy as daySpaFacialCopy,
  getRecommendation as getDaySpaFacialRecommendation,
} from "./day-spa-vs-facial-studio";

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
  "nail-salon-vs-hair-salon": {
    leftLabel: "Nail Salon",
    rightLabel: "Hair Salon",
    leftCopy: nailHairSalonCopy.left,
    rightCopy: nailHairSalonCopy.right,
    getRecommendation: getNailHairSalonRecommendation,
  },
  "nail-salon-vs-lash-studio": {
    leftLabel: "Nail Salon",
    rightLabel: "Lash Studio",
    leftCopy: nailLashStudioCopy.left,
    rightCopy: nailLashStudioCopy.right,
    getRecommendation: getNailLashStudioRecommendation,
  },
  "nail-salon-vs-day-spa": {
    leftLabel: "Nail Salon",
    rightLabel: "Day Spa",
    leftCopy: nailDaySpaCopy.left,
    rightCopy: nailDaySpaCopy.right,
    getRecommendation: getNailDaySpaRecommendation,
  },
  "nail-salon-vs-medical-spa": {
    leftLabel: "Nail Salon",
    rightLabel: "Medical Spa",
    leftCopy: nailMedicalSpaCopy.left,
    rightCopy: nailMedicalSpaCopy.right,
    getRecommendation: getNailMedicalSpaRecommendation,
  },
  "nail-salon-vs-waxing-salon": {
    leftLabel: "Nail Salon",
    rightLabel: "Waxing Salon",
    leftCopy: nailWaxingSalonCopy.left,
    rightCopy: nailWaxingSalonCopy.right,
    getRecommendation: getNailWaxingSalonRecommendation,
  },
  "nail-salon-vs-barbershop": {
    leftLabel: "Nail Salon",
    rightLabel: "Barbershop",
    leftCopy: nailBarbershopCopy.left,
    rightCopy: nailBarbershopCopy.right,
    getRecommendation: getNailBarbershopRecommendation,
  },
  "medical-spa-vs-dermatology-practice": {
    leftLabel: "Medical Spa",
    rightLabel: "Dermatology Practice",
    leftCopy: medSpaDermCopy.left,
    rightCopy: medSpaDermCopy.right,
    getRecommendation: getMedSpaDermRecommendation,
  },
  "medical-spa-vs-plastic-surgery-clinic": {
    leftLabel: "Medical Spa",
    rightLabel: "Plastic Surgery Clinic",
    leftCopy: medSpaPlasticCopy.left,
    rightCopy: medSpaPlasticCopy.right,
    getRecommendation: getMedSpaPlasticRecommendation,
  },
  "medical-spa-vs-day-spa": {
    leftLabel: "Medical Spa",
    rightLabel: "Day Spa",
    leftCopy: medSpaDaySpaCopy.left,
    rightCopy: medSpaDaySpaCopy.right,
    getRecommendation: getMedSpaDaySpaRecommendation,
  },
  "medical-spa-vs-hair-salon": {
    leftLabel: "Medical Spa",
    rightLabel: "Hair Salon",
    leftCopy: medSpaHairSalonCopy.left,
    rightCopy: medSpaHairSalonCopy.right,
    getRecommendation: getMedSpaHairSalonRecommendation,
  },
  "medical-spa-vs-dental-practice": {
    leftLabel: "Medical Spa",
    rightLabel: "Dental Practice",
    leftCopy: medSpaDentalCopy.left,
    rightCopy: medSpaDentalCopy.right,
    getRecommendation: getMedSpaDentalRecommendation,
  },
  "medical-spa-vs-wellness-clinic": {
    leftLabel: "Medical Spa",
    rightLabel: "Wellness Clinic",
    leftCopy: medSpaWellnessCopy.left,
    rightCopy: medSpaWellnessCopy.right,
    getRecommendation: getMedSpaWellnessRecommendation,
  },
  "day-spa-vs-massage-spa": {
    leftLabel: "Day Spa",
    rightLabel: "Massage Spa",
    leftCopy: daySpaMassageCopy.left,
    rightCopy: daySpaMassageCopy.right,
    getRecommendation: getDaySpaMassageRecommendation,
  },
  "day-spa-vs-wellness-clinic": {
    leftLabel: "Day Spa",
    rightLabel: "Wellness Clinic",
    leftCopy: daySpaWellnessCopy.left,
    rightCopy: daySpaWellnessCopy.right,
    getRecommendation: getDaySpaWellnessRecommendation,
  },
  "day-spa-vs-facial-studio": {
    leftLabel: "Day Spa",
    rightLabel: "Facial Studio",
    leftCopy: daySpaFacialCopy.left,
    rightCopy: daySpaFacialCopy.right,
    getRecommendation: getDaySpaFacialRecommendation,
  },
};

export function getBeautyDecisionConfig(slug: string): BeautyDecisionConfig {
  const config = configs[slug];
  if (!config) {
    throw new Error(`Unknown beauty comparison slug: ${slug}`);
  }
  return config;
}

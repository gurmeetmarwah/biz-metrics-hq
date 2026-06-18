import type { HealthcareDecisionConfig } from "./healthcare-comparison-types";
import {
  decisionToolCopy as chiroMassageCopy,
  getRecommendation as getChiroMassageRecommendation,
} from "./chiropractic-vs-massage-therapy";
import {
  decisionToolCopy as familySportsChiroCopy,
  getRecommendation as getFamilySportsChiroRecommendation,
} from "./family-chiropractic-vs-sports-chiropractic";
import {
  decisionToolCopy as soloMultiChiroCopy,
  getRecommendation as getSoloMultiChiroRecommendation,
} from "./solo-chiropractic-vs-multi-doctor-practice";
import {
  decisionToolCopy as cashInsuranceChiroCopy,
  getRecommendation as getCashInsuranceChiroRecommendation,
} from "./cash-pay-vs-insurance-chiropractic";
import {
  decisionToolCopy as ptChiroCopy,
  getRecommendation as getPtChiroRecommendation,
} from "./physical-therapy-vs-chiropractic-clinic";
import {
  decisionToolCopy as ptOtCopy,
  getRecommendation as getPtOtRecommendation,
} from "./physical-therapy-vs-occupational-therapy";
import {
  decisionToolCopy as sportsPtCopy,
  getRecommendation as getSportsPtRecommendation,
} from "./sports-pt-vs-general-pt";
import {
  decisionToolCopy as soloPtCopy,
  getRecommendation as getSoloPtRecommendation,
} from "./solo-pt-vs-multi-therapist-practice";
import {
  decisionToolCopy as hospitalPtCopy,
  getRecommendation as getHospitalPtRecommendation,
} from "./private-practice-vs-hospital-based-pt";
import {
  decisionToolCopy as orthoCopy,
  getRecommendation as getOrthoRecommendation,
} from "./dental-practice-vs-orthodontic-practice";
import {
  decisionToolCopy as medicalCopy,
  getRecommendation as getMedicalRecommendation,
} from "./dental-practice-vs-medical-practice";
import {
  decisionToolCopy as vetCopy,
  getRecommendation as getVetRecommendation,
} from "./dental-practice-vs-veterinary-clinic";
import {
  decisionToolCopy as soloGroupCopy,
  getRecommendation as getSoloGroupRecommendation,
} from "./solo-vs-group-dental-practice";
import {
  decisionToolCopy as corporateVetCopy,
  getRecommendation as getCorporateVetRecommendation,
} from "./private-practice-vs-corporate-vet";
import {
  decisionToolCopy as dsoCopy,
  getRecommendation as getDsoRecommendation,
} from "./private-practice-vs-dso";
import {
  decisionToolCopy as emergencyVetCopy,
  getRecommendation as getEmergencyVetRecommendation,
} from "./general-vet-vs-emergency-vet";
import {
  decisionToolCopy as soloVetCopy,
  getRecommendation as getSoloVetRecommendation,
} from "./solo-vet-vs-multi-doctor-practice";
import {
  decisionToolCopy as vetMedicalCopy,
  getRecommendation as getVetMedicalRecommendation,
} from "./veterinary-clinic-vs-medical-practice";

const configs: Record<string, HealthcareDecisionConfig> = {
  "dental-practice-vs-orthodontic-practice": {
    leftLabel: "General Dentistry",
    rightLabel: "Orthodontic Practice",
    leftCopy: orthoCopy.left,
    rightCopy: orthoCopy.right,
    getRecommendation: getOrthoRecommendation,
  },
  "dental-practice-vs-medical-practice": {
    leftLabel: "Dental Practice",
    rightLabel: "Medical Practice",
    leftCopy: medicalCopy.left,
    rightCopy: medicalCopy.right,
    getRecommendation: getMedicalRecommendation,
  },
  "dental-practice-vs-veterinary-clinic": {
    leftLabel: "Dental Practice",
    rightLabel: "Veterinary Clinic",
    leftCopy: vetCopy.left,
    rightCopy: vetCopy.right,
    getRecommendation: getVetRecommendation,
  },
  "solo-vs-group-dental-practice": {
    leftLabel: "Solo Practice",
    rightLabel: "Group Practice",
    leftCopy: soloGroupCopy.left,
    rightCopy: soloGroupCopy.right,
    getRecommendation: getSoloGroupRecommendation,
  },
  "private-practice-vs-dso": {
    leftLabel: "Private Practice",
    rightLabel: "DSO-Affiliated Practice",
    leftCopy: dsoCopy.left,
    rightCopy: dsoCopy.right,
    getRecommendation: getDsoRecommendation,
  },
  "veterinary-clinic-vs-medical-practice": {
    leftLabel: "Veterinary Clinic",
    rightLabel: "Medical Practice",
    leftCopy: vetMedicalCopy.left,
    rightCopy: vetMedicalCopy.right,
    getRecommendation: getVetMedicalRecommendation,
  },
  "general-vet-vs-emergency-vet": {
    leftLabel: "General Vet Clinic",
    rightLabel: "Emergency Vet Hospital",
    leftCopy: emergencyVetCopy.left,
    rightCopy: emergencyVetCopy.right,
    getRecommendation: getEmergencyVetRecommendation,
  },
  "solo-vet-vs-multi-doctor-practice": {
    leftLabel: "Solo Vet Practice",
    rightLabel: "Multi-Doctor Vet Practice",
    leftCopy: soloVetCopy.left,
    rightCopy: soloVetCopy.right,
    getRecommendation: getSoloVetRecommendation,
  },
  "private-practice-vs-corporate-vet": {
    leftLabel: "Private Vet Practice",
    rightLabel: "Corporate Vet Clinic",
    leftCopy: corporateVetCopy.left,
    rightCopy: corporateVetCopy.right,
    getRecommendation: getCorporateVetRecommendation,
  },
  "physical-therapy-vs-chiropractic-clinic": {
    leftLabel: "Physical Therapy Clinic",
    rightLabel: "Chiropractic Clinic",
    leftCopy: ptChiroCopy.left,
    rightCopy: ptChiroCopy.right,
    getRecommendation: getPtChiroRecommendation,
  },
  "physical-therapy-vs-occupational-therapy": {
    leftLabel: "Physical Therapy Clinic",
    rightLabel: "Occupational Therapy Clinic",
    leftCopy: ptOtCopy.left,
    rightCopy: ptOtCopy.right,
    getRecommendation: getPtOtRecommendation,
  },
  "sports-pt-vs-general-pt": {
    leftLabel: "Sports Physical Therapy Clinic",
    rightLabel: "General Physical Therapy Clinic",
    leftCopy: sportsPtCopy.left,
    rightCopy: sportsPtCopy.right,
    getRecommendation: getSportsPtRecommendation,
  },
  "solo-pt-vs-multi-therapist-practice": {
    leftLabel: "Solo PT Practice",
    rightLabel: "Multi-Therapist PT Practice",
    leftCopy: soloPtCopy.left,
    rightCopy: soloPtCopy.right,
    getRecommendation: getSoloPtRecommendation,
  },
  "private-practice-vs-hospital-based-pt": {
    leftLabel: "Private PT Practice",
    rightLabel: "Hospital-Based PT",
    leftCopy: hospitalPtCopy.left,
    rightCopy: hospitalPtCopy.right,
    getRecommendation: getHospitalPtRecommendation,
  },
  "chiropractic-vs-massage-therapy": {
    leftLabel: "Chiropractic Clinic",
    rightLabel: "Massage Therapy Practice",
    leftCopy: chiroMassageCopy.left,
    rightCopy: chiroMassageCopy.right,
    getRecommendation: getChiroMassageRecommendation,
  },
  "family-chiropractic-vs-sports-chiropractic": {
    leftLabel: "Family Chiropractic",
    rightLabel: "Sports Chiropractic",
    leftCopy: familySportsChiroCopy.left,
    rightCopy: familySportsChiroCopy.right,
    getRecommendation: getFamilySportsChiroRecommendation,
  },
  "solo-chiropractic-vs-multi-doctor-practice": {
    leftLabel: "Solo Chiropractic Practice",
    rightLabel: "Multi-Doctor Chiropractic Practice",
    leftCopy: soloMultiChiroCopy.left,
    rightCopy: soloMultiChiroCopy.right,
    getRecommendation: getSoloMultiChiroRecommendation,
  },
  "cash-pay-vs-insurance-chiropractic": {
    leftLabel: "Cash-Pay Chiropractic",
    rightLabel: "Insurance-Based Chiropractic",
    leftCopy: cashInsuranceChiroCopy.left,
    rightCopy: cashInsuranceChiroCopy.right,
    getRecommendation: getCashInsuranceChiroRecommendation,
  },
};

export function getHealthcareDecisionConfig(slug: string): HealthcareDecisionConfig {
  const config = configs[slug];
  if (!config) {
    throw new Error(`Unknown healthcare comparison slug: ${slug}`);
  }
  return config;
}

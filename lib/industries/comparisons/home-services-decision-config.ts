import type { HealthcareDecisionConfig } from "./healthcare-comparison-types";
import {
  decisionToolCopy as electricalCopy,
  getRecommendation as getElectricalRecommendation,
} from "./hvac-vs-electrical";
import {
  decisionToolCopy as landscapingCopy,
  getRecommendation as getLandscapingRecommendation,
} from "./hvac-vs-landscaping";
import {
  decisionToolCopy as plumbingCopy,
  getRecommendation as getPlumbingRecommendation,
} from "./hvac-vs-plumbing";
import {
  decisionToolCopy as roofingCopy,
  getRecommendation as getRoofingRecommendation,
} from "./hvac-vs-roofing";
import {
  decisionToolCopy as plumbingVsElectricalCopy,
  getRecommendation as getPlumbingVsElectricalRecommendation,
} from "./plumbing-vs-electrical";
import {
  decisionToolCopy as plumbingVsLandscapingCopy,
  getRecommendation as getPlumbingVsLandscapingRecommendation,
} from "./plumbing-vs-landscaping";
import {
  decisionToolCopy as plumbingVsPestControlCopy,
  getRecommendation as getPlumbingVsPestControlRecommendation,
} from "./plumbing-vs-pest-control";
import {
  decisionToolCopy as plumbingVsRoofingCopy,
  getRecommendation as getPlumbingVsRoofingRecommendation,
} from "./plumbing-vs-roofing";
import {
  decisionToolCopy as plumbingVsHvacCopy,
  getRecommendation as getPlumbingVsHvacRecommendation,
} from "./plumbing-vs-hvac";
import {
  decisionToolCopy as landscapingVsHvacCopy,
  getRecommendation as getLandscapingVsHvacRecommendation,
} from "./landscaping-vs-hvac";
import {
  decisionToolCopy as landscapingVsPlumbingCopy,
  getRecommendation as getLandscapingVsPlumbingRecommendation,
} from "./landscaping-vs-plumbing";
import {
  decisionToolCopy as landscapingVsRoofingCopy,
  getRecommendation as getLandscapingVsRoofingRecommendation,
} from "./landscaping-vs-roofing";
import {
  decisionToolCopy as landscapingVsPestControlCopy,
  getRecommendation as getLandscapingVsPestControlRecommendation,
} from "./landscaping-vs-pest-control";
import {
  decisionToolCopy as landscapingVsLawnCareCopy,
  getRecommendation as getLandscapingVsLawnCareRecommendation,
} from "./landscaping-vs-lawn-care";
import {
  decisionToolCopy as landscapingVsTreeServiceCopy,
  getRecommendation as getLandscapingVsTreeServiceRecommendation,
} from "./landscaping-vs-tree-service";
import {
  decisionToolCopy as pestControlVsHvacCopy,
  getRecommendation as getPestControlVsHvacRecommendation,
} from "./pest-control-vs-hvac";
import {
  decisionToolCopy as pestControlVsLawnCareCopy,
  getRecommendation as getPestControlVsLawnCareRecommendation,
} from "./pest-control-vs-lawn-care";
import {
  decisionToolCopy as pestControlVsCleaningCopy,
  getRecommendation as getPestControlVsCleaningRecommendation,
} from "./pest-control-vs-cleaning-business";
import {
  decisionToolCopy as cleaningVsLandscapingCopy,
  getRecommendation as getCleaningVsLandscapingRecommendation,
} from "./cleaning-business-vs-landscaping";
import {
  decisionToolCopy as cleaningVsHvacCopy,
  getRecommendation as getCleaningVsHvacRecommendation,
} from "./cleaning-business-vs-hvac";
import {
  decisionToolCopy as cleaningVsLawnCareCopy,
  getRecommendation as getCleaningVsLawnCareRecommendation,
} from "./cleaning-business-vs-lawn-care";
import {
  decisionToolCopy as cleaningVsJanitorialCopy,
  getRecommendation as getCleaningVsJanitorialRecommendation,
} from "./cleaning-business-vs-janitorial-business";

const configs: Record<string, HealthcareDecisionConfig> = {
  "hvac-vs-plumbing": {
    leftLabel: "HVAC",
    rightLabel: "Plumbing",
    leftCopy: plumbingCopy.left,
    rightCopy: plumbingCopy.right,
    getRecommendation: getPlumbingRecommendation,
  },
  "hvac-vs-electrical": {
    leftLabel: "HVAC",
    rightLabel: "Electrical",
    leftCopy: electricalCopy.left,
    rightCopy: electricalCopy.right,
    getRecommendation: getElectricalRecommendation,
  },
  "hvac-vs-roofing": {
    leftLabel: "HVAC",
    rightLabel: "Roofing",
    leftCopy: roofingCopy.left,
    rightCopy: roofingCopy.right,
    getRecommendation: getRoofingRecommendation,
  },
  "hvac-vs-landscaping": {
    leftLabel: "HVAC",
    rightLabel: "Landscaping",
    leftCopy: landscapingCopy.left,
    rightCopy: landscapingCopy.right,
    getRecommendation: getLandscapingRecommendation,
  },
  "plumbing-vs-hvac": {
    leftLabel: "Plumbing",
    rightLabel: "HVAC",
    leftCopy: plumbingVsHvacCopy.left,
    rightCopy: plumbingVsHvacCopy.right,
    getRecommendation: getPlumbingVsHvacRecommendation,
  },
  "plumbing-vs-electrical": {
    leftLabel: "Plumbing",
    rightLabel: "Electrical",
    leftCopy: plumbingVsElectricalCopy.left,
    rightCopy: plumbingVsElectricalCopy.right,
    getRecommendation: getPlumbingVsElectricalRecommendation,
  },
  "plumbing-vs-roofing": {
    leftLabel: "Plumbing",
    rightLabel: "Roofing",
    leftCopy: plumbingVsRoofingCopy.left,
    rightCopy: plumbingVsRoofingCopy.right,
    getRecommendation: getPlumbingVsRoofingRecommendation,
  },
  "plumbing-vs-landscaping": {
    leftLabel: "Plumbing",
    rightLabel: "Landscaping",
    leftCopy: plumbingVsLandscapingCopy.left,
    rightCopy: plumbingVsLandscapingCopy.right,
    getRecommendation: getPlumbingVsLandscapingRecommendation,
  },
  "plumbing-vs-pest-control": {
    leftLabel: "Plumbing",
    rightLabel: "Pest Control",
    leftCopy: plumbingVsPestControlCopy.left,
    rightCopy: plumbingVsPestControlCopy.right,
    getRecommendation: getPlumbingVsPestControlRecommendation,
  },
  "landscaping-vs-hvac": {
    leftLabel: "Landscaping",
    rightLabel: "HVAC",
    leftCopy: landscapingVsHvacCopy.left,
    rightCopy: landscapingVsHvacCopy.right,
    getRecommendation: getLandscapingVsHvacRecommendation,
  },
  "landscaping-vs-plumbing": {
    leftLabel: "Landscaping",
    rightLabel: "Plumbing",
    leftCopy: landscapingVsPlumbingCopy.left,
    rightCopy: landscapingVsPlumbingCopy.right,
    getRecommendation: getLandscapingVsPlumbingRecommendation,
  },
  "landscaping-vs-roofing": {
    leftLabel: "Landscaping",
    rightLabel: "Roofing",
    leftCopy: landscapingVsRoofingCopy.left,
    rightCopy: landscapingVsRoofingCopy.right,
    getRecommendation: getLandscapingVsRoofingRecommendation,
  },
  "landscaping-vs-pest-control": {
    leftLabel: "Landscaping",
    rightLabel: "Pest Control",
    leftCopy: landscapingVsPestControlCopy.left,
    rightCopy: landscapingVsPestControlCopy.right,
    getRecommendation: getLandscapingVsPestControlRecommendation,
  },
  "landscaping-vs-lawn-care": {
    leftLabel: "Landscaping",
    rightLabel: "Lawn Care",
    leftCopy: landscapingVsLawnCareCopy.left,
    rightCopy: landscapingVsLawnCareCopy.right,
    getRecommendation: getLandscapingVsLawnCareRecommendation,
  },
  "landscaping-vs-tree-service": {
    leftLabel: "Landscaping",
    rightLabel: "Tree Service",
    leftCopy: landscapingVsTreeServiceCopy.left,
    rightCopy: landscapingVsTreeServiceCopy.right,
    getRecommendation: getLandscapingVsTreeServiceRecommendation,
  },
  "pest-control-vs-hvac": {
    leftLabel: "Pest Control",
    rightLabel: "HVAC",
    leftCopy: pestControlVsHvacCopy.left,
    rightCopy: pestControlVsHvacCopy.right,
    getRecommendation: getPestControlVsHvacRecommendation,
  },
  "pest-control-vs-lawn-care": {
    leftLabel: "Pest Control",
    rightLabel: "Lawn Care",
    leftCopy: pestControlVsLawnCareCopy.left,
    rightCopy: pestControlVsLawnCareCopy.right,
    getRecommendation: getPestControlVsLawnCareRecommendation,
  },
  "pest-control-vs-cleaning-business": {
    leftLabel: "Pest Control",
    rightLabel: "Cleaning Business",
    leftCopy: pestControlVsCleaningCopy.left,
    rightCopy: pestControlVsCleaningCopy.right,
    getRecommendation: getPestControlVsCleaningRecommendation,
  },
  "cleaning-business-vs-landscaping": {
    leftLabel: "Cleaning Business",
    rightLabel: "Landscaping",
    leftCopy: cleaningVsLandscapingCopy.left,
    rightCopy: cleaningVsLandscapingCopy.right,
    getRecommendation: getCleaningVsLandscapingRecommendation,
  },
  "cleaning-business-vs-hvac": {
    leftLabel: "Cleaning Business",
    rightLabel: "HVAC",
    leftCopy: cleaningVsHvacCopy.left,
    rightCopy: cleaningVsHvacCopy.right,
    getRecommendation: getCleaningVsHvacRecommendation,
  },
  "cleaning-business-vs-lawn-care": {
    leftLabel: "Cleaning Business",
    rightLabel: "Lawn Care",
    leftCopy: cleaningVsLawnCareCopy.left,
    rightCopy: cleaningVsLawnCareCopy.right,
    getRecommendation: getCleaningVsLawnCareRecommendation,
  },
  "cleaning-business-vs-janitorial-business": {
    leftLabel: "Cleaning Business",
    rightLabel: "Janitorial Business",
    leftCopy: cleaningVsJanitorialCopy.left,
    rightCopy: cleaningVsJanitorialCopy.right,
    getRecommendation: getCleaningVsJanitorialRecommendation,
  },
};

export function getHomeServicesDecisionConfig(slug: string): HealthcareDecisionConfig {
  const config = configs[slug];
  if (!config) {
    throw new Error(`Unknown home services comparison slug: ${slug}`);
  }
  return config;
}

import type { HealthcareDecisionConfig } from "./healthcare-comparison-types";
import {
  decisionToolCopy as pilatesCopy,
  getRecommendation as getPilatesRecommendation,
} from "./gym-vs-pilates-studio";
import {
  decisionToolCopy as crossfitCopy,
  getRecommendation as getCrossfitRecommendation,
} from "./gym-vs-crossfit";
import {
  decisionToolCopy as yogaCopy,
  getRecommendation as getYogaRecommendation,
} from "./gym-vs-yoga-studio";
import {
  decisionToolCopy as martialArtsCopy,
  getRecommendation as getMartialArtsRecommendation,
} from "./gym-vs-martial-arts-school";
import {
  decisionToolCopy as pilatesYogaCopy,
  getRecommendation as getPilatesYogaRecommendation,
} from "./pilates-studio-vs-yoga-studio";
import {
  decisionToolCopy as pilatesCrossfitCopy,
  getRecommendation as getPilatesCrossfitRecommendation,
} from "./pilates-studio-vs-crossfit";
import {
  decisionToolCopy as pilatesBarreCopy,
  getRecommendation as getPilatesBarreRecommendation,
} from "./pilates-studio-vs-barre-studio";
import {
  decisionToolCopy as yogaBarreCopy,
  getRecommendation as getYogaBarreRecommendation,
} from "./yoga-studio-vs-barre-studio";
import {
  decisionToolCopy as yogaCrossfitCopy,
  getRecommendation as getYogaCrossfitRecommendation,
} from "./yoga-studio-vs-crossfit";
import {
  decisionToolCopy as yogaMartialArtsCopy,
  getRecommendation as getYogaMartialArtsRecommendation,
} from "./yoga-studio-vs-martial-arts-school";
import {
  decisionToolCopy as martialArtsPilatesCopy,
  getRecommendation as getMartialArtsPilatesRecommendation,
} from "./martial-arts-school-vs-pilates-studio";
import {
  decisionToolCopy as martialArtsDanceCopy,
  getRecommendation as getMartialArtsDanceRecommendation,
} from "./martial-arts-school-vs-dance-studio";
import {
  decisionToolCopy as martialArtsSwimCopy,
  getRecommendation as getMartialArtsSwimRecommendation,
} from "./martial-arts-school-vs-swim-school";
import {
  decisionToolCopy as crossfitMartialArtsCopy,
  getRecommendation as getCrossfitMartialArtsRecommendation,
} from "./crossfit-vs-martial-arts-school";
import {
  decisionToolCopy as crossfitPtCopy,
  getRecommendation as getCrossfitPtRecommendation,
} from "./crossfit-vs-personal-training-studio";

const configs: Record<string, HealthcareDecisionConfig> = {
  "gym-vs-pilates-studio": {
    leftLabel: "Gym",
    rightLabel: "Pilates Studio",
    leftCopy: pilatesCopy.left,
    rightCopy: pilatesCopy.right,
    getRecommendation: getPilatesRecommendation,
  },
  "gym-vs-crossfit": {
    leftLabel: "Gym",
    rightLabel: "CrossFit",
    leftCopy: crossfitCopy.left,
    rightCopy: crossfitCopy.right,
    getRecommendation: getCrossfitRecommendation,
  },
  "gym-vs-yoga-studio": {
    leftLabel: "Gym",
    rightLabel: "Yoga Studio",
    leftCopy: yogaCopy.left,
    rightCopy: yogaCopy.right,
    getRecommendation: getYogaRecommendation,
  },
  "gym-vs-martial-arts-school": {
    leftLabel: "Gym",
    rightLabel: "Martial Arts School",
    leftCopy: martialArtsCopy.left,
    rightCopy: martialArtsCopy.right,
    getRecommendation: getMartialArtsRecommendation,
  },
  "pilates-studio-vs-yoga-studio": {
    leftLabel: "Pilates Studio",
    rightLabel: "Yoga Studio",
    leftCopy: pilatesYogaCopy.left,
    rightCopy: pilatesYogaCopy.right,
    getRecommendation: getPilatesYogaRecommendation,
  },
  "pilates-studio-vs-crossfit": {
    leftLabel: "Pilates Studio",
    rightLabel: "CrossFit",
    leftCopy: pilatesCrossfitCopy.left,
    rightCopy: pilatesCrossfitCopy.right,
    getRecommendation: getPilatesCrossfitRecommendation,
  },
  "pilates-studio-vs-barre-studio": {
    leftLabel: "Pilates Studio",
    rightLabel: "Barre Studio",
    leftCopy: pilatesBarreCopy.left,
    rightCopy: pilatesBarreCopy.right,
    getRecommendation: getPilatesBarreRecommendation,
  },
  "yoga-studio-vs-barre-studio": {
    leftLabel: "Yoga Studio",
    rightLabel: "Barre Studio",
    leftCopy: yogaBarreCopy.left,
    rightCopy: yogaBarreCopy.right,
    getRecommendation: getYogaBarreRecommendation,
  },
  "yoga-studio-vs-crossfit": {
    leftLabel: "Yoga Studio",
    rightLabel: "CrossFit",
    leftCopy: yogaCrossfitCopy.left,
    rightCopy: yogaCrossfitCopy.right,
    getRecommendation: getYogaCrossfitRecommendation,
  },
  "yoga-studio-vs-martial-arts-school": {
    leftLabel: "Yoga Studio",
    rightLabel: "Martial Arts School",
    leftCopy: yogaMartialArtsCopy.left,
    rightCopy: yogaMartialArtsCopy.right,
    getRecommendation: getYogaMartialArtsRecommendation,
  },
  "martial-arts-school-vs-pilates-studio": {
    leftLabel: "Martial Arts School",
    rightLabel: "Pilates Studio",
    leftCopy: martialArtsPilatesCopy.left,
    rightCopy: martialArtsPilatesCopy.right,
    getRecommendation: getMartialArtsPilatesRecommendation,
  },
  "martial-arts-school-vs-dance-studio": {
    leftLabel: "Martial Arts School",
    rightLabel: "Dance Studio",
    leftCopy: martialArtsDanceCopy.left,
    rightCopy: martialArtsDanceCopy.right,
    getRecommendation: getMartialArtsDanceRecommendation,
  },
  "martial-arts-school-vs-swim-school": {
    leftLabel: "Martial Arts School",
    rightLabel: "Swim School",
    leftCopy: martialArtsSwimCopy.left,
    rightCopy: martialArtsSwimCopy.right,
    getRecommendation: getMartialArtsSwimRecommendation,
  },
  "crossfit-vs-martial-arts-school": {
    leftLabel: "CrossFit",
    rightLabel: "Martial Arts School",
    leftCopy: crossfitMartialArtsCopy.left,
    rightCopy: crossfitMartialArtsCopy.right,
    getRecommendation: getCrossfitMartialArtsRecommendation,
  },
  "crossfit-vs-personal-training-studio": {
    leftLabel: "CrossFit",
    rightLabel: "Personal Training Studio",
    leftCopy: crossfitPtCopy.left,
    rightCopy: crossfitPtCopy.right,
    getRecommendation: getCrossfitPtRecommendation,
  },
};

export function getFitnessDecisionConfig(slug: string): HealthcareDecisionConfig {
  const config = configs[slug];
  if (!config) {
    throw new Error(`No fitness decision config for slug: ${slug}`);
  }
  return config;
}

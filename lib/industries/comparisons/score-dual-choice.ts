import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";

export function scoreDualChoice(
  inputs: HealthcareDecisionInputs,
  leftLabel: string,
  rightLabel: string,
  leftWeight: {
    clinicalGeneral?: number;
    clinicalSpecialty?: number;
    revenueModerate?: number;
    revenueHigh?: number;
    revenueVeryHigh?: number;
    insuranceLow?: number;
    insuranceMedium?: number;
    insuranceHigh?: number;
    growthLifestyle?: number;
    growthRegional?: number;
    growthMulti?: number;
  },
): string {
  let left = 0;
  let right = 0;

  if (inputs.clinicalInterest === "general") left += leftWeight.clinicalGeneral ?? 2;
  else right += leftWeight.clinicalSpecialty ?? 2;

  if (inputs.revenueGoal === "moderate") left += leftWeight.revenueModerate ?? 2;
  else if (inputs.revenueGoal === "high") {
    left += leftWeight.revenueHigh ?? 1;
    right += (leftWeight.revenueHigh ?? 1) + 1;
  } else right += leftWeight.revenueVeryHigh ?? 3;

  if (inputs.insuranceComfort === "high") left += leftWeight.insuranceHigh ?? 2;
  else if (inputs.insuranceComfort === "medium") {
    left += leftWeight.insuranceMedium ?? 1;
    right += leftWeight.insuranceMedium ?? 1;
  } else right += leftWeight.insuranceLow ?? 2;

  if (inputs.growthAmbition === "lifestyle") left += leftWeight.growthLifestyle ?? 2;
  else if (inputs.growthAmbition === "regional") {
    left += leftWeight.growthRegional ?? 1;
    right += (leftWeight.growthRegional ?? 1) + 1;
  } else right += leftWeight.growthMulti ?? 3;

  return left >= right ? leftLabel : rightLabel;
}

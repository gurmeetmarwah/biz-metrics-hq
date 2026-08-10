import {
  restaurantFranchiseBrandPresets,
  type RestaurantFranchiseBrandSlug,
} from "@/lib/franchise/food/restaurant-franchise";

export type RestaurantFranchiseCalcInputs = {
  brand: RestaurantFranchiseBrandSlug | "custom";
  franchiseFee: number;
  buildOut: number;
  equipment: number;
  realEstate: number;
  workingCapital: number;
  otherStartup: number;
  /** Share of total investment financed (0–100). */
  financedPct: number;
  /** Annual interest rate % for term loan estimate. */
  interestRatePct: number;
  /** Loan term in years. */
  loanTermYears: number;
  /** Assumed operating margin for break-even / payback (0–100). */
  operatingMarginPct: number;
};

export type RestaurantFranchiseCalcResult = {
  totalInvestment: number;
  cashRequired: number;
  loanAmount: number;
  monthlyPayment: number;
  breakEvenRevenue: number;
  paybackYears: number | null;
};

export function buildDefaultRestaurantFranchiseInputs(
  brand: RestaurantFranchiseBrandSlug = "jersey-mikes",
): RestaurantFranchiseCalcInputs {
  const preset = restaurantFranchiseBrandPresets[brand];
  return {
    brand,
    ...preset,
    financedPct: 70,
    interestRatePct: 8.5,
    loanTermYears: 10,
    operatingMarginPct: 10,
  };
}

export function applyBrandPreset(
  brand: RestaurantFranchiseBrandSlug | "custom",
  current: RestaurantFranchiseCalcInputs,
): RestaurantFranchiseCalcInputs {
  if (brand === "custom") {
    return { ...current, brand: "custom" };
  }
  const preset = restaurantFranchiseBrandPresets[brand];
  return {
    ...current,
    brand,
    ...preset,
  };
}

function monthlyLoanPayment(principal: number, annualRatePct: number, years: number): number {
  if (principal <= 0) return 0;
  if (years <= 0) return principal;
  const monthlyRate = annualRatePct / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return principal / n;
  const factor = Math.pow(1 + monthlyRate, n);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function calculateRestaurantFranchiseInvestment(
  inputs: RestaurantFranchiseCalcInputs,
): RestaurantFranchiseCalcResult {
  const totalInvestment =
    inputs.franchiseFee +
    inputs.buildOut +
    inputs.equipment +
    inputs.realEstate +
    inputs.workingCapital +
    inputs.otherStartup;

  const financedPct = Math.min(100, Math.max(0, inputs.financedPct));
  const loanAmount = totalInvestment * (financedPct / 100);
  const cashRequired = totalInvestment - loanAmount;
  const monthlyPayment = monthlyLoanPayment(loanAmount, inputs.interestRatePct, inputs.loanTermYears);

  const margin = Math.max(0.01, inputs.operatingMarginPct / 100);
  // Rough break-even: cover annual debt service + a working buffer at the assumed margin.
  const annualDebtService = monthlyPayment * 12;
  const breakEvenRevenue = (annualDebtService + inputs.workingCapital * 0.25) / margin;

  // Payback on total investment using assumed margin at ~1.5× break-even sales run-rate.
  const assumedAnnualRevenue = breakEvenRevenue * 1.5;
  const assumedAnnualProfit = assumedAnnualRevenue * margin;
  const paybackYears =
    assumedAnnualProfit > 0 ? totalInvestment / assumedAnnualProfit : null;

  return {
    totalInvestment,
    cashRequired,
    loanAmount,
    monthlyPayment,
    breakEvenRevenue,
    paybackYears,
  };
}

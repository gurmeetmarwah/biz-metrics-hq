import {
  coffeeShopFranchiseBrandPresets,
  type CoffeeShopFranchiseBrandSlug,
} from "@/lib/franchise/food/coffee-shop-franchise";

export type CoffeeShopFranchiseRoiInputs = {
  brand: CoffeeShopFranchiseBrandSlug | "custom";
  initialInvestment: number;
  franchiseFee: number;
  monthlyRevenue: number;
  grossMarginPct: number;
  laborPct: number;
  monthlyRent: number;
  royaltyPct: number;
  marketingPct: number;
  otherMonthlyOpEx: number;
  /** Loan principal financing the project. */
  loanAmount: number;
  interestRatePct: number;
  loanTermYears: number;
};

export type CoffeeShopFranchiseRoiResult = {
  annualRevenue: number;
  annualCogs: number;
  annualLabor: number;
  annualRent: number;
  annualRoyalty: number;
  annualMarketing: number;
  annualOtherOpEx: number;
  annualEbitda: number;
  monthlyDebtService: number;
  annualDebtService: number;
  ownerCashFlow: number;
  breakEvenMonthlyRevenue: number;
  paybackYears: number | null;
  fiveYearRoiPct: number | null;
  cashOnCashPct: number | null;
  cashInvested: number;
};

export function buildDefaultCoffeeShopFranchiseRoiInputs(
  brand: CoffeeShopFranchiseBrandSlug = "scooters-coffee",
): CoffeeShopFranchiseRoiInputs {
  const preset = coffeeShopFranchiseBrandPresets[brand];
  const loanAmount = Math.round(preset.initialInvestment * (preset.loanPct / 100));
  return {
    brand,
    initialInvestment: preset.initialInvestment,
    franchiseFee: preset.franchiseFee,
    monthlyRevenue: preset.monthlyRevenue,
    grossMarginPct: preset.grossMarginPct,
    laborPct: preset.laborPct,
    monthlyRent: preset.monthlyRent,
    royaltyPct: preset.royaltyPct,
    marketingPct: preset.marketingPct,
    otherMonthlyOpEx: preset.otherMonthlyOpEx,
    loanAmount,
    interestRatePct: 8.5,
    loanTermYears: 10,
  };
}

export function applyCoffeeShopBrandPreset(
  brand: CoffeeShopFranchiseBrandSlug | "custom",
  current: CoffeeShopFranchiseRoiInputs,
): CoffeeShopFranchiseRoiInputs {
  if (brand === "custom") {
    return { ...current, brand: "custom" };
  }
  const next = buildDefaultCoffeeShopFranchiseRoiInputs(brand);
  return {
    ...next,
    interestRatePct: current.interestRatePct,
    loanTermYears: current.loanTermYears,
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

export function calculateCoffeeShopFranchiseRoi(
  inputs: CoffeeShopFranchiseRoiInputs,
): CoffeeShopFranchiseRoiResult {
  const annualRevenue = Math.max(0, inputs.monthlyRevenue) * 12;
  const grossMargin = Math.min(100, Math.max(0, inputs.grossMarginPct)) / 100;
  const annualCogs = annualRevenue * (1 - grossMargin);
  const annualLabor = annualRevenue * (Math.min(100, Math.max(0, inputs.laborPct)) / 100);
  const annualRent = Math.max(0, inputs.monthlyRent) * 12;
  const annualRoyalty = annualRevenue * (Math.min(100, Math.max(0, inputs.royaltyPct)) / 100);
  const annualMarketing = annualRevenue * (Math.min(100, Math.max(0, inputs.marketingPct)) / 100);
  const annualOtherOpEx = Math.max(0, inputs.otherMonthlyOpEx) * 12;

  const annualEbitda =
    annualRevenue -
    annualCogs -
    annualLabor -
    annualRent -
    annualRoyalty -
    annualMarketing -
    annualOtherOpEx;

  const loanAmount = Math.max(0, inputs.loanAmount);
  const monthlyDebtService = monthlyLoanPayment(
    loanAmount,
    inputs.interestRatePct,
    inputs.loanTermYears,
  );
  const annualDebtService = monthlyDebtService * 12;
  const ownerCashFlow = annualEbitda - annualDebtService;

  const investment = Math.max(0, inputs.initialInvestment);
  const cashInvested = Math.max(0, investment - loanAmount);

  // Variable cost ratio vs revenue (excludes rent + other fixed-ish OpEx for a simple break-even).
  const variableRatio =
    1 -
    grossMargin +
    Math.min(100, Math.max(0, inputs.laborPct)) / 100 +
    Math.min(100, Math.max(0, inputs.royaltyPct)) / 100 +
    Math.min(100, Math.max(0, inputs.marketingPct)) / 100;
  const contributionMargin = 1 - variableRatio;
  const fixedAnnual = annualRent + annualOtherOpEx + annualDebtService;
  const breakEvenAnnualRevenue =
    contributionMargin > 0 ? fixedAnnual / contributionMargin : 0;
  const breakEvenMonthlyRevenue = breakEvenAnnualRevenue / 12;

  const paybackYears = ownerCashFlow > 0 ? investment / ownerCashFlow : null;
  const fiveYearRoiPct =
    investment > 0 && ownerCashFlow > 0 ? ((ownerCashFlow * 5) / investment) * 100 : null;
  const cashOnCashPct = cashInvested > 0 ? (ownerCashFlow / cashInvested) * 100 : null;

  return {
    annualRevenue,
    annualCogs,
    annualLabor,
    annualRent,
    annualRoyalty,
    annualMarketing,
    annualOtherOpEx,
    annualEbitda,
    monthlyDebtService,
    annualDebtService,
    ownerCashFlow,
    breakEvenMonthlyRevenue,
    paybackYears,
    fiveYearRoiPct,
    cashOnCashPct,
    cashInvested,
  };
}

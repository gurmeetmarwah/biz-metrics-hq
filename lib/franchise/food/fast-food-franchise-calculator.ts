import {
  fastFoodFranchiseBrandPresets,
  type FastFoodFranchiseBrandSlug,
} from "@/lib/franchise/food/fast-food-franchise";

export type FastFoodFranchiseCalcInputs = {
  brand: FastFoodFranchiseBrandSlug | "custom";
  franchiseFee: number;
  buildOut: number;
  equipment: number;
  realEstate: number;
  workingCapital: number;
  otherStartup: number;
  /** Cash the buyer can inject. */
  availableCash: number;
  /** Explicit loan principal (overrides financed % approach). */
  loanAmount: number;
  interestRatePct: number;
  loanTermYears: number;
  annualRevenue: number;
  operatingMarginPct: number;
  /** Share of operating profit taken as owner draw (0–100). */
  ownerDrawPct: number;
};

export type FastFoodFranchiseCalcResult = {
  totalInvestment: number;
  cashRequired: number;
  cashShortfall: number;
  loanAmount: number;
  monthlyPayment: number;
  annualRevenue: number;
  operatingProfit: number;
  ownerIncome: number;
  breakEvenRevenue: number;
  paybackYears: number | null;
  roiPct: number | null;
  cashOnCashPct: number | null;
};

export function buildDefaultFastFoodFranchiseInputs(
  brand: FastFoodFranchiseBrandSlug = "popeyes",
): FastFoodFranchiseCalcInputs {
  const preset = fastFoodFranchiseBrandPresets[brand];
  const total =
    preset.franchiseFee +
    preset.buildOut +
    preset.equipment +
    preset.realEstate +
    preset.workingCapital +
    preset.otherStartup;
  const loanAmount = Math.round(total * 0.7);
  return {
    brand,
    franchiseFee: preset.franchiseFee,
    buildOut: preset.buildOut,
    equipment: preset.equipment,
    realEstate: preset.realEstate,
    workingCapital: preset.workingCapital,
    otherStartup: preset.otherStartup,
    availableCash: Math.round(total * 0.35),
    loanAmount,
    interestRatePct: 8.5,
    loanTermYears: 10,
    annualRevenue: preset.annualRevenue,
    operatingMarginPct: preset.operatingMarginPct,
    ownerDrawPct: 50,
  };
}

export function applyFastFoodBrandPreset(
  brand: FastFoodFranchiseBrandSlug | "custom",
  current: FastFoodFranchiseCalcInputs,
): FastFoodFranchiseCalcInputs {
  if (brand === "custom") {
    return { ...current, brand: "custom" };
  }
  const next = buildDefaultFastFoodFranchiseInputs(brand);
  return {
    ...next,
    interestRatePct: current.interestRatePct,
    loanTermYears: current.loanTermYears,
    ownerDrawPct: current.ownerDrawPct,
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

export function calculateFastFoodFranchiseInvestment(
  inputs: FastFoodFranchiseCalcInputs,
): FastFoodFranchiseCalcResult {
  const totalInvestment =
    inputs.franchiseFee +
    inputs.buildOut +
    inputs.equipment +
    inputs.realEstate +
    inputs.workingCapital +
    inputs.otherStartup;

  const loanAmount = Math.max(0, inputs.loanAmount);
  const cashRequired = Math.max(0, totalInvestment - loanAmount);
  const cashShortfall = Math.max(0, cashRequired - Math.max(0, inputs.availableCash));
  const monthlyPayment = monthlyLoanPayment(loanAmount, inputs.interestRatePct, inputs.loanTermYears);

  const margin = Math.max(0, inputs.operatingMarginPct) / 100;
  const annualRevenue = Math.max(0, inputs.annualRevenue);
  const operatingProfit = annualRevenue * margin;
  const ownerIncome = operatingProfit * (Math.min(100, Math.max(0, inputs.ownerDrawPct)) / 100);

  const annualDebtService = monthlyPayment * 12;
  const breakEvenRevenue =
    margin > 0 ? (annualDebtService + inputs.workingCapital * 0.2) / margin : 0;

  const annualCashFlow = operatingProfit - annualDebtService;
  const paybackYears = annualCashFlow > 0 ? totalInvestment / annualCashFlow : null;
  const roiPct = totalInvestment > 0 ? (operatingProfit / totalInvestment) * 100 : null;
  const cashOnCashPct = cashRequired > 0 ? (annualCashFlow / cashRequired) * 100 : null;

  return {
    totalInvestment,
    cashRequired,
    cashShortfall,
    loanAmount,
    monthlyPayment,
    annualRevenue,
    operatingProfit,
    ownerIncome,
    breakEvenRevenue,
    paybackYears,
    roiPct,
    cashOnCashPct,
  };
}

export type FastFoodBreakEvenInputs = {
  investment: number;
  annualRevenue: number;
  operatingMarginPct: number;
  financedPct: number;
  interestRatePct: number;
  ownerDrawPct: number;
};

export type FastFoodBreakEvenResult = {
  operatingProfit: number;
  loanAmount: number;
  annualDebtService: number;
  ownerIncome: number;
  annualCashFlow: number;
  paybackYears: number | null;
};

export function calculateFastFoodBreakEven(inputs: FastFoodBreakEvenInputs): FastFoodBreakEvenResult {
  const investment = Math.max(0, inputs.investment);
  const margin = Math.max(0, inputs.operatingMarginPct) / 100;
  const operatingProfit = Math.max(0, inputs.annualRevenue) * margin;
  const financedPct = Math.min(100, Math.max(0, inputs.financedPct));
  const loanAmount = investment * (financedPct / 100);
  const monthlyPayment = monthlyLoanPayment(loanAmount, inputs.interestRatePct, 10);
  const annualDebtService = monthlyPayment * 12;
  const ownerIncome = operatingProfit * (Math.min(100, Math.max(0, inputs.ownerDrawPct)) / 100);
  const annualCashFlow = operatingProfit - annualDebtService;
  const paybackYears = annualCashFlow > 0 ? investment / annualCashFlow : null;

  return {
    operatingProfit,
    loanAmount,
    annualDebtService,
    ownerIncome,
    annualCashFlow,
    paybackYears,
  };
}

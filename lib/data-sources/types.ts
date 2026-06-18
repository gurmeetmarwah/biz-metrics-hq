export type DataSourceEntry = {
  name: string;
  detail: string;
};

export type CalculationEntry = {
  label: string;
  formula: string;
  note?: string;
};

export type IndustryAttribution = {
  industry: string;
  naics?: string;
  sampleSize: string;
  dataVintage: string;
  geography: string;
  lastUpdated: string;
  operatorBenchmarkSources: readonly DataSourceEntry[];
  macroSources?: readonly DataSourceEntry[];
  calculations: readonly CalculationEntry[];
  limitations: readonly string[];
};

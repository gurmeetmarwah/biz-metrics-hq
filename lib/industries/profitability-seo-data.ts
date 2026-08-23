import { buildProfitabilitySeo } from "@/lib/industries/profitability-seo";

export const barbershopProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a barbershop",
  companiesPhrase: "barbershops",
  profitEntityPhrase: "a barbershop",
  marginPhrase: "barbershop profit margin",
  marginRange: "12 – 20%",
  medianMargin: "16%",
  topMargin: "18 – 24%",
  grossMargin: "62 – 72%",
  medianRevenue: "$280K",
  profitRange: "$34K – $56K",
  medianProfit: "$45K",
  costDriver: "payroll stays 40–48% of revenue and chair utilization above 70% drives volume",
});

export const daySpaProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a day spa",
  companiesPhrase: "day spas",
  profitEntityPhrase: "a day spa",
  marginPhrase: "day spa profit margin",
  marginRange: "10 – 18%",
  medianMargin: "14%",
  topMargin: "18 – 24%",
  grossMargin: "55 – 68%",
  medianRevenue: "$750K",
  profitRange: "$75K – $135K",
  medianProfit: "$105K",
  costDriver: "payroll stays 42–50% of revenue and membership plus package revenue drives margin",
});

export const medicalSpaProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a medical spa",
  companiesPhrase: "medical spas",
  profitEntityPhrase: "a medical spa",
  marginPhrase: "medical spa profit margin",
  marginRange: "15 – 30%",
  medianMargin: "22%",
  topMargin: "28 – 35%",
  grossMargin: "60 – 75%",
  medianRevenue: "$1.2M",
  profitRange: "$180K – $360K",
  medianProfit: "$264K",
  costDriver: "payroll stays 30–40% of revenue and membership plus injectable volume drive margin",
});

export const nailSalonProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a nail salon",
  companiesPhrase: "nail salons",
  profitEntityPhrase: "a nail salon",
  marginPhrase: "nail salon profit margin",
  marginRange: "10 – 17%",
  medianMargin: "13%",
  topMargin: "17 – 22%",
  grossMargin: "58 – 68%",
  medianRevenue: "$300K",
  profitRange: "$28K – $60K",
  medianProfit: "$39K",
  costDriver: "payroll stays 42–50% of revenue and rebooking every 2–4 weeks drives volume",
});

export const hairSalonProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a hair salon",
  companiesPhrase: "hair salons",
  profitEntityPhrase: "a hair salon",
  marginPhrase: "hair salon profit margin",
  marginRange: "8 – 15%",
  medianMargin: "11%",
  topMargin: "16 – 22%",
  grossMargin: "55 – 65%",
  medianRevenue: "$320K",
  profitRange: "$25K – $55K",
  medianProfit: "$35K",
  costDriver: "payroll stays 45–50% of revenue and retail attachment adds 8–12% of sales",
});

const hvacProfitabilitySeoBase = buildProfitabilitySeo({
  businessPhrase: "an HVAC business",
  companiesPhrase: "HVAC businesses",
  profitEntityPhrase: "an HVAC business",
  marginPhrase: "HVAC profit margin",
  marginRange: "8 – 16%",
  medianMargin: "12%",
  topMargin: "17 – 22%",
  grossMargin: "45 – 55%",
  medianRevenue: "$2.4M",
  profitRange: "$190K – $380K",
  medianProfit: "$288K",
  costDriver: "payroll stays 28–38% of revenue and maintenance is 25%+ of mix",
});

const [hvacHowSection, hvacMarginSection, hvacAreSection, hvacProfitSection] =
  hvacProfitabilitySeoBase.sections;
const [hvacHowFaq, hvacMarginFaq, hvacAreFaq, hvacProfitFaq] =
  hvacProfitabilitySeoBase.faqs;

/** CTR-led primary question matches Search Console long-tail: are hvac businesses profitable / average hvac profit margin */
export const hvacProfitabilitySeo = {
  ...hvacProfitabilitySeoBase,
  lead: "What is the average HVAC profit margin? Healthy operators keep 8–16% net (median ~12%) — typically $190K–$380K a year at median $2.4M revenue.",
  sectionTitle: "What Is the Average HVAC Profit Margin?",
  sectionSubtitle:
    "Typical net margin 8–16% (median ~12%) — about $190K–$380K profit on $2.4M revenue, plus owner salary and valuation multiples.",
  faqSectionTitle: "HVAC Profitability FAQs",
  sections: [hvacMarginSection, hvacAreSection, hvacHowSection, hvacProfitSection],
  faqs: [hvacMarginFaq, hvacAreFaq, hvacHowFaq, hvacProfitFaq],
};

export const plumbingProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a plumbing business",
  companiesPhrase: "plumbing companies",
  profitEntityPhrase: "a plumbing company",
  marginPhrase: "plumbing profit margin",
  marginRange: "8 – 15%",
  medianMargin: "11%",
  topMargin: "16 – 20%",
  grossMargin: "45 – 55%",
  medianRevenue: "$1.6M",
  profitRange: "$130K – $240K",
  medianProfit: "$176K",
  costDriver: "plumber payroll and materials stay in benchmark ranges",
});

const electricalProfitabilitySeoBase = buildProfitabilitySeo({
  businessPhrase: "an electrical business",
  companiesPhrase: "electrical businesses",
  profitEntityPhrase: "an electrical business",
  marginPhrase: "electrician profit margin",
  marginRange: "7 – 14%",
  medianMargin: "10%",
  topMargin: "15 – 18%",
  grossMargin: "40 – 50%",
  medianRevenue: "$2.0M",
  profitRange: "$140K – $280K",
  medianProfit: "$200K",
  costDriver: "technician payroll and job costing stay disciplined",
});

const [
  elecHowSection,
  elecMarginSection,
  elecAreSection,
  elecProfitSection,
] = electricalProfitabilitySeoBase.sections;
const [elecHowFaq, elecMarginFaq, elecAreFaq, elecProfitFaq] =
  electricalProfitabilitySeoBase.faqs;

/** CTR-led: how profitable is electrical business / electrician profit margin */
export const electricalProfitabilitySeo = {
  ...electricalProfitabilitySeoBase,
  lead: "How profitable is an electrical business? Yes — healthy contractors keep 7–14% net (median ~10%), typically $140K–$280K a year at median $2.0M revenue.",
  sectionTitle: "How Profitable Is an Electrical Business?",
  sectionSubtitle:
    "Typical electrician profit margin 7–14% (median ~10%) — about $140K–$280K profit on $2.0M revenue, plus owner pay and valuation.",
  faqSectionTitle: "Electrical Profitability FAQs",
  sections: [elecHowSection, elecMarginSection, elecProfitSection, elecAreSection],
  faqs: [elecHowFaq, elecMarginFaq, elecProfitFaq, elecAreFaq],
};

export const roofingProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a roofing business",
  companiesPhrase: "roofing companies",
  profitEntityPhrase: "a roofing company",
  marginPhrase: "roofing profit margin",
  marginRange: "6 – 14%",
  medianMargin: "9%",
  topMargin: "15 – 18%",
  grossMargin: "35 – 45%",
  medianRevenue: "$2.0M",
  profitRange: "$120K – $280K",
  medianProfit: "$180K",
  costDriver: "materials, crew labor, and storm-job costing stay controlled",
});

export const landscapingProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a landscaping business",
  companiesPhrase: "landscaping companies",
  profitEntityPhrase: "a landscaping company",
  marginPhrase: "landscaping profit margin",
  marginRange: "5 – 12%",
  medianMargin: "8%",
  topMargin: "13 – 15%",
  grossMargin: "40 – 50%",
  medianRevenue: "$1.1M",
  profitRange: "$55K – $130K",
  medianProfit: "$88K",
  costDriver: "route density and crew labor stay efficient",
});

const pestControlProfitabilitySeoBase = buildProfitabilitySeo({
  businessPhrase: "a pest control business",
  companiesPhrase: "pest control businesses",
  profitEntityPhrase: "a pest control business",
  marginPhrase: "pest control business profit margin",
  marginRange: "15 – 25%",
  medianMargin: "18%",
  topMargin: "25 – 30%",
  grossMargin: "55 – 65%",
  medianRevenue: "$900K",
  profitRange: "$125K – $215K",
  medianProfit: "$162K",
  costDriver: "recurring routes and technician utilization stay strong",
});

const [
  pestHowSection,
  pestMarginSection,
  pestAreSection,
  pestProfitSection,
] = pestControlProfitabilitySeoBase.sections;
const [pestHowFaq, pestMarginFaq, pestAreFaq, pestProfitFaq] =
  pestControlProfitabilitySeoBase.faqs;

/** CTR-led primary question matches: average pest control business profit margin */
export const pestControlProfitabilitySeo = {
  ...pestControlProfitabilitySeoBase,
  lead: "What is the average pest control business profit margin? Healthy operators keep 15–25% net (median ~18%) — about $125K–$215K a year at median $900K revenue.",
  sectionTitle: "What Is the Average Pest Control Business Profit Margin?",
  sectionSubtitle:
    "Typical net margin 15–25% (median ~18%) — plus how to increase pest control revenue with denser routes and higher recurring mix.",
  faqSectionTitle: "Pest Control Profitability FAQs",
  sections: [pestMarginSection, pestHowSection, pestProfitSection, pestAreSection],
  faqs: [pestMarginFaq, pestHowFaq, pestProfitFaq, pestAreFaq],
};

const cleaningBusinessProfitabilitySeoBase = buildProfitabilitySeo({
  businessPhrase: "a cleaning business",
  companiesPhrase: "cleaning businesses",
  profitEntityPhrase: "a cleaning business",
  marginPhrase: "cleaning business profit margin",
  marginRange: "10 – 20%",
  medianMargin: "15%",
  topMargin: "21 – 25%",
  grossMargin: "45 – 55%",
  medianRevenue: "$500K",
  profitRange: "$50K – $100K",
  medianProfit: "$75K",
  costDriver: "labor utilization and route density stay high",
});

const [
  cleaningHowSection,
  cleaningMarginSection,
  cleaningAreSection,
  cleaningProfitSection,
] = cleaningBusinessProfitabilitySeoBase.sections;
const [cleaningHowFaq, cleaningMarginFaq, cleaningAreFaq, cleaningProfitFaq] =
  cleaningBusinessProfitabilitySeoBase.faqs;

const isCleaningProfitable = {
  heading: "Is a cleaning business profitable?",
  answer:
    "Is a cleaning business profitable? Yes — healthy operators keep 10–20% net (median ~15%), typically $50K–$100K a year at median $500K revenue. Top crews reach 21–25% when labor utilization and route density stay high.",
} as const;

/** CTR-led primary question matches Search Console long-tail: is a cleaning business profitable */
export const cleaningBusinessProfitabilitySeo = {
  ...cleaningBusinessProfitabilitySeoBase,
  lead: "Is a cleaning business profitable? Yes — most clear 10–20% net profit (median ~15%), or about $50K–$100K a year. The real gap is between average operators and those who nail route density.",
  sectionTitle: "Is a Cleaning Business Profitable?",
  sectionSubtitle:
    "Typical net margin 10–20% (median ~15%) — about $50K–$100K profit on $500K revenue, plus owner pay and valuation multiples.",
  faqSectionTitle: "Cleaning Business Profitability FAQs",
  sections: [
    { heading: isCleaningProfitable.heading, answer: isCleaningProfitable.answer },
    cleaningHowSection,
    cleaningMarginSection,
    cleaningProfitSection,
    cleaningAreSection,
  ],
  faqs: [
    { question: isCleaningProfitable.heading, answer: isCleaningProfitable.answer },
    cleaningHowFaq,
    cleaningMarginFaq,
    cleaningProfitFaq,
    cleaningAreFaq,
  ],
};

export const poolServiceProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a pool service business",
  companiesPhrase: "pool service companies",
  profitEntityPhrase: "a pool service company",
  marginPhrase: "pool service profit margin",
  marginRange: "18 – 26%",
  medianMargin: "22%",
  topMargin: "27 – 32%",
  grossMargin: "55 – 65%",
  medianRevenue: "$950K",
  profitRange: "$170K – $245K",
  medianProfit: "$209K",
  costDriver: "route density and chemical costs stay controlled",
});

export const treeServiceProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a tree service business",
  companiesPhrase: "tree service companies",
  profitEntityPhrase: "a tree service company",
  marginPhrase: "tree service profit margin",
  marginRange: "16 – 26%",
  medianMargin: "21%",
  topMargin: "27 – 32%",
  grossMargin: "50 – 60%",
  medianRevenue: "$1.25M",
  profitRange: "$200K – $325K",
  medianProfit: "$262K",
  costDriver: "crew utilization and equipment costs stay disciplined",
});

export const gymProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a gym business",
  companiesPhrase: "gyms",
  profitEntityPhrase: "a gym",
  marginPhrase: "gym profit margin",
  marginRange: "12 – 24%",
  medianMargin: "18%",
  topMargin: "25 – 30%",
  grossMargin: "60 – 75%",
  medianRevenue: "$1.2M",
  profitRange: "$145K – $290K",
  medianProfit: "$216K",
  costDriver: "membership retention and staffing stay in range",
});

export const pilatesStudioProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a Pilates studio",
  companiesPhrase: "Pilates studios",
  profitEntityPhrase: "a Pilates studio",
  marginPhrase: "Pilates studio profit margin",
  marginRange: "16 – 28%",
  medianMargin: "22%",
  topMargin: "29 – 34%",
  grossMargin: "65 – 80%",
  medianRevenue: "$850K",
  profitRange: "$135K – $240K",
  medianProfit: "$187K",
  costDriver: "class utilization and instructor costs stay efficient",
});

export const yogaStudioProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a yoga studio",
  companiesPhrase: "yoga studios",
  profitEntityPhrase: "a yoga studio",
  marginPhrase: "yoga studio profit margin",
  marginRange: "14 – 24%",
  medianMargin: "19%",
  topMargin: "25 – 30%",
  grossMargin: "65 – 80%",
  medianRevenue: "$620K",
  profitRange: "$85K – $150K",
  medianProfit: "$118K",
  costDriver: "membership mix and rent stay controlled",
});

export const martialArtsSchoolProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a martial arts school",
  companiesPhrase: "martial arts schools",
  profitEntityPhrase: "a martial arts school",
  marginPhrase: "martial arts school profit margin",
  marginRange: "18 – 30%",
  medianMargin: "24%",
  topMargin: "31 – 36%",
  grossMargin: "70 – 85%",
  medianRevenue: "$780K",
  profitRange: "$140K – $235K",
  medianProfit: "$187K",
  costDriver: "student retention and instructor payroll stay strong",
});

export const crossfitGymProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a CrossFit gym",
  companiesPhrase: "CrossFit gyms",
  profitEntityPhrase: "a CrossFit gym",
  marginPhrase: "CrossFit gym profit margin",
  marginRange: "15 – 27%",
  medianMargin: "21%",
  topMargin: "28 – 33%",
  grossMargin: "65 – 80%",
  medianRevenue: "$950K",
  profitRange: "$140K – $255K",
  medianProfit: "$200K",
  costDriver: "membership density and coach costs stay efficient",
});

export const iceCreamShopProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "an ice cream shop",
  companiesPhrase: "ice cream shops",
  profitEntityPhrase: "an ice cream shop",
  marginPhrase: "ice cream shop profit margin",
  marginRange: "12 – 22%",
  medianMargin: "17%",
  topMargin: "23 – 28%",
  grossMargin: "55 – 70%",
  medianRevenue: "$720K",
  profitRange: "$85K – $160K",
  medianProfit: "$122K",
  costDriver: "food cost and seasonal labor stay controlled",
});

export const optometryPracticeProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "an optometry practice",
  companiesPhrase: "optometry practices",
  profitEntityPhrase: "an optometry practice",
  marginPhrase: "optometry practice profit margin",
  marginRange: "18 – 28%",
  medianMargin: "24%",
  topMargin: "29 – 32%",
  grossMargin: "58 – 72%",
  medianRevenue: "$1.35M",
  profitRange: "$245K – $380K",
  medianProfit: "$324K",
  costDriver: "optical capture and payroll stay in benchmark ranges",
});

export const bakeryProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a bakery",
  companiesPhrase: "bakeries",
  profitEntityPhrase: "a bakery",
  marginPhrase: "bakery profit margin",
  marginRange: "10 – 14%",
  medianMargin: "12%",
  topMargin: "15 – 18%",
  grossMargin: "55 – 65%",
  medianRevenue: "$450K",
  profitRange: "$45K – $65K",
  medianProfit: "$54K",
  costDriver: "ingredient cost and labor stay disciplined",
});

export const coffeeShopProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a coffee shop",
  companiesPhrase: "coffee shops",
  profitEntityPhrase: "a coffee shop",
  marginPhrase: "coffee shop profit margin",
  marginRange: "10 – 15%",
  medianMargin: "12%",
  topMargin: "16 – 18%",
  grossMargin: "60 – 70%",
  medianRevenue: "$550K",
  profitRange: "$55K – $85K",
  medianProfit: "$66K",
  costDriver: "labor and rent stay under control",
});

export const foodTruckProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a food truck",
  companiesPhrase: "food trucks",
  profitEntityPhrase: "a food truck",
  marginPhrase: "food truck profit margin",
  marginRange: "12 – 15%",
  medianMargin: "13%",
  topMargin: "16 – 18%",
  grossMargin: "55 – 65%",
  medianRevenue: "$280K",
  profitRange: "$35K – $45K",
  medianProfit: "$36K",
  costDriver: "food cost and route mix stay efficient",
});

export const dentalPracticeProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a dental practice",
  companiesPhrase: "dental practices",
  profitEntityPhrase: "a dental practice",
  marginPhrase: "dental practice profit margin",
  marginRange: "18 – 30%",
  medianMargin: "24%",
  topMargin: "28 – 32%",
  grossMargin: "60 – 70%",
  medianRevenue: "$1.8M",
  profitRange: "$325K – $540K",
  medianProfit: "$432K",
  costDriver: "clinical payroll and supply costs stay in range",
});

export const chiropracticClinicProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a chiropractic clinic",
  companiesPhrase: "chiropractic clinics",
  profitEntityPhrase: "a chiropractic clinic",
  marginPhrase: "chiropractic clinic profit margin",
  marginRange: "25 – 35%",
  medianMargin: "30%",
  topMargin: "36 – 40%",
  grossMargin: "70 – 80%",
  medianRevenue: "$500K",
  profitRange: "$125K – $175K",
  medianProfit: "$150K",
  costDriver: "visit volume and overhead stay efficient",
});

export const physicalTherapyClinicProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a physical therapy clinic",
  companiesPhrase: "physical therapy clinics",
  profitEntityPhrase: "a physical therapy clinic",
  marginPhrase: "physical therapy clinic profit margin",
  marginRange: "18 – 28%",
  medianMargin: "23%",
  topMargin: "29 – 34%",
  grossMargin: "55 – 65%",
  medianRevenue: "$850K",
  profitRange: "$155K – $240K",
  medianProfit: "$195K",
  costDriver: "therapist utilization and payer mix stay strong",
});

const veterinaryClinicProfitabilitySeoBase = buildProfitabilitySeo({
  businessPhrase: "a vet clinic",
  companiesPhrase: "vet clinics",
  profitEntityPhrase: "a vet clinic",
  marginPhrase: "vet clinic profit margin",
  marginRange: "15 – 22%",
  medianMargin: "18%",
  topMargin: "23 – 28%",
  grossMargin: "50 – 60%",
  medianRevenue: "$1.2M",
  profitRange: "$180K – $265K",
  medianProfit: "$216K",
  costDriver: "clinical payroll and medical supplies stay controlled",
});

const [vetHowSection, vetMarginSection, vetAreSection, vetProfitSection] =
  veterinaryClinicProfitabilitySeoBase.sections;
const [vetHowFaq, vetMarginFaq, vetAreFaq, vetProfitFaq] =
  veterinaryClinicProfitabilitySeoBase.faqs;

/** CTR-led primary question matches Search Console query: how much profit does a vet clinic make */
export const veterinaryClinicProfitabilitySeo = {
  ...veterinaryClinicProfitabilitySeoBase,
  lead: "How much profit does a vet clinic make? Most clear $180K–$265K a year — but the gap between average and top clinics is bigger than most owners expect.",
  sectionTitle: "How Much Profit Does a Vet Clinic Make?",
  sectionSubtitle:
    "Typical annual profit $180K–$265K at ~$1.2M revenue — plus the margins, owner pay, and valuation multiples behind the number.",
  faqSectionTitle: "Vet Clinic Profitability FAQs",
  sections: [vetProfitSection, vetHowSection, vetMarginSection, vetAreSection],
  faqs: [vetProfitFaq, vetHowFaq, vetMarginFaq, vetAreFaq],
};

export const restaurantProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a restaurant",
  companiesPhrase: "restaurants",
  profitEntityPhrase: "a restaurant",
  marginPhrase: "restaurant profit margin",
  marginRange: "6 – 10%",
  medianMargin: "8%",
  topMargin: "10 – 14%",
  grossMargin: "60 – 70%",
  medianRevenue: "$850K",
  profitRange: "$50K – $85K",
  medianProfit: "$68K",
  costDriver: "food cost and labor (prime cost) stay under control",
});

export const fineDiningProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a fine dining restaurant",
  companiesPhrase: "fine dining restaurants",
  profitEntityPhrase: "a fine dining restaurant",
  marginPhrase: "fine dining profit margin",
  marginRange: "6 – 12%",
  medianMargin: "9%",
  topMargin: "12 – 14%",
  grossMargin: "62 – 70%",
  medianRevenue: "$2.8M",
  profitRange: "$170K – $335K",
  medianProfit: "$252K",
  costDriver: "wine program, private events, and labor stay efficient",
});

export const fastCasualProfitabilitySeo = buildProfitabilitySeo({
  businessPhrase: "a fast casual restaurant",
  companiesPhrase: "fast casual restaurants",
  profitEntityPhrase: "a fast casual restaurant",
  marginPhrase: "fast casual profit margin",
  marginRange: "8 – 15%",
  medianMargin: "12%",
  topMargin: "14 – 18%",
  grossMargin: "60 – 70%",
  medianRevenue: "$1.4M",
  profitRange: "$110K – $210K",
  medianProfit: "$168K",
  costDriver: "food cost and labor stay in the 28–32% and 26–30% bands",
});

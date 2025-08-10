export type formulaGroupNameType =
  | "colorectalCancer"
  | "breastCancer"
  | "ectopicPregnancy"
  | "prostateCancer"
  | "hodgkinLymphoma";

export type formulaNameType =
  | "folfox4"
  | "folfiri"
  | "capox"
  | "fac"
  | "ac"
  | "paclitaxel"
  | "mtx"
  | "docetaxel"
  | "gemcitabinePlusCisplatin"
  | "abvd";

export type drugNameType =
  | "fiveFU"
  | "fiveFUPush"
  | "fiveFUDrip"
  | "leucovorin"
  | "cyclophosphamide"
  | "doxorubicin"
  | "oxaliplatin"
  | "irinotecan"
  | "paclitaxel"
  | "methotrexate"
  | "docetaxel"
  | "gemcitabine"
  | "cisplatin"
  | "bleomycin"
  | "vinblastine"
  | "dacarbazine";

export type formulaGroupListType = {
  [formulaGroup in formulaGroupNameType]?: {
    displayName: string;
    formulas: formulaNameType[];
  };
};

export type formulaListType = {
  [formula in formulaNameType]?: {
    displayName: string;
    drugs: drugType;
  };
};

export type drugType = {
  [drug in drugNameType]?: { doseRegimen: number };
};

export type drugListType = {
  [drug in drugNameType]: { displayName: string; divider: number };
};

export const formulaGroupNameList: formulaGroupNameType[] = [
  "colorectalCancer",
  "breastCancer",
  "ectopicPregnancy",
  "prostateCancer",
  "hodgkinLymphoma",
];

export const formulaNameList: formulaNameType[] = [
  "folfox4",
  "folfiri",
  "fac",
  "ac",
  "paclitaxel",
  "mtx",
  "docetaxel",
  "gemcitabinePlusCisplatin",
  "abvd",
];

export const drugNameList: drugNameType[] = [
  "fiveFU",
  "fiveFUPush",
  "fiveFUDrip",
  "leucovorin",
  "cyclophosphamide",
  "doxorubicin",
  "oxaliplatin",
  "irinotecan",
  "paclitaxel",
  "methotrexate",
  "docetaxel",
];

export const formulaGroupList: formulaGroupListType = {
  colorectalCancer: {
    displayName: "Colorectal cancer",
    // formulas: ["folfox4", "folfiri", "capox"],
    formulas: ["folfox4", "folfiri"],
  },
  breastCancer: {
    displayName: "Breast cancer",
    formulas: ["fac", "ac", "paclitaxel"],
  },
  ectopicPregnancy: {
    displayName: "Ectopic pregnancy",
    formulas: ["mtx"],
  },
  prostateCancer: {
    displayName: "Prostate cancer",
    formulas: ["docetaxel", "gemcitabinePlusCisplatin"],
  },
  hodgkinLymphoma: {
    displayName: "Hodgkin lymphoma",
    formulas: ["abvd"],
  },
};

export const formulaList: formulaListType = {
  folfox4: {
    displayName: "FOLFOX4",
    drugs: {
      oxaliplatin: { doseRegimen: 85 },
      leucovorin: { doseRegimen: 200 },
      fiveFUPush: { doseRegimen: 400 },
      fiveFUDrip: { doseRegimen: 600 },
    },
  },
  folfiri: {
    displayName: "FOLFIRI",
    drugs: {
      irinotecan: { doseRegimen: 180 },
      leucovorin: { doseRegimen: 200 },
      fiveFUPush: { doseRegimen: 400 },
      fiveFUDrip: { doseRegimen: 600 },
    },
  },
  capox: {
    displayName: "CAPOX",
    drugs: {
      oxaliplatin: { doseRegimen: 85 },
    },
  },
  fac: {
    displayName: "FAC",
    drugs: {
      doxorubicin: { doseRegimen: 50 },
      fiveFU: { doseRegimen: 500 },
      cyclophosphamide: { doseRegimen: 500 },
    },
  },
  ac: {
    displayName: "AC",
    drugs: {
      doxorubicin: { doseRegimen: 60 },
      cyclophosphamide: { doseRegimen: 600 },
    },
  },
  paclitaxel: {
    displayName: "Paclitaxel",
    drugs: { paclitaxel: { doseRegimen: 175 } },
  },
  mtx: { displayName: "MTX", drugs: { methotrexate: { doseRegimen: 50 } } },
  docetaxel: {
    displayName: "Docetaxel",
    drugs: { docetaxel: { doseRegimen: 75 } },
  },
  gemcitabinePlusCisplatin: {
    displayName: "Gemcitabine + Cisplatin",
    drugs: {
      gemcitabine: { doseRegimen: 1000 },
      cisplatin: { doseRegimen: 70 },
    },
  },
  abvd: {
    displayName: "ABVD",
    drugs: {
      doxorubicin: { doseRegimen: 25 },
      bleomycin: { doseRegimen: 10 },
      vinblastine: { doseRegimen: 6 },
      dacarbazine: { doseRegimen: 375 },
    },
  },
};

export const drugList: drugListType = {
  fiveFU: {
    displayName: "5-FU",
    divider: 50,
  },
  fiveFUPush: {
    displayName: "5-FU [push]",
    divider: 50,
  },
  fiveFUDrip: {
    displayName: "5-FU [drip]",
    divider: 50,
  },
  leucovorin: {
    displayName: "Leucovorin",
    divider: 10,
  },
  cyclophosphamide: {
    displayName: "Cyclophosphamide",
    divider: 20,
  },
  doxorubicin: {
    displayName: "Doxorubicin",
    divider: 2,
  },
  oxaliplatin: {
    displayName: "Oxaliplatin",
    divider: 5,
  },
  irinotecan: {
    displayName: "Irinotecan",
    divider: 20,
  },
  paclitaxel: {
    displayName: "Paclitaxel",
    divider: 6,
  },
  methotrexate: {
    displayName: "Methotrexate",
    divider: 25,
  },
  docetaxel: {
    displayName: "Docetaxel",
    divider: 20,
  },
  gemcitabine: {
    displayName: "Gemcitabine",
    divider: 40,
  },
  cisplatin: {
    displayName: "Cisplatin",
    divider: 1,
  },
  bleomycin: {
    displayName: "Bleomycin",
    divider: 3,
  },
  vinblastine: {
    displayName: "Vinblastine",
    divider: 2,
  },
  dacarbazine: {
    displayName: "Dacarbazine",
    divider: 10,
  },
};

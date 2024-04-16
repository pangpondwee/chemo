export type formulaNameType =
  | "FAC"
  | "AC"
  | "FOLFOX4"
  | "FOLFIRI"
  | "Paclitaxel"
  | "MTX";

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
  | "methotrexate";

export type formulaListType = {
  [formula in formulaNameType]?: drugType;
};

export type drugType = {
  [drug in drugNameType]?: { doseRegimen: number };
};

export type drugListType = {
  [drug in drugNameType]: { displayName: string; divider: number };
};

export const formulaNameList: formulaNameType[] = [
  "FAC",
  "AC",
  "FOLFOX4",
  "FOLFIRI",
  "Paclitaxel",
  "MTX",
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
];

export const formulaList: formulaListType = {
  FAC: {
    doxorubicin: { doseRegimen: 50 },
    fiveFU: { doseRegimen: 500 },
    cyclophosphamide: { doseRegimen: 500 },
  },
  AC: {
    doxorubicin: { doseRegimen: 60 },
    cyclophosphamide: { doseRegimen: 600 },
  },
  FOLFOX4: {
    oxaliplatin: { doseRegimen: 85 },
    leucovorin: { doseRegimen: 200 },
    fiveFUPush: { doseRegimen: 400 },
    fiveFUDrip: { doseRegimen: 600 },
  },
  FOLFIRI: {
    irinotecan: { doseRegimen: 180 },
    leucovorin: { doseRegimen: 200 },
    fiveFUPush: { doseRegimen: 400 },
    fiveFUDrip: { doseRegimen: 600 },
  },
  Paclitaxel: { paclitaxel: { doseRegimen: 80 } },
  MTX: { methotrexate: { doseRegimen: 50 } },
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
};

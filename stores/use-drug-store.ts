import { create } from "zustand";

export type drugListType = {
  [key: string]: number;
};

type drugStoreType = {
  drugList: drugListType;
  setDrug: (value: drugListType) => void;
  resetDrug: () => void;
};

export type patientInfoType = {
  weight: number;
  height: number;
  bsa: number;
};

type patientInfoStoreType = {
  patientInfo: patientInfoType;
  setPatientInfo: (value: patientInfoType) => void;
};

export const useDrugStore = create<drugStoreType>((set) => ({
  drugList: {
    fiveFU: 0,
    fiveFUPush: 0,
    fiveFUDrip: 0,
    leucovorin: 0,
    cyclophosphamide: 0,
    doxorubicin: 0,
    oxaliplatin: 0,
    irinotecan: 0,
    paclitaxel: 0,
    methotrexate: 0,
    docetaxel: 0,
    gemcitabine: 0,
    cisplatin: 0,
  },
  setDrug: (value) =>
    set((state) => ({ drugList: { ...state.drugList, ...value } })),
  resetDrug: () =>
    set(() => ({
      drugList: {
        fiveFU: 0,
        fiveFUPush: 0,
        fiveFUDrip: 0,
        leucovorin: 0,
        cyclophosphamide: 0,
        doxorubicin: 0,
        oxaliplatin: 0,
        irinotecan: 0,
        paclitaxel: 0,
        methotrexate: 0,
        docetaxel: 0,
        gemcitabine: 0,
        cisplatin: 0,
      },
    })),
}));

export const usePatientInfoStore = create<patientInfoStoreType>((set) => ({
  patientInfo: {
    weight: 0,
    height: 0,
    bsa: 0,
  },
  setPatientInfo: (value) =>
    set((state) => ({ patientInfo: { ...state.patientInfo, ...value } })),
}));

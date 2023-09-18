import { create } from "zustand";

export type drugListType = {
  [key: string]: number;
};

type drugStoreType = {
  drugList: drugListType;
  setDrug: (value: drugListType) => void;
  resetState: () => void;
};

export const useDrugStore = create<drugStoreType>((set) => ({
  drugList: {
    fiveFU: 0,
    leucovorin: 0,
    cyclophosphamide: 0,
    doxorubicin: 0,
    oxaliplatin: 0,
    irinotecan: 0,
    paclitaxel: 0,
    methotrexate: 0,
  },
  setDrug: (value) =>
    set((state) => ({ drugList: { ...state.drugList, ...value } })),
  resetState: () =>
    set((state) => ({
      drugList: {
        fiveFU: 0,
        leucovorin: 0,
        cyclophosphamide: 0,
        doxorubicin: 0,
        oxaliplatin: 0,
        irinotecan: 0,
        paclitaxel: 0,
        methotrexate: 0,
      },
    })),
}));

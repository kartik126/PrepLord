import { atom } from "recoil";

export const cityState = atom({
  key: "filterInstituteState",
  default: {
    city: "",
  },
});

export const classModeState = atom({
  key: "classModeState",
  default: {
    classMode: "",
  },
});

export const batchState = atom({
  key: "batchState",
  default: {
    batch: "",
  },
});

export const languageState = atom({
  key: "languageState",
  default: {
    language: "",
  },
});
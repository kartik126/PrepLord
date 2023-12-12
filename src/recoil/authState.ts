// authState.js

import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
});

export const phoneState = atom({
  key: "phoneState",
  default: "",
});

export const loginModalState = atom({
  key: "loginModalState",
  default: false,
});

export const otpModalState = atom({
  key: "otpModalState",
  default: false,
});

export const signupModalState = atom({
  key: "signupModalState",
  default: false,
});

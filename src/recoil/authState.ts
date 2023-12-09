// authState.js

import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
});

export const phoneState = atom({
  key: 'phoneState',
  default: '',
});
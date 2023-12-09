// recoil.js
import { atom } from 'recoil';

export const cities = atom({
  key: 'cities',
  default: [],
});

export const exams = atom({
  key: 'exams',
  default: [],
});

export const myExam = atom({
  key: 'myExam',
  default: '',
})

export const firstNameState = atom({
  key: 'firstNameState',
  default: 'Aman',
});

export const lastNameState = atom({
  key: 'lastNameState',
  default: 'Deep',
});



import { selector } from 'recoil';
import { firstNameState,lastNameState } from './store';


export const fullNameSelector = selector({
  key: 'fullNameSelector',
  get: ({ get }) => {
    const firstName = get(firstNameState);
    const lastName = get(lastNameState);

    return `${firstName} ${lastName}`;
  },
});

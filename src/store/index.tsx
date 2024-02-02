import { atom } from "recoil";

const registrationState = atom<DRegistration | null>({
  key: 'registration',
  default: null,
});

export { registrationState }
import { atom } from "recoil";

const registrationState = atom<DRegistration>({
  key: "registration",
});

export { registrationState };

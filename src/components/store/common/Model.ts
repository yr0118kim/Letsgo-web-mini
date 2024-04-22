import { atom } from "recoil";

export const ModalOpenAtom = atom<boolean>({
  key: "modalAtom",
  default: false,
});

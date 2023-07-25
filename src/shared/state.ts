import { NAMESPACE } from "./constants";}
import { atom } from "recoil";

export const themeState = atom<string>({
  key: `${NAMESPACE}#theme`,
  default: "dark",
});

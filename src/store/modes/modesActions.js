import { CHANGE_MODE } from "../types";

export const changeMode = (mode) => {
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
};

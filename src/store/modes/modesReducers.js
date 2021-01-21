import { CHANGE_MODE, modeTypes } from "../types";
// mode => add || not-done || edit
const initialState = {
  mode: modeTypes.ADD,
};

const modesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modesReducer;

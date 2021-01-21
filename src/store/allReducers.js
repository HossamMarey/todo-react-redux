import { combineReducers } from "redux";

import todosReducer from "./todos/todosReducer";
import modesReducers from "./modes/modesReducers";

const allReducers = combineReducers({
  todosState: todosReducer,
  modesState: modesReducers,
});

export default allReducers;

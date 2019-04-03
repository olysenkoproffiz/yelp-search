import searchReducer from "./searchReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer,
  project: projectReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import chartReducer from "./chartReducer";
import successReducer from "./successReducer";
import suggestionReducer from "./suggestionReducer";
import commonReducer from "./common";
import analysisReducer from "./analysis";

export default combineReducers({
  charts: chartReducer,
  success: successReducer,
  suggestion: suggestionReducer,
  common: commonReducer,
  analysis: analysisReducer
});

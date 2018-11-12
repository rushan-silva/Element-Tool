import {
  FETCHING_ANALYSIS_DATA,
  FETCHING_ANALYSIS_DATA_SUCCESSFUL,
  FETCHING_ANALYSIS_DATA_FAILED
} from "../actions/types";

const initialState = {
  fetchingAnalysisData: false,
  fetchingAnalysisDataSuccessful: false,
  fetchingAnalysisDataFailed: false,
  analysisData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ANALYSIS_DATA:
      return {
        ...state,
        fetchingAnalysisData: true
      };
    case FETCHING_ANALYSIS_DATA_SUCCESSFUL:
      return {
        ...state,
        fetchingAnalysisData: false,
        fetchingAnalysisDataSuccessful: true,
        analysisData: action.data.data
      };
    case FETCHING_ANALYSIS_DATA_FAILED:
      return {
        fetchingAnalysisData: false,
        fetchingAnalysisDataSuccessful: false,
        fetchingAnalysisDataFailed: true
      };
    default:
      return state;
  }
}

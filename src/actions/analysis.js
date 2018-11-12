import {
  FETCHING_ANALYSIS_DATA,
  FETCHING_ANALYSIS_DATA_SUCCESSFUL,
  FETCHING_ANALYSIS_DATA_FAILED
} from "./types";

import analysisService from "../services/analysis";

const fetchingAnalysisData = () => {
  return {
    type: FETCHING_ANALYSIS_DATA
  };
};

const fetchingAnalysisDataSuccessful = data => {
  return {
    type: FETCHING_ANALYSIS_DATA_SUCCESSFUL,
    data
  };
};

const fetchingAnalysisDataFailed = data => {
  return {
    type: FETCHING_ANALYSIS_DATA_FAILED,
    data
  };
};

const fetchAnalysisData = pageData => {
  return dispatch => {
    dispatch(fetchingAnalysisData());
    analysisService
      .RetrieveAnalysisData(pageData)
      .then(response => {
        dispatch(fetchingAnalysisDataSuccessful(response));
      })
      .catch(err => {
        dispatch(fetchingAnalysisDataFailed(err));
      });
  };
};

export default { fetchAnalysisData };

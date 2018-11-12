import ApiService from "./apiService";

async function RetrieveAnalysisData(pageData) {
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = false;
  apiObject.endpoint = "api/getPostDetails";
  apiObject.body = pageData;
  const response = await ApiService.callApi(apiObject);
  return response;
}

export default { RetrieveAnalysisData };

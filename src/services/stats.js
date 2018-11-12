import ApiService from "./apiService";

async function FetchData() {
  console.log('down here');             //eslint-disable-line
  const sampleObj = {
    userId: "38266a59-bd2c-4088-a429-0f57509a5676",
    facebookAccessToken:
      "EAADhcFc5Gs0BANkVvA8ITq3BYoJNd3ix0d5zB0nYMZB074LUhl0ZADdAx1KAjZBiNTgScFmuoyQMPCL6PiiPLEkvhyZCEVURq5mkZA25TDyhkrwSkwzeHZBaS2kHLgVliofKiNNOfftV59tz2lfKN895zhAzoatJJ9KWll9mE3qlswLC26W3EDTK322EiZBkYZA1Djl1iSw1RwZDZD",
    pageId: "foodiestoressl",
    postId: "315719342564507_318957702240671"
  };
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = false;
  apiObject.endpoint = "api/getPostDetails";
  apiObject.body = sampleObj;
  const response = await ApiService.callApi(apiObject);
  // await ApiService.callApi(apiObject).then(response => {
  //   console.log('data1: ', response);            //eslint-disable-line
  // });
  console.log('data2: ', response);            //eslint-disable-line
  return response;
}

export default { FetchData };

import ApiService from "./apiService";

async function SignUp(userObj) {
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = false;
  apiObject.endpoint = "api/users";
  apiObject.body = userObj;
  const response = await ApiService.callApi(apiObject);
  return response;
}

async function LogIn(userObj) {
  console.log("userObj: ", userObj);
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = false;
  apiObject.endpoint = "api/validate-user";
  apiObject.body = userObj;
  const response = await ApiService.callApi(apiObject);
  return response;
}

async function validateSession(sessionObj) {
  console.log('session: ', sessionObj);
  const apiObject = {};
  apiObject.method = "POST";
  apiObject.authentication = false;
  apiObject.endpoint = "api/validate-session";
  apiObject.body = sessionObj;
  const response = await ApiService.callApi(apiObject);
  return response;
}

export default { SignUp, LogIn, validateSession };

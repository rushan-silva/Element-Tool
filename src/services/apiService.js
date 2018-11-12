import httpStatus from "http-status";
import fetch from "./fetch.server";

const serverUrl = "http://localhost";
const port = "8080";

async function callApi(apiObject) {
  const fetchObject = {};
  fetchObject.method = apiObject.method ? apiObject.method : "get";
  if (
    apiObject.method === "POST" ||
    apiObject.method === "post" ||
    apiObject.method === "PUT" ||
    apiObject.method === "put"
  ) {
    fetchObject.body = apiObject.body ? JSON.stringify(apiObject.body) : {};
  }
  fetchObject.headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (apiObject.authentication) {
    fetchObject.headers.Authorization = apiObject.authentication;
  }
  const url = `${serverUrl}:${port}/${apiObject.endpoint}`;
  const fetchResult = await fetch(url, fetchObject);

  return new Promise(async (resolve, reject) => {
    if (
      fetchResult.status >= httpStatus.OK &&
      fetchResult.status <= httpStatus.MULTIPLE_CHOICES
    ) {
      return resolve(fetchResult.json());
    }

    if (fetchResult.status === 401) {
      const errObj = {
        success: false,
        message: "Unauthorized",
        data: null
      };
      return reject(errObj);
    }

    const errorResponse = await fetchResult.json();
    return reject(errorResponse);
  });
}

export default { callApi };

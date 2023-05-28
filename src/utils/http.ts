import axios from "axios";
import Cookies from "js-cookie";
import { httpStatus } from "../consts/httpStatus";

export interface requestType {
  method: string;
  url: string;
  body?: object;
  content_type?: string;
}

async function httpRequest(request: requestType) {
  const tokenStr: string = Cookies.get("user") ?? "";
  const headers: object = {
    "x-user-id": `${tokenStr}`,
    "Content-Type": request.content_type ?? "application/json",
  };

  let res: object = {};
  switch (request.method) {
    case "GET":
      res = await axios
        .get(request.url, {
          headers: headers,
        })
        .then(async function (response) {
          await checkStatus(response.status);
          return response.data;
        })
        .catch(function (error) {
          checkStatus(error.response.status);
          return {
            status: false,
            message: error.response.data.message,
          };
        });
      break;
    case "POST":
      res = await axios
        .post(request.url, request.body, {
          headers: headers,
        })
        .then(async function (response) {
          isHasToken(response.data.data);
          await checkStatus(response.status);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          checkStatus(error.response.status);
          return {
            status: false,
            message: error.response.data.message,
          };
        });
      break;
    case "PUT":
      res = await axios
        .put(request.url, request.body, {
          headers: headers,
        })
        .then(async function (response) {
          await checkStatus(response.status);
          return response.data;
        })
        .catch(function (error) {
          checkStatus(error.response.status);
          return {
            status: false,
            message: error.response.data.message,
          };
        });
      break;
    case "DELETE":
      res = await axios
        .delete(request.url, {
          headers: headers,
        })
        .then(async function (response) {
          await checkStatus(response.status);
          return response.data;
        })
        .catch(function (error) {
          checkStatus(error.response.status);
          return {
            status: false,
            message: error.response.data.message,
          };
        });
      break;
  }

  return res;
}

const checkStatus = (status: number) => {
  switch (status) {
    case httpStatus.FORBIDDEN:
      window.location.reload();
      break;
  }
};

const isHasToken = (res: any) => {
  if (res?.userId) {
    Cookies.set("user", res?.userId);
  }
};
export default httpRequest;

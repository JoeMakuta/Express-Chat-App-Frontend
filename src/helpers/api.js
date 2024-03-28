import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export class ApiCall {
  static baseUrl = VITE_BACKEND_URL;

  static get = async ({ url = "", token = "" } = {}) => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static post = async ({ url = "", data = {}, token = "" } = {}) => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      data,
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static delete = async ({ url = "", token = "" } = {}) => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static put = async ({ url = "", data = {}, token = "" } = {}) => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      data,
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
}

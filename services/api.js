import axios from "axios";
import Auth from "./auth";
const API_URL = process.env.API_URL;

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  const token = Auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status) {
      return Promise.reject({
        error: {
          message: error.message,
          stack: error.stack
        },
        response: error.response
      });
    } else return Promise.reject(error);
  }
);
export default api;

import axios from "axios";

const CommonApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

CommonApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error, "error in request");
    return Promise.reject(error);
  }
);

CommonApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("unauthorized access...");
    return Promise.reject(error);
  }
);

export default CommonApi;

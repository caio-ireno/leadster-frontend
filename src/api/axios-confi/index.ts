import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: "https://faker-server.vercel.app",
});

Api.interceptors.response.use(
  response => responseInterceptor(response),
  error => errorInterceptor(error),
);

export { Api };

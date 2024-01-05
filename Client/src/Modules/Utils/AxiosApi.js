import axios from "axios";

const BASE_URL = "http://localhost:5555";
const server = axios.create({
  baseURL: BASE_URL,
});

export default function request() {
  return async ({ ...options }) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
      if (error.response) return Promise.reject(error);
      else
        return Promise.reject({
          response: {
            data: {
              message: !navigator.onLine
                ? "System is Offline! Please check your internet connection."
                : "Server is not responding",
            },
          },
        });
    };

    return await server(options).then(onSuccess).catch(onError);
  };
}

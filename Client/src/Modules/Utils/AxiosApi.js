import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL ?? "http://localhost:3333";
const server = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default async function request({ ...options }) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  const onSuccess = (response) => response;

  const onError = async (error) => {
    debugger;
    if (error.response.status === 401 && !error.response.data.message) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) window.location.replace("/login?session=expired");
      options.headers.autherisation = refreshToken;
      return await request(options);
    } else if (error.response.status === 401)
      window.location.replace("/login?session=expired");
    if (error.response) return Promise.reject(error);

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
}

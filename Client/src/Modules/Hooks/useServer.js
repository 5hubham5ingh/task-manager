import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../Components/Snackbar/snackbarSlice";

const BASE_URL = "http://localhost:5555";
const server = axios.create({
    baseURL: BASE_URL,
  });


export default function useServer() {
  const dispatch = useDispatch();

    //request()  
  return async ({ ...options }) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
      const errorMessage =
        error.message === "Network Error"
          ? error.message
          : error.response.data.message;
      dispatch(
        showSnackbar({
          message: errorMessage,
          severity: "error",
        })
      );
    };

    return await server(options).then(onSuccess).catch(onError);
  };
}

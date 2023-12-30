import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import serverApi from "../ServerApi/api";
import { LOG_IN } from "../ServerApi/ApiRoutes/authentication/login";
import { SIGN_UP } from "../ServerApi/ApiRoutes/authentication/signup";
import { useDispatch } from "react-redux";
import { login } from "../Authentication/User/userSlice";
import { showSnackbar } from "../Components/Snackbar/snackbarSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import request from "../Utils/axios-intercepter";

export const useUserQueries = () => {
  const user = useRef();
  const sessionLength = useRef(1000 * 60 * 60); // one hour
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //LogIn query
  const {
    refetch: fetchUser,
    isSuccess,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ["user"],
    queryFn: initiateLogin,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowBlur: false,
    enabled: false,
    onSuccess: onLoginSuccess,
    onError: onLoginError,
    staleTime: sessionLength.current,
  });
  isSuccess && onLoginSuccess(data);
  isError && onLoginError(error);

  //SignUp query
  const { mutate } = useMutation({
    mutationFn: initiateSignup,
    onSuccess: onSignUpSuccess,
    onError: onSignUpError,
  });

  async function initiateSignup(userCredentials) {
    user.current = userCredentials;
    return await request({
      url: SIGN_UP,
      method: "post",
      data: userCredentials,
    });
  }

  async function initiateLogin() {
    return await request({ url: LOG_IN, method: "post", data: user.current });
  }

  function onSignUpSuccess() {
    queryClient.invalidateQueries(["user"]);
  }

  function onSignUpError(error) {
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
  }

  function onLoginSuccess(data) {
    dispatch(login(data));
    dispatch(showSnackbar({ message: "Logged in!", severity: "success" }));
    navigate(`/WorkSpaces/${data.user._id}`, { replace: true });
  }

  function onLoginError(error) {
    const errorMessage =
      error.message === "Network Error"
        ? error.message
        : error.response.data.message;
    dispatch(showSnackbar({ message: errorMessage, severity: "error" }));
  }

  async function logIn(values, extendedSession) {
    user.current = {
      userName: values.userName,
      password: values.password,
    };
    if (extendedSession) sessionLength.current = 1000 * 60 * 60 * 24; // one day
    fetchUser();
  }

  async function signUp(data) {
    mutate(data);
  }

  return { logIn, signUp };
};

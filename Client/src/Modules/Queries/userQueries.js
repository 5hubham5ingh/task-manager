import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import serverApi from "../ServerApi/api";
import { LOG_IN } from "../ServerApi/ApiRoutes/authentication/login";
import { SIGN_UP } from "../ServerApi/ApiRoutes/authentication/signup";
import { useDispatch } from "react-redux";
import { login } from "../Authentication/User/userSlice";
import { showSnackbar } from "../Components/Snackbar/snackbarSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useUserQueries = () => {
  const user = useRef();
  const sessionLength = useRef(1000 * 60 * 60); // one hour
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //LogIn query
  const { refetch: initiateLogin } = useQuery(
    {
      queryKey: ["user"],
      queryFn: ()=>serverApi.post(LOG_IN, user.current),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowBlur: false,
      enabled: false,
      onSuccess: onLoginSuccess,
      onError: onLoginError,
      staleTime: sessionLength.current,
    }
  );

  //SignUp query
  const { mutate: signUp } = useMutation({
    mutationFn: initiateSignup,
    onSuccess: onSignUpSuccess,
    onError: onSignUpError,
  });

  function initiateSignup(userCredentials) {
    user.current = userCredentials;
    return serverApi.post(SIGN_UP, user);
  }

  function onSignUpSuccess() {
    queryClient.invalidateQueries(["user"]);
  }

  function onSignUpError(error) {
    dispatch(
      showSnackbar({
        message: error.response.data.message,
        severity: "error",
      })
    );
    console.log(error.response);
  }

  function onLoginSuccess(data){
    dispatch(login(data));
    dispatch(showSnackbar({ message: "Logged in!", severity: "success" }));
    navigate(`/WorkSpaces/${data.user._id}`, { replace: true });
  };

  function onLoginError(){console.log("failed to login")
    dispatch(showSnackbar({ message: "Failed to log in!", severity: "error" }));
  };

  function logIn(values, extendedSession) {
    user.current = {
      userName: values.userName,
      password: values.password,
    };
    if (extendedSession) sessionLength.current = 1000 * 60 * 60 * 24; // one day
    initiateLogin();
  }

  return { logIn, signUp };
};

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOG_IN } from "../../ApiRoutes/authentication/login";
import { snackbarActions } from "../../Features/Snackbar/snackbarSlice";
import { userActions } from "../../Features/User/userSlice";
import request from "../../Utils/AxiosApi";
import { useEffect } from "react";

export default function FormSubmitHandler({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("session");

  useEffect(() => {
    query === "expired" &&
      dispatch(
        snackbarActions.showSnackbar({
          message: "Session expired!",
          severity: "error",
        })
      );
  });

  async function submit(values) {
    const data = {
      userName: values.userName.trim(),
      password: values.password.trim(),
      extendedSession: values.extendedSession,
    };
    await request({ url: LOG_IN, method: "post", data })
      .then((response) => {
        dispatch(userActions.login(response.data));
        dispatch(
          snackbarActions.showSnackbar({
            message: "Logged in!",
            severity: "success",
          })
        );
        navigate(`/WorkSpaces/${response.data.user._id}`, { replace: true });
      })
      .catch((error) => {
        dispatch(
          snackbarActions.showSnackbar({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  }

  return children({ submit });
}

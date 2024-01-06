import { signUp } from "../../Authentication/User/userSlice.js";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice.js";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../ApiRoutes/authentication/signup.js";
import useServer from "../../Utils/AxiosApi.js";
import { useNavigate } from "react-router-dom";

export default function SignUpFormSubmitHandler() {
  const dispatch = useDispatch();

  const request = useServer();
  const navigate = useNavigate();

  return async function submit(values) {
    const userName = values.userName.trim();
    const password = values.password.trim();

    await request({
      url: SIGN_UP,
      method: "post",
      data: { userName, password },
    })
      .then((response) => {
        dispatch(signUp(response.data));
        dispatch(
          showSnackbar({ message: "Sign up successful!", severity: "success" })
        );
        navigate(`/WorkSpaces/${response.data.user._id}`, { replace: true });
      })
      .catch((error) => {
        dispatch(
          showSnackbar({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  };
}

import { signUp } from "../../Authentication/User/userSlice.js";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice.js";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../ServerApi/ApiRoutes/authentication/signup.js";
import useServer from "../../Hooks/useServer.js";
import { useNavigate } from "react-router-dom";

export default function SignUpFormSubmitHandler() {
  const dispatch = useDispatch();

  const request = useServer();
  const navigate = useNavigate();

  return async function submit(values) {
    const { userName, password } = values;

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

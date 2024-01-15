import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGN_UP } from "../../ApiRoutes/authentication/signup";
import { userActions } from "../../Features/User/userSlice";
import { showSnackbar } from "../../Features/Snackbar/snackbarSlice";
import request from "../../Utils/AxiosApi";
export default function FormSubmitHandler({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(values) {
    const userName = values.userName.trim();
    const password = values.password.trim();

    await request({
      url: SIGN_UP,
      method: "post",
      data: { userName, password },
    })
      .then((response) => {
        dispatch(userActions.signUp(response.data));
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
  }

  return children({ submit });
}

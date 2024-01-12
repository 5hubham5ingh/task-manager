import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import request from "../../Utils/AxiosApi";
import { login } from "../../Authentication/User/userSlice";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";
import { LOG_IN } from "../../ApiRoutes/authentication/login";

export default function FormSubmitHandler({ children }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function submit(values) {
    const data = {
      userName: values.userName.trim(),
      password: values.password.trim(),
    };

    await request({ url: LOG_IN, method: "post", data })
      .then((response) => {
        dispatch(login(response.data));
        dispatch(showSnackbar({ message: "Logged in!", severity: "success" }));
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

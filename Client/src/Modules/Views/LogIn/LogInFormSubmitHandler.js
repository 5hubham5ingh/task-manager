import { login } from "../../Authentication/User/userSlice.js";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../ServerApi/ApiRoutes/authentication/login.js";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice.js";
import useServer from "../../Utils/AxiosApi.js";

import { useNavigate } from "react-router-dom";

export default function useLoginFormSubmitHandler() {
  const dispatch = useDispatch();

  const request = useServer();
  const navigate = useNavigate();

  return async function submit(values) {
    const data = {
      userName: values.userName,
      password: values.password,
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
  };
}

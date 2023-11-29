import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Form.js";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { userDetailsValidationSchema } from "../Utils/schema";
import { useTheme } from "../Components/Theme/Theme";
import { textFieldStyle } from "../Styles/TextField";
import { buttonStyle } from "../Styles/Button";
import { headingStyle } from "../Styles/Heading";
import { formStyle } from "../Styles/Form.js";
import { signUp } from "../Authentication/User/userSlice.js";
import { showSnackbar } from "../Components/Snackbar/snackbarSlice.js";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../ServerApi/ApiRoutes/authentication/signup.js";
import useServer from "../Hooks/useServer.js";

const initialValues = {
  userName: "",
  key: "",
};

function SignUp() {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const dispatch = useDispatch();

  const request = useServer();

  const initialParameters = {
    initialValues: initialValues,
    validationSchema: userDetailsValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit: submit,
  };

  const { errors, handleSubmit, handleBlur, handleChange, values, touched } =
    useFormik(initialParameters);

  async function submit(values) {
    const { userName, password } = values;

    const response = await request({
      url: SIGN_UP,
      method: "post",
      data: { userName, password },
    });
    if(!response) return;
    dispatch(signUp(response.data));
    dispatch(showSnackbar({ message: "Sign up successful!", severity: "success" }));
    navigate(`/WorkSpaces/${response.data.user._id}`, { replace: true });
  }

  return (
    <Stack
      direction="column"
      sx={{
        ...formStyle,
        backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`,
      }}
      component="form"
      p="2vw"
      spacing="2vw"
    >
      <Typography variant="h4" sx={headingStyle}>
        SignUp
      </Typography>

      <TextField
        label="User Name / Email"
        value={values.userName}
        fullWidth
        sx={textFieldStyle}
        name="userName"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.userName && touched?.userName}
        helperText={touched?.userName ? errors.userName : ""}
      />

      <TextField
        label="Password"
        value={values.password}
        fullWidth
        type="password"
        sx={textFieldStyle}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched?.password}
        helperText={touched?.password ? errors.password : ""}
      />
      <Button
        variant="contained"
        sx={buttonStyle}
        size="large"
        onClick={handleSubmit}
      >
        SignUp
      </Button>
      <Typography variant="subtitle2">
        Already have an account?
        <Button
          size="small"
          onClick={() => {
            navigate("/logIn", { replace: true });
          }}
        >
          LogIn
        </Button>
      </Typography>
    </Stack>
  );
}

export default SignUp;

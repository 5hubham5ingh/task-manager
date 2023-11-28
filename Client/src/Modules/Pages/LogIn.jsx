import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Form.js";
import { Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { userDetailsValidationSchema } from "../Utils/schema";
import CheckBox from "../Components/CheckBox";
import { useTheme } from "../Components/Theme/Theme";
import { Button } from "@mui/material";
import { textFieldStyle } from "../Styles/TextField";
import { buttonStyle } from "../Styles/Button";
import { headingStyle } from "../Styles/Heading";
import { formStyle } from "../Styles/Form.js";
import { login } from "../Authentication/User/userSlice.js";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../ServerApi/ApiRoutes/authentication/login.js";
import serverApi from "../ServerApi/api.js";
import { showSnackbar } from "../Components/Snackbar/snackbarSlice.js";
import { useUserQueries } from "../Queries/userQueries.js";
function LogIn() {
  const initialParameters = {
    initialValues: initialValues,
    validationSchema: userDetailsValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit: submit,
  };
  const { errors, handleSubmit, handleBlur, handleChange, values, touched } =
    useFormik(initialParameters);

  const checkBoxRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {logIn} = useUserQueries();

  async function submit(values) {
    const data = {
      userName: values.userName,
      password: values.password,
    };
    logIn(data);
    // try {
    //   const response = await serverApi.post(LOG_IN, data);

    //   dispatch(login(response.data));
    //   dispatch(showSnackbar({ message: "Logged in!", severity: "success" }));
    //   navigate(`/WorkSpaces/${response.data.user._id}`, { replace: true });
    // } catch (error) {
    //   dispatch(
    //     showSnackbar({
    //       message: error.response.data.message,
    //       severity: "error",
    //     })
    //   );
    // }
  }
  useEffect(() => {});
  const { theme } = useTheme();
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
        LogIn
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
      <CheckBox label="Keep me logged in" ref={checkBoxRef} />
      <Button
        variant="contained"
        sx={buttonStyle}
        size="large"
        onClick={handleSubmit}
      >
        LogIn
      </Button>
      <Typography variant="subtitle2">
        Don't have an account?
        <Button
          size="small"
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </Button>
      </Typography>
    </Stack>
  );
}

export default LogIn;

const initialValues = {
  userName: "",
  key: "",
};

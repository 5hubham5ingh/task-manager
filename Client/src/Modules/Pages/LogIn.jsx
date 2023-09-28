import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Form.css";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { userDetailsValidationSchema } from "../Utils/schema";
import CheckBox from "../Components/CheckBox";
import { useTheme } from "../Components/Theme/Theme";

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
  async function submit() {
    navigate("/WorkSpaces")
    //navigate("/TaskManager?id=123&somethingElse=abc");
  }
  useEffect(() => {});
const {theme}=useTheme();
  return (
    <Stack
      direction="column"
      sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`}}
      component="form"
      className="form"
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

const textFieldStyle = {
  "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "darkBlue" },
  "& label.Mui-focused": { color: "darkBlue" },
};

const headingStyle = {
  color: "#3268a8",
  padding: 0,
  margin: 0,
};

const buttonStyle = {
  "&:hover": {
    backgroundColor: "darkBlue",
  },
  backgroundColor: "#3268a8",
  marginLeft: "auto",
};

const initialValues = {
  userName: "",
  key: "",
};

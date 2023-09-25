import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import "./Styles/Form.css";
import { Button,  Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { userDetailsValidationSchema } from "./Utils/schema";
import { useTheme } from "./Component/Theme/Theme";


function SignUp() {
  const { errors, handleSubmit, handleBlur, handleChange, values, touched } =
    useFormik(initialParameters);

    const navigate = useNavigate();

    useEffect(()=>{
        
        
    })
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
            <Button size="small" onClick={() =>{navigate('/logIn')}}>
              LogIn
            </Button>
          </Typography>
      </Stack>
   
  );
}

export default SignUp;

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

async function submit(values) {console.log(values)}

const initialValues = {
  userName: "",
  key: "",
};
const initialParameters = {
  initialValues: initialValues,
  validationSchema: userDetailsValidationSchema,
  enableReinitialize: true,
  validateOnChange: true,
  onSubmit: submit,
};

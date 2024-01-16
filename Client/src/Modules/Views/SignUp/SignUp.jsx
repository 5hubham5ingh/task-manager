import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "../../Components/Theme/Theme.jsx";
import { textFieldStyle } from "../../Styles/Common/TextField.js";
import { buttonStyle } from "../../Styles/Common/Button.js";
import { headingStyle } from "../../Styles/Common/Heading.js";
import { formStyle } from "../../Styles/Common/Form.js";

function SignUp({errors, handleSubmit, handleBlur, handleChange, values, touched }) {
  const navigate = useNavigate();

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
        SignUp
      </Typography>

      <TextField
        label="User Name / Email"
        value={values.userName ? values.userName : ""}
        fullWidth
        autoComplete="userName"
        sx={textFieldStyle}
        name="userName"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.userName && touched?.userName}
        helperText={touched?.userName ? errors.userName : ""}
      />

      <TextField
        label="Password"
        value={values.password ? values.password : ""}
        fullWidth
        autoComplete="password"
        type="password"
        sx={textFieldStyle}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched?.password}
        helperText={touched?.password ? errors.password : ""}
      />
      <TextField
        label="Confirm Password"
        value={values.confirmPassword ? values.confirmPassword : ""}
        fullWidth
        autoComplete="password"
        type="password"
        sx={textFieldStyle}
        name="confirmPassword"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.confirmPassword && touched?.confirmPassword}
        helperText={touched?.confirmPassword ? errors.confirmPassword : ""}
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

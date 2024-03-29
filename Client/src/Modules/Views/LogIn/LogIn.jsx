import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "../../Components/Theme/Theme.jsx";
import { Button } from "@mui/material";
import { textFieldStyle } from "../../Styles/Common/TextField.js";
import { buttonStyle } from "../../Styles/Common/Button.js";
import { headingStyle } from "../../Styles/Common/Heading.js";
import { formStyle } from "../../Styles/Common/Form.js";


export default function LogIn({
  errors,
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  touched,
}) {
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
        LogIn
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
        type="password"
        autoComplete="current-password"
        sx={textFieldStyle}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched?.password}
        helperText={touched?.password ? errors.password : ""}
      />
      <FormControlLabel
      style={{ color: "#3268a8" }}
      control={
        <Checkbox
          style={{ color: "#3268a8" }}
          checked={values.extendedSession}
          name="extendedSession"
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Keep me logged in"
    />
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


import * as Yup from "yup";

export const SignupFormValidationSchema = Yup.object().shape({
  userName: Yup.string("User name must contain only characters.").required("User name is required."
  ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password must match")
    .required("Confirm password is required")
});

export const LoginFormValidationSchema = Yup.object().shape({
  userName: Yup.string("User name must contain only characters.").required("User name is required."
  ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
    extendedSession: Yup.bool().default( false )
});
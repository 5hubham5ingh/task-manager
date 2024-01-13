import { useFormik } from "formik";
import { LoginFormValidationSchema } from "../../Utils/schema";

export default function FormValidationHandler({ children, submit }) {
    const initialValues = {
        userName: "",
        password: "",
        extendedSession: false
      };
  const initialParameters = {
    initialValues: initialValues,
    validationSchema: LoginFormValidationSchema,
    onSubmit: submit,
    enableReinitialize: true,
    validateOnChange: true,
  };
  const { errors, handleSubmit, handleBlur, handleChange, values, touched } =
    useFormik(initialParameters);

  return children({
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  });
}


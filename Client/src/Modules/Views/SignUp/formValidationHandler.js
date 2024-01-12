import { useFormik } from "formik";
import { SignupFormValidationSchema } from "../../Utils/schema";

export default function FormValidationHandler({ children, submit }) {
    const initialValues = {
        userName: "",
        key: "",
      };
  const initialParameters = {
    initialValues: initialValues,
    validationSchema: SignupFormValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit: submit,
  };

  const { errors, handleSubmit, handleBlur, handleChange, values, touched } =
    useFormik(initialParameters);

  return children({
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
  });
}

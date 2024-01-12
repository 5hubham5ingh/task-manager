import FormSubmitHandler from "./formSubmitHandler";
import FormValidationHandler from "./formValidationHandler";
import LoginForm from "./LogIn";

export default function LoginView() {
  return (
    <FormSubmitHandler>
      {(props) => (
        <FormValidationHandler {...props}>
          {(props) => <LoginForm {...props} />}
        </FormValidationHandler>
      )}
    </FormSubmitHandler>
  );
}

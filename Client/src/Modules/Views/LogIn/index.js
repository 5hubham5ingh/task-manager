import FormSubmitHandler from "./formSubmitHandler";
import FormValidationHandler from "./formValidationHandler";
import LoginForm from "./LogIn";

export default function LoginView() {
  return (
    <FormSubmitHandler>
      {(props) => (
        <FormValidationHandler key='loginFormValidation' {...props} >
          {(props) => <LoginForm key='loginForm' {...props}  />}
        </FormValidationHandler>
      )}
    </FormSubmitHandler>
  );
}

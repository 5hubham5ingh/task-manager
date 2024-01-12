import FormSubmitHandler from "./formSubmitHandler";
import FormValidationHandler from "./formValidationHandler";
import SignUpForm from "./SignUp";

export default function SignUpView() {
    return (

        <FormSubmitHandler>
            {props =>
                <FormValidationHandler {...props}>
                    {props => 
                        <SignUpForm {...props} />}
                </FormValidationHandler>
            }
        </FormSubmitHandler>

    );
}


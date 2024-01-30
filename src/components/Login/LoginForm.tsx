import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

export type FormData = {
    email: string
    password: string
    remeberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormData>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requiredField]} name={'email'} component={Input} placeholder={'login'} type="text"/>
                </div>
                <div>
                    <Field validate={[requiredField]} name={'password'} component={Input} placeholder={'password'} type="password"/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={'input'} type="checkbox"/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormData>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

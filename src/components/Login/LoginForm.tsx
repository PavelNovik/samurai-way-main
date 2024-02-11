import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import s from './LoginForm.module.css'

export type FormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}
type Props = {
    captchaUrl?: string
}
const LoginForm = (props: InjectedFormProps<FormData> & Props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requiredField]} name={'email'} component={Input} placeholder={'login'}
                           type="text"/>
                </div>
                <div>
                    <Field validate={[requiredField]} name={'password'} component={Input} placeholder={'password'}
                           type="password"/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={'input'} type="checkbox"/> Remember me
                </div>
                <div>
                    {props.captchaUrl && <img alt={'captcha'} src={props.captchaUrl}/>}
                    {props.captchaUrl && <Field name={'captcha'} component={'input'} type="text"/>}
                </div>
                {props.error && <div className={s.formSumError}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormData, Props>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LoginForm = (props: InjectedFormProps<{}, {}, string>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'login'} component={'input'} placeholder={'login'} type="text"/>
                </div>
                <div>
                    <Field name={'password'} component={'input'} placeholder={'password'} type="password"/>
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

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

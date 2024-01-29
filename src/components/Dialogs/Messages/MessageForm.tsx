import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MessageDataT = {
    message: string
}

const MessageForm = (props: InjectedFormProps<MessageDataT>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'message'} component={'textarea'} placeholder={'new message text'} type={'text'}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>

        </div>
    );
};

export const MessageReduxForm = reduxForm<MessageDataT>({
    form: 'message'
})(MessageForm);
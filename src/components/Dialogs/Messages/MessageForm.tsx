import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLength, requiredField} from "../../../utils/validators/validators";

export type MessageDataT = {
    message: string
}

const maxLength20 = maxLengthCreator(20)

const MessageForm = (props: InjectedFormProps<MessageDataT>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requiredField, minLength, maxLength20]} name={'message'} component={Textarea}
                           placeholder={'new message text'} type={'text'}/>
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
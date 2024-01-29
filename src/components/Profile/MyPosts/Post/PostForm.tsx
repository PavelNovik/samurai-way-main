import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLength, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

export type PostDataT = {
    post: string
}

const maxLength10 = maxLengthCreator(10)
const PostForm = (props: InjectedFormProps<PostDataT>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[requiredField, maxLength10, minLength]} name={'post'} component={Textarea} placeholder={'new post text'} type={'text'}/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>

        </div>
    );
};

export const PostReduxForm = reduxForm<PostDataT>({
    form: 'post'
})(PostForm)
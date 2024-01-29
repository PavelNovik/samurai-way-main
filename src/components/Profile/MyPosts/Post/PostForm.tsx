import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostDataT = {
    post: string
}

const PostForm = (props: InjectedFormProps<PostDataT>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'post'} component={'textarea'} placeholder={'new post text'} type={'text'}/>
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
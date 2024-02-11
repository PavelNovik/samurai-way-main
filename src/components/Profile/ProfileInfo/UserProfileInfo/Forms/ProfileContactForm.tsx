import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileFormInput} from "./ProfileFormInputs";
import s from "../../../../Login/LoginForm.module.css";

export type ContactFormData = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
const ProfileContactForm = (props: InjectedFormProps<ContactFormData>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            Contacts:
            <ProfileFormInput name={'facebook'} placeholder={'facebook'}/>
            <ProfileFormInput name={'website'} placeholder={'website'}/>
            <ProfileFormInput name={'vk'} placeholder={'vk'}/>
            <ProfileFormInput name={'twitter'} placeholder={'twitter'}/>
            <ProfileFormInput name={'instagram'} placeholder={'instagram'}/>
            <ProfileFormInput name={'youtube'} placeholder={'youtube'}/>
            <ProfileFormInput name={'github'} placeholder={'github '}/>
            <ProfileFormInput name={'mainLink'} placeholder={'mainLink  '}/>

            {props.error && <div className={s.formSumError}>{props.error}</div>}
            <div>
                <button>Save</button>
            </div>

        </form>
    );
};

export const ProfileContactReduxForm = reduxForm<ContactFormData>({
    // a unique name for the form
    form: 'contacts'
})(ProfileContactForm)

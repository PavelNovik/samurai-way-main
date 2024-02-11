import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileFormCheckbox, ProfileFormInput, ProfileFormTextarea} from "./ProfileFormInputs";
import s from "../../../../Login/LoginForm.module.css";

export type ProfileFormData = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}
const ProfileDataForm = (props: InjectedFormProps<ProfileFormData>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            Main Data:
            <ProfileFormInput name={'fullName'} placeholder={'full name'}/>
            <ProfileFormInput name={'aboutMe'} placeholder={'about Me'}/>
            <ProfileFormCheckbox name={'lookingForAJob'} label={'Looking for a Job?'}/>
            <ProfileFormTextarea name={'lookingForAJobDescription'} placeholder={'Enter your skills'}/>
            {props.error && <div className={s.formSumError}>{props.error}</div>}
            <div>
                <button>Save</button>
            </div>

        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileFormData>({
    // a unique name for the form
    form: 'profile'
})(ProfileDataForm)

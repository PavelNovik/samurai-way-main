import React from 'react';
import {Field} from "redux-form";
import {Input, Textarea} from "../../../../common/FormsControls/FormsControls";

type Props = {
    name: string
    // value?: string
    placeholder?: string
    label?: string
}
export const ProfileFormInput = ({name, placeholder}: Props) => {
    return (
        <>
            <Field validate={[]} name={name} component={Input} placeholder={placeholder}
                   type="text"/>
        </>
    );
};

export const ProfileFormTextarea = ({name, placeholder}: Props) => {
    return (
        <>
            <Field validate={[]} name={name} component={Textarea} placeholder={placeholder}
                   type="text"/>
        </>
    );
};
export const ProfileFormCheckbox = ({name, label}: Props) => {
    return (
        <>
            <label style={{fontSize: '16px'}}> {label}
                <Field validate={[]} name={name} component={Input}
                       type="checkbox"/>
            </label>
        </>
    );
};

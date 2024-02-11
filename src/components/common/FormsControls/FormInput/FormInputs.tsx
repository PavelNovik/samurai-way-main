import React from 'react';
import {Field} from "redux-form";
import {requiredField} from "../../../../utils/validators/validators";
import {Input} from "../FormsControls";

type Props = {
    name: string
    placeholder?: string
    label?: string
}
export const FormInputs = ({name, placeholder}: Props) => {
    return (
        <div>
            <Field validate={[requiredField]} name={name} component={Input} placeholder={placeholder}
                   type="text"/>
        </div>
    );
};
// export const FormCheckbox = ({name, label}: Props) => {
//     return (
//         <div>
//             <label style={{fontSize:'16px'}}> {label}
//                 <Field validate={[]} name={name} component={Input}
//                        type="checkbox"/>
//             </label>
//         </div>
//     );
// };

import React, {ReactNode} from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './FormControls.module.css'

type FormControlT = {
    children: ReactNode
}
export const FormControl = ({input, meta, children, ...props}: WrappedFieldProps & FormControlT) => {
    const isError = meta.touched && meta.error
    return <div className={isError ? s.formControl + ' ' + s.error : s.formControl}>
        <div>
            {children}
        </div>
        <div>
            {isError && <span>{meta.error}</span>}
        </div>
    </div>
}
export const Textarea = (props: WrappedFieldProps) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props: WrappedFieldProps) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


// export const Textarea = ({input, meta, ...props}: WrappedFieldProps) => {
//     const isError = meta.touched && meta.error
//     return <div className={isError ? s.formControl + ' ' + s.error : s.formControl}>
//         <div>
//             <textarea {...input} {...props}/>
//         </div>
//         <div>
//             {isError && <span>{meta.error}</span>}
//         </div>
//     </div>
// }

// export const Input = ({input, meta, ...props}: WrappedFieldProps) => {
//     const isError = meta.touched && meta.error
//     return <div className={isError ? s.formControl + ' ' + s.error : s.formControl}>
//         <div>
//             <input {...input} {...props}/>
//         </div>
//         <div>
//             {isError && <span>{meta.error}</span>}
//         </div>
//     </div>
// }

// type CreateField<T> = {
//     placeholder: string
//     name: string
//     validators: (val: string) => string | void
//     component: ComponentType<T>
//     props: T
//     text: string
// }
// type Params = {
//     placeholder: string
//     name: string
//     validators: (val: string) => string | void
//     text: string
//     component: any
//     // props: WrappedFieldProps
// }
// export const createField = (params: Params, props: any) => {
//     return (
//         <div>
//             <Field placeholder={params.placeholder} name={params.name} validate={params.validators} component={params.component} {...props} />
//             {params.text}
//         </div>
//     )
// }
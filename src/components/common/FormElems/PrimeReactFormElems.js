import React from 'react';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';


const isFormFieldValid = (meta) => meta.touched && meta.error && !meta.active;
const getFormErrorMessage = (meta) => {
    return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
};

const FormControl = ({input, meta, children, className, ...props}) => {
    const childClass = classNames(className, isFormFieldValid(meta) ? 'p-invalid': null )
    return children({...input, ...props, className:childClass, meta})
}

export const InputFormElem = (props) => {
    return <FormControl {...props} >
            { ({meta, ...props}) => (
                <div className='p-field'>
                    <span className='p-float-label'>
                        <InputText {...props}/>
                        <label htmlFor={props.id}>{props.id}</label>
                    </span>
                    {getFormErrorMessage(meta)}
                </div>
            )}</FormControl>
}

export const CheckBoxFormElem = ({...props}) => {
    return <FormControl {...props} >
    { ({meta, ...props}) => (
        <div className="p-field-checkbox">
            <Checkbox  inputId={props.id} {...props} />
            <label htmlFor={props.id}> {props.id}</label>
        </div>
    )}</FormControl>
}
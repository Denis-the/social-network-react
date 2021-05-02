import React from 'react';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { InlineFormElemWrapper } from '../styled/styled-components';
import { SelectButton } from 'primereact/selectbutton';


const isFormFieldValid = meta => meta.touched && meta.error && !meta.active;
const getFormErrorMessage = meta => isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;

const FormControl = ({input, meta, children, className, ...props}) => {
    const childClass = classNames(className, isFormFieldValid(meta) ? 'p-invalid': null )
    return children({...input, ...props, className:childClass, meta})
}

export const InputFE = (props) => {
    return <FormControl {...props} >
        { ({meta, ...props}) => (
            <InlineFormElemWrapper >
                <span className='p-float-label'>
                    <InputText {...props}/>
                    <label htmlFor={props.id}>{props.id}</label>
                </span>
                {getFormErrorMessage(meta)}
            </InlineFormElemWrapper>
        )}</FormControl>
}

export const CheckBoxFE = (props) => {
    return <FormControl {...props} >
    { ({meta, ...props}) => (
        <InlineFormElemWrapper className="p-field-checkbox">
            <Checkbox  inputId={props.id} {...props} />
            <label htmlFor={props.id}> {props.id}</label>
        </InlineFormElemWrapper>
    )}</FormControl>
}


export const SingleSelectButtonsFE = (props) => {
    return <FormControl {...props} >
    { ({meta, ...props}) => {
        props.value == '' ? props.value = null : props.value = props.value;
        return  <InlineFormElemWrapper>
            <SelectButton {...props}/>
        </InlineFormElemWrapper>
    }}</FormControl>   
}


export const ButtonFE = (props) => {
    const ButtonChild = props.children;
    return <FormControl {...props} >
    { ({meta, ...props}) => {
        return <InlineFormElemWrapper >
            <button {...props} className={'p-component p-button p-button-sm ' + props.className}>{ButtonChild}</button>
        </InlineFormElemWrapper>
    }}</FormControl>   
}
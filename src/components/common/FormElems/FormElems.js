import React, { useState } from 'react'
import s from './FormElems.module.css'
import warningIcon from '../../../assets/icons/warning-sign.svg'

const FormControl = ({input, meta, children, className, ...props}) => {
    const [dispayMessageBox, setDisplayMessageBox] = useState(false)
    const hasError = meta.error && meta.touched && !meta.active
    const childClass = className + " " + s.formControl__field + ' ' + `${hasError ? s.formControl__fieldError : ''}`    
    return (
        <div className={s.formControl}>
            {children({...input, ...props, className:childClass})}
            {hasError && 
                <div className={s.formControl__error}>
                    <img 
                    onMouseOver={ () => {setDisplayMessageBox(true)}}
                    onMouseOut={ () => {setDisplayMessageBox(false)}}
                    className={s.formControl__errorIcon} src={warningIcon} />
                    {dispayMessageBox && <span className={s.formControl__errorMessage} >{meta.error}</span>}
                </div>}           
        </div>
    )
}

export const InputFormElem = (props) => {
    return <FormControl {...props} >
            { props => {
                return <input {...props}/>
                }
            }</FormControl>
}

export const TextareaFormElem = (props) => {
    return <FormControl {...props} >
            { props => {
                return <textarea {...props}/>
                }
            }</FormControl>
}

export const SelectFormElem = ({children, ...props}) => {
    return <FormControl {...props} >
            { props => {
                return (
                <select {...props}>
                    {children}
                </select>
                )}
            }</FormControl>
}



export const ButtonFormElem = ({children, ...props}) => {
    return <FormControl {...props} >
    { props => {
        return <button {...props}>{children}</button>
        }
    }</FormControl>
}
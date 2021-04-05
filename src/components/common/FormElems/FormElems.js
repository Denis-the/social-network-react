import React, { useState } from 'react'
import s from './FormElems.module.css'
import warningIcon from '../../../assets/icons/warning-sign.svg'

const FormControl = ({input, meta, children, ...props}) => {
    const [dispayMessageBox, setDisplayMessageBox] = useState(false)
    const hasError = meta.error && meta.touched && !meta.active
    const childClass = s.formControl__field + ' ' + `${hasError ? s.formControl__fieldError : ''}`    
    return (
        <div className={s.formControl}>
            {children({...input, meta, ...props, className:childClass})}
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

export const InputField = (props) => {
    return <FormControl {...props} >
            { props => {
                return <input {...props}/>
                }
            }</FormControl>
}


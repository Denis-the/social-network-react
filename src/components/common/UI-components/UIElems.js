import { ButtonBase } from '../styled/styled-components';
import s from './ui.module.css';


export const ButtonUI = ({children, className, ...props}) => {
    return <ButtonBase {...props} className={'p-component p-button ' + className}>{children}</ButtonBase>
}

export const SelectUI = ({children, className, onChange,...props}) => {
    const onSelect = e => {
        onChange(e); 
        e.target.blur();
    }

    return <select onChange={onSelect} className={'p-component p-button ' + className} {...props}>{children}</select>
}
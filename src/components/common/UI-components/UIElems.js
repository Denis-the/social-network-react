import s from './ui.module.css'
import {Button} from 'primereact/button'

export const ButtonUI = ({children, className, ...props}) => {
    return <Button {...props} className={className}>{children} </Button>
    // return <button className={s.UIButton} {...props}>{children}</button>
}
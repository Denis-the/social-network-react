import classNames from 'classnames';
import { useState } from 'react';
import { ButtonBase } from '../styled/styled-components';
import s from './ui.module.css';


export const ButtonUI = ({children, className, ...props}) => {
    const btnClass = classNames('p-component', 'p-button', className);
    return <ButtonBase {...props} className={btnClass}>{children}</ButtonBase>
}

export const SelectUI = ({children, className, onChange,...props}) => {
    const onSelect = e => {
        onChange(e); 
        e.target.blur();
    }
    const selectClass = classNames('p-component', 'p-button', className);
    return <select onChange={onSelect} className={selectClass} {...props}>{children}</select>
}


export const PanelUI = ({title, body}) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePanel = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div className="p-panel p-component p-panel-toggleable"> 
        <div className='p-panel-header'>
            <span className='p-panel-title'>{title}</span>
            <div className='p-panel-icons'>
                <button onClick={togglePanel} className="p-panel-header-icon p-panel-toggler p-link" >
                    <span className={classNames("pi", isOpen ? "pi-minus" : "pi-plus")}></span>
                    <span className="p-ink" ></span>
                </button>
            </div>
        </div>
        { isOpen ? <div className="p-toggleable-content p-toggleable-content-enter-done" aria-hidden="false">
            <div className="p-panel-content">
                {body}
            </div>
        </div> : null }
    </div>
    )
}
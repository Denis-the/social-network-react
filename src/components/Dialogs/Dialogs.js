import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogUsersContainer from './DialogUsers/DialogUsersContainer';
import LoginRedirectWrapper from '../../hoc/LoginRedirectWrapper/LoginRedirectWrapper';


const Dialogs = (props)=> {
    console.log(props)
    return (
        <div className={s.dialogsPage}>

            <DialogUsersContainer/>

            <MessagesContainer/>
        </div>
    )
}

export default LoginRedirectWrapper(Dialogs);
import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogUsersContainer from './DialogUsers/DialogUsersContainer';
import { useLoginRedirect } from '../../hoc/LoginRedirectWrapper/LoginRedirectWrapper';


const Dialogs = (props)=> {
    useLoginRedirect()

    console.log('render dialogs')
    return (
        <div className={s.dialogsPage}>
            <DialogUsersContainer/>

            <MessagesContainer/>
        </div>
    )
}

export default Dialogs;